import { FriendlyMatchPto } from '../../../common/CommonProto';
import { IGameMessage } from '../../../common/I';
import { GameMatchInfo } from '../game/GameMatchInfo';
import { GlobalVar } from '../GlobalVar';

export class FriendlyMatchInfo extends GameMatchInfo {
    souceUid: number
    souceClient: string
    targetUid: number
    targetClient: string
    endTime: number

    souceGroupId: number
    targetGroupId: number

    constructor(souceClient: string, souceUid: number, targetClient: string, targetUid: number, endTime: number) {
        super(souceClient, souceUid, targetClient, targetUid);
        this.endTime = endTime;
    }

    destroy() {
        //unbind
        GlobalVar.socketServer.sendUnbindUserGameNode(this.souceClient, this.souceUid);
        GlobalVar.socketServer.sendUnbindUserGameNode(this.targetClient, this.targetUid);
        //send stop message to user
        const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
        GlobalVar.socketServer.sendMsg(this.souceClient, this.souceUid, stopMsg);
        GlobalVar.socketServer.sendMsg(this.targetClient, this.targetUid, stopMsg);
    }

    sendToSource(message: IGameMessage) {
        GlobalVar.socketServer.sendMsg(this.souceClient, this.souceUid, message);
    }

    sendToTarget(message: IGameMessage) {
        GlobalVar.socketServer.sendMsg(this.targetClient, this.targetUid, message);
    }

    isComplete() {
        return this.souceGroupId && this.targetGroupId;
    }
}