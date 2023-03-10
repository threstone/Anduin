class FriendlyMatchModel extends BaseModel {

    private _friendUid: number;
    get friendUid() { return this._friendUid }

    /**请求友谊赛 */
    public C_REQ_MATCH(uid: number) {
        const msg = new FriendlyMatchPto.C_REQ_MATCH();
        msg.targetUid = uid;
        this._friendUid = uid;
        this.sendMsg(msg);
    }

    /**取消请求友谊赛 */
    public C_CANCEL_REQ_MATCH() {
        const msg = new FriendlyMatchPto.C_CANCEL_REQ_MATCH();
        this.sendMsg(msg);
    }

    /**接受或拒绝好友的友谊赛请求 */
    public C_REQ_MATCH_RESULT(result: boolean) {
        const msg = new FriendlyMatchPto.C_REQ_MATCH_RESULT();
        msg.result = result;
        this.sendMsg(msg);
    }

    /**玩家挑选卡组*/
    public C_GROUP_CHOOSE(cardGroupId: number) {
        const msg = new FriendlyMatchPto.C_GROUP_CHOOSE();
        msg.cardGroupId = cardGroupId;
        this.sendMsg(msg);
    }

    /**友谊赛取消挑选卡组*/
    public C_MATCH_CANCEL_GROUP() {
        const msg = new FriendlyMatchPto.C_MATCH_CANCEL_GROUP();
        this.sendMsg(msg);
    }

    /**友谊赛离开*/
    public C_MATCH_LEAVE() {
        const msg = new FriendlyMatchPto.C_MATCH_LEAVE();
        this.sendMsg(msg);
    }


    //是否成功请求友谊赛
    private S_REQ_MATCH(msg: FriendlyMatchPto.S_REQ_MATCH) {
        switch (msg.code) {
            case 0:
                this.emit('S_REQ_MATCH', msg.endTime);
                break;
            case 1:
                SystemModel.ins().showTips('非好友不能发送友谊赛请求');
                break;
            case 2:
                SystemModel.ins().showTips('好友不在线');
                break;
            case 3:
                SystemModel.ins().showTips('好友正在游戏中');
                break;
            case 3:
                SystemModel.ins().showTips('未知错误');
                break;
        }
    }

    //请求友谊赛结果
    private S_REQ_MATCH_RESULT(msg: FriendlyMatchPto.S_REQ_MATCH_RESULT) {
        if (!msg.result) {
            this.emit('FriendlyMatchViewClose', `${FriendModel.ins().getFriendNick(msg.targetUid)}拒绝了你的友谊赛请求!`);
        } else {
            this.emit('FriendlyMatchViewClose');
        }
    }

    //好友的友谊赛请求
    private S_MATCH(msg: FriendlyMatchPto.S_MATCH) {
        this._friendUid = msg.friendUid;
        this.emit('S_MATCH', msg);
    }


    //通知友谊赛挑选卡组
    private S_MATCH_CARD_GROUP(msg: FriendlyMatchPto.S_MATCH_CARD_GROUP) {
        this.emit('S_MATCH_CARD_GROUP', msg.endTime);
    }

    //友谊赛中断
    private S_MATCH_STOP(msg: FriendlyMatchPto.S_MATCH_STOP) {
        let tipsMsg: string = undefined;
        switch (msg.code) {
            case 1:
                SystemModel.ins().showTips(`好友取消了友谊赛请求!`);
                break;
            case 2:
                tipsMsg = '好友离开了友谊赛!';
                break;
        }
        this.emit('FriendlyMatchViewClose', tipsMsg);
    }

    //好友选择卡组状态改变
    private S_FRIEND_GROUP_STATUS_CHANGE(msg: FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE) {
        this.emit('S_FRIEND_GROUP_STATUS_CHANGE', msg.isChoose);
    }

    //选择卡组结果
    private S_GROUP_CHOOSE_RESULT(msg: FriendlyMatchPto.S_GROUP_CHOOSE_RESULT) {
        if (msg.code === 1) {
            SystemModel.ins().showTips('选择的卡组非法!');
            return;
        }
        this.emit('FriendChooseGroupSuccess');
    }
}