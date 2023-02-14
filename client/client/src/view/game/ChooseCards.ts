class ChooseCards extends BaseView<BaseUI.UIChooseCards>{

    private _cards: GameCard[];
    private _replaceIndexes: number[];

    protected init() {
        this.view = BaseUI.UIChooseCards.createInstance();
        this.view.chooseBtn.describe.text = '确定';
    }

    private onBtnClick() {
        GameModel.ins().C_PREPARE_TO_START(this._replaceIndexes);
        // this.deleteCardTween(1);
    }

    private replaceCards(evt: EventData) {
        this.view.touchable = false;
        const msg: GamePto.S_REPLACE_CARDS = evt.data;
        for (let index = 0; index < msg.replaceCardIndexes.length; index++) {
            const replaceIndex = msg.replaceCardIndexes[index];
            this.deleteCardTween(replaceIndex);
            this._cards[replaceIndex] = new GameCard(msg.cards[replaceIndex]);
            this.cardAddTween(msg.cards.length, replaceIndex);
        }
    }

    private deleteCardTween(replaceIndex: number) {
        const poolPosition = GameSceneView.ins().getView().selfInfoBox.cardPoolBg.localToRoot();
        const cardItem = this._cards[replaceIndex].cardItem;
        egret.Tween.get(cardItem).to({ y: cardItem.y - cardItem.height }, 400)
            .to({ x: poolPosition.x }, 400)
            .to({ scaleX: 0.5, scaleY: 0.5, skewX: 90, skewY: 90, y: poolPosition.y }, 900)
            .call(() => {
                this.view.removeChild(cardItem);
            });
    }

    private cardAddTween(length: number, index: number) {
        //牌池位置
        const poolPosition = GameSceneView.ins().getView().selfInfoBox.cardPoolBg.localToRoot();
        const interval = 20;
        const cardWidth = BaseUI.UICardItem.createInstance().width;
        const needWidth = (length - 1) * interval + cardWidth * length;
        const startX = (this.view.width - needWidth) / 2;

        const gameCard = this._cards[index]
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

        this.observe('S_REPLACE_CARDS', this.replaceCards);

        this._cards = [];
        this._replaceIndexes = [];
        this.AddClick(this.view.chooseBtn, this.onBtnClick);


        for (let index = 0; index < handCards.length; index++) {
            const cardInfo = handCards[index];
            const gameCard = new GameCard(cardInfo);
            this._cards.push(gameCard);
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

        GameSceneView.ins().selfHandCom.addStartHandCards(this._cards)
    }

}