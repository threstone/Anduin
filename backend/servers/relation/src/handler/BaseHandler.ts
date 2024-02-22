import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';

export class BaseHandler {
    static sendMsg(gateNodeId: string, uid: number, message: IGameMessage) {
        if (!gateNodeId || !uid || !message) {
            return;
        }
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: gateNodeId }, uid, ProtoBufEncoder.encode(message));
    }
}