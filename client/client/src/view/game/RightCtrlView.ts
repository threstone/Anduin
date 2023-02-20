class RightCtrlView extends BaseView<BaseUI.UIRightCtrlCom> {
    protected init(view: BaseUI.UIRightCtrlCom) {
        this.view = GameSceneView.ins().getView().rightCtrl;
        this.view.randBtn.describe.text = '丢骰子';
        this.view.endRound.describe.text = '结束回合';
    }

    public open(): void {
        super.open();
        this.view.endRound.visible = false;

        this.observe('S_ROUND_START_EVENT', this.onRoundStart);
        this.observe('S_ROUND_END_EVENT', this.onRoundEnd);

        this.AddClick(this.view.endRound, this.endRoundBtnClick);
    }

    private endRoundBtnClick() {
        GameModel.ins().C_END_ROUND();
    }

    private onRoundStart(evt: EventData) {
        const msg: GamePto.S_ROUND_START_EVENT = evt.data;
        if (msg.uid === UserModel.ins().uid) {
            this.view.endRound.visible = true;
        }
    }

    private onRoundEnd(evt: EventData) {
        const msg: GamePto.S_ROUND_END_EVENT = evt.data;
        if (msg.uid === UserModel.ins().uid) {
            this.view.endRound.visible = false;
        }
    }

}