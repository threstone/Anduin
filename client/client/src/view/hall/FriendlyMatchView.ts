class FriendlyMatchView extends BaseView<BaseUI.UITipsCom> {

    private intervalId: number;
    private timeoutId: number;
    private reqEndTime: number;
    private descStart: string;

    protected init() {
        this.view = BaseUI.UITipsCom.createInstance();
    }

    open(endTime: number) {
        super.open();

        this.AddClick(this.view.btn, this.close);
        this.AddClick(this.view.close, this.close);

        this.reqEndTime = endTime;
        this.updateDesc();
        this.intervalId = setInterval(this.updateDesc.bind(this), 1000);
        this.timeoutId = setTimeout(this.close.bind(this), endTime - Date.now());
        
        this.observe('FriendlyMatchViewClose', this.close);
        this.observe('FriendUpdate', this.onFriendStatusUpdate);
    }

    /**打开请求等待界面 */
    openByRequest(endTime: number) {
        this.view.btn.describe.text = '取消';
        this.descStart = '等待接受友谊赛';
        this.open(endTime);
        this.AddClick(this.view.btn, () => {
            FriendlyMatchModel.ins().C_CANCEL_REQ_MATCH();
        });
        this.AddClick(this.view.close, () => {
            FriendlyMatchModel.ins().C_CANCEL_REQ_MATCH();
        });
    }

    /**打开请求回应界面 */
    openByResponse(msg: FriendlyMatchPto.S_MATCH) {
        this.view.btn.describe.text = '接受';
        this.descStart = `${FriendModel.ins().getFriendNick(msg.friendUid)}向你发起了友谊赛请求!`;
        this.AddClick(this.view.btn, () => {
            FriendlyMatchModel.ins().C_REQ_MATCH_RESULT(true);
        });
        this.AddClick(this.view.close, () => {
            FriendlyMatchModel.ins().C_REQ_MATCH_RESULT(false);
        });
        this.open(msg.endTime as number);
    }

    private updateDesc() {
        this.view.desc.text = `${this.descStart}\n${Utils.formatTime(this.reqEndTime - Date.now())}`;
    }


    private onFriendStatusUpdate(evt: EventData) {
        const friendUid: number = evt.data;
        if (friendUid === FriendlyMatchModel.ins().friendUid && false === FriendModel.ins().isOnline(friendUid)) {
            TipsView.ins().showTips(`${FriendModel.ins().getFriendNick(friendUid)}离线了!`)
            this.close();
            FriendlyMatchModel.ins().C_MATCH_LEAVE();
        }
    }


    public close(evt?: EventData): void {
        super.close();
        clearInterval(this.intervalId);
        clearTimeout(this.timeoutId);
        if (evt && evt.data) {
            TipsView.ins().open(evt.data);
        }
    }
}