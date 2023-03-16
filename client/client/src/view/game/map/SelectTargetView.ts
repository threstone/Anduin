class SelectTargetView extends BaseView<BaseUI.UISelectTargetCom>{

    protected init() {
        this.view = BaseUI.UISelectTargetCom.createInstance();
        const scencView = GameSceneView.ins().getView();
        //初始化遮罩
        this.view.bg0.height = scencView.map.y;

        this.view.bg1.width = scencView.map.x;
        this.view.bg1.height = scencView.map.height;

        this.view.bg2.x = scencView.map.x + scencView.map.width;
        this.view.bg2.width = this.view.width - this.view.bg2.x;
        this.view.bg2.height = scencView.map.height;

        this.view.bg3.height = this.view.height - scencView.map.y - scencView.map.height;
    }

    public open(cardItem: BaseUI.UICardItem): void {

        this.AddClick(this.view.click, this.onClick);

        this.view.addChild(cardItem);
        //把卡片缓动到右侧展示出来
        egret.Tween.get(cardItem).to

        //根据卡片信息决定要选几个,选的类型是什么
    }

    private onClick(event: egret.TouchEvent) {
        throw new Error("Method not implemented.");
    }

}