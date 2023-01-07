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

        LoginView.ins().open();
        TipsView.ins();
    }


    static showTips(msg: string, hoverTime: number) {
        TipsView.ins().showTips(msg, hoverTime)
    }

}