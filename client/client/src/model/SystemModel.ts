class SystemModel extends BaseModel {
    private S_TIPS(msg: SystemPto.S_TIPS) {
        TipsView.ins().showTips(msg.msg, msg.hoverTime);
    }
}