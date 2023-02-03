import { FriendlyMatchPto } from '../../../common/CommonProto';
import { IGameMessage } from '../../../common/I';
import { GlobalVar } from '../GlobalVar';

export class FriendlyMatchInfo {
    souceUid: number
    souceClient: string
    targetUid: number
    targetClient: string
    endTime: number

    souceGroupId: number
    targetGroupId: number

    constructor(souceClient: string, souceUid: number, targetClient: string, targetUid: number, endTime: number) {
        this.souceClient = souceClient;
        this.souceUid = souceUid;
        this.targetUid = targetUid;
        this.targetClient = targetClient;
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

    setCardGroup(uid: number, cardGroupId: number) {
        if (uid === this.souceUid) {
            this.souceGroupId = cardGroupId;
        } else {
            this.targetGroupId = cardGroupId;
        }
    }

    clearCardGroup(uid: number) {
        if (uid === this.souceUid) {
            this.souceGroupId = undefined;
        } else {
            this.targetGroupId = undefined;
        }
    }

    isComplete() {
        return this.souceGroupId && this.targetGroupId;
    }
}