import { GameSession } from './GameSession';

export class SessionMgr {
    private _sessionMap: Map<number, GameSession>;
    constructor() {
        this._sessionMap = new Map<number, GameSession>();
    }

    getUserSession(uid: number) {
        let session = this._sessionMap.get(uid);
        return session;
    }

    regSession(clientName: string, uid: number) {
        const session = new GameSession(clientName, uid);
        this._sessionMap.set(uid, session);
    }

    clearSession(uid: number) {
        this._sessionMap.delete(uid);
    }
}