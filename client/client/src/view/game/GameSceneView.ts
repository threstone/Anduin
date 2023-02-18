

class GameSceneView extends BaseView<BaseUI.UIGameSceneCom> {

    mapX: number;
    mapY: number;
    blockWidth: number;
    blockHeight: number;

    /**是否允许操作 */
    get allowToOprate() { return this._allowToOprate; }
    private _allowToOprate: boolean;


    //消息收到后就马上执行数据的变更，但是动画的展示应该维护一个pool来顺序播放
    private _effectPool: (() => Promise<any>)[];
    private _isPlaying: boolean;

    // get cards() { return HandCardView.ins().cards }

    protected init() {
        this.view = BaseUI.UIGameSceneCom.createInstance();

        //绑定这些控件和此控件一同显示和关闭
        this.bindView(HandCardView.ins());
        this.bindView(TargetHandView.ins());
        this.bindView(RightCtrlView.ins());

        this.bindView(SelfInfoBox.ins());
        this.bindView(TargetInfoBox.ins());

        this.view.close.describe.text = 'tempCloseBtn'

        this.mapX = 313;
        this.mapY = 220;
        this.blockWidth = 140;
        this.blockHeight = 95;

        //==============test code===============
        // this.initMapBlock();
    }

    private initMapBlock() {
        const shp: egret.Shape = new egret.Shape();
        shp.x = this.mapX;
        shp.y = this.mapY;

        shp.graphics.lineStyle(2, 0xFFFFFF);
        let endX = 7 * this.blockWidth;
        let endY = 8 * this.blockHeight;
        for (let index = 0; index < 8; index++) {
            shp.graphics.moveTo(index * this.blockWidth, 0);
            shp.graphics.lineTo(index * this.blockWidth, endY);
        }

        for (let index = 0; index < 9; index++) {
            shp.graphics.moveTo(0, index * this.blockHeight);
            shp.graphics.lineTo(endX, index * this.blockHeight);
        }
        shp.graphics.endFill();
        (this.view.displayObject as egret.DisplayObjectContainer).addChild(shp);
    }

    public open(): void {
        super.open();

        this._effectPool = [];
        this._isPlaying = false;

        this.initEvents();
        this.initView();
    }

    private initEvents() {
        //以下三个事件考虑是否有用,未来可能用的到,如果用不到就都单独抽到对应的组件中
        this.observe('GameSceneClose', this.close);
        this.observe('S_GAME_START', this.onGameStart);
        this.observe('S_ROUND_START_EVENT', this.onRoundStart);

        this.AddClick(this.view.close, this.close);
    }

    /**将函数加入特效池 */
    public addToEffectPool(func: () => Promise<any>) {
        this._effectPool.push(func);
        if (!this._isPlaying) {
            this.doEffect();
        }
    }

    /**尝试执行特效 */
    private async doEffect() {
        while (this._effectPool.length !== 0) {
            this._isPlaying = true;
            await this._effectPool.shift()();
        }
        this._isPlaying = false;
    }


    private onRoundStart(evt: EventData) {
        const msg: GamePto.S_ROUND_START_EVENT = evt.data;
        //自己的回合开始了
        if (msg.uid === UserModel.ins().uid) {
            this._allowToOprate = true;
        }
    }

    private onGameStart(evt: EventData) {
        const msg: GamePto.S_GAME_START = evt.data;
        ChooseCards.ins().open(msg.cards, msg.firstUid === UserModel.ins().uid)
    }

    private initView() {

    }
}