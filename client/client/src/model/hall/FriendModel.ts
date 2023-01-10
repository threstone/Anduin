class FriendModel extends BaseModel {
    //好友信息返回
    S_FRIEND_INFO(msg: FriendPto.S_FRIEND_INFO) {
        this.emit('S_FRIEND_INFO', msg);
    }

    //好友变动
    S_FRIEND_CHANGE(msg: FriendPto.S_FRIEND_CHANGE) {
        if (msg.friend) {
        }
    }

    //他人请求添加好友
    S_ADD_FRIEND(msg: FriendPto.S_ADD_FRIEND) {
        if (!msg.user) {
            return;
        }

    }

    //返回请求添加好友是否成功
    S_ADD_FRIEND_REQ(msg: FriendPto.S_ADD_FRIEND_REQ) {
        if (msg.code === 0) {
            TipsView.ins().showTips('成功请求添加好友', 5000);
        } else if (msg.code === 1) {
            TipsView.ins().showTips('错误的好友id', 5000);
        } else if (msg.code === 2) {
            TipsView.ins().showTips('对方还没同意，不要重复请求', 5000);
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