class MapTipsView extends BaseView<BaseUI.UIMapTipsView>{

    private _tipsArr: (BaseUI.UIAtkTips | BaseUI.UIMoveTips)[];

    protected init() {
        this.view = BaseUI.UIMapTipsView.createInstance();
        this._tipsArr = [];
    }

    public open(): void {
        super.open();
        this.addEffectListener('S_ROUND_END_EVENT', this.close);
        this.AddClick(this.view, this.close);
    }

    public close(): void {
        super.close();
        this.clearTips();
    }

    private clearTips() {
        this._tipsArr.forEach(tips => {
            this.removeTargetEvents(tips);
            this.view.removeChild(tips);
        });
        this._tipsArr = [];
    }

    public hasTips() {
        return this._tipsArr.length > 0;
    }

    public showAtkTips(baseCard: GamePto.ICard, atkPointMap: Map<number, number>) {
        if (this.isOnStage() === false) {
            this.open();
        }

        atkPointMap.forEach((basePoint, atkPoint) => {
            const x = atkPoint % MapWidth;
            const y = Math.floor(atkPoint / MapWidth);
            const position = MapView.ins().getScenePoint(x, y);
            const tips = BaseUI.UIAtkTips.createInstance();
            tips.x = position.x;
            tips.y = position.y;
            this._tipsArr[atkPoint] = tips;
            this.view.addChild(tips);
            this.AddClick(tips, () => {
                const atkSourceX = basePoint % MapWidth;
                const atkSourceY = Math.floor(basePoint / MapWidth);
                if (baseCard.blockX !== atkSourceX || baseCard.blockY !== atkSourceY) {
                    MapModel.ins().C_MOVE(baseCard.blockX, baseCard.blockY, atkSourceX, atkSourceY);
                }
                MapModel.ins().C_ATTACK(atkSourceX, atkSourceY, x, y);
            });
        });
    }

    public showMoveTips(baseCard: GamePto.ICard, pointSet: Set<number>) {
        if (this.isOnStage() === false) {
            this.open();
        }

        pointSet.forEach((point: number) => {
            const x = point % MapWidth;
            const y = Math.floor(point / MapWidth);
            if (baseCard.blockX === x && baseCard.blockY === y) {
                return;
            }
            const position = MapView.ins().getScenePoint(x, y);
            const tips = BaseUI.UIMoveTips.createInstance();
            tips.x = position.x;
            tips.y = position.y;
            this._tipsArr[point] = tips;
            this.view.addChild(tips);
            this.AddClick(tips, () => {
                MapModel.ins().C_MOVE(baseCard.blockX, baseCard.blockY, x, y);
            });
        });
    }

    public dispatchTipsEvent(x: number, y: number) {
        const tips = this._tipsArr[y * MapWidth + x];
        if (tips) {
            tips.dispatchEvent(new egret.Event(egret.TouchEvent.TOUCH_TAP));
        }
    }
}