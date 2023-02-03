import * as RpcCommon from '../../../common/rpc/rpc_class/RpcCommonGame';
import { GlobalVar } from '../GlobalVar';
export class GameConnector extends RpcCommon.GameRPCClient {
    onOpen() {
    }
    onClose() {
    }

    transferToGate(uid: number, buffer: Buffer): void {
        GlobalVar.socketServer.sendBufferByUid(uid, buffer);
    }

    async bindUserGameNode(uid: number): Promise<boolean> {
        return GlobalVar.socketServer.bindGameNode(uid, this.name);
    }

    async unbindUserGameNode(uid: number): Promise<boolean> {
        return GlobalVar.socketServer.unBindGameNode(uid);
    }
}