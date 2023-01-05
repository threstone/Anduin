import * as RpcCommon from '../../common/rpc/RpcCommonHall';

export class SocketServer extends RpcCommon.HallRPCServer {
    async login(clientId: number, token: string, isDebug: boolean, ip: string, nodeId: number): Promise<Buffer> {
        throw new Error('Method not implemented.');
    }

}