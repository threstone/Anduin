class ShowCardsCom extends BaseView<BaseUI.UIShowCardsCom>{

    //=========筛选条件开始=========
    private page: number;
    private selectPowerIndex: number;
    private fee: number;
    private isCardMaking: boolean;
    //=========筛选条件结束=========
    private allPowerInfo: Power[];

    protected init() {
        this.view = BaseUI.UIShowCardsCom.createInstance();

        this.page = 0;
        this.selectPowerIndex = 0;
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

        //初始化卡牌制作按钮
        this.isCardMaking = false;
        this.view.cardMake.describe.text = '卡牌制作';
    }

    public open(): void {
        super.open();
        this.initView();
    }

    public close(): void {
        super.close();
        this.fee = -1;
        this.view.cardMake.describe.text = '卡牌制作';
        this.isCardMaking = false;
    }


    private initView() {
        this.observe('CardChange', this.showCards);

        this.AddClick(this.view.back, this.onPageChange.bind(this, false))
        this.AddClick(this.view.next, this.onPageChange.bind(this, true))

        this.AddClick(this.view.cardMake, () => {
            this.isCardMaking = !this.isCardMaking;
            this.view.cardMake.describe.text = this.isCardMaking ? '停止制作' : '卡牌制作';
            this.showCards();
        })
        this.showPowerPannel(ConfigMgr.ins().powerConfig);
        this.changePowerChannel(0, 0);
        this.initFeeFilterEvent();
    }



    /**根据当前筛选项整理展示的卡牌 */
    private showCards() {
        const list = this.view.cardList;
        this.removeChildrenEvents(list);
        list.removeChildren();

        const powerId = this.allPowerInfo[this.selectPowerIndex].id;
        let cards: CardInterface[];
        if (this.isCardMaking) {
            cards = CardsModel.ins().getAllCardsByFilter(powerId, this.fee);
        } else {
            cards = CardsModel.ins().getCardsByFilter(powerId, this.fee);
        }

        //防止页数因为卡牌制作到达太大的值导致切回正常状态页数太大的问题
        while (this.page * PageCardNum > cards.length) {
            this.page--;
        }

        for (let index = 0; index < cards.length; index++) {
            const cardInfo = cards[index + this.page * PageCardNum];
            //没有卡了或者卡牌到上限了就结束
            if (!cardInfo || list.numChildren === 10) {
                return;
            }
            const cardItem = CardItem.getItem(cardInfo);
            list.addChild(cardItem);
            let isDrag = false;
            //点击展示大图
            this.AddClick(cardItem, () => {
                if (isDrag) {
                    isDrag = false;
                    return;
                }
                ShowCardDetail.ins().open(cardInfo);
            });

            if (CardsView.ins().isCreating) {
                cardItem.dragLoader.draggable = true;
                this.addEvent(cardItem.dragLoader, fairygui.DragEvent.DRAG_START, (evt: fairygui.DragEvent) => {
                    isDrag = true;
                    const texture = new egret.RenderTexture();
                    texture.drawToTexture(cardItem.displayObject);
                    cardItem.dragLoader.texture = texture;
                    cardItem.dragLoader.x = evt.stageX - cardItem.dragLoader.width / 2;
                    cardItem.dragLoader.y = evt.stageY - cardItem.dragLoader.height / 2;
                    cardItem.dragLoader.scaleX = list.scaleX;
                    cardItem.dragLoader.scaleY = list.scaleY;
                    fairygui.GRoot.inst.addChild(cardItem.dragLoader);
                }, this);

                this.addEvent(cardItem.dragLoader, fairygui.DragEvent.DRAG_END, (evt: fairygui.DragEvent) => {
                    cardItem.dragLoader.x = 0;
                    cardItem.dragLoader.y = 0;
                    cardItem.dragLoader.scaleX = 1;
                    cardItem.dragLoader.scaleY = 1;
                    cardItem.addChild(cardItem.dragLoader);
                    const createGroupList = CardsView.ins().getView().createGroupList;
                    if (evt.stageX >= createGroupList.x && evt.stageY <= createGroupList.height) {
                        cardItem.dragLoader.texture = null;
                        const addRes = CardsView.ins().cacheCreateGroupInfo.doAddCard(cardInfo);
                        if (addRes !== false) {
                            CardItem.updateNum(cardItem, cardInfo);
                            CardsView.ins().refreshCreateGroupList();
                        }
                    }
                }, this);
            }
        }
    }

    /**当左右两个切换页数的按钮被点击 */
    private onPageChange(isAdd: boolean) {
        const len = this.allPowerInfo.length;
        let powerId = this.allPowerInfo[this.selectPowerIndex].id;
        if (isAdd) {
            let maxPage = -1;
            if (this.isCardMaking) {
                maxPage = Math.ceil(CardsModel.ins().getAllCardsByFilter(powerId, this.fee).length / PageCardNum) - 1
            } else {
                maxPage = Math.ceil(CardsModel.ins().getCardsByFilter(powerId, this.fee).length / PageCardNum) - 1
            }
            maxPage = Math.max(0, maxPage);
            //判断是否要切换势力
            if (this.page === maxPage) {
                //尝试到右边的势力去
                this.selectPowerIndex = (this.selectPowerIndex + 1) % len;
                this.changePowerChannel(this.selectPowerIndex, 0);
            } else {
                this.page += 1;
            }
        } else {
            if (this.page === 0) {
                this.selectPowerIndex = (this.selectPowerIndex - 1 + len) % len
                powerId = this.allPowerInfo[this.selectPowerIndex].id;
                let maxPage = -1;
                if (this.isCardMaking) {
                    maxPage = Math.ceil(CardsModel.ins().getAllCardsByFilter(powerId, this.fee).length / PageCardNum) - 1
                } else {
                    maxPage = Math.ceil(CardsModel.ins().getCardsByFilter(powerId, this.fee).length / PageCardNum) - 1
                }
                this.changePowerChannel(this.selectPowerIndex, Math.max(0, maxPage))
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
     * 切换势力
     */
    public changePowerChannel(selectPowerIndex: number = this.selectPowerIndex, page: number = this.page) {
        const powerId = this.allPowerInfo[selectPowerIndex].id;
        //将顶部的power channel按钮的样子变一下
        const powerList = this.view.powerList;
        for (let index = 0; index < powerList.numChildren; index++) {
            const btn = powerList.getChildAt(index) as BaseUI.UIPowerBtn;
            btn.grayed = powerId === PowerBtn.getPowerId(btn)
        }

        this.selectPowerIndex = selectPowerIndex;
        this.page = page;
        this.showCards();
    }

    public showPowerPannel(allPowerInfo: Power[]) {
        this.removeChildrenEvents(this.view.powerList);
        this.view.powerList.removeChildren();
        this.allPowerInfo = allPowerInfo;
        for (let index = 0; index < allPowerInfo.length; index++) {
            const config = allPowerInfo[index];
            const btn = PowerBtn.getBtn(config.powerName, config.id);
            this.AddClick(btn, this.changePowerChannel.bind(this, index, this.page))
            this.view.powerList.addChild(btn);
        }
    }

}