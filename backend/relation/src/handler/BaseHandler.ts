import { IGameMessage } from '../../../common/I';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';

export class BaseHandler {
    static sendMsg(clientName: string, uid: number, message: IGameMessage) {
        if (!clientName || !uid || !message) {
            return;
        }
        GlobalVar.socketServer.sendTransferToGate(clientName, uid, ProtoBufEncoder.encode(message));
    }
}