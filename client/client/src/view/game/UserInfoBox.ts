class UserInfoBox extends BaseView<BaseUI.UIUserInfoBox> {

    protected init() {
        //全局监听,不会应为界面close而中止监听
        GameDispatcher.getInstance().addEventListener('S_INIT_GAME', this.initUserInfo, this);
    }

    public open(): void {
        super.open();

        this.addEffectListener('S_ROUND_START_EVENT', this.onRoundStart);
        this.addEffectListener('S_FEE_INFO', this.onFeeInfo);

        this.observe('S_INIT_GAME', GameSceneView.ins().open.bind(GameSceneView.ins()));
    }

    /**初始化双方职业，昵称 */
    private initUserInfo(evt: EventData) {
        const msg: GamePto.S_INIT_GAME = evt.data;
        for (let index = 0; index < msg.users.length; index++) {
            const user = msg.users[index];
            if (user.uid === UserModel.ins().uid) {
                SelfInfoBox.ins().setUserInfo(user);
            } else {
                TargetInfoBox.ins().setUserInfo(user);
            }
        }
    }

    private onRoundStart(msg: GamePto.S_ROUND_START_EVENT) {
        if (msg.uid === UserModel.ins().uid) {
            SelfInfoBox.ins().setAtkTimesInfo(msg.atkTimes, msg.atkTimesLimit);
            SelfInfoBox.ins().setMoveTimesInfo(msg.moveTimes, msg.moveTimesLimit);
        } else {
            TargetInfoBox.ins().setAtkTimesInfo(msg.atkTimes, msg.atkTimesLimit);
            TargetInfoBox.ins().setMoveTimesInfo(msg.moveTimes, msg.moveTimesLimit);
        }
    }
    private onFeeInfo(msg: GamePto.S_FEE_INFO) {
        if (msg.uid === UserModel.ins().uid) {
            SelfInfoBox.ins().feeSet(msg.fee, msg.maxFee);
        } else {
            TargetInfoBox.ins().feeSet(msg.fee, msg.maxFee);
        }
    }

    public setUserInfo(userInfo: GamePto.IUserInfo) {
        this.view.nick.text = userInfo.nick;;
        this.view.power.text = ConfigMgr.ins().powerConfig[userInfo.power].powerName;
        this.feeSet(0, 0);
        this.setCardPoolNum(30 - ConfigMgr.ins().common.startHandCardNum - 1);
    }

    /**设置费用 */
    public feeSet(fee: number, maxFee: number) {
        if (maxFee < fee) {
            maxFee = fee;
        }
        const feeList = this.view.feeList;
        if (feeList.numChildren !== maxFee) {
            feeList.removeChildren();
            for (let index = 0; index < maxFee; index++) {
                const feeBtn = BaseUI.UIFeeBtn.createInstance();
                feeBtn.touchable = false;
                feeBtn.feeText.visible = false;
                feeBtn.grayed = true;
                feeList.addChild(feeBtn);
            }
        }
        for (let index = feeList.numChildren - 1; index >= 0; index--) {
            const feeBtn = feeList.getChildAt(index) as BaseUI.UIFeeBtn;
            feeBtn.grayed = index >= fee;
        }
        this.view.feeDesc.text = `能量:${fee}`;
    }

    /**设置剩余卡牌数量 */
    public setCardPoolNum(num: number) {
        this.view.leastCardNum.text = `剩余卡牌\n${num}`
    }

    /**设置墓地卡牌数量 */
    public setDeadCardPoolNum(num: number) {
        this.view.deadCardNum.text = `墓地卡牌\n${num}`
    }

    /**设置攻击次数信息 */
    public setAtkTimesInfo(times: number, timesLimit) {
        this.view.atkTimes.text = `攻击次数${times}/${timesLimit}`
    }

    /**设置移动次数信息 */
    public setMoveTimesInfo(times: number, timesLimit) {
        this.view.moveTimes.text = `攻击次数${times}/${timesLimit}`
    }
}

class SelfInfoBox extends UserInfoBox {
    protected init() {
        super.init();
        this.view = GameSceneView.ins().getView().selfInfoBox;
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
        super.init();
        this.view = GameSceneView.ins().getView().targetInfoBox;
    }
}