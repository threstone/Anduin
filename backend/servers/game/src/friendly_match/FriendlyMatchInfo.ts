import { FriendlyMatchPto } from '../../../../common/CommonProto';
import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';
import { GameMatchInfo } from '../game/GameMatchInfo';
import { GlobalVar } from '../GlobalVar';

export class FriendlyMatchInfo extends GameMatchInfo {

    endTime: number

    constructor(souceClient: string, souceUid: number, targetClient: string, targetUid: number, endTime: number) {
        super(souceClient, souceUid, targetClient, targetUid);
        this.endTime = endTime;
    }

    destroy() {
        //unbind
        rpc.gate.gameRemote.sendUnbindUserGameNode({ type: 1, nodeId: this.souceUser.clientName }, this.souceUser.uid);
        rpc.gate.gameRemote.sendUnbindUserGameNode({ type: 1, nodeId: this.targetUser.clientName }, this.targetUser.uid);
        //send stop message to user
        const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
        const stopBuffer = ProtoBufEncoder.encode(stopMsg);
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: this.souceUser.clientName }, this.souceUser.uid, stopBuffer);
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: this.targetUser.clientName }, this.targetUser.uid, stopBuffer);
    }

    sendToSource(message: IGameMessage) {
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: this.souceUser.clientName }, this.souceUser.uid, ProtoBufEncoder.encode(message));
    }

    sendToTarget(message: IGameMessage) {
        rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: this.targetUser.clientName }, this.targetUser.uid, ProtoBufEncoder.encode(message));
    }

    isComplete() {
        return this.souceUser.deck && this.targetUser.deck;
    }
}