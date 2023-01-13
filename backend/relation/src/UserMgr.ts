import { RedisType } from '../../common/ConstDefine';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import { ChatPto } from './CommonProto';
import { GlobalVar } from './GlobalVar';

export class UserMgr {

    private _userMap: Map<number, UserInfo>;

    constructor() {
        this._userMap = new Map<number, UserInfo>();
    }

    getAllClientName() {
        const clients = new Set<string>();
        this._userMap.forEach((v) => {
            clients.add(v.clientName);
        });
        return clients;
    }

    getUserInfo(uid: number) {
        return this._userMap.get(uid);
    }

    //玩家上线
    onUserOnline(clientName: string, uid: number, nick: string) {
        const user = new UserInfo(clientName, uid, nick);
        this._userMap.set(uid, user);

        const data = new ChatPto.S_CHAT_MESSAGE();
        data.uid = uid;
        data.nick = nick;
        data.msg = '啊实打实结果了两个来不了了哔哩哔哩哔哩哔哩12345';
        GlobalVar.socketServer.sendTransferToGate(GlobalVar.userMgr.getUserInfo(uid)?.clientName, uid, ProtoBufEncoder.encode(data));
    }

    //玩家下线
    onUserOffline(uid: number) {
        GlobalVar.redisMgr.getClient(RedisType.userGate).delete(`${uid}`);
        this._userMap.delete(uid);
    }

}

class UserInfo {
    clientName: string
    nick: string = 'unkonw'
    uid: number
    constructor(clientName: string, uid: number, nick: string) {
        this.clientName = clientName;
        this.uid = uid;
        this.nick = nick;
    }
}