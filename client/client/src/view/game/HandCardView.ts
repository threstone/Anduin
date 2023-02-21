enum SceneAreaEnum {
    nothing,
    deadPool,
    gameMap
}
class HandCardView extends BaseView<BaseUI.UIHandCardsCom> {

    private _cards: GameCard[];
    get cards() { return this._cards }

    protected init() {
        this.view = GameSceneView.ins().getView().selfHand;;
        this._cards = [];
    }

    public open(): void {
        super.open();

        this.addEffectListener('S_DRAW_CARDS', this.onDrawCards);
        this.addEffectListener('S_USE_CARD', this.onUseCard);
        this.observe('S_DISCARD', this.onDeleteCard);
    }

    public close(): void {
        super.close()

        for (let index = 0; index < this._cards.length; index++) {
            const card = this._cards[index];
            this.view.removeChild(card.cardItem);
        }
        this._cards = [];
    }

    /**抽卡疲劳 */
    private async onDrawCards(msg: GamePto.S_DRAW_CARDS) {
        if (msg.uid === UserModel.ins().uid) {
            await this.drawCards(...msg.cards);
            this.fatigue(msg.damages);
            SelfInfoBox.ins().setLeastCardNum(msg.cardPoolNum);
        }
    }

    public addCard(opTime: number, ...cards: GameCard[]) {
        this._cards.push(...cards);
        for (let index = 0; index < cards.length; index++) {
            const gameCard = cards[index];
            const cardItem = gameCard.cardItem;
            cardItem.setPivot(0, 0, true);
            this.view.addChild(cardItem);

            //初始化悬浮事件
            let oldIndex = this.view.getChildIndex(cardItem);
            this.addEvent(cardItem.dragLoader, mouse.MouseEvent.ROLL_OVER, () => {
                this.view.setChildIndex(cardItem, 99);
                cardItem.scaleX = 1;
                cardItem.scaleY = 1;
            }, this);
            this.addEvent(cardItem.dragLoader, mouse.MouseEvent.ROLL_OUT, () => {
                this.view.setChildIndex(cardItem, oldIndex);
                cardItem.scaleX = 0.5;
                cardItem.scaleY = 0.5;
            }, this);

            //初始化拖动事件
            cardItem.draggable = true;
            this.addEvent(cardItem, fairygui.DragEvent.DRAG_START, () => {
                gameCard.cacheX = cardItem.x;
                gameCard.cacheY = cardItem.y;
            }, this);
            this.addEvent(cardItem, fairygui.DragEvent.DRAG_END, (event: fairygui.DragEvent) => {
                //检查是否允许操作
                if (GameSceneView.ins().allowToOprate) {
                    if (SelfInfoBox.ins().isInDeadPool(event.stageX, event.stageY)) {
                        GameModel.ins().C_DISCARD(this.getCardIndex(cardItem));
                        return;
                    }

                    const mapPoint = new egret.Point();
                    if (MapView.ins().isInMap(event.stageX, event.stageY, mapPoint)) {
                        GameModel.ins().C_USE_CARD(this.getCardIndex(cardItem), mapPoint);
                        if (TEST_GAME) {
                            cardItem.x = gameCard.cacheX;
                            cardItem.y = gameCard.cacheY;
                            cardItem.scaleX = 0.5;
                            cardItem.scaleY = 0.5;
                            GameDispatcher.getInstance().emit('S_USE_CARD', { "isSuccess": true, "fee": 0, "feeMax": 10, "uid": 2, "cardIndex": this.getCardIndex(cardItem), "card": { "cardId": 3, "attack": 1, "health": 2, "fee": 1, "uid": 2, "blockX": mapPoint.x, "blockY": mapPoint.y } })
                        }
                        return;
                    }
                }
                cardItem.x = gameCard.cacheX;
                cardItem.y = gameCard.cacheY;
                cardItem.scaleX = 0.5;
                cardItem.scaleY = 0.5;
            }, this);
        }

        //悬浮变大、拖动使用
        return this.updateCardsPostion(opTime);
    }

