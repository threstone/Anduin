class MatchDeckChooseView extends DeckChooseView {

    private intervalId: number;
    private timeoutId: number;
    private reqEndTime: number;
    private descStart: string;

    protected init() {
        super.init();
        this.view.tips.visible = true;
    }

    public open(evt: EventData): void {
        GameSceneView.ins().close();
        super.open();

        this.observe('S_FRIEND_DECK_STATUS_CHANGE', this.onFriendChooseStatusChange);
        this.observe('FriendlyMatchViewClose', this.close);
        this.observe('FriendChooseDeckSuccess', this.chooseDeckSuccess);
        this.observe('FriendUpdate', this.onFriendStatusUpdate);

        this.observe('S_INIT_GAME', () => {
            this.close();
            TipsView.ins().close(true);
        });

        this.reqEndTime = evt.data;
        this.descStart = '选择卡组倒计时';
        this.intervalId = setInterval(this.updateDesc.bind(this), 1000);
        this.timeoutId = setTimeout(this.close.bind(this), this.reqEndTime - Date.now());
        this.AddClick(this.view.close, FriendlyMatchModel.ins().C_MATCH_LEAVE.bind(FriendlyMatchModel.ins()));
    }

    public close(evt?: EventData): void {
        if (evt && evt.data) {
            TipsView.ins().open(evt.data);
        }
        super.close();
        clearInterval(this.intervalId);
        clearTimeout(this.timeoutId);
    }

    private updateDesc() {
        this.view.tips.text = `${this.descStart}${Utils.formatTime(this.reqEndTime - Date.now())}`;
    }

    private onFriendChooseStatusChange(evt: EventData) {
        if (evt.data) {
            this.descStart = '好友已经选择完毕,就等你了!';
            TipsView.ins().showTips('好友已经选择完毕,就等你了!')
        } else {
            this.descStart = '选择卡组倒计时';
            TipsView.ins().showTips('对方想换个卡组试试!')
        }
    }

    protected onChooseBtnClick() {
        if (this.selectDeckId === -1) {
            TipsView.ins().showTips('挑选的卡组不合法!')
        } else {
            FriendlyMatchModel.ins().C_DECK_CHOOSE(this.selectDeckId);
        }
    }

    private chooseDeckSuccess() {
        TipsView.ins().open('选择成功,等待好友选择卡组', '取消').then((res) => {
            if (this.isOnStage()) {
                FriendlyMatchModel.ins().C_MATCH_CANCEL_DECK();
            }
        })
    }

    private onFriendStatusUpdate(evt: EventData) {
        const friendUid: number = evt.data;
        if (friendUid === FriendlyMatchModel.ins().friendUid && false === FriendModel.ins().isOnline(friendUid)) {
            this.close();
            TipsView.ins().open(`${FriendModel.ins().getFriendNick(friendUid)}离线了!`,'确认');
            FriendlyMatchModel.ins().C_MATCH_LEAVE();
        }
    }
}