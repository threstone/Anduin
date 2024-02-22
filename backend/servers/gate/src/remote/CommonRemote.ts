import { GlobalVar } from "../GlobalVar";

export class CommonRemote {
    transferToGate(uid: number, buffer: Buffer): void {
        GlobalVar.socketServer.sendBufferByUid(uid, buffer);
    }

    broadcast(buffer: Buffer): void {
        GlobalVar.socketServer.broadcast(buffer);
    }

    closeUserSocket(uid: number): void {
        GlobalVar.socketServer.closeUserSocket(uid);
    }
}