    /**
     * 删除卡牌，移除相关事件
     */
    public removeCard(gameCard: GameCard) {
        const index = this._cards.indexOf(gameCard);
        if (index === -1) {
            return;
        }
        this.removeTargetEvents(gameCard.cardItem);
        this.removeTargetEvents(gameCard.cardItem.dragLoader);
        this.view.removeChild(gameCard.cardItem);
        this._cards.splice(index, 1);
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
        const cardWidth = this._cards[0].cardItem.width * scale;
        const cardHeight = this._cards[0].cardItem.height * scale;
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
        const y = (this.view.height - cardHeight) / 2 - cardHeight;
        for (let index = 0; index < cardsLen; index++) {
            const cardItem = this._cards[index].cardItem;
            egret.Tween.get(cardItem).to({
                x: startX + index * cardWidth + cardSpacing * index, y: y, scaleX: scale, scaleY: scale, skewX: 0, skewY: 0, pivotY: 1
            }, time);

        }
        return this.wait(time);
    }

    /** 将起始卡牌加入手牌*/
    public showAddStartHandCards(cards: GameCard[]) {
        for (let index = 0; index < cards.length; index++) {
            const card = cards[index];
            const localPoint = this.view.rootToLocal(card.cardItem.x, card.cardItem.y)
            card.cardItem.x = localPoint.x;
            card.cardItem.y = localPoint.y;
        }
        return this.addCard(800, ...cards);
    }

    /**抽卡 */
    public drawCards(...cardsInfo: GamePto.ICard[]) {
        const cardPoolPoint = SelfInfoBox.ins().getCardPoolRootPosition();
        const localPoint = this.view.rootToLocal(cardPoolPoint.x, cardPoolPoint.y);
        return this.addCard(ConfigMgr.ins().common.drawCardTime, ...GameCard.getGameCards(cardsInfo, localPoint.x, localPoint.y, 0.5, 90));
    }

    /**疲劳伤害 */
    public fatigue(damages: number[]) {
        //TODO
    }

    /**弃牌 */
    private onDeleteCard(evt: EventData) {
        const msg: GamePto.S_DISCARD = evt.data;
        if (msg.uid !== UserModel.ins().uid) {
            return;
        }

        const gameCard = this._cards[msg.cardIndex];
        if (msg.isSuccess) {
            this.removeCard(gameCard);
            SelfInfoBox.ins().feeSet(msg.fee, msg.feeMax);
            this.updateCardsPostion(500);
        } else {
            const cardItem = gameCard.cardItem;
            cardItem.x = gameCard.cacheX;
            cardItem.y = gameCard.cacheX;
            cardItem.scaleX = 0.5;
            cardItem.scaleY = 0.5;
        }
    }

    /**使用卡牌 */
    private async onUseCard(msg: GamePto.S_USE_CARD) {
        if (msg.uid !== UserModel.ins().uid) {
            return;
        }

        const gameCard = this._cards[msg.cardIndex];
        if (msg.isSuccess) {
            gameCard.cardInfo = msg.card;
            this.removeCard(gameCard);
            SelfInfoBox.ins().feeSet(msg.fee, msg.feeMax);
            this.updateCardsPostion(500);
            return GameSceneView.ins().useCardShow(gameCard);
        } else {
            const cardItem = gameCard.cardItem;
            cardItem.x = gameCard.cacheX;
            cardItem.y = gameCard.cacheY;
            cardItem.scaleX = 0.5;
            cardItem.scaleY = 0.5;
        }
    }

    /**获取卡牌下标 */
    private getCardIndex(cardItem: CardItem) {
        for (let index = 0; index < this._cards.length; index++) {
            if (this._cards[index].cardItem === cardItem) {
                return index;
            }
        }
        return -1;
    }
}