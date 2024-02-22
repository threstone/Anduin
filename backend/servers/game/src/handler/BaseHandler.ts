import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';

export class BaseHandler {
    static sendMsg(clientName: string, uid: number, message: IGameMessage) {
        if (!clientName || !uid || !message) {
            return;
        }
       this.sendBuffer(clientName, uid, ProtoBufEncoder.encode(message));
    }

    static sendBuffer(clientName: string, uid: number, buffer: Buffer) {
        GlobalVar.socketServer.sendTransferToGate(clientName, uid, buffer);
    }
}