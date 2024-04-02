class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {
                GameDispatcher.getInstance().emit('GameBeat');
            }
        })


        const frameRate = egret.ticker.$frameRate;
        const slowFrameRate = 60;
        egret.lifecycle.onPause = () => {
            // egret.ticker.pause();
            egret.ticker.$setFrameRate(slowFrameRate)
        }

        egret.lifecycle.onResume = () => {
            // egret.ticker.resume();
            egret.ticker.$setFrameRate(frameRate);
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        GlobalVar.init(this.stage);
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
}