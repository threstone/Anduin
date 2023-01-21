class CardsModel extends BaseModel {

    /**根据不同势力整理过后的卡牌map */
    private _allCardMap: Map<CardsPto.PowerType, CardInterface[]>;

    /**根据不同势力整理过后的拥有卡牌map */
    private _ownerCardsMap: Map<CardsPto.PowerType, CardInterface[]>;

    constructor() {
        super();
        this.initCards()
    }

    /**根据筛选条件获取对应的卡牌 */
    getCardsByFilter(powerId: CardsPto.PowerType, fee: number) {
        const cardArr = this._ownerCardsMap.get(powerId);
        return this.filterCards(cardArr, fee)
    }

    /**根据筛选条件获取所有的卡牌 */
    getAllCardsByFilter(powerId: CardsPto.PowerType, fee: number) {
        const cardArr = this._allCardMap.get(powerId);
        return this.filterCards(cardArr, fee)
    }

    /**根据筛选条件从cardArr中筛选出对应的卡牌 */
    private filterCards(cardArr: CardInterface[], fee: number) {
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
        this._allCardMap = new Map<CardsPto.PowerType, CardInterface[]>();
        const cards = ConfigMgr.ins().allCardsInfo;
        for (let index = 0; index < cards.length; index++) {
            const card = cards[index];
            let cardArr = this._allCardMap.get(card.powerId);
            if (!cardArr) {
                cardArr = [];
                this._allCardMap.set(card.powerId, cardArr);
            }
            cardArr.push(card);
        }
        this.sortCardsByFee(this._allCardMap);
    }

    /**将卡牌数据按照费用排序 */
    private sortCardsByFee(cardMap: Map<CardsPto.PowerType, CardInterface[]>) {
        cardMap.forEach((cards) => {
            cards.sort((a, b) => {
                return a.fee - b.fee;
            })
        })
    }

    /**通过卡牌信息获取卡牌 */
    private getCardInfoById(cardId: number) {
        const cards = ConfigMgr.ins().allCardsInfo;
        for (let index = 0; index < cards.length; index++) {
            const cardInfo = cards[index];
            if (cardId === cardInfo.cardId) {
                return cardInfo;
            }
        }
    }

    /**返回卡牌收藏数据 */
    private S_CARDS_INFO(msg: CardsPto.S_CARDS_INFO) {
        this._ownerCardsMap = new Map<CardsPto.PowerType, CardInterface[]>();
        for (let index = 0; index < msg.cardInfos.length; index++) {
            const card = msg.cardInfos[index];
            const cardInfo = this.getCardInfoById(card.id);
            cardInfo.count = card.count;

            const cardArr = this.getOwnerCardsArrByPowerId(cardInfo.powerId);
            cardArr.push(cardInfo);
        }
        this.sortCardsByFee(this._ownerCardsMap);
    }

    private getOwnerCardsArrByPowerId(powerId: number) {
        let cardArr = this._ownerCardsMap.get(powerId);
        if (!cardArr) {
            cardArr = [];
            this._ownerCardsMap.set(powerId, cardArr);
        }
        return cardArr
    }

    /**制作卡牌结果 */
    private S_MAKE_CARD(msg: CardsPto.S_MAKE_CARD) {
        if (msg.code === 0) {
            const cardInfo = this.getCardInfoById(msg.cardId);
            cardInfo.count = (cardInfo.count || 0) + 1;
            //如果只有一张那就要在owner里面加上这个新卡的信息
            if (cardInfo.count === 1) {
                const cards = this.getOwnerCardsArrByPowerId(cardInfo.powerId);
                cards.push(cardInfo);
                this.sortCardsByFee(this._ownerCardsMap);
            }
            this.emit('CardChange', [cardInfo, true]);
        } else {
            TipsView.ins().showTips(`制作卡牌失败code:${msg.code}`)
        }
    }

    /**分解卡牌结果 */
    private S_DISASSEMBLE_CARD(msg: CardsPto.S_DISASSEMBLE_CARD) {
        if (msg.code === 0) {
            const cardInfo = this.getCardInfoById(msg.cardId);
            cardInfo.count = cardInfo.count - 1;
            //如果没有了那就要在owner里面去掉这张卡的信息
            if (cardInfo.count === 0) {
                const cards = this.getOwnerCardsArrByPowerId(cardInfo.powerId);
                for (let index = 0; index < cards.length; index++) {
                    const card = cards[index];
                    if (card.cardId === msg.cardId) {
                        cards.splice(index, 1);
                        break;
                    }
                }
            }
            this.emit('CardChange', [cardInfo, false]);
        } else {
            TipsView.ins().showTips(`分解卡牌失败code:${msg.code}`)
        }
    }

    /**请求卡牌收藏数据 */
    C_REQ_CARDS_INFO() {
        const msg = new CardsPto.C_REQ_CARDS_INFO();
        this.sendMsg(msg);
    }

    /**请求制作卡牌 */
    C_MAKE_CARD(cardId: number) {
        const msg = new CardsPto.C_MAKE_CARD();
        msg.cardId = cardId;
        this.sendMsg(msg);
    }

    /**请求分解卡牌 */
    C_DISASSEMBLE_CARD(cardId: number) {
        const msg = new CardsPto.C_DISASSEMBLE_CARD();
        msg.cardId = cardId;
        this.sendMsg(msg);
    }
}