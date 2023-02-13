class GameModel extends BaseModel {

    handCards: GamePto.ICard[];
    mapData: GamePto.IMapData;

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
}