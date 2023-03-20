class GameCard {

    cardItem: BaseUI.UICardItem;
    cardInfo: GamePto.ICard;

    cacheX: number;
    cacheY: number;

    childIndex: number;

    constructor(cardInfo: GamePto.ICard) {
        this.cardInfo = cardInfo;
        this.cardItem = CardItem.getItem(CardsModel.ins().getCardConfigById(cardInfo.cardId));
        this.cardItem.feeText.text = `${cardInfo.fee}`;
        this.cardItem.atkText.text = `${cardInfo.attack}`;
        this.cardItem.healthText.text = `${cardInfo.health}`;
        this.cardItem.cardNum.visible = false;
    }

    public static getGameCards(cardsInfo: GamePto.ICard[], x: number = 0, y: number = 0, scale: number = 1, skew: number = 0) {
        const gameCards: GameCard[] = [];
        for (let index = 0; index < cardsInfo.length; index++) {
            const gameCard = new GameCard(cardsInfo[index]);
            gameCards.push(gameCard);
            gameCard.cardItem.x = x;
            gameCard.cardItem.y = y;
            gameCard.cardItem.scaleX = scale;
            gameCard.cardItem.scaleY = scale;
            gameCard.cardItem.skewX = skew;
            gameCard.cardItem.skewY = skew;
        }
        return gameCards;
    }
}