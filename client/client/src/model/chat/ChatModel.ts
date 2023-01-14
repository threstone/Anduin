class ChatModel extends BaseModel {

    private _friendMsgMap = new Map<number, ChatMsgInfo>();
    allFriendUnreadNum = 0;

    normalMsgInfo = new ChatMsgInfo();

    clearNormalUnread() {
        this.normalMsgInfo.unreadNum = 0;
    }

    /**
     * if uid is undefined,then clear all friend unread num
     * @param uid 
     */
    clearFriendUnread(uid?: number) {
        if (uid) {
            this.getFriendMsgArr(uid).unreadNum = 0;
        } else {
            this.allFriendUnreadNum = 0;
        }
    }

    getFriendMsgArr(uid: number) {
        let info = this._friendMsgMap.get(uid);
        if (!info) {
            info = new ChatMsgInfo();
            this._friendMsgMap.set(uid, info);
        }
        return info;
    }

    //收到信息
    private S_CHAT_MESSAGE(msg: ChatPto.S_CHAT_MESSAGE) {
        let info: ChatMsgInfo;
        if (msg.isPrivateMsg) {
            this.allFriendUnreadNum++
            info = this.getFriendMsgArr(msg.uid);
        } else {
            info = this.normalMsgInfo;
        }
        info.unreadNum++;

        info.msgArr.push(msg);
        if (info.msgArr.length > 30) {
            info.msgArr.shift();
        }
        this.emit('S_CHAT_MESSAGE', msg)
    }

    //全服信息
    C_SEND_MESSAGE_TO_ALL(message: string) {
        const msg = new ChatPto.C_SEND_MESSAGE_TO_ALL();
        msg.msg = message;
        this.sendMsg(msg);
    }

    //私聊信息
    C_SEND_PRIVATE_MESSAGE(uid: number, message: string) {
        const msg = new ChatPto.C_SEND_PRIVATE_MESSAGE();
        msg.msg = message;
        msg.uid = uid;
        this.sendMsg(msg);
    }
}

