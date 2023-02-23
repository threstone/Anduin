class TipsView extends BaseView<BaseUI.UITipsCom> {
    private tipsPool: Array<fairygui.GTextField> = [];
    private _resolve: Function;

    protected init() {
        this.view = BaseUI.UITipsCom.createInstance();
    }

    public open(text: string, btnText: string = '确定'): Promise<boolean> {
        return new Promise((resolve) => {
            this.view.btn.describe.text = btnText;
            super.open();
            this._resolve = resolve;
            this.AddClick(this.view.btn, this.close.bind(this, true));
            this.AddClick(this.view.closeBg, this.close.bind(this, false));
            this.AddClick(this.view.close, this.close.bind(this, false));
            this.view.desc.text = text;
        });
    }

    public close(result: boolean): void {
        super.close();
        if (this._resolve) {
            this._resolve(result);
            this._resolve = null;
        }
    }

    public updateViewDesc(text: string) {
        this.view.desc.text = text;
    }

    public showTips(msg: string, hoverTime: number = 5000) {
        console.log(`showTips:${msg}`)
        let tips = this.getTipsField()
        tips.text = msg
        tips.x = (fairygui.GRoot.inst.width - tips.width) / 2
        tips.y = 115
        fairygui.GRoot.inst.addChild(tips)
        egret.Tween.get(tips).to({ y: -tips.height }, hoverTime).call(() => {
            fairygui.GRoot.inst.removeChild(tips)
            this.tipsPool.push(tips)
        })
    }

    private createTipsField() {
        let tips = new fairygui.GTextField();
        tips.fontSize = 26;
        tips.color = 0xFF0000;
        tips.bold = true;
        return tips;
    }

    private getTipsField() {
        if (this.tipsPool.length == 0) {
            this.tipsPool.push(this.createTipsField())
        }
        return this.tipsPool.pop()
    }
}