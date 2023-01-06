import { UserSession } from '../UserSession';
import { GlobalVar } from '../GlobalVar';
import { LoginPto } from '../CommonProto';

export class LoginHandler {
    public static handlerLoginPto(userSession: UserSession, scmd: number, buffer: Buffer) {
        const login = GlobalVar.hallConnectorMgr.getRandLifeLogin();
        if (!login) {
            return;
        }

        if (scmd === LoginPto.C_LOGIN.prototype.scmd) {
            login.callReqLogin(buffer).then((uid) => {
                if (uid) {
                    userSession.isAuthorized = true;
                    userSession.uid = uid;
                }
            });
        } else if (scmd === LoginPto.C_REGISTER.prototype.scmd) {
            login.callReqRegister(buffer).then((buff) => {
                if (buff) {
                    userSession.sendMessage(buff);
                }
            });
        }
    }
}