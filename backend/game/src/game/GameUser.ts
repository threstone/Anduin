import { CardsPto } from '../../../common/CommonProto';
import { IGameMessage } from '../../../common/I';
import { GlobalVar } from '../GlobalVar';
import { GameTable } from './GameTable';

export class GameUser {

    uid: number
    clientName: string
    cardGroup: CardsPto.CardGroup
    table: GameTable
    isOnline: boolean

    constructor(clientName: string, uid: number, cardGroup: CardsPto.CardGroup, table: GameTable) {
        this.clientName = clientName;
        this.uid = uid;
        this.cardGroup = cardGroup;
        this.table = table;
        this.isOnline = true;
    }

    sendMsg(message: IGameMessage) {
        if (!this.isOnline === false) {
            return;
        }
        GlobalVar.socketServer.sendMsg(this.clientName, this.uid, message);
    }

    sendBuffer(messageBuffer: Buffer) {
        if (!this.isOnline === false) {
            return;
        }
        GlobalVar.socketServer.sendBuffer(this.clientName, this.uid, messageBuffer);
    }
}