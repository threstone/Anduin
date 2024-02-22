import { CardsPto, FriendlyMatchPto } from '../../../../common/CommonProto';
import { RedisType } from '../../../../common/ConstDefine';
import { FriendlyMatchInfoMgr } from '../friendly_match/FriendlyMatchInfoMgr';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';

export class FriendlyMatchHandler extends BaseHandler {

    private static _friendlyMatchInfoMgr = new FriendlyMatchInfoMgr();

    //请求友谊赛
    static async C_REQ_MATCH(gateNodeId: string, uid: number, msg: FriendlyMatchPto.C_REQ_MATCH) {
        //已经有此人的信息了
        if (this._friendlyMatchInfoMgr.isExits(uid) || typeof (uid) !== 'number') {
            return;
        }
        const replay = new FriendlyMatchPto.S_REQ_MATCH();
        //不是好友
        if (await GlobalVar.redisMgr.getClient(RedisType.userRelation).sismember(uid, msg.targetUid)) {
            replay.code = 1;
            this.sendMsg(gateNodeId, uid, replay);
            return;
        }
        //不在线也不管
        const friendGateNode = await GlobalVar.redisMgr.getClient(RedisType.userGate).getData(`${msg.targetUid}`);
        if (!friendGateNode) {
            replay.code = 2;
            this.sendMsg(gateNodeId, uid, replay);
            return;
        }
        //正在游戏中
        let isGame = await GlobalVar.redisMgr.getClient(RedisType.userGame).getData(`${msg.targetUid}`);
        isGame = isGame || await GlobalVar.redisMgr.getClient(RedisType.userGame).getData(`${uid}`);
        if (isGame) {
            replay.code = 3;
            this.sendMsg(gateNodeId, uid, replay);
            return;
        }

        let bindResult = true;
        bindResult = bindResult && await rpc.gate.gameRemote.callBindUserGameNode({ type: 1, nodeId: gateNodeId }, uid, serverConfig.nodeId);
        bindResult = bindResult && await rpc.gate.gameRemote.callBindUserGameNode({ type: 1, nodeId: friendGateNode }, msg.targetUid, serverConfig.nodeId);
        if (!bindResult) {
            rpc.gate.gameRemote.sendUnbindUserGameNode({ type: 1, nodeId: gateNodeId }, uid);
            rpc.gate.gameRemote.sendUnbindUserGameNode({ type: 1, nodeId: friendGateNode }, msg.targetUid);
            replay.code = 4;
            this.sendMsg(gateNodeId, uid, replay);
            return;
        }

        const requestMsg = new FriendlyMatchPto.S_MATCH();
        requestMsg.endTime = Date.now() + 30000;
        requestMsg.friendUid = uid;
        this.sendMsg(friendGateNode, msg.targetUid, requestMsg);

        replay.endTime = requestMsg.endTime;
        this.sendMsg(gateNodeId, uid, replay);
        this._friendlyMatchInfoMgr.regFriendlyMatchInfo(gateNodeId, uid, friendGateNode, msg.targetUid, requestMsg.endTime);
    }

    //取消请求友谊赛
    static C_CANCEL_REQ_MATCH(gateNodeId: string, uid: number, msg: FriendlyMatchPto.C_CANCEL_REQ_MATCH) {
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        if (!matchInfo) {
            return;
        }
        //通知对方
        const replay = new FriendlyMatchPto.S_MATCH_STOP();
        replay.code = 1;
        this.sendMsg(matchInfo.targetUser.gateNodeId, matchInfo.targetUser.uid, replay);
        matchInfo.destroy();
        this._friendlyMatchInfoMgr.clearFriendlyMatchInfo(uid);
    }

