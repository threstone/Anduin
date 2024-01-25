import { IGameMessage } from '../../../../common/I';
import { GlobalVar } from '../GlobalVar';

export class BaseHandler {
    static sendMsg(clientName: string, uid: number, message: IGameMessage) {
        if (!clientName || !uid || !message) {
            return;
        }
        GlobalVar.socketServer.sendMsg(clientName, uid, message);
    }
}