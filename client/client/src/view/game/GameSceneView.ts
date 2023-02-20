

class GameSceneView extends BaseView<BaseUI.UIGameSceneCom> {

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
        this.bindView(RightCtrlView.ins());
        this.bindView(SelfInfoBox.ins());
        this.bindView(TargetInfoBox.ins());
        this.bindView(HandCardView.ins());
        this.bindView(TargetHandView.ins());

        this.view.close.describe.text = 'tempCloseBtn'
    }

    public open(): void {
        super.open();

        this._effectPool = [];
        this._isPlaying = false;

        this.initEvents();
        this.initView();
    }

    private initView() {

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
        ChooseCards.ins().open(msg.cards, msg.firstUid === UserModel.ins().uid);
        MapView.ins().updateMap();
    }

    public useCardShow(card: GameCard) {
        const cardItem = card.cardItem
        this.view.addChild(cardItem);

        const cardConfig = CardsModel.ins().getCardInfoById(card.cardInfo.cardId);
        //如果是事件卡和法术卡移动至左侧显示，然后播放对应特效
        if (cardConfig.cardType === CardsPto.CardType.Event || cardConfig.cardType === CardsPto.CardType.Magic) {
            egret.Tween.get(cardItem).to({
                scaleX: 1, scaleY: 1,
                x: this.view.map.x - cardItem.width,
                y: (this.view.height - cardItem.height) / 2
            }, 400).to({}, 2000).call(() => {
                this.view.removeChild(cardItem);
            });
        } else {
            //对地图进行刷新
            // GameMap
        }

        //如果是单位卡，卡牌移动到对应的位置然后放在那

        //switch card type(unit\ event\ magic) and do something
        //case unit  
        //move to target block 
        //scale to some value
    }


}