import { GamePto } from '../../../common/CommonProto';
import { RedisType } from '../../../common/ConstDefine';
import { GlobalVar } from '../GlobalVar';
import { BaseHandler } from './BaseHandler';

export class GameHandler extends BaseHandler {
    //请求友谊赛
    static async C_FRIENDLY_MATCH(clientName: string, uid: number, msg: GamePto.C_FRIENDLY_MATCH) {
        const data: { friendUid: string, clientName: string } = await GlobalVar.redisMgr.getClient(RedisType.userGame).hgetall(msg.token);
        const friendUid = parseInt(data.friendUid);
        //将两个用户绑定到此Game Server
        if ((await GlobalVar.socketServer.callBindUserGameNode(clientName, uid)) !== true
            || (await GlobalVar.socketServer.callBindUserGameNode(data.clientName, friendUid)) !== true) {
            return;
        }

        const res = new GamePto.S_FRIENDLD_MATCH_CARD_GROUP();
        this.sendMsg(clientName, uid, res);
        this.sendMsg(data.clientName, friendUid, res);
    }

    static

}