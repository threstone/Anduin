import { CardsPto } from '../../../common/CommonProto';

export class GameMatchInfo {
    souceUser: MatchUser;
    targetUser: MatchUser;

    constructor(souceClient: string, souceUid: number, targetClient: string, targetUid: number) {
        this.souceUser = new MatchUser(souceClient, souceUid);
        this.targetUser = new MatchUser(targetClient, targetUid);
    }

    public setCardGroup(uid: number, cardGroup: CardsPto.CardGroup) {
        if (uid === this.souceUser.uid) {
            this.souceUser.cardGroup = cardGroup;
        } else {
            this.targetUser.cardGroup = cardGroup;
        }
    }

    public clearCardGroup(uid: number) {
        if (uid === this.souceUser.uid) {
            this.souceUser.cardGroup = undefined;
        } else {
            this.targetUser.cardGroup = undefined;
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
    cardGroup: CardsPto.CardGroup

    constructor(clientName: string, uid: number) {
        this.uid = uid;
        this.clientName = clientName;
    }
}