import * as RpcCommon from '../../../../common/rpc/rpc_class/RpcCommonHall';
import { GlobalVar } from '../GlobalVar';
export class HallConnector extends RpcCommon.HallRPCClient {

    onOpen() {
    }
    onClose() {
    }

    transferToGate(uid: number, buffer: Buffer): void {
        GlobalVar.socketServer.sendBufferByUid(uid, buffer);
    }

    closeUserSocket(uid: number): void {
        GlobalVar.socketServer.closeUserSocket(uid);
    }

    bindToGame(uid: number, gameNodeId: string): void {
        GlobalVar.socketServer.bindGameNode(uid, gameNodeId);
    }
}