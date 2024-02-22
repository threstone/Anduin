import { GlobalVar } from '../GlobalVar';
import { LoginPto } from '../../../../common/CommonProto';
import { GateSocket } from '../GateSocket';

export class LoginHandler {
    public static handlerLoginPto(socket: GateSocket, scmd: number, buffer: Buffer) {
        if (socket.isAuthorized) {
            return;
        }

        if (scmd === LoginPto.C_LOGIN.prototype.scmd) {
            rpc.hall.hallRemote.callReqLogin({}, serverConfig.nodeId, buffer).then((buffer) => {
                const buf = buffer.slice(8);
                const msg = LoginPto.S_LOGIN.decode(buf);
                if (msg.isSuccess) {
                    socket.isAuthorized = true;
                    socket.uid = msg.uid;
                    GlobalVar.socketServer.addSocketToMap(msg.uid, socket);
                    rpc.relation.userRemote.sendUserOnline({}, serverConfig.nodeId, socket.uid, msg.nick);
                }
                socket.send(buffer);
            });
        } else if (scmd === LoginPto.C_REGISTER.prototype.scmd) {
            rpc.hall.hallRemote.callReqRegister({}, serverConfig.nodeId, buffer).then((buff) => {
                if (buff) {
                    socket.send(buff);
                }
            });
        }
    }
}