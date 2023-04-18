class DeckChooseView extends BaseView<BaseUI.UIDeckChooseCom>{

    protected selectDeckId: number = -1;

    protected init() {
        this.view = BaseUI.UIDeckChooseCom.createInstance();
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

        this.observe('DeckUpdate', this.initView);

        this.initView();
        HallView.ins().addMiniChatToView(this);
    }

    public close(...param: any[]): void {
        super.close();
        this.selectDeckId = -1;
        this.view.heroCard.visible = false;
        HallView.ins().reAddMiniChat();
    }

    private initView() {
        const list = this.view.deckList;
        list.removeChildren();
        this.removeChildrenEvents(list);

        const deckList = CardsModel.ins().deckList;
        for (let index = 0; index < deckList.length; index++) {
            const cardGourpInfo = deckList[index];
            const cardsBtn = BaseUI.UICardsBtn.createInstance();
            cardsBtn.describe.text = `${cardGourpInfo.deckName}[${ConfigMgr.ins().powerConfig[cardGourpInfo.powerId].powerName}]` +
                `\n${CardsModel.ins().getDeckCardNum(cardGourpInfo)}/${DeckCardsNum}`;
            cardsBtn.grayed = !cardGourpInfo.accessToUse;
            this.AddClick(cardsBtn.delete, async () => {
                if (await TipsView.ins().open('确定要删除此卡组吗?')) {
                    CardsModel.ins().C_DELETE_DECK(cardGourpInfo.deckId);
                }
            });
            this.AddClick(cardsBtn.clickLoader, this.selectDeck.bind(this, cardGourpInfo));
            list.addChild(cardsBtn);
        }

        //Test code
        if (deckList[0]) {
            this.selectDeck(deckList[0])
        }
    }

    private selectDeck(cardGourpInfo: CardsPto.IDeck) {
        this.view.heroCard.visible = false;
        this.selectDeckId = -1;
        if (cardGourpInfo.accessToUse) {
            this.selectDeckId = cardGourpInfo.deckId;
        }
        this.view.selectDeckName.text = `${cardGourpInfo.deckName}[${ConfigMgr.ins().powerConfig[cardGourpInfo.powerId].powerName}]`;
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