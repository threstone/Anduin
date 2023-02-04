class MatchGroupChooseView extends CardsGroupChooseView {

    private intervalId: number;
    private timeoutId: number;
    private reqEndTime: number;
    private descStart: string;

    protected init() {
        super.init();
        this.view.tips.visible = true;
    }

    public open(evt: EventData): void {
        super.open();

        this.observe('S_FRIEND_GROUP_STATUS_CHANGE', this.onFriendChooseStatusChange);
        this.observe('FriendlyMatchViewClose', this.close);
        this.observe('FriendChooseGroupSuccess', this.chooseGroupSuccess);

        this.reqEndTime = evt.data;
        this.descStart = '选择卡组倒计时';
        this.intervalId = setInterval(this.updateDesc.bind(this), 1000);
        this.timeoutId = setTimeout(this.close.bind(this), this.reqEndTime - Date.now());
        this.AddClick(this.view.close, FriendlyMatchModel.ins().C_MATCH_LEAVE.bind(FriendlyMatchModel.ins()));
    }

    public close(evt: EventData): void {
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
            this.descStart = '好友已经选择完毕,就等你了!  选择卡组倒计时';
            TipsView.ins().showTips('好友已经选择完毕,就等你了!')
        } else {
            this.descStart = '选择卡组倒计时';
            TipsView.ins().showTips('对方想换个卡组试试!')
        }
    }

    protected onChooseBtnClick() {
        if (this.selectGroupId === -1) {
            TipsView.ins().showTips('挑选的卡组不合法!')
        } else {
            FriendlyMatchModel.ins().C_GROUP_CHOOSE(this.selectGroupId);
        }
    }

    private chooseGroupSuccess() {
        TipsView.ins().open('选择成功,等待好友选择卡组').then((res) => {
            if (res === false) {
                FriendlyMatchModel.ins().C_CANCEL_REQ_MATCH();
            }
        })
    }
}