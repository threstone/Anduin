import { FriendlyMatchInfo } from './FriendlyMatchInfo';

export class FriendlyMatchInfoMgr {
    private _map: Map<number, FriendlyMatchInfo>;

    constructor() {
        this._map = new Map<number, FriendlyMatchInfo>();
        setInterval(this.endCheck.bind(this), 1000);
    }

    private endCheck() {
        const now = Date.now();
        this._map.forEach((info, key, map) => {
            if (now > info.endTime) {
                this.clearFriendlyMatchInfo(key);
            }
        });
    }

    isExits(uid: number) {
        return this._map.has(uid);
    }

    getFriendlyMatchInfo(uid: number) {
        return this._map.get(uid);
    }

    regFriendlyMatchInfo(clientName: string, uid: number, targetClient: string, targetUid: number, endTime: number) {
        const matchInfo = new FriendlyMatchInfo(clientName, uid, targetClient, targetUid, endTime);
        this._map.set(uid, matchInfo);
        this._map.set(targetUid, matchInfo);
        return matchInfo;
    }

    clearFriendlyMatchInfo(uid: number) {
        const info = this._map.get(uid);
        if (info) {
            this._map.delete(info.souceUid);
            this._map.delete(info.targetUid);
        }
    }
}