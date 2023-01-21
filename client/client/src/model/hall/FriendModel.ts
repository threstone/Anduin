class FriendModel extends BaseModel {
    private _friendList: FriendPto.IFriend[];
    get friendList() { return this._friendList }
    private _reqAddList: FriendPto.IFriend[];
    get reqAddList() { return this._reqAddList }

    onLogin(friendList: FriendPto.IFriend[], reqAddList: FriendPto.IFriend[]) {
        this._friendList = friendList;
        this._reqAddList = reqAddList;
        this.emitFriendUpdate();
    }

    isOnline(uid: number) {
        for (let index = 0; index < this._friendList.length; index++) {
            const friend = this._friendList[index];
            if (friend.uid === uid) {
                return friend.isOnline;
            }
        }
        return false;
    }

    isFriend(uid: number) {
        for (let index = 0; index < this._friendList.length; index++) {
            const friend = this._friendList[index];
            if (friend.uid === uid) {
                return true;
            }
        }
        return false;
    }

    private emitFriendUpdate() {
        //排序在线列表
        const arr = this._friendList;
        arr.sort((a, b) => {
            return (b.isOnline ? 1 : 0) - (a.isOnline ? 1 : 0)
        })
        this.emit('FriendUpdate');
    }


    //好友变动
    private S_FRIEND_CHANGE(msg: FriendPto.S_FRIEND_CHANGE) {
        //新的好友
        if (msg.friend) {
            this._friendList.push(msg.friend);
        } else {
            for (let index = 0; index < this._friendList.length; index++) {
                const info = this._friendList[index];
                if (info.uid === msg.uid) {
                    info.isOnline = msg.isOnline;
                    break;
                }
            }
        }
        this.emitFriendUpdate();
    }

    //他人请求添加好友
    private S_ADD_FRIEND(msg: FriendPto.S_ADD_FRIEND) {
        if (!msg.user) {
            return;
        }
        this._reqAddList.unshift(msg.user);
        this.emit('FriendRedShow');
    }

    //返回请求添加好友是否成功
    private S_ADD_FRIEND_REQ(msg: FriendPto.S_ADD_FRIEND_REQ) {
        if (msg.code === 0) {
            TipsView.ins().showTips('成功请求添加好友');
        } else if (msg.code === 1) {
            TipsView.ins().showTips('缺少id');
        } else if (msg.code === 2) {
            TipsView.ins().showTips('对方还没同意，不要重复请求');
        } else if (msg.code === 3) {
            TipsView.ins().showTips('对方已经是你的好友了');
        } else if (msg.code === 4) {
            TipsView.ins().showTips('不能添加自己');
        } else if (msg.code === 5) {
            TipsView.ins().showTips('请输入正确的id');
        } else if (msg.code === 6) {
            TipsView.ins().showTips('请同意对方的好友请求');
        }
    }

    //请求添加好友
    C_ADD_FRIEND(friendUid: number) {
        const msg = new FriendPto.C_ADD_FRIEND();
        msg.uid = friendUid;
        this.sendMsg(msg);
    }

    //同意或者拒绝好友请求
    C_ADD_FRIEND_REQ_RESULT(isApprove: boolean, uid: number) {
        const msg = new FriendPto.C_ADD_FRIEND_REQ_RESULT();
        msg.uid = uid;
        msg.isApprove = isApprove
        this.sendMsg(msg);
    }
}