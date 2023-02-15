class HandCardView extends BaseView<BaseUI.UIHandCardsCom> {

    private _isSelf: boolean;
    private _cards: GameCard[];
    get cards() { return this._cards }

    protected init(view: BaseUI.UIHandCardsCom, isSelf: boolean) {
        this.view = view;
        this._isSelf = isSelf;
        this._cards = [];
    }

    public addCard() {
        //悬浮变大、拖动使用
        this.updataCardsPostion(1000);
    }

    public removeCard() {

        this.updataCardsPostion(100);
    }

    //根据手牌数量和卡牌大小计算卡牌位置
    private updataCardsPostion(time: number, callback?: Function) {
        const cardsLen = this._cards.length;
        if (cardsLen === 0) {
            return;
        }
        //计算各自卡牌的位置，然后用缓动动画移过去
        const maxInterval = 15;
        const scale = 0.5;
        const cardWidth = this._cards[0].cardItem.width * scale
        const allWidth = cardsLen * cardWidth;
        const viewWidth = this.view.width;
        let interval = 0;
        let startX = 0;
        //款大于容器大小了,要叠加
        if (allWidth >= viewWidth) {
            interval = (viewWidth - allWidth) / (cardsLen - 1);
            startX = 0;
        } else {
            //卡牌宽度容器足够装下
            interval = (viewWidth - allWidth) / (cardsLen - 1);
            if (interval > maxInterval) {
                startX = (viewWidth - (allWidth + (cardsLen - 1) * 15)) / 2;
                interval = maxInterval;
            }
        }

        for (let index = 0; index < cardsLen; index++) {
            const cardItem = this._cards[index].cardItem;
            egret.Tween.get(cardItem).to({ x: startX + index * cardWidth + interval * index, y: 2, scaleX: scale, scaleY: scale }, time)
        }
        // if (callback) {
        //     callback();
        // }
    }

    public showAddStartHandCards() {
        ChooseCards.ins().close();
        for (let index = 0; index < this.cards.length; index++) {
            const card = this.cards[index];
            const localPoint = this.view.rootToLocal(card.cardItem.x, card.cardItem.y)
            card.cardItem.x = localPoint.x;
            card.cardItem.y = localPoint.y;
            this.view.addChild(card.cardItem);
        }
        this.updataCardsPostion(800)
    }

    public onGameStart() {
        this._cards = [];
    }

}