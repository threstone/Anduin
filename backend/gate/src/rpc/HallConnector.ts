import * as RpcCommon from '../../../common/rpc/RpcCommonHall';
export class HallConnector extends RpcCommon.HallRPCClient {
    onOpen() {
    }
    onClose() {
    }
    transferToGate(clientId: number, uid: number, buffer: Buffer): boolean {
        console.log(clientId, uid, buffer);
        return true;
    }
}