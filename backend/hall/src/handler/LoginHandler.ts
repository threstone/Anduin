import { getLogger } from 'log4js';
import { RedisType } from '../../../common/ConstDefine';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { AddFriendRecordModel } from '../../../common/sequelize/model/AddFriendRecord';
import { FriendModel } from '../../../common/sequelize/model/FriendModel';
import { UserModel } from '../../../common/sequelize/model/UserModel';
import { FriendPto, LoginPto } from '../../../common/CommonProto';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';

const logger = getLogger();
export class LoginHandler extends BaseHandler {

    static async C_LOGIN(clientName: string, uid: number, msg: LoginPto.C_LOGIN) {
        if (!msg.account || !msg.password || msg.account.length > 16 || msg.password.length > 32) {
            return;
        }
        const replyMsg = new LoginPto.S_LOGIN();
        const userInfo = await UserModel.findOne({ where: { account: msg.account, password: msg.password } });

        if (!userInfo) {
            replyMsg.isSuccess = false;
        } else {
            await this.onLoginSuccess(clientName, userInfo, replyMsg);
        }
        return ProtoBufEncoder.encode(replyMsg);
    }

    static async C_REGISTER(clientId: number, uid: number, msg: LoginPto.C_REGISTER) {
        if (!msg.nick || !msg.account || !msg.password || msg.account.length > 16 || msg.password.length > 32 || msg.nick.length > 8) {
            return;
        }
        const isExist = await UserModel.isExist(msg.account);
        const res = new LoginPto.S_REGISTER();
        res.code = 2;
        if (isExist) {
            res.code = 1;
        } else {
            const createRes = await UserModel.createUser(msg.account, msg.password, msg.nick);
            if (createRes) {
                res.code = 0;
            }
        }
        return ProtoBufEncoder.encode(res);
    }

    private static async initFriendInfo(uid: number, replyMsg: LoginPto.S_LOGIN) {
        const promArr = [];
        //初始化好友请求信息,获取到添加好友信息
        const addInfos: AddFriendRecordModel[] = await AddFriendRecordModel.findAll({ where: { targetUid: uid } });
        for (let index = 0; index < addInfos.length; index++) {
            const fromUid = addInfos[index].fromUid;
            const addInfo = new FriendPto.Friend();
            addInfo.uid = fromUid;
            const prom = GlobalVar.dbHelper.getUserInfoByKey(fromUid, 'nick').then((nick: string) => {
                addInfo.nick = nick;
            }).catch((err) => {
                logger.error(`C_FRIEND_INFO ${fromUid}获取用户昵称出错${err}`);
            });
            promArr.push(prom);
            replyMsg.reqAddList.push(addInfo);
        }

        // 初始化好友信息,获取到好友信息
        const friendInfos = await FriendModel.findAll({ where: { uid } });
        const friendUids: number[] = [];
        for (let index = 0; index < friendInfos.length; index++) {
            const friendUId = friendInfos[index].friendUId;
            friendUids.push(friendUId);
            const friendInfo = new FriendPto.Friend();
            friendInfo.uid = friendUId;
            const prom = GlobalVar.dbHelper.getUserInfoByKey(friendUId, 'nick').then((nick: string) => {
                friendInfo.nick = nick;
            }).catch((err) => {
                logger.error(`C_FRIEND_INFO ${uid}获取用户昵称出错${err}`);
            });
            const onlineInfoPromise = GlobalVar.redisMgr.getClient(RedisType.userGate).getData(`${friendUId}`).then((friendClientName) => {
                if (friendClientName) {
                    friendInfo.isOnline = true;
                }
            }).catch((err) => {
                logger.error(`C_FRIEND_INFO ${uid}获取用户在线状态出错${err}`);
            });
            promArr.push(prom);
            promArr.push(onlineInfoPromise);
            replyMsg.friendList.push(friendInfo);
        }
        // //将好友信息插入到redis中
        GlobalVar.redisMgr.getClient(RedisType.userRelation).delete(uid);
        GlobalVar.redisMgr.getClient(RedisType.userRelation).sadd(uid, friendUids);
        await Promise.all(promArr);
    }

    private static async onLoginSuccess(clientName: string, userInfo: UserModel, replyMsg: LoginPto.S_LOGIN) {
        const uid = userInfo.uid;
        //如果玩家在线,把旧的玩家踢掉
        const oldClient = await GlobalVar.redisMgr.getClient(RedisType.userGate).getData(uid);
        if (oldClient) {
            GlobalVar.socketServer.sendTips(oldClient, uid, '您的账号在别处登录了!', 60000);
            GlobalVar.socketServer.callCloseUserSocket(oldClient, uid);
        }

        replyMsg.isSuccess = true;
        replyMsg.headIndex = userInfo.headIndex;
        replyMsg.nick = userInfo.nick;
        replyMsg.uid = uid;

        //设置玩家信息
        GlobalVar.redisMgr.getClient(RedisType.userInfo).hmset(uid, (userInfo as any).dataValues, -1);
        GlobalVar.redisMgr.getClient(RedisType.userGate).setData(uid, `${clientName}`, -1);
        await this.initFriendInfo(uid, replyMsg);

        //如果玩家在游戏中提示玩家重连
        const gameName = await GlobalVar.redisMgr.getClient(RedisType.userGame).getData(uid);
        if (gameName) {
            replyMsg.needReconnect = true;
            process.nextTick(() => {
                GlobalVar.socketServer.sendBindToGame(clientName, uid, gameName);
            });
        }
    }
}