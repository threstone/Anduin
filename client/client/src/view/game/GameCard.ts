class GameCard {

    cardItem: BaseUI.UICardItem;
    cardInfo: GamePto.ICard;

    constructor(cardInfo: GamePto.ICard) {
        this.cardInfo = cardInfo;
        this.cardItem = CardItem.getItem(CardsModel.ins().getCardInfoById(cardInfo.cardId));
        this.cardItem.feeText.text = `${cardInfo.fee}`;
        this.cardItem.atkText.text = `${cardInfo.attack}`;
        this.cardItem.healthText.text = `${cardInfo.health}`;
        this.cardItem.cardNum.visible = false;
    }
}