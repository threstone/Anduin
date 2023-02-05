import { IGameMessage } from '../../../common/I';
import { GlobalVar } from '../GlobalVar';

export class GameUser {
    uid: number
    clientName: string
    cardGroupId: number
    constructor(clientName: string, uid: number, cardGroupId: number) {
        this.clientName = clientName;
        this.uid = uid;
        this.cardGroupId = cardGroupId;
    }

    sendMsg(message: IGameMessage) {
        GlobalVar.socketServer.sendMsg(this.clientName, this.uid, message);
    }
}