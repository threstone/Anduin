const PageCardNum = 10;
class CardsView extends BaseView<BaseUI.UICardsCom> {

    //=========筛选条件开始=========
    private page: number = 0;
    private powerId: CardsPto.MsgType;
    private fee: number = -1;
    //=========筛选条件结束=========

    protected init() {
        this.view = BaseUI.UICardsCom.createInstance();

        //初始化势力channel
        this.view.allBtn.describe.text = '所有';
        const powerConfigs = ConfigMgr.ins().getPowerConfig();
        for (let index = 0; index < powerConfigs.length; index++) {
            const config = powerConfigs[index];
            const btn = PowerBtn.getBtn(config.powerName, config.id);
            this.view.powerList.addChild(btn);
        }
        //将中立channel移动到最后
        this.view.powerList.addChild(this.view.powerList.removeChildAt(0));
        this.changePowerChannel(CardsPto.MsgType.shengTang);
    }

    public open(): void {
        super.open();
        this.initView();
    }

    private initView() {
        this.initPowerList();
    }


    /**
     * 初始化势力channel点击事件
     */
    private initPowerList() {
        //初始化power btn的点击事件
        const powerList = this.view.powerList;
        for (let index = 0; index < powerList.numChildren; index++) {
            const btn = powerList.getChildAt(index) as BaseUI.UIPowerBtn;
            const powerId = PowerBtn.getPowerId(btn);
            this.AddClick(btn, this.changePowerChannel.bind(this, powerId))
        }
    }

    /**
     * 切换势力
     */
    private changePowerChannel(powerId: number) {
        //将顶部的power channel按钮的样子变一下
        const powerList = this.view.powerList;
        for (let index = 0; index < powerList.numChildren; index++) {
            const btn = powerList.getChildAt(index) as BaseUI.UIPowerBtn;
            btn.grayed = powerId === PowerBtn.getPowerId(btn)
        }

        this.powerId = powerId;
        this.page = 0;
        this.showCards();
    }

    /**根据当前筛选项整理展示的卡牌 */
    private showCards() {
        const list = this.view.cardList;
        list.removeChildren();

        const sourceCards = CardsModel.ins().getPowerCards(this.powerId);
        for (let index = 0; index < PageCardNum; index++) {
            const cardInfo = sourceCards[index];
            //没有卡了或者卡牌到上限了就结束
            if (!cardInfo || list.numChildren === 10) {
                return;
            }
            //符合条件的card加到list中
            if (this.filterCard(cardInfo)) {
                list.addChild(CardItem.getItem(cardInfo));
                //TODO 点击展示大图
            }
        }
    }

    /**
     * 判断卡牌是否符合筛选条件
     */
    private filterCard(card: CardInterface) {
        if (this.fee !== -1 && card.fee !== this.fee) {
            return false;
        }
        return true;
    }
}