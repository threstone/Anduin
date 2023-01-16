class HallView extends BaseView<BaseUI.UIHall>{
    unReadNum: number = 0;
    protected init() {
        this.view = BaseUI.UIHall.createInstance();
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
        this.view.fightBtn.describe.text = '对战';
        this.view.pveBtn.describe.text = '冒险';
        this.view.settingBtn.describe.text = '设置';

        this.AddClick(this.view.miniChat, this.onMiniChatClick);
        this.observe('S_CHAT_MESSAGE', this.onChatMessage);
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
        if (msg.isPrivateMsg) {
            this.unReadNum++;
            miniChat.tipsGroup.visible = true;
            miniChat.unReadNum.text = `${this.unReadNum}`;
        }
        miniChat.msgText.text = `[B][color=#0033CC]${msg.nick}[/color][/B]:${msg.msg}`
    }
}