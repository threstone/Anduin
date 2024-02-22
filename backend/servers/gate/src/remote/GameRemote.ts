import { GlobalVar } from "../GlobalVar";

export class GameRemote {
    async bindUserGameNode(uid: number, nodeId: string): Promise<boolean> {
        return GlobalVar.socketServer.bindGameNode(uid, nodeId);
    }

    async unbindUserGameNode(uid: number): Promise<boolean> {
        return GlobalVar.socketServer.unBindGameNode(uid);
    }

    bindToGame(uid: number, nodeId: string): void {
        GlobalVar.socketServer.bindGameNode(uid, nodeId);
    }
}