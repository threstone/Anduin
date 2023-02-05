export class GameMatchInfo {
    souceUid: number
    souceClient: string
    targetUid: number
    targetClient: string

    souceGroupId: number
    targetGroupId: number

    constructor(souceClient: string, souceUid: number, targetClient: string, targetUid: number) {
        this.souceClient = souceClient;
        this.souceUid = souceUid;
        this.targetUid = targetUid;
        this.targetClient = targetClient;
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
}