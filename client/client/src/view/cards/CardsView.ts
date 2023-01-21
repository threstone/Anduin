const PageCardNum = 10;
class CardsView extends BaseView<BaseUI.UICardsCom> {

    //=========筛选条件开始=========
    private page: number;
    private powerId: CardsPto.PowerType;
    private fee: number;
    //=========筛选条件结束=========

    protected init() {
        this.view = BaseUI.UICardsCom.createInstance();

        this.page = 0;
        this.powerId = CardsPto.PowerType.ShengTang;
        this.fee = -1;

        //初始化费用筛选器文本
        this.view.allFeeBtn.describe.text = '所有';
        const list = this.view.feeBtnList;
        const maxFeeFilter = ConfigMgr.ins().common.maxFeeFilter;
        for (let index = 0; index <= maxFeeFilter; index++) {
            const feeBtn = BaseUI.UIFeeBtn.createInstance();
            list.addChild(feeBtn);
            if (index === maxFeeFilter) {
                feeBtn.feeText.text = `${index}+`;
            } else {
                feeBtn.feeText.text = `${index}`;
            }
        }

        //初始化势力channel
        const powerConfigs = ConfigMgr.ins().powerConfig;
        for (let index = 0; index < powerConfigs.length; index++) {
            const config = powerConfigs[index];
            const btn = PowerBtn.getBtn(config.powerName, config.id);
            this.view.powerList.addChild(btn);
        }
        //将中立channel移动到最后
        this.view.powerList.addChild(this.view.powerList.removeChildAt(0));
    }

    public open(): void {
        super.open();
        this.initView();
    }

    private initView() {
        this.AddClick(this.view.back, this.onPageChange.bind(this, false))
        this.AddClick(this.view.next, this.onPageChange.bind(this, true))

        this.changePowerChannel(this.powerId, this.page);
        this.initPowerListEvent();
        this.initFeeFilterEvent();
    }


    /**当左右两个切换页数的按钮被点击 */
    private onPageChange(isAdd: boolean) {
        if (isAdd) {
            let maxPage = Math.ceil(CardsModel.ins().getCardsByFilter(this.powerId, this.fee).length / PageCardNum) - 1;
            maxPage = Math.max(0, maxPage);
            //判断是否要切换势力
            if (this.page === maxPage) {
                //尝试到右边的势力去
                if (this.powerId === CardsPto.PowerType.Common) {
                    this.powerId = CardsPto.PowerType.ShengTang;
                } else {

                    this.powerId = (this.powerId + 1) % Object.keys(CardsPto.PowerType).length;
                }
                this.changePowerChannel(this.powerId, 0);
            } else {
                this.page += 1;
            }
        } else {
            if (this.page === 0) {
                //尝试到左边的势力去
                if (this.powerId === CardsPto.PowerType.Common) {
                    this.powerId = Utils.getEnumMaxValues(CardsPto.PowerType);
                } else {
                    this.powerId -= 1;
                }
                let maxPage = Math.ceil(CardsModel.ins().getCardsByFilter(this.powerId, this.fee).length / PageCardNum) - 1;
                this.changePowerChannel(this.powerId, Math.max(0, maxPage))
            } else {
                this.page -= 1;
            }
        }
        this.showCards();
    }


    /**
     * 初始化费用筛选按钮点击事件
     */
    private initFeeFilterEvent() {
        const list = this.view.feeBtnList;
        this.AddClick(this.view.allFeeBtn, () => {
            this.fee = -1;
            this.showCards();
            this.grayAllFeeBtn();
        })
        for (let index = 0; index < list.numChildren; index++) {
            const feeBtn = list.getChildAt(index) as BaseUI.UIFeeBtn;
            this.AddClick(feeBtn, () => {
                this.fee = index;
                this.showCards();
                this.grayAllFeeBtn(index);
            });
        }
    }


    /**将除了指定id的feeBtn置为灰色 */
    private grayAllFeeBtn(excludeIndex?: number) {
        const list = this.view.feeBtnList;
        for (let index = 0; index < list.numChildren; index++) {
            const feeBtn = list.getChildAt(index) as BaseUI.UIFeeBtn;
            if (index === excludeIndex) {
                feeBtn.grayed = true;
                continue;
            }
            feeBtn.grayed = false;
        }
    }


    /**
     * 初始化势力channel点击事件
     */
    private initPowerListEvent() {
        //初始化power btn的点击事件
        const powerList = this.view.powerList;
        for (let index = 0; index < powerList.numChildren; index++) {
            const btn = powerList.getChildAt(index) as BaseUI.UIPowerBtn;
            const powerId = PowerBtn.getPowerId(btn);
            this.AddClick(btn, this.changePowerChannel.bind(this, powerId, this.page))
        }
    }

    /**
     * 切换势力
     */
    private changePowerChannel(powerId: number, page: number) {
        //将顶部的power channel按钮的样子变一下
        const powerList = this.view.powerList;
        for (let index = 0; index < powerList.numChildren; index++) {
            const btn = powerList.getChildAt(index) as BaseUI.UIPowerBtn;
            btn.grayed = powerId === PowerBtn.getPowerId(btn)
        }

        this.powerId = powerId;
        this.page = page;
        this.showCards();
    }

    /**根据当前筛选项整理展示的卡牌 */
    private showCards() {
        const list = this.view.cardList;
        list.removeChildren();
        const cards = CardsModel.ins().getCardsByFilter(this.powerId, this.fee);
        for (let index = 0; index < cards.length; index++) {
            const cardInfo = cards[index + this.page * PageCardNum];
            //没有卡了或者卡牌到上限了就结束
            if (!cardInfo || list.numChildren === 10) {
                return;
            }
            const cardItem = CardItem.getItem(cardInfo);
            list.addChild(cardItem);
            //TODO 点击展示大图  这里不用this.addClick是因为在界面关闭前，事件都不会被清除
            cardItem.addClickListener(() => {
                ShowCardDetail.ins().open(cardInfo);
            }, this);
        }
    }
}