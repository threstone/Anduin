import { FriendlyMatchPto } from '../../../../common/CommonProto';
import { IGameMessage } from '../../../../common/I';
import { GameMatchInfo } from '../GameMatchInfo';
import { GlobalVar } from '../../GlobalVar';

export class FriendlyMatchInfo extends GameMatchInfo {

    endTime: number

    constructor(souceClient: string, souceUid: number, targetClient: string, targetUid: number, endTime: number) {
        super(souceClient, souceUid, targetClient, targetUid);
        this.endTime = endTime;
    }

    destroy() {
        //unbind
        GlobalVar.socketServer.sendUnbindUserGameNode(this.souceUser.clientName, this.souceUser.uid);
        GlobalVar.socketServer.sendUnbindUserGameNode(this.targetUser.clientName, this.targetUser.uid);
        //send stop message to user
        const stopMsg = new FriendlyMatchPto.S_MATCH_STOP();
        GlobalVar.socketServer.sendMsg(this.souceUser.clientName, this.souceUser.uid, stopMsg);
        GlobalVar.socketServer.sendMsg(this.targetUser.clientName, this.targetUser.uid, stopMsg);
    }

    sendToSource(message: IGameMessage) {
        GlobalVar.socketServer.sendMsg(this.souceUser.clientName, this.souceUser.uid, message);
    }

    sendToTarget(message: IGameMessage) {
        GlobalVar.socketServer.sendMsg(this.targetUser.clientName, this.targetUser.uid, message);
    }

    isComplete() {
        return this.souceUser.cardGroup && this.targetUser.cardGroup;
    }
}