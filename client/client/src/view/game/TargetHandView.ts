class TargetHandView extends BaseView<BaseUI.UIHandCardsCom>{

    private _cards: BaseUI.UICardBackItem[];
    private _cardPoolPosition: egret.Point;
    private _deadPoolPosition: egret.Point;

    protected init() {
        this.view = GameSceneView.ins().getView().targetHand;
        this._cards = [];

        const cardPoolRoot = TargetInfoBox.ins().getView().cardPoolBg.localToRoot();
        this._cardPoolPosition = this.view.rootToLocal(cardPoolRoot.x, cardPoolRoot.y);

        const deadPoolRoot = TargetInfoBox.ins().getView().deadPoolBg.localToRoot();
        this._deadPoolPosition = this.view.rootToLocal(deadPoolRoot.x, deadPoolRoot.y);
    }

    public open(): void {
        super.open();
        this.addEffectListener('S_DRAW_CARDS', this.onDrawCards)
        this.addEffectListener('S_USE_CARD', this.onUseCard)
        this.addEffectListener('S_CARD_DENY', this.cardDeny);

        this.observe('S_REPLACE_CARDS', this.onReplaceCards);
        this.observe('S_GAME_START', this.drawStartHandCards);
        this.observe('S_DISCARD', this.onDeleteCard);
    }

    public close(): void {
        super.close()

        for (let index = 0; index < this._cards.length; index++) {
            const card = this._cards[index];
            this.view.removeChild(card);
        }
        this._cards = [];
    }

    /**反制卡牌 */
    private cardDeny(msg: GamePto.S_CARD_DENY) {
        if (msg.target.uid !== UserModel.ins().uid) {
            //将手牌位置的卡换成对应的卡牌
            const cardItem = CardItem.getCardByServerCard(msg.target);
            const cardBg = this._cards[msg.targetCardIndex];
            const root = cardBg.localToRoot();
            cardItem.x = root.x;
            cardItem.y = root.y;
            cardItem.scaleX = 0.5;
            cardItem.scaleY = 0.5;
            GameSceneView.ins().getView().addChild(cardItem);
            //删卡数据
            this.view.removeChild(cardBg);
            this._cards.splice(msg.targetCardIndex, 1);
            this.updateCardsPostion(400);
            this.removeCardTween(cardItem, this._deadPoolPosition.x, this._deadPoolPosition.y).then(() => {
                GameSceneView.ins().getView().removeChild(cardItem)
            });
        }
    }

    /**换卡 */
    private onReplaceCards(evt: EventData) {
        const msg: GamePto.S_REPLACE_CARDS = evt.data;
        if (msg.uid !== UserModel.ins().uid) {
            TargetHandView.ins().replace(msg.replaceCardIndexes);
        }
    }

    /**抽卡疲劳 */
    private async onDrawCards(msg: GamePto.S_DRAW_CARDS) {
        if (msg.uid !== UserModel.ins().uid) {
            await TargetHandView.ins().drawCardsToHand(msg.inHandCardCount, msg.discardsCount);
            GameSceneView.ins().fatigue(msg.damages, GameModel.ins().targetUid);
            TargetInfoBox.ins().setCardPoolNum(msg.cardPoolNum);
        }
    }

    /** 抽起始手牌*/
    public drawStartHandCards() {
        this.drawCardsToHand(ConfigMgr.ins().common.startHandCardNum, 0, 1000);
    }

    /**换牌 */
    public replace(replaceIndexs: number[]) {
        for (let index = 0; index < replaceIndexs.length; index++) {
            const replaceIndex = replaceIndexs[index];
            this.removeCardTween(this._cards[replaceIndex], this._cardPoolPosition.x, this._cardPoolPosition.y);
            const card = this.getCardByPool();
            this.view.addChild(card)
            this._cards[replaceIndex] = card;
        }
        this.updateCardsPostion(800);
    }

    /**获取一张在卡池上的卡 */
    private getCardByPool() {
        const card = BaseUI.UICardBackItem.createInstance();
        card.x = this._cardPoolPosition.x;
        card.y = this._cardPoolPosition.y;
        card.scaleX = 0.5;
        card.scaleY = 0.5;
        card.skewX = 90;
        card.skewY = 90;
        return card;
    }

    /**抽牌到手牌 */
    public async drawCardsToHand(inHandCardCount: number, discardsCount: number, time: number = ConfigMgr.ins().common.drawCardTime) {
        //抽拍动画
        for (let index = 0; index < inHandCardCount; index++) {
            const card = this.getCardByPool();
            this.view.addChild(card)
            this._cards.push(card);
        }
        if (inHandCardCount !== 0) {
            await this.updateCardsPostion(time);
        }

        //弃牌动画
        for (let index = 0; index < discardsCount; index++) {
            const card = this.getCardByPool();
            this.view.addChild(card);
            const showX = card.x - card.height * card.scaleY + (index * card.width * card.scaleX);
            egret.Tween.get(card).to({ x: showX, y: card.height * card.scaleY, skewX: 0, skewY: 0 }, 400)
                .to({}, 1500)
                .to({ x: this._deadPoolPosition.x, y: this._deadPoolPosition.y, skewX: 90, skewY: 90 }, 300)
                .call(() => {
                    this.view.removeChild(card);
                });
        }
        if (discardsCount > 0) {
            await this.wait(2200);
        }
    }

    /**根据手牌数量和卡牌大小计算卡牌位置并移动 */
    private updateCardsPostion(time: number) {
        const cardsLen = this._cards.length;
        if (cardsLen === 0) {
            return;
        }
        //计算各自卡牌的位置，然后用缓动动画移过去
        const maxSpacing = 15;
        const scale = 0.5;
        const cardWidth = this._cards[0].width * scale;
        const allCardsWidth = cardsLen * cardWidth;
        const viewWidth = this.view.width;
        let cardSpacing = 0;
        let startX = 0;
        //宽大于容器大小了,要叠加
        if (allCardsWidth >= viewWidth) {
            cardSpacing = (viewWidth - allCardsWidth) / (cardsLen - 1);
            startX = 0;
        } else {
            //卡牌宽度容器足够装下
            cardSpacing = (viewWidth - allCardsWidth) / (cardsLen - 1);
            if (cardSpacing > maxSpacing) {
                startX = (viewWidth - (allCardsWidth + (cardsLen - 1) * maxSpacing)) / 2;
                cardSpacing = maxSpacing;
            }
        }
        for (let index = 0; index < cardsLen; index++) {
            const cardItem = this._cards[index];
            egret.Tween.get(cardItem).to({
                x: startX + index * cardWidth + cardSpacing * index, y: 2, scaleX: scale, scaleY: scale, skewX: 0, skewY: 0
            }, time);

        }
        return this.wait(time);
    }


    /**将一张卡设置到墓地 */
    private async removeCardToDeadPool(index: number) {
        const cardItem = this._cards[index];
        this.removeCardTween(cardItem, this._deadPoolPosition.x, this._deadPoolPosition.y).then(() => {
            this.view.removeChild(cardItem);
            this.updateCardsPostion(400);
        });
        this._cards.splice(index, 1);
    }

    /**将卡设置到牌池 */
    private async removeCardToCardPool(index: number) {
        const cardItem = this._cards[index];
        this.removeCardTween(cardItem, this._cardPoolPosition.x, this._cardPoolPosition.y).then(() => {
            this.view.removeChild(cardItem);
            this.updateCardsPostion(400);
        });
        this._cards.splice(index, 1);
    }

    /**
     * 将卡牌换到指定位置
     */
    private removeCardTween(cardItem: BaseUI.UICardBackItem | BaseUI.UICardItem, x: number, y: number) {
        return new Promise<void>((resolve) => {
            egret.Tween.get(cardItem).to({ y: cardItem.y + cardItem.height * cardItem.scaleY, skewX: 90, skewY: 90 }, 400)
                .to({ x: x }, 400)
                .to({ y: y }, 500)
                .call(() => {
                    resolve();
                });
        })
    }

    /**弃牌 */
    private onDeleteCard(evt: EventData) {
        const msg: GamePto.S_DISCARD = evt.data;
        if (msg.isSuccess && msg.uid !== UserModel.ins().uid) {
            this.removeCardToDeadPool(msg.cardIndex);
            TargetInfoBox.ins().feeSet(msg.fee, msg.feeMax);
        }
    }

    /**使用卡牌 */
    private onUseCard(msg: GamePto.S_USE_CARD) {
        if (!msg.isSuccess || msg.uid === UserModel.ins().uid) {
            return;
        }

        TargetInfoBox.ins().feeSet(msg.fee, msg.feeMax);

        //如果是秘密事件卡则不允许被看到
        if (msg.card.cardType === CardsPto.CardType.Event && msg.card.cardId === -1) {
            //删卡数据
            const cardBg = this._cards[msg.cardIndex];
            const root = cardBg.localToRoot();
            this.view.removeChild(cardBg);
            this._cards.splice(msg.cardIndex, 1);
            cardBg.x = root.x;
            cardBg.y = root.y;
            this.updateCardsPostion(400);
            return GameSceneView.ins().showCardToLeft(cardBg);
        }//正常卡牌的话要给对手看是什么卡
        else {
            //将手牌位置的卡换成对应的卡牌
            const gameCard = new GameCard(msg.card);
            const cardBg = this._cards[msg.cardIndex];
            const root = cardBg.localToRoot();
            gameCard.cardItem.x = root.x;
            gameCard.cardItem.y = root.y;
            gameCard.cardItem.scaleX = 0.5;
            gameCard.cardItem.scaleY = 0.5;
            //删卡数据
            this.view.removeChild(cardBg);
            this._cards.splice(msg.cardIndex, 1);
            this.updateCardsPostion(400);
            return GameSceneView.ins().useCardShow(gameCard);
        }
    }
}