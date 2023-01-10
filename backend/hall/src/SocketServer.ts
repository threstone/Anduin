import { getLogger } from 'log4js';
import { RedisType } from '../../common/ConstDefine';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import * as RpcCommon from '../../common/rpc/rpc_class/RpcCommonHall';
import { GlobalVar } from './GlobalVar';

const logger = getLogger();
export class SocketServer extends RpcCommon.HallRPCServer {
    userSocketClose(clientName: string, uid: number): void {
        GlobalVar.redisMgr.getClient(RedisType.userGate).delete(`${uid}`);
    }

    async reqRegister(clientName: string, buff: Buffer): Promise<Buffer> {
        return this.transferToHall(clientName, null, buff);
    }

    async reqLogin(clientName: string, buff: Buffer): Promise<Buffer> {
        return this.transferToHall(clientName, null, buff);
    }

    async transferToHall(clientName: string, uid: number, buff: Buffer) {
        const msg = ProtoBufEncoder.decode(buff, 0);
        const fun = ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd);
        if (!fun) {
            logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`);
            return;
        }
        return await fun(clientName, uid, msg);
    }
}