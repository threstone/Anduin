import { getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import * as RpcCommon from '../../common/rpc/RpcCommonHall';

const logger = getLogger();
export class SocketServer extends RpcCommon.HallRPCServer {

    async reqRegister(clientId: number, buff: Buffer): Promise<Buffer> {
        return this.transferToHall(clientId, null, buff);
    }

    async reqLogin(clientId: number, buff: Buffer): Promise<number> {
        return this.transferToHall(clientId, null, buff);
    }

    async transferToHall(clientId: number, uid: number, buff: Buffer) {
        const msg = ProtoBufEncoder.decode(buff, 0);
        const fun = ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd);
        if (!fun) {
            logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`);
            return;
        }
        return await fun(clientId, uid, msg);
    }
}