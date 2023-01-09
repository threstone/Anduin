class LoginView extends BaseView<BaseUI.UILogin> {
    protected init() {
        this.view = BaseUI.UILogin.createInstance();

        this.view.accountInput.text;
        this.view.regBtn.describe.text = '注册';
        this.initRegCom();
    }

    private initRegCom() {
        const regCom = this.view.regCom;
        regCom.regBtn.describe.text = '注册'
    }


    public open(): void {
        super.open();
        this.AddClick(this.view.loginBtn, this.onLoginBtnClick);
        this.AddClick(this.view.regBtn, this.onRegBtnClick);
        this.AddClick(this.view.regCom.close, this.onRegComCloseClick);
        this.AddClick(this.view.regCom.regBtn, this.onReqReg);

        this.observe('RegisterResult', this.onRegisterResult);
        this.observe('LoginResult', this.onLoginResult);
    }

    onLoginResult(evt: EventData) {
        const msg: LoginPto.S_LOGIN = evt.data;
        if (msg.isSuccess) {
            this.close();
        } else {
            this.view.touchable = true;
            GlobalView.showTips('登录失败了,可能是密码错误,也可能是没有注册', 5000);
        }
    }

    onRegisterResult(evt: EventData) {
        let regCom = this.view.regCom;
        let code: number = evt.data;
        switch (code) {
            case 0:
                GlobalView.showTips('注册成功!', 5000);
                regCom.visible = false;
                regCom.accountInput.text = '';
                regCom.pwdAgainInput.text = '';
                regCom.pwdAgainInput.text = '';
                regCom.nickInput.text = '';
                break;
            case 1:
                GlobalView.showTips('注册失败,账号已存在!', 5000);
                break;
            default:
                GlobalView.showTips(`注册失败!code:${code}`, 5000);
        }
    }

    onReqReg() {
        let regCom = this.view.regCom;
        if (regCom.accountInput.text.length <= 0 || regCom.pwdInput.text.length <= 0 ||
            regCom.pwdAgainInput.text.length <= 0 || regCom.nickInput.text.length <= 0) {
            GlobalView.showTips('每一个都要填写哦', 5000);
            return
        }
        if (regCom.pwdInput.text != regCom.pwdAgainInput.text) {
            GlobalView.showTips('两次密码输入不一致', 5000)
            return
        }

        LoginModel.ins().C_REGISTER(regCom.accountInput.text, regCom.pwdInput.text, regCom.nickInput.text);
    }

    onRegComCloseClick() {
        this.view.regCom.visible = false;
    }

    onLoginBtnClick() {
        let account = this.view.accountInput.text;
        let password = this.view.passwordInput.text;
        if (account.length <= 0 || password.length <= 0) {
            GlobalView.showTips('请输入用户名或密码', 5000);
            return;
        }
        //发消息后不允许点击了
        LoginModel.ins().C_LOGIN(account, password);
        this.view.touchable = false;
    }

    onRegBtnClick() {
        this.view.regCom.visible = true;
    }
}