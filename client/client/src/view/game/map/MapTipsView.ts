class MapTipsView extends BaseView<BaseUI.UIMapTipsView>{

    private _tipsArr: (BaseUI.UIAtkTips | BaseUI.UIMoveTips)[];


    protected init() {
        this.view = BaseUI.UIMapTipsView.createInstance();
        this._tipsArr = [];
    }

    public open(): void {
        super.open();
        this.AddClick(this.view, () => {
            this.clearTips();
            this.close();
        })
    }

    private clearTips() {
        for (let index = 0; index < this._tipsArr.length; index++) {
            const tips = this._tipsArr[index];
            this.removeTargetEvents(tips);
            this.view.removeChild(tips);
        }
    }

    public showAtkTips(baseCard: GamePto.ICard, atkPointMap: Map<number, number>) {
        if (this.isOnStage() === false) {
            this.open();
        }

        atkPointMap.forEach((basePoint, atkPoint) => {
            const x = atkPoint % 7;
            const y = Math.floor(atkPoint / 7);
            const position = MapView.ins().getScenePoint(x, y);
            const tips = BaseUI.UIAtkTips.createInstance();
            tips.x = position.x;
            tips.y = position.y;
            this._tipsArr.push(tips);
            this.view.addChild(tips);
            this.AddClick(tips, () => {
                const atkSourceX = basePoint % 7;
                const atkSourceY = Math.floor(basePoint / 7);
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
            const x = point % 7;
            const y = Math.floor(point / 7);
            const position = MapView.ins().getScenePoint(x, y);
            const tips = BaseUI.UIMoveTips.createInstance();
            tips.x = position.x;
            tips.y = position.y;
            this._tipsArr.push(tips);
            this.view.addChild(tips);
            this.AddClick(tips, () => {
                MapModel.ins().C_MOVE(baseCard.blockX, baseCard.blockY, x, y);
            });
        });
    }

}