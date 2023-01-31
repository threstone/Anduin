class FriendlyMatchView extends BaseView<BaseUI.UITipsCom> {
    private intervalId: number;
    private timeoutId: number;
    private reqEndTime: number;
    protected init() {
        this.view = BaseUI.UITipsCom.createInstance();
        this.view.btn.describe.text = '取消';
    }

    public open(evt: EventData) {
        const data: HallPto.S_REQ_FRIENDLY_MATCH = evt.data;
        super.open();
        this.AddClick(this.view.btn, this.doClose);
        this.AddClick(this.view.close, this.doClose);

        this.reqEndTime = data.endTime;
        this.updateDesc();
        this.intervalId = setInterval(this.updateDesc.bind(this), 1000);
        this.timeoutId = setTimeout(this.doClose.bind(this), 30000);
    }

    private updateDesc() {
        this.view.desc.text = `等待接受友谊赛${Utils.formatTime(this.reqEndTime - Date.now())}`;
    }

    private doClose() {
        super.close();
        clearInterval(this.intervalId);
        clearTimeout(this.timeoutId);
        HallModel.ins().C_CANCEL_REQ_FRIENDLY_MATCH();
    }
}