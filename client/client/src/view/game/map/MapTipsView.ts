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

    public showMoveTips(pointSet: Set<number>) {
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
                console.log('click');
            })
        })
    }

}