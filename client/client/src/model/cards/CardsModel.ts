class CardsModel extends BaseModel {

    /**根据不同势力整理过后的卡牌map */
    private _powerCardMap: Map<CardsPto.MsgType, CardInterface[]>;

    constructor() {
        super();
        this.initCards()
    }

    /**根据势力id获取对应势力的卡牌 */
    getPowerCards(powerId: CardsPto.MsgType) {
        return this._powerCardMap.get(powerId);
    }

    //整理卡牌到powerCardMap
    private initCards() {
        this._powerCardMap = new Map<CardsPto.MsgType, CardInterface[]>();
        const cards = ConfigMgr.ins().getAllCardsInfo();
        for (let index = 0; index < cards.length; index++) {
            const card = cards[index];
            let cardArr = this._powerCardMap.get(card.powerId);
            if (!cardArr) {
                cardArr = [];
                this._powerCardMap.set(card.powerId, cardArr);
            }
            cardArr.push(card);
        }
    }

}