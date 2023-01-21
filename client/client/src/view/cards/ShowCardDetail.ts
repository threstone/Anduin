class ShowCardDetail extends BaseView<BaseUI.UIShowCardDetail> {
    protected init() {
        this.view = BaseUI.UIShowCardDetail.createInstance();
    }

    public open(cardInfo: CardInterface): void {
        super.open();
        this.AddClick(this.view.close, this.close);
        this.changeShowCard(cardInfo);
    }

    private changeShowCard(cardInfo: CardInterface) {
        const newCard = CardItem.getItem(cardInfo);
        newCard.x = this.view.card.x;
        newCard.y = this.view.card.y;
        this.view.addChild(newCard)
        this.view.removeChild(this.view.card);
        this.view.card = newCard;
    }
}