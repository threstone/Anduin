class ChooseCards extends BaseView<BaseUI.UIChooseCards>{

    private _replaceIndexes: number[];

    protected init() {
        this.view = BaseUI.UIChooseCards.createInstance();
        this.view.chooseBtn.describe.text = '确定';
    }

    private onBtnClick() {
        GameModel.ins().C_PREPARE_TO_START(this._replaceIndexes);
        //TODO test
        GameDispatcher.getInstance().emit('S_REPLACE_CARDS', {
            "cards": [
                { "cardId": 3, "attack": 1, "health": 2, "fee": 1, "uid": 1 },
                { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 },
                { "cardId": 2, "attack": 2, "health": 4, "fee": 1, "uid": 1 }
            ], "replaceCardIndexes": [0, 1]
        })
        GameDispatcher.getInstance().emit('S_ROUND_START_EVENT', { "uid": 2, "fee": 0, "maxFee": 0 });
    }

    private replaceCards(msg: GamePto.S_REPLACE_CARDS) {
        this.view.touchable = false;
        const promiseArr = [];
        for (let index = 0; index < msg.replaceCardIndexes.length; index++) {
            const replaceIndex = msg.replaceCardIndexes[index];
            promiseArr.push(this.deleteCardTween(replaceIndex));
            GameSceneView.ins().cards[replaceIndex] = new GameCard(msg.cards[replaceIndex]);
            this.cardAddTween(msg.cards.length, replaceIndex);
        }
        return Promise.all(promiseArr);
    }

    private deleteCardTween(replaceIndex: number) {
        return new Promise<void>((resolve) => {
            const poolPosition = GameSceneView.ins().getView().selfInfoBox.cardPoolBg.localToRoot();
            const cardItem = GameSceneView.ins().cards[replaceIndex].cardItem;
            egret.Tween.get(cardItem).to({ y: cardItem.y - cardItem.height }, 400)
                .to({ x: poolPosition.x }, 400)
                .to({ scaleX: 0.5, scaleY: 0.5, skewX: 90, skewY: 90, y: poolPosition.y }, 900)
                .call(() => {
                    this.view.removeChild(cardItem);
                    resolve();
                });
        });
    }

    private cardAddTween(length: number, index: number) {
        //牌池位置
        const poolPosition = GameSceneView.ins().getView().selfInfoBox.cardPoolBg.localToRoot();
        const interval = 20;
        const cardWidth = BaseUI.UICardItem.createInstance().width;
        const needWidth = (length - 1) * interval + cardWidth * length;
        const startX = (this.view.width - needWidth) / 2;

        const gameCard = GameSceneView.ins().cards[index];
        this.view.addChild(gameCard.cardItem);

        gameCard.cardItem.skewX = 90;
        gameCard.cardItem.skewY = 90;
        gameCard.cardItem.scaleX = 0.5;
        gameCard.cardItem.scaleY = 0.5;
        gameCard.cardItem.x = poolPosition.x;
        gameCard.cardItem.y = poolPosition.y;

        egret.Tween.get(gameCard.cardItem).to({ scaleX: 1, scaleY: 1, skewX: 0, skewY: 0 }, 700);
        egret.Tween.get(gameCard.cardItem).to({ x: startX + index * interval + index * cardWidth, y: 416 }, 1000);
    }



    /**多一个isFirst是因为有可能后面有卡牌起手多发牌 */
    public open(handCards: GamePto.ICard[], isFirst: boolean): void {
        super.open();

        this.addEffectListener('S_REPLACE_CARDS', this.replaceCards);
        this.AddClick(this.view.chooseBtn, this.onBtnClick);

        this._replaceIndexes = [];
        for (let index = 0; index < handCards.length; index++) {
            const cardInfo = handCards[index];
            const gameCard = new GameCard(cardInfo);
            GameSceneView.ins().cards.push(gameCard);
            //卡牌出现展示动画
            this.cardAddTween(handCards.length, index);
            //最后的硬币不加点击事件
            if (!isFirst && index === handCards.length - 1) {
                continue;
            }
            this.AddClick(gameCard.cardItem, () => {
                gameCard.cardItem.grayed = !gameCard.cardItem.grayed;
                if (gameCard.cardItem.grayed) {
                    this._replaceIndexes.push(index);
                } else {
                    this._replaceIndexes.splice(this._replaceIndexes.indexOf(index))
                }
            });
        }
    }

    public close(): void {
        super.close()

        this.view.removeChildren();
        this.view.addChild(this.view.chooseBtn);
        this.view.touchable = true;
    }

}