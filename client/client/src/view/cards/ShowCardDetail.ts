class ShowCardDetail extends BaseView<BaseUI.UIShowCardDetail> {

    protected init() {
        this.view = BaseUI.UIShowCardDetail.createInstance();
        this.view.make.describe.text = '制作';
        this.view.disassemble.describe.text = '分解';
    }

    public open(cardInfo: CardInterface): void {
        super.open();

        this.AddClick(this.view.close, this.close);
        this.AddClick(this.view.make, this.cardMake.bind(this, cardInfo));
        this.AddClick(this.view.disassemble, this.cardDisassemble.bind(this, cardInfo));

        this.observe('CardChange', this.onCardChange)

        this.changeShowCard(cardInfo);
    }

    private onCardChange(evt: EventData) {
        const cardInfo: CardInterface = evt.data[0];
        CardItem.setNum(this.view.card, cardInfo.count);

        const isMake: CardInterface = evt.data[1];
        //TODO 根据isMake的值判断是制造还是分解，用来做一些特效
        if (isMake) {

        }else{

        }
    }

    private cardMake(cardInfo: CardInterface) {
        CardsModel.ins().C_MAKE_CARD(cardInfo.cardId);
    }

    private cardDisassemble(cardInfo: CardInterface) {
        CardsModel.ins().C_DISASSEMBLE_CARD(cardInfo.cardId);
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