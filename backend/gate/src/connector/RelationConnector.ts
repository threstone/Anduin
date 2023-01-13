import * as RpcCommon from '../../../common/rpc/rpc_class/RpcCommonRelation';
import { GlobalVar } from '../GlobalVar';
export class RelationConnector extends RpcCommon.RelationRPCClient {
    onOpen() {
    }
    onClose() {
    }

    transferToGate(uid: number, buffer: Buffer): void {
        GlobalVar.socketServer.sendBufferByUid(uid, buffer);
    }

    broadcast(buffer: Buffer): void {
        GlobalVar.socketServer.broadcast(buffer);
    }
}