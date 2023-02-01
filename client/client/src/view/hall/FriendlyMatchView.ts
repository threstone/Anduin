class FriendlyMatchView extends BaseView<BaseUI.UITipsCom> {
    private intervalId: number;
    private timeoutId: number;
    private reqEndTime: number;
    private descStart: string
    protected init() {
        this.view = BaseUI.UITipsCom.createInstance();
    }

    open(endTime: number) {
        super.open();

        this.AddClick(this.view.btn, this.doClose);
        this.AddClick(this.view.close, this.doClose);

        this.reqEndTime = endTime;
        this.updateDesc();
        this.intervalId = setInterval(this.updateDesc.bind(this), 1000);
        this.timeoutId = setTimeout(this.doClose.bind(this), 30000);
    }

    /**打开请求等待界面 */
    openByRequest(endTime: number) {
        this.view.btn.describe.text = '取消';
        this.descStart = '等待接受友谊赛';
        this.open(endTime);
        this.AddClick(this.view.btn, () => {
            HallModel.ins().C_CANCEL_REQ_FRIENDLY_MATCH();
        });
        this.AddClick(this.view.close, () => {
            HallModel.ins().C_CANCEL_REQ_FRIENDLY_MATCH();
        });
        this.observe('S_REQ_FRIENDLY_MATCH_RESULT', this.doClose);
    }

    /**打开请求回应界面 */
    openByResponse(msg: HallPto.S_FRIENDLY_MATCH) {
        this.view.btn.describe.text = '接受';
        this.descStart = `${FriendModel.ins().getFriendNick(msg.friendUid)}向你发起了友谊赛请求!`;
        this.AddClick(this.view.btn, () => {
            HallModel.ins().C_REQ_FRIENDLY_MATCH_RESULT(msg.friendUid, true);
        });
        this.AddClick(this.view.close, () => {
            HallModel.ins().C_REQ_FRIENDLY_MATCH_RESULT(msg.friendUid, false);
        });
        this.open(msg.endTime as number);
    }

    private updateDesc() {
        this.view.desc.text = `${this.descStart}\n${Utils.formatTime(this.reqEndTime - Date.now())}`;
    }

    private doClose() {
        super.close();
        clearInterval(this.intervalId);
        clearTimeout(this.timeoutId);
    }
}