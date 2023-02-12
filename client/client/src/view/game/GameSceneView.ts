

class GameSceneView extends BaseView<BaseUI.UIGameSceneCom> {

    mapX: number;
    mapY: number;
    blockWidth: number;
    blockHeight: number;

    protected init() {
        this.view = BaseUI.UIGameSceneCom.createInstance();

        this.mapX = 251;
        this.mapY = 172;
        this.blockWidth = 150;
        this.blockHeight = 100;

        this.initMapBlock();
    }

    private initMapBlock() {
        const shp: egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(2, 0xFFFFFF);
        let endX = this.mapX + 7 * this.blockWidth;
        let endY = this.mapY + 8 * this.blockHeight;
        for (let index = 0; index < 8; index++) {
            shp.graphics.moveTo(this.mapX + index * 150, this.mapY);
            shp.graphics.lineTo(this.mapX + index * 150, endY);
        }

        for (let index = 0; index < 9; index++) {
            shp.graphics.moveTo(this.mapX, this.mapY + index * 100);
            shp.graphics.lineTo(endX, this.mapY + index * 100);
        }
        shp.graphics.endFill();
        (this.view.displayObject as egret.DisplayObjectContainer).addChild(shp);
    }

    public open(evt:EventData): void {
        super.open();
        this.initUserInfo(evt.data)

        this.initEvents();
        this.initView();
    }


    private initUserInfo(msg: GamePto.S_INIT_GAME){

    }

    private initEvents() {
        this.observe('GameSceneClose', this.close);
    }

    private initView() {

    }

}