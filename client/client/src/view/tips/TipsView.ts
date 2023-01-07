class TipsView extends BaseClass {
    private tipsPool: Array<fairygui.GTextField> = [];

    constructor() {
        super();
        GameDispatcher.getInstance().addEventListener('ShowTips', (evt) => {
            const data: SystemPto.S_TIPS = evt.data;
            this.showTips(data.msg, data.hoverTime);
        }, this);

    }

    showTips(msg: string, hoverTime: number) {
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
        let tips = new fairygui.GTextField()
        tips.fontSize = 26
        tips.color = 0xFF0000
        tips.bold = true
        return tips
    }

    private getTipsField() {
        if (this.tipsPool.length == 0) {
            this.tipsPool.push(this.createTipsField())
        }
        return this.tipsPool.pop()
    }
}