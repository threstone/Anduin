import { RedisType } from '../../../common/ConstDefine';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { LoginPto, SystemPto } from '../CommonProto';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';

export class LoginHandler extends BaseHandler {
    static async C_LOGIN(clientId: number, uid: number, msg: LoginPto.C_LOGIN) {
        const replyMsg = new LoginPto.S_LOGIN();
        const userInfo = await GlobalVar.dbMgr.userDao.getUserInfo(msg.account, msg.password);
        if (!userInfo) {
            replyMsg.isSuccess = false;
        } else {
            //如果玩家在线,把旧的玩家踢掉
            const oldClient = parseInt(await GlobalVar.redisMgr.getClient(RedisType.userGate).getData(`${userInfo.id}`));
            if (!Number.isNaN(oldClient)) {
                let tips = new SystemPto.S_TIPS();
                tips.msg = '您的账号在别处登录了!';
                tips.hoverTime = 60000;
                this.sendMsg(oldClient, userInfo.id, tips);
                GlobalVar.socketServer.callCloseUserSocket(oldClient, userInfo.id);
            }

            replyMsg.isSuccess = true;
            replyMsg.headIndex = userInfo.headIndex;
            replyMsg.nick = userInfo.nick;
            replyMsg.uid = userInfo.uid;
            //设置玩家信息
            GlobalVar.redisMgr.getClient(RedisType.userInfo).setObjInHash(`${userInfo.id}`, (userInfo as any).dataValues, -1);
            GlobalVar.redisMgr.getClient(RedisType.userGate).setData(`${userInfo.id}`, `${clientId}`, -1);
            console.log('login success');
        }
        return ProtoBufEncoder.encode(replyMsg);
    }

    static async C_REGISTER(clientId: number, uid: number, msg: LoginPto.C_REGISTER) {
        const isExist = await GlobalVar.dbMgr.userDao.isExist(msg.account);
        const res = new LoginPto.S_REGISTER();
        res.code = 2;
        if (isExist) {
            res.code = 1;
        } else {
            const createRes = await GlobalVar.dbMgr.userDao.createUser(msg.account, msg.password, msg.nick);
            if (createRes) {
                res.code = 0;
            }
        }
        return ProtoBufEncoder.encode(res);
    }
}