import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { LoginPto } from '../CommonProto';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';

export class LoginHandler extends BaseHandler {
    static async C_LOGIN(clientId: number, uid: number, msg: LoginPto.C_LOGIN) {
        // console.log();
        // let isLogin: boolean
        // let uid: boolean
        // const msg: Buffer

        // return [isLogin, uid, msg]
        return 1;
    }

    static async C_REGISTER(clientId: number, uid: number, msg: LoginPto.C_REGISTER) {
        let isExist = await GlobalVar.dbMgr.userDao.isExist(msg.account);
        let res = new LoginPto.S_REGISTER();
        res.code = 2;
        if (isExist) {
            res.code = 1;
        } else {
            let createRes = await GlobalVar.dbMgr.userDao.createUser(msg.account, msg.password, msg.nick);
            if (createRes) {
                res.code = 0;
            }
        }
        return ProtoBufEncoder.encode(res);
    }
}