    //接受或拒绝好友的友谊赛请求
    static C_REQ_MATCH_RESULT(gateNodeId: string, uid: number, msg: FriendlyMatchPto.C_REQ_MATCH_RESULT) {
        //没有这个请求数据的话就不用管了
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        if (!matchInfo) {
            return;
        }
        //发送结果给请求的发起者
        const replay = new FriendlyMatchPto.S_REQ_MATCH_RESULT();
        replay.result = msg.result;
        replay.targetUid = uid;
        this.sendMsg(matchInfo.souceUser.gateNodeId, matchInfo.souceUser.uid, replay);
        //如果接受，下发挑选卡组协议
        if (msg.result) {
            const chooseDeck = new FriendlyMatchPto.S_MATCH_DECK();
            chooseDeck.endTime = Date.now() + 300000;
            this.sendMsg(matchInfo.souceUser.gateNodeId, matchInfo.souceUser.uid, chooseDeck);
            this.sendMsg(matchInfo.targetUser.gateNodeId, matchInfo.targetUser.uid, chooseDeck);
            matchInfo.endTime = chooseDeck.endTime;
        } else {
            matchInfo.destroy();
            this._friendlyMatchInfoMgr.clearFriendlyMatchInfo(uid);
        }
    }

    //玩家挑选卡组
    static async C_DECK_CHOOSE(gateNodeId: string, uid: number, msg: FriendlyMatchPto.C_DECK_CHOOSE) {
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        //没有这个请求数据的话通知关闭
        if (!matchInfo) {
            const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
            this.sendMsg(gateNodeId, uid, stopMsg);
            return;
        }

        const replay = new FriendlyMatchPto.S_DECK_CHOOSE_RESULT();
        replay.code = 1;
        const cardsInfoJson = await GlobalVar.redisMgr.getClient(RedisType.userInfo).hget(uid, 'decks');
        const cardsInfo: CardsPto.Deck[] = JSON.parse(cardsInfoJson);
        let deck: CardsPto.Deck;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            if (info.deckId === msg.deckId) {
                deck = info;
            }
        }
        if (!deck || deck.accessToUse === false) {
            this.sendMsg(gateNodeId, uid, replay);
            return;
        }
        replay.code = 0;
        this.sendMsg(gateNodeId, uid, replay);
        matchInfo.setDeck(uid, deck);
        //对方设置好卡组了,开始游戏
        if (matchInfo.isComplete()) {
            const gameTable = GlobalVar.tableMgr.createTable();
            gameTable.tryToStartGame(matchInfo);
            this._friendlyMatchInfoMgr.clearFriendlyMatchInfo(uid);
        } else {
            //通知对方选择卡组状态改变了
            const notice = new FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE();
            notice.isChoose = true;
            const friendInfo = matchInfo.getFriend(uid);
            this.sendMsg(friendInfo.gateNodeId, friendInfo.uid, notice);
        }

    }

    //友谊赛取消挑选卡组
    static C_MATCH_CANCEL_DECK(gateNodeId: string, uid: number, msg: FriendlyMatchPto.C_MATCH_CANCEL_DECK) {
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        //没有这个请求数据的话通知关闭
        if (!matchInfo) {
            const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
            this.sendMsg(gateNodeId, uid, stopMsg);
            return;
        }
        matchInfo.clearDeck(uid);

        //通知对方选择卡组状态改变了
        const notice = new FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE();
        notice.isChoose = false;
        const friendInfo = matchInfo.getFriend(uid);
        this.sendMsg(friendInfo.gateNodeId, friendInfo.uid, notice);
    }

    //友谊赛离开
    static C_MATCH_LEAVE(gateNodeId: string, uid: number, msg: FriendlyMatchPto.C_MATCH_LEAVE) {
        const matchInfo = this._friendlyMatchInfoMgr.getFriendlyMatchInfo(uid);
        if (!matchInfo) {
            return;
        }

        const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
        stopMsg.code = 2;
        const friendInfo = matchInfo.getFriend(uid);
        this.sendMsg(friendInfo.gateNodeId, friendInfo.uid, stopMsg);

        matchInfo.destroy();
        this._friendlyMatchInfoMgr.clearFriendlyMatchInfo(uid);
    }
}