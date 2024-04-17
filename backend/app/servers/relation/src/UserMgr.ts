import { RedisType } from '../../../common/ConstDefine';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { FriendPto } from '../../../common/CommonProto';
import { GlobalVar } from './GlobalVar';

export class UserMgr {

    private _userMap: Map<number, UserInfo>;

    constructor() {
        this._userMap = new Map<number, UserInfo>();
    }

    getUserInfo(uid: number) {
        return this._userMap.get(uid);
    }

    //玩家上线
    async onUserOnline(gateNodeId: string, uid: number, nick: string) {
        const user = new UserInfo(gateNodeId, uid, nick);
        this._userMap.set(uid, user);
        //通知好友上线
        const uids = await GlobalVar.redisMgr.getClient(RedisType.userRelation).smembers(uid);
        const msg = new FriendPto.S_FRIEND_CHANGE();
        msg.friend = new FriendPto.Friend();
        msg.friend.uid = uid;
        msg.friend.isOnline = true;
        const buffer = ProtoBufEncoder.encode(msg);
        for (let index = 0; index < uids.length; index++) {
            const uid = uids[index];
            const friendInfo = this._userMap.get(parseInt(uid));
            if (friendInfo) {
                rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: friendInfo.gateNodeId }, friendInfo.uid, buffer)
            }
        }
    }

    //玩家下线
    async onUserOffline(uid: number) {
        GlobalVar.redisMgr.getClient(RedisType.userGate).delete(`${uid}`);
        this._userMap.delete(uid);
        //通知好友下线
        const uids = await GlobalVar.redisMgr.getClient(RedisType.userRelation).smembers(uid);
        const msg = new FriendPto.S_FRIEND_CHANGE();
        msg.friend = new FriendPto.Friend();
        msg.friend.uid = uid;
        msg.friend.isOnline = false;
        const buffer = ProtoBufEncoder.encode(msg);
        for (let index = 0; index < uids.length; index++) {
            const uid = uids[index];
            const friendInfo = this._userMap.get(parseInt(uid));
            if (friendInfo) {
                rpc.gate.commonRemote.sendTransferToGate({ type: 1, nodeId: friendInfo.gateNodeId }, friendInfo.uid, buffer)
            }
        }
    }

}

class UserInfo {
    gateNodeId: string
    nick: string = 'unkonw'
    uid: number
    constructor(gateNodeId: string, uid: number, nick: string) {
        this.gateNodeId = gateNodeId;
        this.uid = uid;
        this.nick = nick;
    }
}