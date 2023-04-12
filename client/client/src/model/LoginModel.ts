class LoginModel extends BaseModel {

    C_LOGIN(account: string, pwd: string) {
        const msg = new LoginPto.C_LOGIN();
        msg.account = account;
        msg.password = md5.prototype.hex_md5(pwd);
        this.sendMsg(msg);
    }

    C_REGISTER(account: string, pwd: string, nick: string) {
        const msg = new LoginPto.C_REGISTER();
        msg.account = account;
        msg.password = md5.prototype.hex_md5(pwd);
        msg.nick = nick;
        this.sendMsg(msg);
    }

    private S_LOGIN(msg: LoginPto.S_LOGIN) {
        this.emit('S_LOGIN', msg);
        if (msg.isSuccess) {
            UserModel.ins().onLogin(msg);
            FriendModel.ins().onLogin(msg.friendList, msg.reqAddList)
            HallView.ins().open();
            //如果有重连信息
            if (msg.needReconnect) {
                GameModel.ins().C_RECONNECT();
            }
        }
    }

    private S_REGISTER(msg: LoginPto.S_REGISTER) {
        this.emit('S_REGISTER', msg.code);
    }
}