import { ChatPto } from '../CommonProto';
import { BaseHandler } from './BaseHandler';

export class ChatHandler extends BaseHandler {
    //私聊信息
    static C_SEND_PRIVATE_MESSAGE(clientName: string, uid: number, msg: ChatPto.C_SEND_PRIVATE_MESSAGE) {

    }

    //全服信息
    static C_SEND_MESSAGE_TO_ALL(clientName: string, uid: number, msg: ChatPto.C_SEND_MESSAGE_TO_ALL) {

    }
}