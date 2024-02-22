import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';

export class BaseHandler {
    static sendMsg(clientName: string, uid: number, message: IGameMessage) {
        if (!message) {
            return;
        }
        this.sendBuffer(clientName, uid, ProtoBufEncoder.encode(message));
    }

    static sendBuffer(clientName: string, uid: number, buffer: Buffer) {
        if (!clientName || !uid || !buffer) {
            return;
        }
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: clientName }, uid, buffer);
    }
}