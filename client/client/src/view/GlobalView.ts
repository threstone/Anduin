class GlobalView {
    public static init(stage: egret.Stage) {
        //init stage
        //全局点击音效
        stage.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SoundMgr.ins().clickSound.play(0, 1);
        }, this);
        stage.addChild(fairygui.GRoot.inst.displayObject);
        
        fairygui.GRoot.inst.width = stage.stageWidth;
        fairygui.GRoot.inst.height = stage.stageHeight;
        fairygui.UIConfig.defaultFont = 'Arial';
        egret.TextField.default_fontFamily = "Arial";

        //add fgui package
        fairygui.UIPackage.addPackage("BaseUI");
        //bind base ui
        BaseUI.BaseUIBinder.bindAll();
        LoginView.ins().open();
    }


    static showTips(msg: string, hoverTime: number) {
        TipsView.ins().showTips(msg, hoverTime);
    }

}
