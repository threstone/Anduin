import { getLogger } from 'log4js';
import { SystemPto } from '../../../common/CommonProto';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import * as RpcCommon from '../../../common/rpc/rpc_class/RpcCommonHall';

const logger = getLogger(startupParam.nodeId);
export class SocketServer extends RpcCommon.HallRPCServer {
    async reqRegister(clientName: string, buff: Buffer): Promise<Buffer> {
        return this.transferToHall(clientName, null, buff);
    }

    async reqLogin(clientName: string, buff: Buffer): Promise<Buffer> {
        return this.transferToHall(clientName, null, buff);
    }

    async transferToHall(clientName: string, uid: number, buff: Buffer): Promise<Buffer> {
        const msg = ProtoBufEncoder.decode(buff, 0);
        if (!msg) {
            logger.error(`无法解析的数据 buff:${buff}`);
            return;
        }
        const fun = ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd);
        if (!fun) {
            logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`);
            return;
        }
        return await fun(clientName, uid, msg);
    }

    sendTips(clientName: string, uid: number, tips: string, hoverTime: number = 5000) {
        let message = new SystemPto.S_TIPS();
        message.msg = tips;
        message.hoverTime = hoverTime;
        this.sendTransferToGate(clientName, uid, ProtoBufEncoder.encode(message));
    }
}