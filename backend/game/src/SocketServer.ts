import { getLogger } from 'log4js';
import { IGameMessage } from '../../common/I';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import * as RpcCommon from '../../common/rpc/rpc_class/RpcCommonGame';
import { GlobalVar } from './GlobalVar';

const logger = getLogger();
export class SocketServer extends RpcCommon.GameRPCServer {
    async transferToGame(clientName: string, uid: number, buff: Buffer): Promise<Buffer> {
        const msg = ProtoBufEncoder.decode(buff, 0);
        const fun = ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd);
        if (!fun) {
            logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`);
            return;
        }
        const session = GlobalVar.userMgr.getUserSession(uid);
        if (session) {
            return await fun(session, msg);
        }
        return await fun(clientName, uid, msg);
    }

    sendMsg(clientName: string, uid: number, message: IGameMessage) {
        this.sendTransferToGate(clientName, uid, ProtoBufEncoder.encode(message));
    }
}