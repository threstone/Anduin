

class GameSceneView extends BaseView<BaseUI.UIGameSceneCom> {

    /**是否允许操作 */
    get allowToOprate() { return this._allowToOprate; }
    private _allowToOprate: boolean;

    //消息收到后就马上执行数据的变更，但是动画的展示应该维护一个pool来顺序播放
    private _effectPool: (() => Promise<any>)[];
    private _isPlaying: boolean;

    protected init() {
        this.view = BaseUI.UIGameSceneCom.createInstance();

        //绑定这些控件和此控件一同显示和关闭
        this.bindView(MapView.ins());
        this.bindView(RightCtrlView.ins());
        this.bindView(SelfInfoBox.ins());
        this.bindView(TargetInfoBox.ins());
        this.bindView(HandCardView.ins());
        this.bindView(TargetHandView.ins());
        this.bindView(SelfLeftInfoBox.ins());
        this.bindView(TargetLeftInfoBox.ins());

        this.view.close.describe.text = 'tempCloseBtn';
        this.view.surrender.describe.text = '投降';
    }

    public open(): void {
        this._effectPool = [];
        this._isPlaying = false;

        this.initEvents();
        this.initView();

        super.open();
    }

    private initView() {

    }

    private initEvents() {
        //以下三个事件考虑是否有用,未来可能用的到,如果用不到就都单独抽到对应的组件中
        this.observe('GameSceneClose', this.close);
        this.observe('S_GAME_START', this.onGameStart);
        this.addEffectListener('S_ROUND_START_EVENT', this.onRoundStart);
        this.addEffectListener('S_ROUND_END_EVENT', this.onRoundEnd);
        this.addEffectListener('S_GAME_OVER', this.onGameOver);

        this.AddClick(this.view.close, this.close);
        this.AddClick(this.view.surrender, this.surrender);
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

    private onRoundStart(msg: GamePto.S_ROUND_START_EVENT) {
        //自己的回合开始了
        if (msg.uid === UserModel.ins().uid) {
            TipsView.ins().showTips('轮到你的回合了!')
            this._allowToOprate = true;
        }
    }

    private onRoundEnd(msg: GamePto.S_ROUND_START_EVENT) {
        //自己的回合结束了
        if (msg.uid === UserModel.ins().uid) {
            this._allowToOprate = false;
        }
    }

    private onGameOver(msg: GamePto.S_GAME_OVER) {
        GameOverView.ins().open(msg.winnerUid);
    }

    private onGameStart(evt: EventData) {
        const msg: GamePto.S_GAME_START = evt.data;
        TipsView.ins().showTips(`你获得了${GameModel.ins().isFirst ? '先手' : '后手'}`)
        ChooseCards.ins().open(msg.cards, msg.replaceEndTime as number, msg.isReplace);
        MapView.ins().updateMap();
    }

    /**将卡片放置到左侧展示 */
    public showCardToLeft(card: BaseUI.UICardItem | BaseUI.UICardBackItem) {
        this.view.addChild(card);
        egret.Tween.get(card).to({
            scaleX: 1, scaleY: 1,
            x: this.view.map.x - card.width,
            y: (this.view.height - card.height) / 2
        }, 400).to({}, 2000).call(() => {
            this.view.removeChild(card);
        });
        return this.wait(400);
    }

    /**将卡片放置到中间展示 */
    public showCardToCenter(card: BaseUI.UICardItem | BaseUI.UICardBackItem) {
        this.view.addChild(card);
        egret.Tween.get(card).to({
            scaleX: 1, scaleY: 1,
            x: (this.view.width - card.width) / 2,
            y: (this.view.height - card.height) / 2
        }, 400).to({}, 2000).call(() => {
            this.view.removeChild(card);
        });
        return this.wait(400);
    }

    /**使用的卡牌展示 */
    public useCardShow(card: GameCard) {
        const cardItem = card.cardItem
        this.view.addChild(cardItem);

        // 如果是事件卡和法术卡移动至左侧显示，然后播放对应特效 
        if (card.cardInfo.cardType === CardsPto.CardType.Event || card.cardInfo.cardType === CardsPto.CardType.Magic) {
            return this.showCardToLeft(cardItem);
        } else {
            //单位卡,建筑卡会移动到指定位置然后变成对应的map对象
            const scenePoint = MapView.ins().getScenePoint(card.cardInfo.blockX, card.cardInfo.blockY);
            egret.Tween.get(cardItem).to({
                scaleX: 0.25,
                scaleY: 0.25,
                x: scenePoint.x + (MapView.ins().blockHeight - cardItem.width * 0.25),
                y: scenePoint.y
            }, 400).call(() => {
                this.view.removeChild(cardItem);
                //变身
                MapView.ins().addMapItem(card.cardInfo);
            });
            return this.wait(400);
        }
    }

    /**疲劳伤害 */
    public async fatigue(damages: number[], uid: number) {
        for (let index = 0; index < damages.length; index++) {
            const damage = damages[index];
            const hero = MapModel.ins().getHero(uid);
            //扣血
            hero.health -= damage;
            //展示
            MapView.ins().entityReduceHeath(hero, damage);
            TipsView.ins().showTips(`${uid === UserModel.ins().uid ? '你' : '对方'}收到了${damage}点疲劳伤害!`,)
            await this.wait(500);
        }
    }


    //投降
    private async surrender() {
        const res = await TipsView.ins().open('确定要投降吗?');
        if (res === true) {
            GameModel.ins().C_SURRENDER();
        }
    }
}