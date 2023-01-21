class CardsModel extends BaseModel {

    /**根据不同势力整理过后的卡牌map */
    private _powerCardMap: Map<CardsPto.PowerType, CardInterface[]>;

    constructor() {
        super();
        this.initCards()
    }

    /**根据筛选条件获取对应的卡牌 */
    getCardsByFilter(powerId: CardsPto.PowerType, fee: number) {
        const cardArr = this._powerCardMap.get(powerId);
        const res: CardInterface[] = [];
        const maxFeeFilter = ConfigMgr.ins().common.maxFeeFilter;
        for (let index = 0; index < cardArr.length; index++) {
            const card = cardArr[index];
            if (fee == -1 || fee === card.fee || (fee === maxFeeFilter && card.fee >= fee)) {
                res.push(card);
            }
        }
        return res;
    }

    //整理卡牌到powerCardMap
    private initCards() {
        this._powerCardMap = new Map<CardsPto.PowerType, CardInterface[]>();
        const cards = ConfigMgr.ins().allCardsInfo;
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