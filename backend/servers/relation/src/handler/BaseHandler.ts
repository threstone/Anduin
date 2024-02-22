import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';

export class BaseHandler {
    static sendMsg(clientName: string, uid: number, message: IGameMessage) {
        if (!clientName || !uid || !message) {
            return;
        }
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: clientName }, uid, ProtoBufEncoder.encode(message));
    }
}