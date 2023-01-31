class HallView extends BaseView<BaseUI.UIHallCom>{
    unReadNum: number = 0;
    protected init() {
        this.view = BaseUI.UIHallCom.createInstance();
    }

    public open(): void {
        super.open();
        this.initView();
        FriendView.ins();
    }

    private initView() {
        this.view.nickText.text = UserModel.ins().nick;
        this.view.uidText.text = `ID:${UserModel.ins().uid}`
        this.view.cardGroupBtn.describe.text = '收藏';
        this.AddClick(this.view.cardGroupBtn, CardsView.ins().open.bind(CardsView.ins()))
        this.view.fightBtn.describe.text = '对战';
        this.view.pveBtn.describe.text = '冒险';
        this.view.settingBtn.describe.text = '设置';

        this.AddClick(this.view.miniChat, this.onMiniChatClick);
        this.observe('S_CHAT_MESSAGE', this.onChatMessage);
        this.observe('S_REQ_FRIENDLY_MATCH', FriendlyMatchView.ins().open.bind(FriendlyMatchView.ins()));
    }

    private onMiniChatClick() {
        ChatView.ins().open();
        this.clearMiniChatTips();
    }

    clearMiniChatTips() {
        this.view.miniChat.tipsGroup.visible = false;
        this.unReadNum = 0;
    }

    private onChatMessage(evt: EventData) {
        const msg: ChatPto.S_CHAT_MESSAGE = evt.data;
        const miniChat = this.view.miniChat;
        if (msg.msgType === ChatPto.MsgType.private) {
            this.unReadNum++;
            miniChat.tipsGroup.visible = true;
            miniChat.unReadNum.text = `${this.unReadNum}`;
        }
        miniChat.msgText.text = `[B][color=#0033CC]${msg.nick}[/color][/B]:${msg.msg}`
    }
}