import { ProtoBufEncoder } from '../../../../common/ProtoBufEncoder';
import { ChatPto } from '../../../../common/CommonProto';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';

export class ChatHandler extends BaseHandler {
    static C_SEND_MESSAGE(clientName: string, uid: number, msg: ChatPto.C_SEND_MESSAGE) {
        if (msg.msg.length > 128) {
            return;
        }
        const wrap = msg.msg.match(/\n/g);
        if (wrap && wrap.length > 15) {
            return;
        }
        const data = new ChatPto.S_CHAT_MESSAGE();
        data.uid = uid;
        data.nick = GlobalVar.userMgr.getUserInfo(uid)?.nick;
        data.msg = msg.msg;
        data.msgType = msg.msgType;
        switch (msg.msgType) {
            //综合消息
            case ChatPto.MsgType.normal: {
                const buffer = ProtoBufEncoder.encode(data);
                rpc.gate.commonRemote.sendBroadcast({ type: 2 }, buffer);
                break;
            }
            //私聊消息
            case ChatPto.MsgType.private: {
                const targetUser = GlobalVar.userMgr.getUserInfo(msg.uid);
                //对方不在线
                if (!targetUser) {
                    return;
                }
                this.sendMsg(targetUser.gateNodeId, targetUser.uid, data);
                break;
            }
        }
    }
}