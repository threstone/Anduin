import { IGameMessage } from '../../../common/I';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';

export class BaseHandler {
    static sendMsg(clientName: string, uid: number, message: IGameMessage) {
        GlobalVar.socketServer.sendTransferToGate(clientName, uid, ProtoBufEncoder.encode(message));
    }
}