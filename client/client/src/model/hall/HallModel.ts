class HallModel extends BaseModel {
    private lastReqFriendMatchUid: number;

    /**请求友谊赛 */
    C_REQ_FRIENDLY_MATCH(uid: number) {
        const msg = new HallPto.C_REQ_FRIENDLY_MATCH();
        msg.targetUid = uid;
        this.lastReqFriendMatchUid = uid;
        this.sendMsg(msg);
    }

    /**取消请求友谊赛 */
    C_CANCEL_REQ_FRIENDLY_MATCH() {
        const msg = new HallPto.C_CANCEL_REQ_FRIENDLY_MATCH();
        msg.targetUid = this.lastReqFriendMatchUid;
        this.sendMsg(msg);
    }

    /**接受或拒绝好友的友谊赛请求 */
    C_REQ_FRIENDLY_MATCH_RESULT(uid: number, result: boolean) {
        const msg = new HallPto.C_REQ_FRIENDLY_MATCH_RESULT();
        msg.targetUid = uid;
        msg.result = result;
        this.sendMsg(msg);
    }

    //是否成功请求友谊赛
    private S_REQ_FRIENDLY_MATCH(msg: HallPto.S_REQ_FRIENDLY_MATCH) {
        this.emit('S_REQ_FRIENDLY_MATCH', msg);
    }

    //请求友谊赛结果
    private S_REQ_FRIENDLY_MATCH_RESULT(msg: HallPto.S_REQ_FRIENDLY_MATCH_RESULT) {

    }

    //接受或拒绝好友的友谊赛请求
    private S_FRIENDLY_MATCH(msg: HallPto.S_FRIENDLY_MATCH) {

    }
}