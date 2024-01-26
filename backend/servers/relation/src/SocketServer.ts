import { getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import * as RpcCommon from '../../../common/rpc/rpc_class/RpcCommonRelation';
import { GlobalVar } from './GlobalVar';

const logger = getLogger('relation');
export class SocketServer extends RpcCommon.RelationRPCServer {
    userOnline(clientName: string, uid: number, nick: string): void {
        //玩家上线
        GlobalVar.userMgr.onUserOnline(clientName, uid, nick);
    }

    userOffline(clientName: string, uid: number): void {
        //玩家下线
        GlobalVar.userMgr.onUserOffline(uid);
    }

    async transferToRelation(clientName: string, uid: number, buff: Buffer): Promise<Buffer> {
        const msg = ProtoBufEncoder.decode(buff, 0);
        const fun = ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd);
        if (!fun) {
            logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`);
            return;
        }
        return await fun(clientName, uid, msg);
    }
}