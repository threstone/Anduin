import { CardsPto } from '../../../common/CommonProto';

export class GameMatchInfo {
    souceUid: number
    souceClient: string
    targetUid: number
    targetClient: string

    souceCardGroup: CardsPto.CardGroup
    targetCardGroup: CardsPto.CardGroup

    constructor(souceClient: string, souceUid: number, targetClient: string, targetUid: number) {
        this.souceClient = souceClient;
        this.souceUid = souceUid;
        this.targetUid = targetUid;
        this.targetClient = targetClient;
    }

    setCardGroup(uid: number, cardGroup: CardsPto.CardGroup) {
        if (uid === this.souceUid) {
            this.souceCardGroup = cardGroup;
        } else {
            this.targetCardGroup = cardGroup;
        }
    }

    clearCardGroup(uid: number) {
        if (uid === this.souceUid) {
            this.souceCardGroup = undefined;
        } else {
            this.targetCardGroup = undefined;
        }
    }
}