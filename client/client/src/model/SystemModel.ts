class SystemModel extends BaseModel {
    private S_TIPS(msg: SystemPto.S_TIPS) {
        this.showTips(msg.msg, msg.hoverTime);
    }

    showTips(msg: string, hoverTime: number = 5000) {
        TipsView.ins().showTips(msg, hoverTime);
    }
}