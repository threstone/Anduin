import { getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';
import * as RpcCommon from '../../../../common/rpc/rpc_class/RpcCommonGame';
import { GlobalVar } from '../GlobalVar';

const logger = getLogger('game');
export class SocketServer extends RpcCommon.GameRPCServer {

    userOffline(clientName: string, uid: number): void {
        const user = GlobalVar.userMgr.getUser(uid);
        //如果在游戏中的
        if (user) {
            user.table.onUserOffline(user);
            //TODO 双方都离线了销毁桌子，为了方便测试
            if (user.table.getOtherUser(user.uid).isOnline === false) {
                user.table.destroy(false);
            }
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
        try {
            if (user) {
                return await fun(user, user.table, msg);
            }
            return await fun(clientName, uid, msg);
        } catch (error) {
            if(user.table){
                user.table.destroy(true);
            }
            logger.error(`handler 处理函数出错 :${error.message} stack:${error.stack}`);
        }
    }

    sendMsg(clientName: string, uid: number, message: IGameMessage) {
        this.sendTransferToGate(clientName, uid, ProtoBufEncoder.encode(message));
    }

    sendBuffer(clientName: string, uid: number, buffer: Buffer) {
        this.sendTransferToGate(clientName, uid, buffer);
    }
}