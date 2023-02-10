import { GameUser } from '../game/GameUser';

export class UserMgr {
    private _userMap: Map<number, GameUser>;
    constructor() {
        this._userMap = new Map<number, GameUser>();
    }

    setUser(user: GameUser) {
        this._userMap.set(user.uid, user);
    }

    getUser(uid: number) {
        let user = this._userMap.get(uid);
        return user;
    }

    clearUser(uid: number) {
        this._userMap.delete(uid);
    }
}