class MapView extends BaseView<BaseUI.UIMapView> {

    //先手方一定是在下方，所以后手方需要做地图反转
    private _isFirst: boolean;

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

    public addMapItem(cardInfo: GamePto.ICard) {
        const cardItem = MapItem.getItem(cardInfo)
        this.unitPool[cardInfo.blockX][cardInfo.blockY] = cardItem;
        this.view.addChild(cardItem);

        if (this._isFirst) {
            cardItem.x = cardInfo.blockX * this.blockWidth;
            cardItem.y = cardInfo.blockY * this.blockHeight;
        } else {
            cardItem.x = this.view.width - (cardInfo.blockX + 1) * this.blockWidth;
            cardItem.y = this.view.height - (cardInfo.blockY + 1) * this.blockHeight;
        }
    }

    public updateMap(isFirst: boolean) {
        this._isFirst = isFirst;
        let unitCards = MapModel.ins().mapData?.unitCards;
        if (TEST_GAME) {
            unitCards = [{ "cardId": 1, "attack": 4, "health": 10, "fee": 0, "uid": 2, "blockX": 3, "blockY": 0 }, { "cardId": 1, "attack": 4, "health": 10, "fee": 0, "uid": 1, "blockX": 3, "blockY": 7 }];
        }
        for (let index = 0; index < unitCards.length; index++) {
            const cardInfo = unitCards[index];
            this.addMapItem(cardInfo)
        }
    }

    /**传入一个位置，检查是否在地图范围中 */
    public isInMap(x: number, y: number, mapPoint: egret.Point) {
        const map = this.view;
        const position = map.localToRoot();
        if (x >= position.x && x <= position.x + map.width &&
            y >= position.y && y <= position.y + map.height) {
            const localPoint = this.view.rootToLocal(x, y);
            if (this._isFirst) {
                mapPoint.x = Math.floor(localPoint.x / this.blockWidth);
                mapPoint.y = Math.floor(localPoint.y / this.blockHeight);
            } else {
                mapPoint.x = Math.floor((this.view.width - localPoint.x) / this.blockWidth);
                mapPoint.y = Math.floor((this.view.height - localPoint.y) / this.blockHeight);
            }
            return true;
        }
        return false;
    }

    /**根据地图坐标返回场景坐标 */
    public getScenePoint(blockX: number, blockY: number) {
        if (this._isFirst) {
            return this.view.localToRoot(blockX * this.blockWidth, blockY * this.blockHeight);
        } else {
            return this.view.localToRoot(this.view.width - (blockX + 1) * this.blockWidth, this.view.height - (blockY + 1) * this.blockHeight);
        }
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