class RightCtrlView extends BaseView<BaseUI.UIRightCtrlCom> {
    protected init(view: BaseUI.UIRightCtrlCom) {
        this.view = GameSceneView.ins().getView().rightCtrl;
        this.view.randBtn.describe.text = '丢骰子';
        this.view.endRound.describe.text = '结束回合';
    }

}