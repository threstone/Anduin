class UserModel extends BaseModel {
    nick: string = '';
    uid: number = 0;
    onLogin(msg: LoginPto.S_LOGIN) {
        this.nick = msg.nick;
        this.uid = msg.uid;
    }
}