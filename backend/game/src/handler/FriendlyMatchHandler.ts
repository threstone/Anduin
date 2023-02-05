import { CardsPto, FriendlyMatchPto } from '../../../common/CommonProto';
import { RedisType } from '../../../common/ConstDefine';
import { FriendlyMatchInfoMgr } from '../friendly_match/FriendlyMatchInfoMgr';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';
import { getLogger } from 'log4js';

const logger = getLogger();
export class FriendlyMatchHandler extends BaseHandler {

    private static _friendlyMatchInfoMgr = new FriendlyMatchInfoMgr();

    //请求友谊赛
    static async C_REQ_MATCH(clientName: string, uid: number, msg: FriendlyMatchPto.C_REQ_MATCH) {
        //已经有此人的信息了
        if (this._friendlyMatchInfoMgr.isExits(uid)) {
            return;
        }
        const replay = new FriendlyMatchPto.S_REQ_MATCH();
        //不是好友
        if (await GlobalVar.redisMgr.getClient(RedisType.userRelation).sismember(uid, msg.targetUid)) {
            replay.code = 1;
            this.sendMsg(clientName, uid, replay);
            return;
        }
        //不在线也不管
        const friendClientName = await GlobalVar.redisMgr.getClient(RedisType.userGate).getData(`${msg.targetUid}`);
        if (!friendClientName) {
            replay.code = 2;
            this.sendMsg(clientName, uid, replay);
            return;
        }
        //正在游戏中
        let isGame = await GlobalVar.redisMgr.getClient(RedisType.userGame).hgetall(`${msg.targetUid}`);
        isGame = isGame || await GlobalVar.redisMgr.getClient(RedisType.userGame).hgetall(`${uid}`);
        if (isGame) {
            replay.code = 3;
            this.sendMsg(clientName, uid, replay);
            return;
        }

        let bindResult = true;
        bindResult = bindResult || await GlobalVar.socketServer.callBindUserGameNode(clientName, uid);
        bindResult = bindResult || await GlobalVar.socketServer.callBindUserGameNode(friendClientName, msg.targetUid);
        if (!bindResult) {
            GlobalVar.socketServer.sendUnbindUserGameNode(clientName, uid);
            GlobalVar.socketServer.sendUnbindUserGameNode(friendClientName, msg.targetUid);
            replay.code = 4;
            this.sendMsg(clientName, uid, replay);
            return;
        }

        const requestMsg = new FriendlyMatchPto.S_MATCH();
        requestMsg.endTime = Date.now() + 30000;
        requestMsg.friendUid = uid;
        this.sendMsg(friendClientName, msg.targetUid, requestMsg);

        replay.endTime = requestMsg.endTime;
        this.sendMsg(clientName, uid, replay);
        this._friendlyMatchInfoMgr.regFriendlyMatchInfo(clientName, uid, friendClientName, msg.targetUid, requestMsg.endTime);
    }

    //取消请求友谊赛
    static C_CANCEL_REQ_MATCH(clientName: string, uid: number, msg: FriendlyMatchPto.C_CANCEL_REQ_MATCH) {
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        //通知对方
        const replay = new FriendlyMatchPto.S_MATCH_STOP();
        replay.code = 1;
        this.sendMsg(matchInfo.targetClient, matchInfo.targetUid, replay);
        matchInfo.destroy();
        this._friendlyMatchInfoMgr.clearFriendlyMatchInfo(uid);
    }

    //接受或拒绝好友的友谊赛请求
    static C_REQ_MATCH_RESULT(clientName: string, uid: number, msg: FriendlyMatchPto.C_REQ_MATCH_RESULT) {
        //没有这个请求数据的话就不用管了
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        if (!matchInfo) {
            return;
        }
        //发送结果给请求的发起者
        const replay = new FriendlyMatchPto.S_REQ_MATCH_RESULT();
        replay.result = msg.result;
        replay.targetUid = uid;
        this.sendMsg(matchInfo.souceClient, matchInfo.souceUid, replay);
        //如果接受，下发挑选卡组协议
        if (msg.result) {
            const chooseGroup = new FriendlyMatchPto.S_MATCH_CARD_GROUP();
            chooseGroup.endTime = Date.now() + 300000;
            this.sendMsg(matchInfo.souceClient, matchInfo.souceUid, chooseGroup);
            this.sendMsg(matchInfo.targetClient, matchInfo.targetUid, chooseGroup);
            matchInfo.endTime = chooseGroup.endTime;
        } else {
            matchInfo.destroy();
            this._friendlyMatchInfoMgr.clearFriendlyMatchInfo(uid);
        }
    }

    //玩家挑选卡组
    static async C_GROUP_CHOOSE(clientName: string, uid: number, msg: FriendlyMatchPto.C_GROUP_CHOOSE) {
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        //没有这个请求数据的话通知关闭
        if (!matchInfo) {
            const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
            this.sendMsg(clientName, uid, stopMsg);
            return;
        }

        const replay = new FriendlyMatchPto.S_GROUP_CHOOSE_RESULT();
        replay.code = 1;
        const cardsInfoJson = await GlobalVar.redisMgr.getClient(RedisType.userInfo).hget(uid, 'cardGroupInfo');
        const cardsInfo: CardsPto.CardGroup[] = JSON.parse(cardsInfoJson);
        let cardGroupInfo: CardsPto.CardGroup;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            if (info.groupId === msg.cardGroupId) {
                cardGroupInfo = info;
            }
        }
        if (!cardGroupInfo || cardGroupInfo.accessToUse === false) {
            this.sendMsg(clientName, uid, replay);
            return;
        }
        replay.code = 0;
        this.sendMsg(clientName, uid, replay);

        matchInfo.setCardGroup(uid, cardGroupInfo);
        //对方设置好卡组了,开始游戏
        if (matchInfo.isComplete()) {
            const gameTable = GlobalVar.tableMgr.createTable();
            gameTable.tryToStartGame(matchInfo);
            this._friendlyMatchInfoMgr.clearFriendlyMatchInfo(uid);
        }
    }

    //友谊赛取消挑选卡组
    static C_MATCH_CANCEL_GROUP(clientName: string, uid: number, msg: FriendlyMatchPto.C_MATCH_CANCEL_GROUP) {
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        //没有这个请求数据的话通知关闭
        if (!matchInfo) {
            const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
            this.sendMsg(clientName, uid, stopMsg);
            return;
        }
        matchInfo.destroy();
        this._friendlyMatchInfoMgr.clearFriendlyMatchInfo(uid);
    }

    //友谊赛离开
    static C_MATCH_LEAVE(clientName: string, uid: number, msg: FriendlyMatchPto.C_MATCH_LEAVE) {
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        if (!matchInfo) {
            return;
        }
        const noticeUid = matchInfo.souceUid === uid ? matchInfo.targetUid : matchInfo.souceUid;
        const noticeClient = matchInfo.souceUid === uid ? matchInfo.targetClient : matchInfo.souceClient;
        const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
        stopMsg.code = 2;
        this.sendMsg(noticeClient, noticeUid, stopMsg);

        matchInfo.destroy();
        this._friendlyMatchInfoMgr.clearFriendlyMatchInfo(uid);
    }
}