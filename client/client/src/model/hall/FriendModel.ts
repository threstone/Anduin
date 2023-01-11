class FriendModel extends BaseModel {

    private _serverInfo: FriendPto.S_FRIEND_INFO;
    public get serverInfo() { return this._serverInfo }

    emitFriendUpdate() {
        //排序在线列表
        const arr = this._serverInfo.list;
        arr.sort((a, b) => {
            return (a.isOnline ? 1 : 0) - (b.isOnline ? 1 : 0)
        })
        this.emit('FriendUpdate');
    }

    //好友信息返回
    S_FRIEND_INFO(msg: FriendPto.S_FRIEND_INFO) {
        this._serverInfo = msg;
        this.emitFriendUpdate();
    }

    //好友变动
    S_FRIEND_CHANGE(msg: FriendPto.S_FRIEND_CHANGE) {
        //新的好友
        if (msg.friend) {
            this._serverInfo.list.push(msg.friend);
        } else {
            for (let index = 0; index < this._serverInfo.list.length; index++) {
                const info = this._serverInfo.list[index];
                if (info.uid === msg.uid) {
                    info.isOnline = msg.isOnline;
                    break;
                }
            }
        }
        this.emitFriendUpdate();
    }

    //他人请求添加好友
    S_ADD_FRIEND(msg: FriendPto.S_ADD_FRIEND) {
        if (!msg.user) {
            return;
        }
        this.serverInfo.reqAddList.unshift(msg.user);
        this.emit('FriendRedShow');
    }

    //返回请求添加好友是否成功
    S_ADD_FRIEND_REQ(msg: FriendPto.S_ADD_FRIEND_REQ) {
        if (msg.code === 0) {
            TipsView.ins().showTips('成功请求添加好友', 5000);
        } else if (msg.code === 1) {
            TipsView.ins().showTips('缺少id', 5000);
        } else if (msg.code === 2) {
            TipsView.ins().showTips('对方还没同意，不要重复请求', 5000);
        } else if (msg.code === 3) {
            TipsView.ins().showTips('对方已经是你的好友了', 5000);
        } else if (msg.code === 4) {
            TipsView.ins().showTips('不能添加自己', 5000);
        } else if (msg.code === 5) {
            TipsView.ins().showTips('请输入正确的id', 5000);
        } else if (msg.code === 6) {
            TipsView.ins().showTips('请同意对方的好友请求', 5000);
        }
    }

    //客户端请求好友信息
    C_FRIEND_INFO() {
        const msg = new FriendPto.C_FRIEND_INFO();
        this.sendMsg(msg);
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