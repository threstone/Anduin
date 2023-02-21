let TEST_GAME = true;
class GameModel extends BaseModel {

    handCards: GamePto.ICard[];

    /**准备开始(包含更换卡牌数据) */
    C_PREPARE_TO_START(replareplaceCardIndexes: number[]) {
        const msg = new GamePto.C_PREPARE_TO_START();
        msg.replaceCardIndexes = replareplaceCardIndexes;
        this.sendMsg(msg);
    }

    /**请求结束回合 */
    C_END_ROUND() {
        const msg = new GamePto.C_END_ROUND();
        this.sendMsg(msg);
    }

    /**请求弃牌 */
    C_DISCARD(cardIndex: number) {
        const msg = new GamePto.C_DISCARD();
        msg.cardIndex = cardIndex;
        this.sendMsg(msg);
    }

    /**使用卡牌 */
    C_USE_CARD(cardIndex: number, mapPoint: egret.Point) {
        const msg = new GamePto.C_USE_CARD();
        msg.cardIndex = cardIndex;
        msg.blockX = mapPoint.x;
        msg.blockY = mapPoint.y;
        this.sendMsg(msg);
    }

    //服务端异常 关闭场景
    S_SERVER_ERROR(msg: GamePto.S_SERVER_ERROR) {
        SystemModel.ins().showTips(msg.message, 10000);
        this.emit("GameSceneClose");
    }

    //初始化游戏
    S_INIT_GAME(msg: GamePto.S_INIT_GAME) {
        TEST_GAME = false;
        this.emit('S_INIT_GAME', msg);
    }

    //开始游戏
    S_GAME_START(msg: GamePto.S_GAME_START) {
        this.handCards = msg.cards;
        MapModel.ins().mapData = msg.mapData;
        this.emit('S_GAME_START', msg);
    }

    //替换手牌
    S_REPLACE_CARDS(msg: GamePto.S_REPLACE_CARDS) {
        this.handCards = msg.cards;
        this.emit('S_REPLACE_CARDS', msg);
    }

    //回合开始
    S_ROUND_START_EVENT(msg: GamePto.S_ROUND_START_EVENT) {
        this.emit('S_ROUND_START_EVENT', msg);
    }

    //回合结束
    S_ROUND_END_EVENT(msg: GamePto.S_ROUND_END_EVENT) {
        this.emit('S_ROUND_END_EVENT', msg);
    }

    //抽卡疲劳
    S_DRAW_CARDS(msg: GamePto.S_DRAW_CARDS) {
        if (msg.uid === UserModel.ins().uid && msg.cardCount !== 0) {
            this.handCards.push(...msg.cards);
        }
        this.emit('S_DRAW_CARDS', msg);
    }

    //费用协议
    S_FEE_INFO(msg: GamePto.S_FEE_INFO) {
        this.emit('S_FEE_INFO', msg);
    }

    //弃牌
    S_DISCARD(msg: GamePto.S_DISCARD) {
        if (msg.uid === UserModel.ins().uid && msg.isSuccess) {
            this.handCards.splice(msg.cardIndex, 1);
        }
        this.emit('S_DISCARD', msg);
    }

    //使用卡牌
    S_USE_CARD(msg: GamePto.S_USE_CARD) {
        if (msg.uid === UserModel.ins().uid && msg.isSuccess) {
            this.handCards.splice(msg.cardIndex, 1);
            MapModel.ins().onCardUse(msg)
        }

        this.emit('S_USE_CARD', msg);
    }
}