class ChooseCards extends BaseView<BaseUI.UIChooseCards>{

    protected init() {
        this.view = BaseUI.UIChooseCards.createInstance();
        this.view.chooseBtn.describe.text = '确定';
    }

    /**多一个isFirst是因为有可能后面有卡牌起手多发牌 */
    public open(handCards: GamePto.ICard[], isFirst: boolean): void {
        super.open();




        const cards = [];
        this.AddClick(this.view.chooseBtn, () => {

        });

        const interval = 20;
        const cardWidth = BaseUI.UICardItem.createInstance().width;
        const needWidth = (handCards.length - 1) * interval + cardWidth * handCards.length;
        const startX = (this.view.width - needWidth) / 2;
        for (let index = 0; index < handCards.length; index++) {
            const cardInfo = handCards[index];
            const gameCard = new GameCard(cardInfo);
            cards.push(gameCard);
            this.view.addChild(gameCard.cardItem);
            gameCard.cardItem.x = startX + index * interval + index * cardWidth;
            gameCard.cardItem.y = 416;
        }
    }

}