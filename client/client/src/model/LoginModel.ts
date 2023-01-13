class LoginModel extends BaseModel {

    C_LOGIN(account: string, pwd: string) {
        const msg = new LoginPto.C_LOGIN();
        msg.account = account;
        msg.password = pwd;
        this.sendMsg(msg);
    }

    C_REGISTER(account: string, pwd: string, nick: string) {
        const msg = new LoginPto.C_REGISTER();
        msg.account = account;
        msg.password = pwd;
        msg.nick = nick;
        this.sendMsg(msg);
    }

    private S_LOGIN(msg: LoginPto.S_LOGIN) {
        this.emit('S_LOGIN', msg);
        if (msg.isSuccess) {
            UserModel.ins().onLogin(msg);
            HallView.ins().open();
        }
    }

    private S_REGISTER(msg: LoginPto.S_REGISTER) {
        this.emit('S_REGISTER', msg.code);
    }
}