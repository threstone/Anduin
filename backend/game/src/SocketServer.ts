import { getLogger } from 'log4js';
import { IGameMessage } from '../../common/I';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import * as RpcCommon from '../../common/rpc/rpc_class/RpcCommonGame';
import { GlobalVar } from './GlobalVar';

const logger = getLogger();
export class SocketServer extends RpcCommon.GameRPCServer {

    userOffline(clientName: string, uid: number): void {
        const user = GlobalVar.userMgr.getUser(uid);
        //如果在游戏中的
        if (user) {
            user.table.onUserOffline(user);
        }
    }

    async transferToGame(clientName: string, uid: number, buff: Buffer): Promise<Buffer> {
        const msg = ProtoBufEncoder.decode(buff, 0);
        const fun = ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd);
        if (!fun) {
            logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`);
            return;
        }
        const user = GlobalVar.userMgr.getUser(uid);
        if (user) {
            return await fun(user, user.table, msg);
        }
        return await fun(clientName, uid, msg);
    }

    sendMsg(clientName: string, uid: number, message: IGameMessage) {
        this.sendTransferToGate(clientName, uid, ProtoBufEncoder.encode(message));
    }

    sendBuffer(clientName: string, uid: number, buffer: Buffer) {
        this.sendTransferToGate(clientName, uid, buffer);
    }
}