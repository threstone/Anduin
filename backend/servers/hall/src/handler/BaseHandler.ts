import { SystemPto } from '../../../../common/CommonProto';
import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';

export class BaseHandler {
    static sendMsg(clientName: string, uid: number, message: IGameMessage) {
        if (!clientName || !uid || !message) {
            return;
        }
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: clientName }, uid, ProtoBufEncoder.encode(message))
    }

    static sendTips(clientName: string, uid: number, tips: string, hoverTime: number = 5000) {
        let message = new SystemPto.S_TIPS();
        message.msg = tips;
        message.hoverTime = hoverTime;
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: clientName }, uid, ProtoBufEncoder.encode(message))
    }
}