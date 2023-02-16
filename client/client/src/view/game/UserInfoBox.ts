class UserInfoBox extends BaseView<BaseUI.UIUserInfoBox>{

    protected init(view: BaseUI.UIUserInfoBox) {
        this.view = view;
    }

    public setUserInfo(userInfo: GamePto.IUserInfo) {
        this.view.nick.text = userInfo.nick;;
        this.view.power.text = ConfigMgr.ins().powerConfig[userInfo.power].powerName;
        this.feeSet(0, 0);
        this.setLeastCardNum(29);
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

    /**设置剩余卡牌 */
    public setLeastCardNum(num: number) {
        this.view.leastCardNum.text = `剩余卡牌\n${num}`
    }

    /** 获取卡尺的全局位置*/
    public getCardPoolRootPosition() {
        return this.view.cardPoolBg.localToRoot();
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