class SystemModel extends BaseModel {
    S_TIPS(msg: SystemPto.S_TIPS) {
        this.emit('ShowTips', msg);
    }
}