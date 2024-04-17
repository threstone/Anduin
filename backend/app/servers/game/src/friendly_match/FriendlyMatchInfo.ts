import { FriendlyMatchPto } from '../../../../common/CommonProto';
import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';
import { GameMatchInfo } from '../game/GameMatchInfo';
import { GlobalVar } from '../GlobalVar';

export class FriendlyMatchInfo extends GameMatchInfo {

    endTime: number

    constructor(souceGateNode: string, souceUid: number, targetGateNode: string, targetUid: number, endTime: number) {
        super(souceGateNode, souceUid, targetGateNode, targetUid);
        this.endTime = endTime;
    }

    destroy() {
        //unbind
        rpc.gate.gameRemote.sendUnbindUserGameNode({ type: 1, nodeId: this.souceUser.gateNodeId }, this.souceUser.uid);
        rpc.gate.gameRemote.sendUnbindUserGameNode({ type: 1, nodeId: this.targetUser.gateNodeId }, this.targetUser.uid);
        //send stop message to user
        const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
        const stopBuffer = ProtoBufEncoder.encode(stopMsg);
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: this.souceUser.gateNodeId }, this.souceUser.uid, stopBuffer);
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: this.targetUser.gateNodeId }, this.targetUser.uid, stopBuffer);
    }

    sendToSource(message: IGameMessage) {
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: this.souceUser.gateNodeId }, this.souceUser.uid, ProtoBufEncoder.encode(message));
    }

    sendToTarget(message: IGameMessage) {
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: this.targetUser.gateNodeId }, this.targetUser.uid, ProtoBufEncoder.encode(message));
    }

    isComplete() {
        return this.souceUser.deck && this.targetUser.deck;
    }
}