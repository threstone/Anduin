class GlobalView {

    public static init(stage: egret.Stage) {
        //init stage
        stage.addChild(fairygui.GRoot.inst.displayObject);
        fairygui.GRoot.inst.width = stage.stageWidth;
        fairygui.GRoot.inst.height = stage.stageHeight;

        //add fgui package
        fairygui.UIPackage.addPackage("BaseUI");
        //bind base ui
        BaseUI.BaseUIBinder.bindAll();

        let view = new LoginView();
        view.open();
    }

    private static tipsPool: Array<fairygui.GTextField> = [];
    static showTips(msg: string, hoverTime: number) {
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

    private static createTipsField() {
        let tips = new fairygui.GTextField()
        tips.fontSize = 26
        tips.color = 0xFF0000
        tips.bold = true
        return tips
    }

    private static getTipsField() {
        if (this.tipsPool.length == 0) {
            this.tipsPool.push(this.createTipsField())
        }
        return this.tipsPool.pop()
    }
}