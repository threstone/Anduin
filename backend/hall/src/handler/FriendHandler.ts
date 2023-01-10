import { getLogger } from 'log4js';
import { RedisType } from '../../../common/ConstDefine';
import { AddFriendRecordModel } from '../../../common/sequelize/model/AddFriendRecord';
import { FriendModel } from '../../../common/sequelize/model/FriendModel';
import { FriendPto } from '../CommonProto';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';

const logger = getLogger();
export class FriendHandler extends BaseHandler {
    //客户端请求好友信息
    static async C_FRIEND_INFO(clientName: string, uid: number, msg: FriendPto.C_FRIEND_INFO) {
        const res = new FriendPto.S_FRIEND_INFO();
        const promArr = [];
        //初始化好友请求信息
        const addInfos = await AddFriendRecordModel.getFriendAddInfo(uid);
        for (let index = 0; index < addInfos.length; index++) {
            const uid = addInfos[index].uid;
            const addInfo = new FriendPto.Friend();
            addInfo.uid = uid;
            const prom = GlobalVar.redisMgr.getClient(RedisType.userInfo).hget(`${uid}`, 'nick').then((nick: string) => {
                addInfo.nick = nick;
            }).catch((err) => {
                logger.error(`C_FRIEND_INFO ${uid}获取用户昵称出错${err}`);
            });
            promArr.push(prom);
            res.reqAddList.push(addInfo);
        }

        //初始化好友信息
        const friendInfos = await FriendModel.getFriendInfo(uid);
        for (let index = 0; index < friendInfos.length; index++) {
            const friendUId = friendInfos[index].friendUId;
            const friendInfo = new FriendPto.Friend();
            friendInfo.uid = friendUId;
            const prom = GlobalVar.redisMgr.getClient(RedisType.userInfo).hget(`${friendUId}`, 'nick').then((nick: string) => {
                friendInfo.nick = nick;
            }).catch((err) => {
                logger.error(`C_FRIEND_INFO ${uid}获取用户昵称出错${err}`);
            });
            promArr.push(prom);
            res.list.push(friendInfo);
        }

        await Promise.all(promArr);
        this.sendMsg(clientName, uid, res);
    }

    //请求添加好友
    static async C_ADD_FRIEND(clientName: string, uid: number, msg: FriendPto.C_ADD_FRIEND) {
        const res = new FriendPto.S_ADD_FRIEND_REQ();
        if (!msg.uid) {
            res.code = 1;
        } else {
            //检查是否成功增加
            let isAdd = await AddFriendRecordModel.recordAddFreind(uid, msg.uid);
            if (!isAdd) {
                res.code = 2;
            } else {
                res.code = 0;
                //判断对方是否在线,在线就通知对方有人加你
                const friendClientName = await GlobalVar.redisMgr.getClient(RedisType.userGate).getData(`${msg.uid}`);
                if (friendClientName) {
                    let tips = new FriendPto.S_ADD_FRIEND();
                    tips.user = new FriendPto.Friend();
                    tips.user.uid = uid;
                    tips.user.nick = await GlobalVar.redisMgr.getClient(RedisType.userInfo).hget(`${uid}`, 'nick');
                    this.sendMsg(friendClientName, msg.uid, tips);
                }
            }
        }
        this.sendMsg(clientName, uid, res);
    }

    //同意或者拒绝好友请求
    static async C_ADD_FRIEND_REQ_RESULT(clientName: string, uid: number, msg: FriendPto.C_ADD_FRIEND_REQ_RESULT) {
        if (!msg.uid) {
            return;
        }

        //删除请求表中的记录
        AddFriendRecordModel.deleteAddFriendReq(msg.uid, uid);
        //添加好友关系到数据库中
        FriendModel.addRelationship(uid, msg.uid);

        const res = new FriendPto.S_FRIEND_CHANGE();
        res.friend = new FriendPto.Friend();
        res.friend.uid = msg.uid;
        res.friend.nick = await GlobalVar.redisMgr.getClient(RedisType.userInfo).hget(`${msg.uid}`, 'nick');

        //判断对方是否在线,在线就通知对方
        const friendClientName = await GlobalVar.redisMgr.getClient(RedisType.userGate).getData(`${msg.uid}`);
        if (friendClientName) {
            res.friend.isOnline = true;

            const notice = new FriendPto.S_FRIEND_CHANGE();
            notice.friend = new FriendPto.Friend();
            notice.friend.isOnline = true;
            notice.friend.uid = uid;
            notice.friend.nick = await GlobalVar.redisMgr.getClient(RedisType.userInfo).hget(`${uid}`, 'nick');
            this.sendMsg(friendClientName, msg.uid, notice);
        }
        
        this.sendMsg(clientName, uid, res);
    }
}