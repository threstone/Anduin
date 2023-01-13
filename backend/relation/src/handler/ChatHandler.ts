import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { ChatPto } from '../CommonProto';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';

export class ChatHandler extends BaseHandler {
    //私聊信息
    static C_SEND_PRIVATE_MESSAGE(clientName: string, uid: number, msg: ChatPto.C_SEND_PRIVATE_MESSAGE) {
        if (msg.msg.length > 128) {
            return;
        }
        const data = new ChatPto.S_CHAT_MESSAGE();
        data.uid = uid;
        data.nick = GlobalVar.userMgr.getUserInfo(uid)?.nick;
        data.msg = msg.msg;
        data.isPrivateMsg = true;
        this.sendMsg(GlobalVar.userMgr.getUserInfo(uid)?.clientName, msg.uid, data);
    }

    //全服信息
    static C_SEND_MESSAGE_TO_ALL(clientName: string, uid: number, msg: ChatPto.C_SEND_MESSAGE_TO_ALL) {
        if (msg.msg.length > 128) {
            return;
        }
        const data = new ChatPto.S_CHAT_MESSAGE();
        data.uid = uid;
        data.nick = GlobalVar.userMgr.getUserInfo(uid)?.nick;
        data.msg = msg.msg;
        const buffer = ProtoBufEncoder.encode(data);
        const clients = GlobalVar.userMgr.getAllClientName();
        clients.forEach((value) => {
            GlobalVar.socketServer.sendBroadcast(value, buffer);
        });
    }
}