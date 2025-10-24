const DeckCardsNum = 40;
class DeckInfo {
    /**创建卡组数据缓存 */
    private _cardsInfo: { count: number, cardInfo: CardInterface }[];
    /**当前卡牌数量 */
    public cardCount: number;
    /**英雄卡Id */
    public heroId: number;
    public heroCard: CardInterface;

    public powerId: CardsPto.PowerType;
    public deckName: string;
    public deckId: number

    constructor() {
        this.clear();
    }

    get cardsInfo() { return this._cardsInfo }

    public startDeckEdit(powerId: CardsPto.PowerType, deckName: string, deckInfo: CardsPto.IDeck) {
        this.powerId = powerId;
        this.deckName = deckName;
        this.deckId = -1;
        this.heroId = -1;
        //修改已有的卡组
        if (deckInfo !== null) {
            this.deckId = deckInfo.deckId || -1;
            this.cardCount = 0;
            this.heroId = deckInfo.heroId || -1;
            this.heroCard = CardsModel.ins().getCardConfigById(this.heroId);
            for (let index = 0; index < deckInfo.cards.length; index++) {
                const info = deckInfo.cards[index];
                const cardInfo = CardsModel.ins().getCardConfigById(info.id);
                this._cardsInfo.push({ count: info.count, cardInfo })
                this.cardCount += info.count;
            }
        }
    }

    public clear() {
        this._cardsInfo = [];
        this.heroId = -1;
        this.heroCard = null;
        this.cardCount = 0;
        this.powerId = CardsPto.PowerType.Common;
        this.deckName = '';
        this.deckId = -1;
    }

    /**
     * 检查将要加入的卡牌是否可以加入
     */
    private addCardCheck(cardInfo: CardInterface) {
        if (cardInfo.cardType !== CardsPto.CardType.Hero && this.cardCount >= DeckCardsNum) {
            SystemModel.ins().showTips(`最多携带${DeckCardsNum}张卡牌`);
            return false;
        }
        if (this.heroId !== -1 && cardInfo.cardType === CardsPto.CardType.Hero) {
            SystemModel.ins().showTips('英雄卡只能携带一张');
            return false;
        }
        if (cardInfo.powerId !== this.powerId && cardInfo.powerId !== CardsPto.PowerType.Common) {
            SystemModel.ins().showTips('只能携带本职业卡或中立卡');
            return false;
        }
        return true;
    }

    /**
     * 向卡组添加卡牌
     */
    public doAddCard(cardInfo: CardInterface): boolean {
        if (this.addCardCheck(cardInfo) === false) {
            return false;
        }
        const cardsInfo = this._cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            //已经有了
            if (cardInfo.cardId === info.cardInfo.cardId) {
                if (cardInfo.quality === CardsPto.QualityType.Premium) {
                    SystemModel.ins().showTips('同一种橙卡只能携带一张');
                    return false;
                }
                if (info.count === 3) {
                    SystemModel.ins().showTips('同一张卡最多携带了3张了');
                    return false;
                }
                info.count++;
                this.cardCount++;
                return true;
            }
        }

        if (cardInfo.cardType === CardsPto.CardType.Hero) {
            this.heroId = cardInfo.cardId;
            this.heroCard = cardInfo;
            return true;
        }
        this.cardCount++;
        cardsInfo.push({ cardInfo, count: 1 });
        cardsInfo.sort((a, b) => {
            if (a.cardInfo.fee === b.cardInfo.fee) {
                return a.cardInfo.quality - b.cardInfo.quality;
            }
            return a.cardInfo.fee - b.cardInfo.fee;
        });
        return true;
    }
}