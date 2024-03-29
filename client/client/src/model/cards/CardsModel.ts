class CardsModel extends BaseModel {

    /**根据不同势力整理过后的卡牌map */
    private _allCardMap: Map<CardsPto.PowerType, CardInterface[]>;

    /**根据不同势力整理过后的拥有卡牌map */
    private _ownerCardsMap: Map<CardsPto.PowerType, CardInterface[]>;

    /**卡组数据 */
    private _deckList: CardsPto.IDeck[];

    get deckList() {
        return this._deckList;
    }

    constructor() {
        super();
        this.initCards()
    }

    /**返回卡牌可移动步数,负值代表飞行 */
    public getCardMoveStep(cardInfo: GamePto.ICard) {
        return cardInfo.movement;
    }

    /**返回卡牌可攻击距离 */
    public getCardAtkRange(cardInfo: GamePto.ICard) {
        return cardInfo.atkRange;
    }

    /**用于用户创建卡组没有设置卡组名时的逻辑 */
    public getDeckName(powerId: CardsPto.PowerType) {
        const arr = [];
        for (let index = 0; index < this._deckList.length; index++) {
            const deck = this._deckList[index];
            if (deck.powerId === powerId) {
                arr.push(deck.deckName)
            }
        }
        let nameIndex = 0;
        let powerName = `${ConfigMgr.ins().powerConfig[powerId].powerName}${nameIndex}`;
        while (arr.indexOf(powerName) !== -1) {
            nameIndex++;
            powerName = `${ConfigMgr.ins().powerConfig[powerId].powerName}${nameIndex}`;
        }
        return powerName;
    }

    /**获取卡组中的卡牌数量 */
    public getDeckCardNum(deck: CardsPto.IDeck) {
        let sum = 0;
        for (let index = 0; index < deck.cards.length; index++) {
            const cardInfo = deck.cards[index];
            sum += cardInfo.count;
        }
        return sum
    }

    /**根据筛选条件获取对应的卡牌 */
    public getCardsByFilter(powerId: CardsPto.PowerType, fee: number) {
        const cardArr = this._ownerCardsMap.get(powerId);
        if (!cardArr) {
            return [];
        }
        return this.filterCards(cardArr, fee)
    }

    /**根据筛选条件获取所有的卡牌 */
    public getAllCardsByFilter(powerId: CardsPto.PowerType, fee: number) {
        const cardArr = this._allCardMap.get(powerId);
        if (!cardArr) {
            return [];
        }
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
        const cardMap = ConfigMgr.ins().allCardsMap;
        cardMap.forEach((card) => {
            let cardArr = this._allCardMap.get(card.powerId);
            if (!cardArr) {
                cardArr = [];
                this._allCardMap.set(card.powerId, cardArr);
            }
            cardArr.push(card);
        })
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
    public getCardConfigById(cardId: number) {
        return ConfigMgr.ins().allCardsMap.get(cardId);
    }

    /**根据势力获取自身拥有的卡牌 */
    private getOwnerCardsArrByPowerId(powerId: number) {
        let cardArr = this._ownerCardsMap.get(powerId);
        if (!cardArr) {
            cardArr = [];
            this._ownerCardsMap.set(powerId, cardArr);
        }
        return cardArr
    }

    /**通过卡牌类型获得卡片类型名称 */
    public getCardTypeName(cardType: CardsPto.CardType) {
        switch (cardType) {
            case CardsPto.CardType.Building:
                return '建筑卡';
            case CardsPto.CardType.Unit:
                return '单位卡';
            case CardsPto.CardType.Event:
                return '事件卡';
            case CardsPto.CardType.Magic:
                return '法术卡';
            case CardsPto.CardType.Hero:
                return '英雄卡';
            default:
                return '未知卡';
        }
    }

    /**获得卡片名称 */
    public getCardNameByCardId(cardId: number) {
        const cardConfig = this.getCardConfigById(cardId);
        if (!cardConfig) {
            return '未知';
        }
        return cardConfig.cardName;
    }

    /**返回卡牌收藏数据 */
    private S_CARDS_INFO(msg: CardsPto.S_CARDS_INFO) {
        this._ownerCardsMap = new Map<CardsPto.PowerType, CardInterface[]>();
        for (let index = 0; index < msg.cardInfos.length; index++) {
            const card = msg.cardInfos[index];
            const cardInfo = this.getCardConfigById(card.id);
            cardInfo.count = card.count;

            const cardArr = this.getOwnerCardsArrByPowerId(cardInfo.powerId);
            cardArr.push(cardInfo);
        }
        this._deckList = msg.deckList;
        this.sortCardsByFee(this._ownerCardsMap);
        this.emit('S_CARDS_INFO');
    }


    /**制作卡牌结果 */
    private S_MAKE_CARD(msg: CardsPto.S_MAKE_CARD) {
        if (msg.code === 0) {
            const cardInfo = this.getCardConfigById(msg.cardId);
            cardInfo.count = (cardInfo.count || 0) + 1;
            //如果只有一张那就要在owner里面加上这个新卡的信息
            if (cardInfo.count === 1) {
                const cards = this.getOwnerCardsArrByPowerId(cardInfo.powerId);
                cards.push(cardInfo);
                this.sortCardsByFee(this._ownerCardsMap);
            }
            this.emit('CardChange', [cardInfo, true]);
        } else {
            //code的提示语可以提取到配置里头，防止每次都要写
            switch (msg.code) {
                case 1:
                    SystemModel.ins().showTips(`制作卡牌失败,请稍后再试。`)
                    break;
                case 2:
                    SystemModel.ins().showTips(`金币不足无法购买。`)
                    break;
            }
        }
    }

    /**分解卡牌结果 */
    private S_DISASSEMBLE_CARD(msg: CardsPto.S_DISASSEMBLE_CARD) {
        if (msg.code === 0) {
            const cardInfo = this.getCardConfigById(msg.cardId);
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
            //code的提示语可以提取到配置里头，防止每次都要写
            switch (msg.code) {
                case 1:
                    SystemModel.ins().showTips(`分解卡牌失败,请稍后再试。`)
                    break;
            }
        }
    }
    /**保存卡组返回 */
    private S_SAVE_DECK(msg: CardsPto.S_SAVE_DECK) {
        for (let index = 0; index < this._deckList.length; index++) {
            const info = this._deckList[index];
            if (info.deckId === msg.deck.deckId) {
                this._deckList[index] = msg.deck;
                this.emit('DeckUpdate');
                return;
            }
        }
        this._deckList.push(msg.deck);
        this.emit('DeckUpdate');
    }

    /**删除卡组返回 */
    private S_DELETE_DECK(msg: CardsPto.S_DELETE_DECK) {
        for (let index = 0; index < this._deckList.length; index++) {
            const info = this._deckList[index];
            if (info.deckId === msg.deckId) {
                this._deckList.splice(index, 1);
                this.emit('DeckUpdate');
                return;
            }
        }
    }

    /**请求卡牌收藏数据 */
    public C_REQ_CARDS_INFO() {
        const msg = new CardsPto.C_REQ_CARDS_INFO();
        this.sendMsg(msg);
    }

    /**请求制作卡牌 */
    public C_MAKE_CARD(cardId: number) {
        const msg = new CardsPto.C_MAKE_CARD();
        msg.cardId = cardId;
        this.sendMsg(msg);
    }

    /**请求分解卡牌 */
    public C_DISASSEMBLE_CARD(cardId: number) {
        const msg = new CardsPto.C_DISASSEMBLE_CARD();
        msg.cardId = cardId;
        this.sendMsg(msg);
    }

    /**保存卡牌数据 */
    public C_SAVE_CARDS(deckInfo: DeckInfo) {
        const msg = new CardsPto.C_SAVE_CARDS();
        msg.deck = new CardsPto.Deck();
        msg.deck.deckId = deckInfo.deckId;
        msg.deck.powerId = deckInfo.powerId;
        msg.deck.deckName = deckInfo.deckName;
        msg.deck.heroId = deckInfo.heroId;
        const cardsInfo = deckInfo.cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            msg.deck.cards.push({ id: info.cardInfo.cardId, count: info.count });
        }
        this.sendMsg(msg);
    }

    /**请求删除卡组 */
    public C_DELETE_DECK(deckId: number) {
        const msg = new CardsPto.C_DELETE_DECK();
        msg.deckId = deckId;
        this.sendMsg(msg);
    }
}