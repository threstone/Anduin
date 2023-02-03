import { RedisType } from '../../../common/ConstDefine';
import { AddFriendRecordModel } from '../../../common/sequelize/model/AddFriendRecord';
import { FriendModel } from '../../../common/sequelize/model/FriendModel';
import { FriendPto } from '../../../common/CommonProto';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';

export class FriendHandler extends BaseHandler {
    //请求添加好友
    static async C_ADD_FRIEND(clientName: string, uid: number, msg: FriendPto.C_ADD_FRIEND) {
        const res = new FriendPto.S_ADD_FRIEND_REQ();
        if (!msg.uid) {
            //缺少uid
            res.code = 1;
        } else if (msg.uid === uid) {
            //不能添加自己
            res.code = 4;
        } else if (await GlobalVar.redisMgr.getClient(RedisType.userRelation).sismember(uid, msg.uid)) {
            //对方已经是你的好友了
            res.code = 3;
        } else if (await AddFriendRecordModel.hasAddInfo(uid, msg.uid)) {//检查是不是已经添加中
            //对方还没同意，不要重复请求
            res.code = 2;
        } else if (await AddFriendRecordModel.hasAddInfo(msg.uid, uid)) {//检查是不是已经添加中
            //请同意对方的好友请求
            res.code = 6;
        } else {
            //检查是否成功增加
            if (await AddFriendRecordModel.recordAddFreind(uid, msg.uid)) {
                res.code = 0;
                //判断对方是否在线,在线就通知对方有人加你
                const friendClientName = await GlobalVar.redisMgr.getClient(RedisType.userGate).getData(`${msg.uid}`);
                if (friendClientName) {
                    let tips = new FriendPto.S_ADD_FRIEND();
                    tips.user = new FriendPto.Friend();
                    tips.user.uid = uid;
                    tips.user.nick = await GlobalVar.dbHelper.getUserInfoByKey(uid, 'nick');
                    this.sendMsg(friendClientName, msg.uid, tips);
                }
            } else {
                res.code = 5;//请输入正确的id
            }
        }
        this.sendMsg(clientName, uid, res);
    }

    //同意或者拒绝好友请求
    static async C_ADD_FRIEND_REQ_RESULT(clientName: string, uid: number, msg: FriendPto.C_ADD_FRIEND_REQ_RESULT) {
        if (!msg.uid) {
            return;
        }
        //先查找是否有这个请求
        if (!await AddFriendRecordModel.hasAddInfo(msg.uid, uid)) {
            return;
        }

        const targetUid = msg.uid;
        if (msg.isApprove) {
            //添加好友关系到数据库中
            FriendModel.addRelationship(uid, targetUid);
            const res = new FriendPto.S_FRIEND_CHANGE();
            res.friend = new FriendPto.Friend();
            res.friend.uid = targetUid;
            res.friend.nick = await GlobalVar.dbHelper.getUserInfoByKey(targetUid, 'nick');

            //成功添加后要将对应的信息加到redis中
            GlobalVar.redisMgr.getClient(RedisType.userRelation).sadd(uid, targetUid);
            GlobalVar.redisMgr.getClient(RedisType.userRelation).sadd(targetUid, uid);

            //判断对方是否在线,在线就通知对方
            const friendClientName = await GlobalVar.redisMgr.getClient(RedisType.userGate).getData(`${targetUid}`);
            if (friendClientName) {
                res.friend.isOnline = true;
                const notice = new FriendPto.S_FRIEND_CHANGE();
                notice.friend = new FriendPto.Friend();
                notice.friend.isOnline = true;
                notice.friend.uid = uid;
                notice.friend.nick = await GlobalVar.dbHelper.getUserInfoByKey(uid, 'nick');
                this.sendMsg(friendClientName, targetUid, notice);
            }
            this.sendMsg(clientName, uid, res);
        }
        AddFriendRecordModel.destroy({ where: { target_uid: uid, from_uid: targetUid } });
    }
}