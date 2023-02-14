

class GameSceneView extends BaseView<BaseUI.UIGameSceneCom> {

    mapX: number;
    mapY: number;
    blockWidth: number;
    blockHeight: number;

    targetHandCom: HandCardView;
    selfHandCom: HandCardView;

    targetUserBox: UserInfoBox;
    selfUserBox: UserInfoBox;

    protected init() {
        this.view = BaseUI.UIGameSceneCom.createInstance();

        //初始化双方手牌控件
        this.targetHandCom = new HandCardView(this.view.targetHand, false);
        this.selfHandCom = new HandCardView(this.view.selfHand, true);

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


        //TODO test
        let temp = {
            "firstUid": 1,
            "cards": [
                {
                    "cardId": 0,
                    "attack": 0,
                    "health": 0,
                    "fee": 0,
                    "uid": 2
                },
                {
                    "cardId": 0,
                    "attack": 0,
                    "health": 0,
                    "fee": 0,
                    "uid": 2
                },
                {
                    "cardId": 0,
                    "attack": 0,
                    "health": 0,
                    "fee": 0,
                    "uid": 2
                }
            ],
            "mapData": {},
            "replaceEndTime": "1676296544675"
        }
        this.onGameStart({
            data: temp
        })


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
    }

    private onRoundStart(evt: EventData) {
        const msg: GamePto.S_ROUND_START_EVENT = evt.data;
        const userInfoBox = msg.uid === UserModel.ins().uid ? this.selfUserBox : this.targetUserBox;
        userInfoBox.feeSet(msg.fee,msg.maxFee);
        if (ChooseCards.ins().isOnStage()) {
            console.log();
        } else {

        }
    }

    private onGameStart(evt: EventData) {
        const msg: GamePto.S_GAME_START = evt.data;
        ChooseCards.ins().open(msg.cards, msg.firstUid === UserModel.ins().uid)
    }

    private initView() {

    }
}