class CardsGroupChooseView extends BaseView<BaseUI.UICardsGroupChooseCom>{

    protected selectGroupId: number = -1;

    protected init() {
        this.view = BaseUI.UICardsGroupChooseCom.createInstance();
        this.view.chooseBtn.describe.text = '选择';
        this.view.cardsViewBtn.describe.text = '我的收藏';
        this.view.heroCard.visible = false;
        this.view.tips.visible = false;
    }

    public open(...param: any[]): void {
        super.open();

        this.AddClick(this.view.close, this.close);
        this.AddClick(this.view.cardsViewBtn, this.onCardsViewBtnClick);
        this.AddClick(this.view.chooseBtn, this.onChooseBtnClick);

        this.observe('CardsGroupUpdate', this.initView);

        this.initView();
        HallView.ins().addMiniChatToView(this);
    }

    public close(...param: any[]): void {
        super.close();
        this.selectGroupId = -1;
        this.view.heroCard.visible = false;
        HallView.ins().reAddMiniChat();
    }

    private initView() {
        const list = this.view.cardGroupList;
        list.removeChildren();
        this.removeChildrenEvents(list);

        const cardGroups = CardsModel.ins().cardGroups;
        for (let index = 0; index < cardGroups.length; index++) {
            const cardGourpInfo = cardGroups[index];
            const cardsBtn = BaseUI.UICardsBtn.createInstance();
            cardsBtn.describe.text = `${cardGourpInfo.groupName}[${ConfigMgr.ins().powerConfig[cardGourpInfo.powerId].powerName}]` +
                `\n${CardsModel.ins().getGroupCardNum(cardGourpInfo)}/${GroupCardsNum}`;
            cardsBtn.grayed = !cardGourpInfo.accessToUse;
            this.AddClick(cardsBtn.delete, async () => {
                if (await TipsView.ins().open('确定要删除此卡组吗?')) {
                    CardsModel.ins().C_DELETE_CARD_GROUP(cardGourpInfo.groupId);
                }
            });
            this.AddClick(cardsBtn.clickLoader, this.selectGroup.bind(this, cardGourpInfo));
            list.addChild(cardsBtn);
        }

        //Test code
        if (cardGroups[0]) {
            this.selectGroup(cardGroups[0])
        }
    }

    private selectGroup(cardGourpInfo: CardsPto.ICardGroup) {
        this.view.heroCard.visible = false;
        this.selectGroupId = -1;
        if (cardGourpInfo.accessToUse) {
            this.selectGroupId = cardGourpInfo.groupId;
        }
        this.view.selectGroupName.text = `${cardGourpInfo.groupName}[${ConfigMgr.ins().powerConfig[cardGourpInfo.powerId].powerName}]`;
        const config = CardsModel.ins().getCardConfigById(cardGourpInfo.heroId);
        if (config && config.cardType === CardsPto.CardType.Hero) {
            this.view.heroCard.visible = true;
            CardItem.updateCard(this.view.heroCard, config);
        }
    }

    protected onChooseBtnClick() {

    }

    private onCardsViewBtnClick() {
        CardsView.ins().open();
        CardsView.ins().getView().displayObject.once(egret.Event.REMOVED_FROM_STAGE, this.initView, this);
    }
}