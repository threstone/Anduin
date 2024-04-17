import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';

export class BaseHandler {
    static sendMsg(gateNodeId: string, uid: number, message: IGameMessage) {
        if (!message) {
            return;
        }
        this.sendBuffer(gateNodeId, uid, ProtoBufEncoder.encode(message));
    }

    static sendBuffer(gateNodeId: string, uid: number, buffer: Buffer) {
        if (!gateNodeId || !uid || !buffer) {
            return;
        }
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: gateNodeId }, uid, buffer);
    }
}