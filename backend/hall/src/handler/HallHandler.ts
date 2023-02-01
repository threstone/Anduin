import { HallPto } from '../../../common/CommonProto';
import { RedisType } from '../../../common/ConstDefine';
import { FriendModel } from '../../../common/sequelize/model/FriendModel';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';
export class HallHandler extends BaseHandler {
    //请求友谊赛
    static async C_REQ_FRIENDLY_MATCH(clientName: string, uid: number, msg: HallPto.C_REQ_FRIENDLY_MATCH) {
        const replay = new HallPto.S_REQ_FRIENDLY_MATCH();
        //非好友
        if (!await FriendModel.isFriend(uid, msg.targetUid)) {
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

        const requestMsg = new HallPto.S_FRIENDLY_MATCH();
        requestMsg.endTime = Date.now() + 30000;
        requestMsg.friendUid = uid;
        this.sendMsg(friendClientName, msg.targetUid, requestMsg);

        GlobalVar.redisMgr.getClient(RedisType.userRelation).setData(`friendlyMatch[${uid}]-[${msg.targetUid}]`, 1, 30);
        replay.endTime = requestMsg.endTime;
        this.sendMsg(clientName, uid, replay);
    }

    //取消请求友谊赛
    static C_CANCEL_REQ_FRIENDLY_MATCH(clientName: string, uid: number, msg: HallPto.C_CANCEL_REQ_FRIENDLY_MATCH) {
        GlobalVar.redisMgr.getClient(RedisType.userRelation).delete(`friendlyMatch[${uid}]-[${msg.targetUid}]`);
    }

    //接受或拒绝好友的友谊赛请求
    static async C_REQ_FRIENDLY_MATCH_RESULT(clientName: string, uid: number, msg: HallPto.C_REQ_FRIENDLY_MATCH_RESULT) {
        const redisKey = `friendlyMatch[${msg.targetUid}]-[${uid}]`;
        const res = await GlobalVar.redisMgr.getClient(RedisType.userRelation).getData(redisKey);
        //没有这个请求数据的话就不用管了
        if (!res) {
            return;
        }
        GlobalVar.redisMgr.getClient(RedisType.userRelation).delete(redisKey);

        const friendClientName = await GlobalVar.redisMgr.getClient(RedisType.userGate).getData(`${msg.targetUid}`);
        if (msg.result) {
            if (!friendClientName) {
                GlobalVar.socketServer.sendTips(clientName, uid, '好友离线了');
                return;
            }
            //正在游戏中
            let isGame = await GlobalVar.redisMgr.getClient(RedisType.userGame).hgetall(`${msg.targetUid}`);
            isGame = isGame || await GlobalVar.redisMgr.getClient(RedisType.userGame).hgetall(`${uid}`);
            if (isGame) {
                GlobalVar.socketServer.sendTips(clientName, uid, '双方必须不在不在游戏中才能开始友谊赛');
                return;
            }
        }
        //发送结果给请求的发起者
        const replay = new HallPto.S_REQ_FRIENDLY_MATCH_RESULT();
        replay.result = msg.result;
        replay.targetUid = uid;
        if (msg.result) {
            replay.token = Date.now() + Math.floor(Math.random() * 10000000);
            //将token
            GlobalVar.redisMgr.getClient(RedisType.userGame).setObjInHash(replay.token, {
                uid1: msg.targetUid, client1: friendClientName,
                uid2: uid, client2: clientName
            }, 10);
        }
        this.sendMsg(friendClientName, msg.targetUid, replay);
    }
}