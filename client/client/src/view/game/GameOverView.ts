class GameOverView extends BaseView<BaseUI.UIGameOverCom>{
    protected init() {
        this.view = BaseUI.UIGameOverCom.createInstance();
        this.view.click.describe.text = '关闭';
    }

    public open(winnerUid: number): void {
        super.open();
        if (winnerUid === -1) {
            this.view.res.text = '平局';
        } else {
            this.view.res.text = winnerUid === UserModel.ins().uid ? '胜利' : '失败';
        }
        this.AddClick(this.view.click, this.onClick);
    }

    private onClick() {
        this.close();
        GameSceneView.ins().close();
    }
}