

class GameSceneView extends BaseView<BaseUI.UIGameSceneCom> {

    mapX: number;
    mapY: number;
    blockWidth: number;
    blockHeight: number;

    targetHandCom: TargetHandCom;
    selfHandCom: HandCardView;

    targetUserBox: UserInfoBox;
    selfUserBox: UserInfoBox;

    /**是否允许操作 */
    get allowToOprate() { return this._allowToOprate; }
    private _allowToOprate: boolean;


    //消息收到后就马上执行数据的变更，但是动画的展示应该维护一个pool来顺序播放
    private _effectPool: (() => Promise<any>)[];
    private _isPlaying: boolean;

    get cards() { return this.selfHandCom.cards }

    protected init() {
        this.view = BaseUI.UIGameSceneCom.createInstance();

        //初始化双方手牌控件
        this.targetHandCom = new TargetHandCom(this.view.targetHand);
        this.selfHandCom = new HandCardView(this.view.selfHand);

        //初始化双方手牌控件
        this.targetUserBox = new UserInfoBox(this.view.targetInfoBox);
        this.selfUserBox = new UserInfoBox(this.view.selfInfoBox);


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

    public open(evt: EventData): void {
        super.open();

        this._effectPool = [];
        this._isPlaying = false;

        //TODO test
        if (TEST_GAME) {
            let temp = {
                "firstUid": 1,
                "cards": [
                    { "cardId": 3, "attack": 1, "health": 2, "fee": 1, "uid": 1 },
                    { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                    { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                    { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                    { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                    { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                    { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 }
                ],
                "mapData": {},
                "replaceEndTime": "1676296544675"
            }
            this.onGameStart({
                data: temp
            })
        }

        this.initUserInfo(evt.data)

        this.initEvents();
        this.initView();
    }


    /**初始化双方职业，昵称 */
    private initUserInfo(msg: GamePto.S_INIT_GAME) {
        if (msg.users[0].uid === UserModel.ins().uid) {
            this.selfUserBox.setUserInfo(msg.users[0]);
            this.targetUserBox.setUserInfo(msg.users[1]);
        } else {
            this.selfUserBox.setUserInfo(msg.users[1]);
            this.targetUserBox.setUserInfo(msg.users[0]);
        }
    }

    private initEvents() {
        this.observe('GameSceneClose', this.close);
        this.observe('S_GAME_START', this.onGameStart);
        this.observe('S_ROUND_START_EVENT', this.onRoundStart);
        this.observe('S_FEE_INFO', this.onFeeInfo);
        this.addEffectListener('S_DRAW_CARDS', this.onDrawCards)
        this.observe('S_REPLACE_CARDS', this.onReplaceCards);
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

        //如果换牌界面还在,则要把卡先放到手牌中
        if (ChooseCards.ins().isOnStage()) {
            this.addToEffectPool(this.selfHandCom.showAddStartHandCards.bind(this.selfHandCom, ChooseCards.ins().cards));
            //TODO test
            if (TEST_GAME) {
                //TEST CODE
                this.addToEffectPool(this.selfHandCom.drawCards.bind(this.selfHandCom,
                    { "cardId": 3, "attack": 1, "health": 2, "fee": 1, "uid": 1 },
                    { "cardId": 3, "attack": 1, "health": 2, "fee": 1, "uid": 1 }));
                this.targetHandCom.replace([1, 3])
            }
        }

        //自己的回合开始了
        if (msg.uid === UserModel.ins().uid) {
            this._allowToOprate = true;
            this.selfUserBox.setAtkTimesInfo(msg.atkTimes, msg.atkTimesLimit);
            this.selfUserBox.setMoveTimesInfo(msg.moveTimes, msg.moveTimesLimit);
        } else {
            this.targetUserBox.setAtkTimesInfo(msg.atkTimes, msg.atkTimesLimit);
            this.targetUserBox.setMoveTimesInfo(msg.moveTimes, msg.moveTimesLimit);
        }
    }

    private onGameStart(evt: EventData) {
        const msg: GamePto.S_GAME_START = evt.data;
        this.targetHandCom.drawStartHandCards();
        this.selfHandCom.onGameStart();
        ChooseCards.ins().open(msg.cards, msg.firstUid === UserModel.ins().uid)
    }


    private onFeeInfo(evt: EventData) {
        const msg: GamePto.S_FEE_INFO = evt.data;
        const userInfoBox = msg.uid === UserModel.ins().uid ? this.selfUserBox : this.targetUserBox;
        userInfoBox.feeSet(msg.fee, msg.maxFee);
    }

    private async onDrawCards(msg: GamePto.S_DRAW_CARDS) {
        if (msg.uid === UserModel.ins().uid) {
            await this.selfHandCom.drawCards(...msg.cards);
            this.selfHandCom.fatigue(msg.damages);
            this.selfUserBox.setLeastCardNum(msg.cardPoolNum);
        } else {
            await this.targetHandCom.drawCardsToHand(msg.cardCount);
            this.targetHandCom.fatigue(msg.damages);
            this.targetUserBox.setLeastCardNum(msg.cardPoolNum);
        }
    }

    private onReplaceCards(evt: EventData) {
        const msg: GamePto.S_REPLACE_CARDS = evt.data;
        if (msg.uid !== UserModel.ins().uid) {
            this.targetHandCom.replace(msg.replaceCardIndexes);
        }
    }

    private initView() {

    }
}