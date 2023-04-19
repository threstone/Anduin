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
        this.view.deckBtn.describe.text = '收藏';
        this.AddClick(this.view.deckBtn, CardsView.ins().open.bind(CardsView.ins()));

        this.view.fightBtn.describe.text = '对战';
        this.AddClick(this.view.fightBtn, DeckChooseView.ins().open.bind(DeckChooseView.ins()));

        this.view.pveBtn.describe.text = '冒险';
        this.AddClick(this.view.pveBtn, () => {
            GameDispatcher.getInstance().emit('S_INIT_GAME', { users: [{ nick: UserModel.ins().nick, power: 1, uid: UserModel.ins().uid }, { nick: "1", power: 2, uid: 123 }] })
        });

        this.view.settingBtn.describe.text = '设置';
        this.AddClick(this.view.settingBtn, SettingView.ins().open.bind(SettingView.ins()));

        this.AddClick(this.view.miniChat, this.onMiniChatClick);
        this.observe('S_CHAT_MESSAGE', this.onChatMessage);
        this.observe('S_REQ_MATCH', (evt: EventData) => {
            FriendlyMatchView.ins().openByRequest(evt.data);
        });
        this.observe('S_MATCH', (evt: EventData) => {
            FriendlyMatchView.ins().openByResponse(evt.data);
        });
        this.observe('S_MATCH_DECK', MatchDeckChooseView.ins().open.bind(MatchDeckChooseView.ins()));
        this.observe('S_INIT_GAME', GameSceneView.ins().open.bind(GameSceneView.ins()));
    }

    /**将迷你聊天组件重新加入到自身 */
    public reAddMiniChat() {
        this.view.addChild(this.view.miniChat);
    }

    /**将迷你聊天组件加入到指定的view中 */
    public addMiniChatToView(view: BaseView<fairygui.GComponent>) {
        view.getView().addChild(this.view.miniChat);
    }

    private onMiniChatClick() {
        ChatView.ins().open();
        this.clearMiniChatTips();
    }

    public clearMiniChatTips() {
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