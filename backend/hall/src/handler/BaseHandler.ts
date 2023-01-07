import { IGameMessage } from '../../../common/I';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';

export class BaseHandler {

    static sendMsg(clientId: number, uid: number, message: IGameMessage) {
        GlobalVar.socketServer.sendTransferToGate(clientId, uid, ProtoBufEncoder.encode(message));
    }

}