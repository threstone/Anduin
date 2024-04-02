const G = 9.8;
const UpSpeed = -3;
/** 撞击系数 */
const ImpactCoefficient = 0.4;
const SpeedLimit = 8;
// 成功吊起鱼所需的时间
const FishSuccessTime = 10000;
class FishView extends BaseView<BaseUI.UIFishCom> {

    /** 当前速度 */
    private _curSpeed: number;
    /** 最大Y轴位置 */
    private _maxYLimit: number;
    /** 每帧下落速度变化 */
    private _downOfFrame: number;
    /** 每帧完成度 */
    private _progressChange: number;
    /** 是否完美钓鱼 */
    private _isPerfect: boolean;

    protected init() {
        this.view = BaseUI.UIFishCom.createInstance();
        this.initDisplayBar();
    }

    private initDisplayBar() {
        // 组件初始化
        this.view.startBtn.describe.text = '开始';
        const bar = this.view.displayBar;
        const lineSize: number = (bar.greenBg as any)._lineSize;
        bar.height = 480;
        bar.green.height = 80;
        bar.greenBg.width = bar.width + lineSize * 2
        bar.greenBg.height = bar.height + lineSize * 2
        bar.greenBg.x = -lineSize;
        bar.greenBg.y = -lineSize;

        // 数据初始化
        this._curSpeed = 0;
        this._downOfFrame = G / egret.ticker.$frameRate;
        this._progressChange = FishSuccessTime / 1000 / 60;
        this._maxYLimit = this.view.displayBar.height - this.view.displayBar.green.height;
    }

    public open(): void {
        super.open();
        this.AddClick(this.view.startBtn, this.startFish);
    }

    private startFish(evt: egret.TouchEvent) {
        this._isPerfect = true;
        this._curSpeed = 0;
        this.view.displayBar.progressBar.visible = true;
        this.view.displayBar.progressBar.value = 20;
        this.view.displayBar.green.y = this._maxYLimit;
        this.view.displayBar.fish.visible = true;
        this.observe('GameBeat', this.onUpdate);
        this.AddClick(this.view, this.onClick);
        // 防止冒泡到onClick
        evt.stopPropagation();
    }

    private endFish() {
        this.view.displayBar.progressBar.visible = false;
        this.view.displayBar.green.y = this._maxYLimit;
        this.view.displayBar.fish.visible = false;
        this.removeClick(this.view, this.onClick);
        this.removeObserve('GameBeat', this.onUpdate);

        const isWin = this.view.displayBar.progressBar.value >= 0;
        TipsView.ins().open(`${isWin === true ? `${this._isPerfect ? '太棒了！完美钓鱼！' : '钓鱼成功~'}` : '再接再厉'}`);
    }

    private onClick() {
        if (this._curSpeed > 0) {
            this._curSpeed += UpSpeed;
        } else {
            this._curSpeed += UpSpeed;
        }
    }

    private onUpdate() {
        this.checkFish();
        this.greenUpdate();
        this.fishUpdate();
    }

    private checkFish() {
        const green = this.view.displayBar.green;
        const fish = this.view.displayBar.fish;
        if (fish.y >= green.y && fish.y + fish.height < green.y + green.height) {
            fish.alpha = 1;
            this.view.displayBar.progressBar.value += this._progressChange;
        } else {
            fish.alpha = 0.5;
            this._isPerfect = false;
            this.view.displayBar.progressBar.value -= this._progressChange;
        }

        const barImg = this.view.displayBar.progressBar.getChild('bar').asGraph;
        if (this.view.displayBar.progressBar.value < 20) {
            barImg.color = 0xFF0000;
        }else{
            barImg.color = 0x00FF00;
        }
        if (this.view.displayBar.progressBar.value >= 100 || this.view.displayBar.progressBar.value <= 0) {
            this.endFish();
        }
    }

    private fishUpdate() {

    }

    private greenUpdate() {
        console.log(this._curSpeed);
        if (this._curSpeed > SpeedLimit) {
            this._curSpeed = SpeedLimit;
        }
        if (this._curSpeed < -SpeedLimit) {
            this._curSpeed = -SpeedLimit;
        }
        this._curSpeed += this._downOfFrame;
        this.view.displayBar.green.y += this._curSpeed;
        // 撞击
        if (this.view.displayBar.green.y > this._maxYLimit) {
            this.view.displayBar.green.y = this._maxYLimit;
            // 撞击系数
            this._curSpeed = this._curSpeed * -ImpactCoefficient;
        } else if (this.view.displayBar.green.y < 0) {
            this.view.displayBar.green.y = 0;
            if (this._curSpeed < UpSpeed) {
                this._curSpeed = UpSpeed;
            }
        }
        this.view.displayBar.green.y = Math.max(0, this.view.displayBar.green.y);
    }
}