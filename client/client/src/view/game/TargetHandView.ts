class TargetHandView extends BaseView<BaseUI.UIHandCardsCom>{

    private _cards: BaseUI.UICardBackItem[];

    protected init() {
        this.view = GameSceneView.ins().getView().targetHand;
        this._cards = [];
    }

    public open(): void {
        super.open();
        this.addEffectListener('S_DRAW_CARDS', this.onDrawCards)
        this.observe('S_REPLACE_CARDS', this.onReplaceCards);
        this.observe('S_GAME_START', this.drawStartHandCards);

    }

    public close(): void {
        super.close()

        for (let index = 0; index < this._cards.length; index++) {
            const card = this._cards[index];
            this.view.removeChild(card);
        }
        this._cards = [];
    }

    private onReplaceCards(evt: EventData) {
        const msg: GamePto.S_REPLACE_CARDS = evt.data;
        if (msg.uid !== UserModel.ins().uid) {
            TargetHandView.ins().replace(msg.replaceCardIndexes);
        }
    }

    private async onDrawCards(msg: GamePto.S_DRAW_CARDS) {
        if (msg.uid !== UserModel.ins().uid) {
            await TargetHandView.ins().drawCardsToHand(msg.cardCount);
            TargetHandView.ins().fatigue(msg.damages);
            TargetInfoBox.ins().setLeastCardNum(msg.cardPoolNum);
        }
    }

    /** 抽起始手牌*/
    public drawStartHandCards() {
        this.drawCardsToHand(ConfigMgr.ins().common.startHandCardNum, 1000);
    }

    /**换牌 */
    public replace(replaceIndexs: number[]) {
        let poolPosition = GameSceneView.ins().getView().targetInfoBox.cardPoolBg.localToRoot();
        poolPosition = this.view.rootToLocal(poolPosition.x, poolPosition.y)
        for (let index = 0; index < replaceIndexs.length; index++) {
            const replaceIndex = replaceIndexs[index];
            this.removeCardTween(replaceIndex, poolPosition.x, poolPosition.y);
            const card = BaseUI.UICardBackItem.createInstance();
            card.x = poolPosition.x;
            card.y = poolPosition.y;
            card.scaleX = 0.5;
            card.scaleY = 0.5;
            this.view.addChild(card)
            this._cards[replaceIndex] = card;
        }
        this.updateCardsPostion(800);
    }

    /**抽牌到手牌 */
    public drawCardsToHand(cardNum: number, time: number = ConfigMgr.ins().common.drawCardTime) {
        let poolPosition = GameSceneView.ins().getView().targetInfoBox.cardPoolBg.localToRoot();
        poolPosition = this.view.rootToLocal(poolPosition.x, poolPosition.y)
        for (let index = 0; index < cardNum; index++) {
            const card = BaseUI.UICardBackItem.createInstance();
            card.x = poolPosition.x;
            card.y = poolPosition.y;
            card.scaleX = 0.5;
            card.scaleY = 0.5;
            card.skewX = 90;
            card.skewY = 90;
            this.view.addChild(card)
            this._cards.push(card);
        }
        return this.updateCardsPostion(time);
    }

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
    private removeCardToDeadPool(index: number) {
        const poolPosition = GameSceneView.ins().getView().targetInfoBox.deadPoolBg.localToRoot();
        this.removeCardTween(index, poolPosition.x, poolPosition.y);
        this._cards.splice(index, 1);
    }

    /**将卡设置到牌池 */
    private removeCardToCardPool(index: number) {
        const poolPosition = GameSceneView.ins().getView().targetInfoBox.cardPoolBg.localToRoot();
        this.removeCardTween(index, poolPosition.x, poolPosition.y);
        this._cards.splice(index, 1);
    }

    /**
     * 将卡牌换到指定位置
     */
    private removeCardTween(index: number, x: number, y: number) {
        const cardItem = this._cards[index];
        egret.Tween.get(cardItem).to({ y: cardItem.y + cardItem.height * cardItem.scaleY, skewX: 90, skewY: 90 }, 400)
            .to({ x: x }, 400)
            .to({ y: y }, 900)
            .call(() => {
                this.view.removeChild(cardItem);
            });
    }

    /**疲劳伤害 */
    public fatigue(damages: number[]) {
        throw new Error("Method not implemented.");
    }
}