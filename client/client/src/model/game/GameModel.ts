class GameModel extends BaseModel {

    handCards: GamePto.ICard[];
    mapData: GamePto.IMapData;

    /**准备开始(包含更换卡牌数据) */
    C_PREPARE_TO_START(replareplaceCardIndexes: number[]) {
        const msg = new GamePto.C_PREPARE_TO_START();
        msg.replaceCardIndexes = replareplaceCardIndexes;
        this.sendMsg(msg);
    }

    //服务端异常 关闭场景
    S_SERVER_ERROR(msg: GamePto.S_SERVER_ERROR) {
        SystemModel.ins().showTips(msg.message, 10000);
        this.emit("GameSceneClose");
    }

    //初始化游戏
    S_INIT_GAME(msg: GamePto.S_INIT_GAME) {
        this.emit('S_INIT_GAME', msg);
    }

    //开始游戏
    S_GAME_START(msg: GamePto.S_GAME_START) {
        this.emit('S_GAME_START', msg);
        this.handCards = msg.cards;
        this.mapData = msg.mapData;
    }

    //替换手牌
    S_REPLACE_CARDS(msg: GamePto.S_REPLACE_CARDS) {
        this.emit('S_REPLACE_CARDS', msg);
        this.handCards = msg.cards;
    }

    //回合开始
    S_ROUND_START_EVENT(msg: GamePto.S_ROUND_START_EVENT) {
        this.emit('S_ROUND_START_EVENT', msg);
    }

    //回合结束
    S_ROUND_END_EVENT(msg: GamePto.S_ROUND_END_EVENT) {
        this.emit('S_ROUND_END_EVENT', msg);
    }
}