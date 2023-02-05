import { CardsPto } from '../../../common/CommonProto';
import { IGameMessage } from '../../../common/I';
import { GlobalVar } from '../GlobalVar';
import { GameTable } from './GameTable';

export class GameUser {

    uid: number;
    clientName: string;
    table: GameTable;
    isOnline: boolean;
    cardGroup: CardsPto.CardGroup;
    cards: number[];

    constructor(clientName: string, uid: number, cardGroup: CardsPto.CardGroup, table: GameTable) {
        this.clientName = clientName;
        this.uid = uid;
        this.table = table;
        this.isOnline = true;
        
        this.cardGroup = cardGroup;
        this.cards = [];
        for (let index = 0; index < cardGroup.cards.length; index++) {
            const cardInfo = cardGroup.cards[index];
            for (let z = 0; z < cardInfo.count; z++) {
                this.cards.push(cardInfo.id);
            }
        }
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