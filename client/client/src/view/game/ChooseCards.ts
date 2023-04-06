class ChooseCards extends BaseView<BaseUI.UIChooseCards>{

    private _replaceIndexes: number[];
    private _cards: GameCard[];
    get cards() { return this._cards }

    private intervalId: number;
    private reqEndTime: number;

    protected init() {
        this.view = BaseUI.UIChooseCards.createInstance();
        this.view.chooseBtn.describe.text = '确定';
    }

    /**多一个isFirst是因为有可能后面有卡牌起手多发牌 */
    public open(handCards: GamePto.ICard[], replaceEndTime: number): void {
        super.open();

        this.addEffectListener('S_REPLACE_CARDS', this.replaceCards);
        this.AddClick(this.view.chooseBtn, this.onBtnClick);

        //倒计时
        this.reqEndTime = replaceEndTime;
        this.updateDesc();
        this.intervalId = setInterval(this.updateDesc.bind(this), 1000);

        this._cards = [];

        this._replaceIndexes = [];
        for (let index = 0; index < handCards.length; index++) {
            const cardInfo = handCards[index];
            const gameCard = new GameCard(cardInfo);
            this._cards.push(gameCard);
            //卡牌出现展示动画
            this.cardAddTween(handCards.length, index);
            this.AddClick(gameCard.cardItem, () => {
                gameCard.cardItem.grayed = !gameCard.cardItem.grayed;
                if (gameCard.cardItem.grayed) {
                    this._replaceIndexes.push(index);
                } else {
                    this._replaceIndexes.splice(this._replaceIndexes.indexOf(index), 1);
                }
            });
        }
    }

    public close(): void {
        super.close()
        clearInterval(this.intervalId);

        //close已经把所有时间清除了
        for (let index = 0; index < this._cards.length; index++) {
            const card = this._cards[index];
            this.view.removeChild(card.cardItem);
        }

        this.view.touchable = true;
        this.view.chooseBtn.visible = true;
    }

    private updateDesc() {
        this.view.tips.text = `${Utils.formatTime(this.reqEndTime - Date.now())}`;
    }

    private onBtnClick() {
        GameModel.ins().C_PREPARE_TO_START(this._replaceIndexes);
    }

    private replaceCards(msg: GamePto.S_REPLACE_CARDS) {
        if (msg.uid !== UserModel.ins().uid) {
            //当接收到对方的数据时说明两边都好了
            return this.showAddStartHandCards();
        }
        this.view.touchable = false;
        this.view.chooseBtn.visible = false;
        const promiseArr = [];
        for (let index = 0; index < msg.replaceCardIndexes.length; index++) {
            const replaceIndex = msg.replaceCardIndexes[index];
            promiseArr.push(this.deleteCardTween(replaceIndex));
            this._cards[replaceIndex] = new GameCard(msg.cards[replaceIndex]);
            this.cardAddTween(msg.cards.length, replaceIndex);
        }
        return Promise.all(promiseArr);
    }

    private deleteCardTween(replaceIndex: number) {
        return new Promise<void>((resolve) => {
            const poolPosition = GameSceneView.ins().getView().selfInfoBox.cardPoolBg.localToRoot();
            const cardItem = this._cards[replaceIndex].cardItem;
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

        const gameCard = this._cards[index];
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

    private async showAddStartHandCards() {
        this.close();
        await HandCardView.ins().showAddStartHandCards(this.cards);
        this._cards = null;
    }
}