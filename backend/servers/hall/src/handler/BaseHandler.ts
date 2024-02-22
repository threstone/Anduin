import { SystemPto } from '../../../../common/CommonProto';
import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';

export class BaseHandler {
    static sendMsg(gateNodeId: string, uid: number, message: IGameMessage) {
        if (!gateNodeId || !uid || !message) {
            return;
        }
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: gateNodeId }, uid, ProtoBufEncoder.encode(message))
    }

    static sendTips(gateNodeId: string, uid: number, tips: string, hoverTime: number = 5000) {
        let message = new SystemPto.S_TIPS();
        message.msg = tips;
        message.hoverTime = hoverTime;
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: gateNodeId }, uid, ProtoBufEncoder.encode(message))
    }
}