import { CardsPto } from '../../../common/CommonProto';

export class GameMatchInfo {
    souceUser: MatchUser;
    targetUser: MatchUser;

    constructor(souceClient: string, souceUid: number, targetClient: string, targetUid: number) {
        this.souceUser = new MatchUser(souceClient, souceUid);
        this.targetUser = new MatchUser(targetClient, targetUid);
    }

    public setDeck(uid: number, deck: CardsPto.Deck) {
        if (uid === this.souceUser.uid) {
            this.souceUser.deck = deck;
        } else {
            this.targetUser.deck = deck;
        }
    }

    public clearDeck(uid: number) {
        if (uid === this.souceUser.uid) {
            this.souceUser.deck = undefined;
        } else {
            this.targetUser.deck = undefined;
        }
    }

    public getFriend(uid: number) {
        if (this.souceUser.uid === uid) {
            return this.targetUser
        }
        return this.souceUser;
    }
}

export class MatchUser {
    uid: number
    clientName: string
    nick: string
    deck: CardsPto.Deck

    constructor(clientName: string, uid: number) {
        this.uid = uid;
        this.clientName = clientName;
    }
}