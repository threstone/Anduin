import { getLogger } from "log4js";
import { ProtoBufEncoder } from "../../../../common/ProtoBufEncoder";
import { GlobalVar } from "../GlobalVar";

const logger = getLogger(startupParam?.nodeId);
export class UserRemote {
    userOnline(nodeId: string, uid: number, nick: string): void {
        //玩家上线
        GlobalVar.userMgr.onUserOnline(nodeId, uid, nick);
    }

    userOffline(uid: number): void {
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