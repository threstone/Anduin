import { CardsPto } from '../../../../common/CommonProto';

export class GameMatchInfo {
    souceUser: MatchUser;
    targetUser: MatchUser;

    constructor(souceGateNode: string, souceUid: number, targetGateNode: string, targetUid: number) {
        this.souceUser = new MatchUser(souceGateNode, souceUid);
        this.targetUser = new MatchUser(targetGateNode, targetUid);
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
    gateNodeId: string
    nick: string
    deck: CardsPto.Deck

    constructor(gateNodeId: string, uid: number) {
        this.uid = uid;
        this.gateNodeId = gateNodeId;
    }
}