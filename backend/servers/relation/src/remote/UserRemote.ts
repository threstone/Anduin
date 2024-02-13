import { GlobalVar } from "../GlobalVar";

export class UserRemote {
    userOnline(nodeId: string, uid: number, nick: string): void {
        //玩家上线
        GlobalVar.userMgr.onUserOnline(nodeId, uid, nick);
    }

    userOffline(uid: number): void {
        //玩家下线
        GlobalVar.userMgr.onUserOffline(uid);
    }
}