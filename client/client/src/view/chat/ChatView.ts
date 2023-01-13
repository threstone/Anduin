class ChatView extends BaseView<BaseUI.UIChat>{

    private selectNomal: boolean;

    protected init() {
        this.view = BaseUI.UIChat.createInstance();
        GameDispatcher.getInstance().addEventListener('S_CHAT_MESSAGE', this.onNewMsg, this);
        this.view.friendBtn.describe.text = '好友';
        this.changeChannel(true);
    }

    open(): void {
        super.open();
        this.AddClick(this.view.close, this.close);
        this.AddClick(this.view.sendBtn, this.sendMsg)
        this.AddClick(this.view.normalBtn, this.changeChannel.bind(this, true))
        this.AddClick(this.view.friendBtn, this.changeChannel.bind(this, false))
    }

    private changeChannel(isNormal: boolean) {
        this.selectNomal = isNormal;

        const selectBtn = isNormal ? this.view.normalBtn : this.view.friendBtn;
        const unSelectBtn = isNormal ? this.view.friendBtn : this.view.normalBtn;
        selectBtn.bg.color = 0x54341D;
        unSelectBtn.bg.color = 0xFFFFFF;

        this.view.friendGroup.visible = !isNormal;
        this.view.chatList.visible = isNormal;
    }

    private sendMsg() {
        const text = this.view.inputText.text;
        if (text.length > 128) {
            GlobalView.showTips(`最多输入128个字符,请减少${128 - text.length}个字符`, 5000);
            return;
        }
    }

    private onNewMsg(evt: EventData) {
        const msg: ChatPto.S_CHAT_MESSAGE = evt.data;
        if (msg.isPrivateMsg) {

        }
    }
}