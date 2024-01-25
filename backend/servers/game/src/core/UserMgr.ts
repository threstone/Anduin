import { GameUser } from '../game/GameUser';

export class UserMgr {
    private _userMap: Map<number, GameUser>;
    constructor() {
        this._userMap = new Map<number, GameUser>();
    }

    public setUser(user: GameUser) {
        this._userMap.set(user.uid, user);
    }

    public getUser(uid: number) {
        let user = this._userMap.get(uid);
        return user;
    }

    public clearUser(uid: number) {
        this._userMap.delete(uid);
    }
}