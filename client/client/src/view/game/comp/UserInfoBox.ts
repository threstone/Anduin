class UserInfoBox extends BaseView<BaseUI.UIUserInfoBox> {

    private _atkTimes: number
    private _atkTimesLimit: number
    private _moveTimes: number
    private _moveTimesLimit: number

    protected isSelf: boolean

    protected init() {
        //全局监听,不会应为界面close而中止监听
        GameDispatcher.getInstance().addEventListener('S_INIT_GAME', this.initUserInfo, this);

        //隐藏所有费用描述
        const feeList = this.view.feeList;
        for (let index = 0; index < feeList.numChildren; index++) {
            const child = feeList.getChildAt(index) as BaseUI.UIFeeBtn;
            child.feeText.visible = false;
        }
    }

    public open(): void {
        super.open();

        this.addEffectListener('S_ROUND_START_EVENT', this.onRoundStart);
        this.addEffectListener('S_FEE_INFO', this.onFeeInfo);
        this.addEffectListener('S_MOVE', this.onMove);
        this.addEffectListener('S_ATTACK', this.onAttack);
        this.addEffectListener('UpdateDeadCardNum', this.updateDeadCardNum);
        this.addEffectListener('S_RECONNECT', this.reconnect);
        this.addEffectListener('S_DISCARD', this.onDiscard);
    }

    private onDiscard(msg: GamePto.S_DISCARD) {
        if (this.isHandler(msg.uid)) {
            this.view.discardTimes.text = `本回合剩余弃牌次数:${GameModel.ins().discardTimes || 0}`;
        }

    }

    private reconnect(msg: GamePto.S_RECONNECT) {
        msg.users.forEach((detail) => {
            if (this.isHandler(detail.uid)) {
                this.feeSet(detail.fee, detail.maxFee);
                this.setAtkTimesInfo(detail.atkTimes, detail.atkTimesLimit);
                this.setMoveTimesInfo(detail.moveTimes, detail.moveTimesLimit);
                this.view.discardTimes.text = `本回合剩余弃牌次数:${detail.discardTimes || 0}`;
            }
        })
    }

    private isHandler(uid: number) {
        return (uid === UserModel.ins().uid) === this.isSelf;
    }

    /**初始化双方职业，昵称 */
    private initUserInfo(evt: EventData) {
        const msg: GamePto.S_INIT_GAME = evt.data;
        for (let index = 0; index < msg.users.length; index++) {
            const user = msg.users[index];
            if (this.isHandler(user.uid)) {
                this.setUserInfo(user);
            }
        }
    }

    private onRoundStart(msg: GamePto.S_ROUND_START_EVENT) {
        if (this.isHandler(msg.uid)) {
            this.setAtkTimesInfo(msg.atkTimes, msg.atkTimesLimit);
            this.setMoveTimesInfo(msg.moveTimes, msg.moveTimesLimit);
            this.view.discardTimes.text = `本回合剩余弃牌次数:${msg.discardTimes}`;
        }
    }

    private onFeeInfo(msg: GamePto.S_FEE_INFO) {
        if (this.isHandler(msg.uid)) {
            this.feeSet(msg.fee, msg.maxFee);
        }
    }

    /**更新墓地卡牌数量 */
    private updateDeadCardNum(msg: { selfDeadPoolNum: number, targetDeadPoolNum: number }) {
        if (this.isSelf) {
            this.view.deadCardNum.text = `墓地卡牌\n${msg.selfDeadPoolNum}`
        } else {
            this.view.deadCardNum.text = `墓地卡牌\n${msg.targetDeadPoolNum}`
        }
    }

    private onMove(msg: GamePto.S_FEE_INFO) {
        if (this.isHandler(msg.uid)) {
            this.reduceMoveTimes();
        }
    }

    private onAttack(msg: GamePto.S_ATTACK) {
        if (this.isHandler(msg.uid)) {
            this.reduceAtkTimes();
        }
    }

    public setUserInfo(userInfo: GamePto.IUserInfo) {
        this.view.nick.text = userInfo.nick;;
        this.view.power.text = ConfigMgr.ins().powerConfig[userInfo.power].powerName;
        this.feeSet(0, 0);
        this.setCardPoolNum(DeckCardsNum - ConfigMgr.ins().common.startHandCardNum - 1);
    }

    /**
     * 设置费用
     */
    public feeSet(fee: number, maxFee: number) {
        const feeList = this.view.feeList;
        for (let index = feeList.numChildren - 1; index >= 0; index--) {
            const feeBtn = feeList.getChildAt(index) as BaseUI.UIFeeBtn;
            feeBtn.visible = index < fee;
        }
        this.view.feeDesc.text = `能量 : ${fee}/${maxFee}`;
    }

    /**设置剩余卡牌数量 */
    public setCardPoolNum(num: number) {
        this.view.leastCardNum.text = `剩余卡牌\n${num}`
    }

    /**设置攻击次数信息 */
    public setAtkTimesInfo(times: number, timesLimit: number) {
        this._atkTimes = times;
        this._atkTimesLimit = timesLimit;
        this.view.atkTimes.text = `攻击次数${times}/${timesLimit}`
    }

    /**设置移动次数信息 */
    public setMoveTimesInfo(times: number, timesLimit: number) {
        this._moveTimes = times;
        this._moveTimesLimit = timesLimit;
        this.view.moveTimes.text = `移动次数${times}/${timesLimit}`
    }

    public reduceMoveTimes() {
        this.view.moveTimes.text = `移动次数${--this._moveTimes}/${this._moveTimesLimit}`
    }

    public reduceAtkTimes() {
        this.view.atkTimes.text = `攻击次数${--this._atkTimes}/${this._atkTimesLimit}`
    }
}

class SelfInfoBox extends UserInfoBox {
    protected init() {
        this.view = GameSceneView.ins().getView().selfInfoBox;
        this.isSelf = true;
        super.init();
    }

    public isInDeadPool(x: number, y: number) {
        if (x >= this.view.x && x <= this.view.x + this.view.width &&
            y >= this.view.y && y <= this.view.y + this.view.height) {
            return true;
        }
        return false;
    }
}

class TargetInfoBox extends UserInfoBox {
    protected init() {
        this.view = GameSceneView.ins().getView().targetInfoBox;
        this.isSelf = false;
        super.init();
    }
}