class UseCardTipsView extends BaseView<BaseUI.UIUseCardTipsCom>{
    protected init() {
        this.view = BaseUI.UIUseCardTipsCom.createInstance();

        const sceneView = GameSceneView.ins().getView();
        //初始化遮罩
        this.view.bg0.height = sceneView.map.y;

        this.view.bg1.width = sceneView.map.x;
        this.view.bg1.height = sceneView.map.height;

        this.view.bg2.x = sceneView.map.x + sceneView.map.width;
        this.view.bg2.width = this.view.width - this.view.bg2.x;
        this.view.bg2.height = sceneView.map.height;

        this.view.bg3.height = this.view.height - sceneView.map.y - sceneView.map.height - sceneView.selfInfoBox.height;

        this.view.bg4.height = sceneView.selfInfoBox.height;
        this.view.bg4.width = sceneView.selfInfoBox.x;

        this.view.bg5.height = sceneView.selfInfoBox.height;
        this.view.bg5.width = sceneView.width - sceneView.selfInfoBox.x - sceneView.selfInfoBox.width;
    }

    public open(card: GameCard): void {
        super.open();
        this.view.addChild(card.cardItem);
    }
}