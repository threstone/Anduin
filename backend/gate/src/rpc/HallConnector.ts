import * as RpcCommon from '../../../common/rpc/rpc_class/RpcCommonHall';
import { GlobalVar } from '../GlobalVar';
export class HallConnector extends RpcCommon.HallRPCClient {

    onOpen() {
    }
    onClose() {
    }

    transferToGate(clientId: number, uid: number, buffer: Buffer): void {
        GlobalVar.socketServer.sendBufferByUid(uid, buffer);
    }

    closeUserSocket(clientId: number, uid: number): void {
        GlobalVar.socketServer.closeUserSocket(uid);
    }
}