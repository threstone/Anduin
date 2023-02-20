class MapView extends BaseView<BaseUI.UIMapView> {

    blockWidth: number;
    blockHeight: number;

    unitPool: BaseUI.UIMapUnit | BaseUI.UIMapUnit[][]

    protected init() {
        this.view = GameSceneView.ins().getView().map;
        this.blockWidth = 140;
        this.blockHeight = 95;
        this.unitPool = [];
        for (let x = 0; x < 7; x++) {
            this.unitPool[x] = [];
        }
    }

    public updateMap() {
        const unitCards = [{ "cardId": 1, "attack": 4, "health": 10, "fee": 0, "uid": 2, "x": 3, "y": 0 }, { "cardId": 1, "attack": 4, "health": 10, "fee": 0, "uid": 1, "x": 3, "y": 7 }];
        // const unitCards = MapModel.ins().mapData?.unitCards;
        for (let index = 0; index < unitCards.length; index++) {
            const cardInfo = unitCards[index];
            const cardItem = MapItem.getItem(cardInfo)
            this.unitPool[cardInfo.x][cardInfo.y] = cardItem;
            this.view.addChild(cardItem);
            cardItem.x = cardInfo.x * this.blockWidth;
            cardItem.y = cardInfo.y * this.blockHeight;
        }
    }

    /**传入一个位置，检查是否在地图范围中 */
    public isInMap(x: number, y: number, mapPoint: egret.Point) {
        const map = this.view;
        const position = map.localToRoot();
        if (x >= position.x && x <= position.x + map.width &&
            y >= position.y && y <= position.y + map.height) {
            mapPoint.x = 1;
            mapPoint.y = 1;
            return true;
        }
        return false;
    }

    /**根据数据生成地图 */
    private initMapBlock() {
        const shp: egret.Shape = new egret.Shape();
        shp.x = this.view.x;
        shp.y = this.view.y;

        shp.graphics.lineStyle(2, 0xFFFFFF);
        let endX = 7 * this.blockWidth;
        let endY = 8 * this.blockHeight;
        for (let index = 0; index < 8; index++) {
            shp.graphics.moveTo(index * this.blockWidth, 0);
            shp.graphics.lineTo(index * this.blockWidth, endY);
        }

        for (let index = 0; index < 9; index++) {
            shp.graphics.moveTo(0, index * this.blockHeight);
            shp.graphics.lineTo(endX, index * this.blockHeight);
        }
        shp.graphics.endFill();
        (GameSceneView.ins().getView().displayObject as egret.DisplayObjectContainer).addChild(shp);
    }
}