class GameModel extends BaseModel {

    handCards: GamePto.ICard[];
    targetUid: number;

    atkTimes: number;
    atkTimesLimit: number;
    moveTimes: number;
    moveTimesLimit: number;

    fee: number;

    /**自己墓地 */
    deadPool: GamePto.ICard[];
    /**对方墓地卡牌数量 */
    targetDeadPoolNum: number;

    /**先手方一定是在下方，所以后手方需要用这个变量做地图反转*/
    isFirst: boolean;

    public getHandCardIndex(card: GamePto.ICard) {
        for (let index = 0; index < this.handCards.length; index++) {
            const tempCard = this.handCards[index];
            if (tempCard.id === card.id) {
                return index;
            }
        }
    }

    private onUseCard(msg: GamePto.S_USE_CARD) {
        //法术直接入墓地
        if (msg.card.cardType === CardsPto.CardType.Magic) {
            this.deadPool.push(msg.card);
        }
        MapModel.ins().onUseCard(msg);
    }

    /**准备开始(包含更换卡牌数据) */
    public C_PREPARE_TO_START(replareplaceCardIndexes: number[]) {
        const msg = new GamePto.C_PREPARE_TO_START();
        msg.replaceCardIndexes = replareplaceCardIndexes;
        this.sendMsg(msg);
    }

    /**请求结束回合 */
    public C_END_ROUND() {
        const msg = new GamePto.C_END_ROUND();
        this.sendMsg(msg);
    }

    /**请求弃牌 */
    public C_DISCARD(cardIndex: number) {
        const msg = new GamePto.C_DISCARD();
        msg.cardIndex = cardIndex;
        this.sendMsg(msg);
    }

    /**使用卡牌 */
    public C_USE_CARD(cardIndex: number, dataArr: number[]) {
        const msg = new GamePto.C_USE_CARD();
        msg.cardIndex = cardIndex;
        msg.dataArr = dataArr;
        this.sendMsg(msg);
    }

    /**请求重连 */
    public C_RECONNECT() {
        const msg = new GamePto.C_RECONNECT();
        this.sendMsg(msg);
    }

    //服务端异常 关闭场景
    private S_SERVER_ERROR(msg: GamePto.S_SERVER_ERROR) {
        SystemModel.ins().showTips(msg.message, 10000);
        this.emit("GameSceneClose");
    }

    //初始化游戏
    private S_INIT_GAME(msg: GamePto.S_INIT_GAME) {
        for (let index = 0; index < msg.users.length; index++) {
            const user = msg.users[index];
            if (user.uid !== UserModel.ins().uid) {
                this.targetUid = user.uid;
                break;
            }
        }
        this.emit('S_INIT_GAME', msg);
    }

    //开始游戏
    private S_GAME_START(msg: GamePto.S_GAME_START) {
        this.deadPool = [];
        this.targetDeadPoolNum = 0;
        this.handCards = msg.cards;
        MapModel.ins().serverData = msg.mapData;
        this.isFirst = msg.firstUid === UserModel.ins().uid;
        this.emit('S_GAME_START', msg);
    }

    //替换手牌
    private S_REPLACE_CARDS(msg: GamePto.S_REPLACE_CARDS) {
        if (msg.uid === UserModel.ins().uid) {
            this.handCards = msg.cards;
        }
        this.emit('S_REPLACE_CARDS', msg);
    }

    //回合开始
    private S_ROUND_START_EVENT(msg: GamePto.S_ROUND_START_EVENT) {
        if (msg.uid === UserModel.ins().uid) {
            this.atkTimes = msg.atkTimes;
            this.atkTimesLimit = msg.atkTimesLimit;
            this.moveTimes = msg.moveTimes;
            this.moveTimesLimit = msg.moveTimesLimit;
        }
        this.emit('S_ROUND_START_EVENT', msg);
    }

    //回合结束
    private S_ROUND_END_EVENT(msg: GamePto.S_ROUND_END_EVENT) {
        MapModel.ins().onGameEnd();
        this.emit('S_ROUND_END_EVENT', msg);
    }

    //抽卡疲劳
    private S_DRAW_CARDS(msg: GamePto.S_DRAW_CARDS) {
        if (msg.uid === UserModel.ins().uid) {
            this.handCards.push(...msg.inHandCards);
            this.deadPool.push(...msg.discards);
        } else {
            this.targetDeadPoolNum = msg.deadPoolNum;
        }
        this.emit('S_DRAW_CARDS', msg);
        this.emit('UpdateDeadCardNum');
    }

    //费用协议
    private S_FEE_INFO(msg: GamePto.S_FEE_INFO) {
        if (msg.uid === UserModel.ins().uid) {
            this.fee = msg.fee;
        }
        this.emit('S_FEE_INFO', msg);
    }

    //弃牌
    private S_DISCARD(msg: GamePto.S_DISCARD) {
        if (msg.uid === UserModel.ins().uid && msg.isSuccess) {
            this.deadPool.push(this.handCards[msg.cardIndex]);
            this.handCards.splice(msg.cardIndex, 1);
        } else if (msg.uid !== UserModel.ins().uid) {
            this.targetDeadPoolNum++;
        }
        this.emit('S_DISCARD', msg);
        this.emit('UpdateDeadCardNum');
    }

    //使用卡牌
    private S_USE_CARD(msg: GamePto.S_USE_CARD) {
        if (msg.isSuccess) {
            if (msg.uid === UserModel.ins().uid) {
                this.handCards.splice(msg.cardIndex, 1);
            }
            this.onUseCard(msg);
        }
        this.emit('S_USE_CARD', msg);
    }

    //下发回合结束时间
    private S_ROUND_END_TIME(msg: GamePto.S_ROUND_END_TIME) {
        this.emit('S_ROUND_END_TIME', msg);
    }

    //地图数据
    private S_MAP_DATA(msg: GamePto.S_MAP_DATA) {
        MapModel.ins().serverData = msg.mapData;
        this.emit('S_MAP_DATA', msg);
    }

    //游戏结束
    private S_GAME_OVER(msg: GamePto.S_GAME_OVER) {
        this.emit('S_GAME_OVER', msg);
    }

    //重连信息
    private S_RECONNECT(msg: GamePto.S_RECONNECT) {
        this.handCards = msg.selfCards;
        this.targetDeadPoolNum = msg.targetHandCardNum;
        this.isFirst = msg.isFirst;
        this.deadPool = msg.deadPool;
        this.targetDeadPoolNum = msg.targetDeadPoolNum;
        MapModel.ins().serverData = msg.mapData;

        const selfDetail = msg.users[0].uid === UserModel.ins().uid ? msg.users[0] : msg.users[1];
        this.fee = selfDetail.fee;
        this.atkTimes = selfDetail.atkTimes;
        this.atkTimesLimit = selfDetail.atkTimesLimit;
        this.moveTimes = selfDetail.moveTimes;
        this.moveTimesLimit = selfDetail.moveTimesLimit;

        this.emit('S_RECONNECT', msg);
        this.emit('S_MAP_DATA', msg);
        this.emit('UpdateDeadCardNum');
    }

    //更新手牌信息
    private S_HANDCARDS_UPDATE(msg: GamePto.S_HANDCARDS_UPDATE) {
        this.handCards = msg.cards;
        this.emit('S_HANDCARDS_UPDATE');
    }
}