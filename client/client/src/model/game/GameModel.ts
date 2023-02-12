class GameModel extends BaseModel {

    //服务端异常 关闭场景
    S_SERVER_ERROR(msg: GamePto.S_SERVER_ERROR){
        SystemModel.ins().showTips(msg.message,10000);
        this.emit("GameSceneClose");
    }

    //初始化游戏
    S_INIT_GAME(msg:GamePto.S_INIT_GAME){
        this.emit('S_INIT_GAME',msg)
    }
}