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
    }

    public close(): void {
        super.close()
        
        for (let index = 0; index < this._cards.length; index++) {
            const card = this._cards[index];
            this.view.removeChild(card.cardItem);
        }
        this._cards = [];
    }

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
            const cardItem = cards[index].cardItem;
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
            let cacheX = 0;
            let cacheY = 0;
            cardItem.draggable = true;
            this.addEvent(cardItem, fairygui.DragEvent.DRAG_START, (evt: fairygui.DragEvent) => {
                cacheX = cardItem.x;
                cacheY = cardItem.y;
            }, this);
            this.addEvent(cardItem, fairygui.DragEvent.DRAG_END, (evt: fairygui.DragEvent) => {
                cardItem.x = cacheX;
                cardItem.y = cacheY;
                cardItem.scaleX = 0.5;
                cardItem.scaleY = 0.5;
            }, this);
        }

        //悬浮变大、拖动使用
        return this.updateCardsPostion(opTime);
    }

    public removeCard(gameCard: GameCard) {
        const index = this._cards.indexOf(gameCard);
        if (index === -1) {
            return;
        }
        this.removeTargetEvents(gameCard.cardItem);
        this.view.removeChild(gameCard.cardItem);
        this._cards.splice(index);
    }

    //根据手牌数量和卡牌大小计算卡牌位置并移动
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
        // throw new Error("Method not implemented.");
    }

}