import { getLogger } from "log4js";
import { ProtoBufEncoder } from "../../../../common/ProtoBufEncoder";

const logger = getLogger(startupParam?.nodeId);
export class HallRemote {
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
}