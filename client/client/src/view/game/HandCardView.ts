enum SceneAreaEnum {
    nothing,
    deadPool,
    gameMap
}
class HandCardView extends BaseView<BaseUI.UIHandCardsCom> {

    private _cards: GameCard[];
    get cards() { return this._cards }

    private _cardPoolPosition: egret.Point;
    private _deadPoolPosition: egret.Point;

    protected init() {
        this.view = GameSceneView.ins().getView().selfHand;;
        this._cards = [];

        const cardPoolRoot = SelfInfoBox.ins().getView().cardPoolBg.localToRoot();
        this._cardPoolPosition = this.view.rootToLocal(cardPoolRoot.x, cardPoolRoot.y);

        const deadPoolRoot = SelfInfoBox.ins().getView().deadPoolBg.localToRoot();
        this._deadPoolPosition = this.view.rootToLocal(deadPoolRoot.x, deadPoolRoot.y);
    }

    public open(): void {
        super.open();

        this.addEffectListener('S_DRAW_CARDS', this.onDrawCards);
        this.addEffectListener('S_USE_CARD', this.onUseCard);
        this.addEffectListener('S_CARD_DENY', this.cardDeny);

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

    /**反制卡牌 */
    private cardDeny(msg: GamePto.S_CARD_DENY) {
        if (msg.target.uid === UserModel.ins().uid) {
            const gameCard = this._cards[msg.targetCardIndex];
            const cardItem = gameCard.cardItem;
            const root = cardItem.localToRoot();
            cardItem.x = root.x;
            cardItem.y = root.y;
            cardItem.setPivot(0, 0);
            this.removeCard(gameCard);
            const deadPoolRoot = SelfInfoBox.ins().getView().deadPoolBg.localToRoot();
            GameSceneView.ins().getView().addChild(cardItem);

            egret.Tween.get(cardItem).to({ y: this.view.y - cardItem.height * cardItem.scaleY, x: deadPoolRoot.x - cardItem.width, scaleX: 1, scaleY: 1 }, 400)
                .to({}, 2300)
                .to({ y: deadPoolRoot.y, skewX: 90, skewY: 90, scaleX: 0.5, scaleY: 0.5, x: deadPoolRoot.x }, 500)
                .call(() => {
                    GameSceneView.ins().getView().removeChild(cardItem);
                });
            this.updateCardsPostion(500);
        }
    }

    /**
     * 将卡牌换到指定位置
     */
    private removeCardTween(cardItem: BaseUI.UICardBackItem | BaseUI.UICardItem, x: number, y: number) {
        return new Promise<void>((resolve) => {
            egret.Tween.get(cardItem).to({ y: this.view.y - cardItem.height * cardItem.scaleY, x: x - cardItem.width, scaleX: 1, scaleY: 1 }, 400)
                .to({}, 400)
                .to({ y: y, skewX: 90, skewY: 90, scaleX: 0.5, scaleY: 0.5, x: x }, 700)
                .call(() => {
                    resolve();
                });
        })
    }

    /**抽卡疲劳 */
    private async onDrawCards(msg: GamePto.S_DRAW_CARDS) {
        if (msg.uid === UserModel.ins().uid) {
            await this.drawCards(msg);
            GameSceneView.ins().fatigue(msg.damages, UserModel.ins().uid);
            SelfInfoBox.ins().setCardPoolNum(msg.cardPoolNum);
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
            const oldIndex = this.view.getChildIndex(cardItem);
            this.addEvent(cardItem, mouse.MouseEvent.MOUSE_OVER, () => {
                this.view.setChildIndex(cardItem, 99);
                cardItem.scaleX = 1;
                cardItem.scaleY = 1;
            }, this);
            this.addEvent(cardItem, mouse.MouseEvent.MOUSE_OUT, () => {
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
                //不允许操作的情况
                if (!GameSceneView.ins().allowToOprate) {
                    this.restoreCard(gameCard);
                    return;
                }
                //弃牌
                if (SelfInfoBox.ins().isInDeadPool(event.stageX, event.stageY)) {
                    GameModel.ins().C_DISCARD(this.getCardIndex(cardItem));
                    return;
                }
                //费用不够
                if (gameCard.cardInfo.fee > GameModel.ins().fee) {
                    TipsView.ins().showTips("费用不够!");
                    this.restoreCard(gameCard);
                    return;
                }
                //尝试使用卡牌
                this.tryUseCard(event, gameCard).then((res) => {
                    if (res === false) {
                        this.restoreCard(gameCard);
                    }
                });
            }, this);
        }

        //悬浮变大、拖动使用
        return this.updateCardsPostion(opTime);
    }

    /**还原卡牌位置和大小 */
    private restoreCard(gameCard: GameCard) {
        //如果没有做出操作则把还原卡牌位置和大小
        const cardItem = gameCard.cardItem;
        cardItem.x = gameCard.cacheX;
        cardItem.y = gameCard.cacheY;
        cardItem.scaleY = 0.5;
        cardItem.scaleX = 0.5;
    }

    /**尝试使用卡牌 */
    private async tryUseCard(event: fairygui.DragEvent, gameCard: GameCard) {
        const cardItem = gameCard.cardItem;

        const mapPoint = new egret.Point();

        //拖入到战场则说明要使用卡牌，然后根据卡牌使用条件来执行后续逻辑
        if (!MapView.ins().isInMap(event.stageX, event.stageY, mapPoint)) {
            return false;
        }

        const cardConfig = CardsModel.ins().getCardConfigById(gameCard.cardInfo.cardId);
        const dataArr: number[] = [];
        //如果卡牌是建筑卡或者单位卡,则一定需要放到一个空格子中
        if (cardConfig.cardType === CardsPto.CardType.Building || cardConfig.cardType === CardsPto.CardType.Unit) {
            dataArr.push(mapPoint.x, mapPoint.y);
        }

        const cardIndex = this.getCardIndex(cardItem)
        const useType = cardConfig.useCondition[GamePto.UseConditionIndexEnum.UseConditionTypeIndex];
        switch (useType) {
            //无条件卡牌
            case GamePto.UseConditionEnum.NoCondition:
                GameModel.ins().C_USE_CARD(cardIndex, dataArr);
                break;
            //空格子
            case GamePto.UseConditionEnum.EmptyBlock:
            //友方单位
            case GamePto.UseConditionEnum.FriendlyUnit:
            //友方建筑
            case GamePto.UseConditionEnum.FriendlyBuilding:
            //敌方单位
            case GamePto.UseConditionEnum.EnemyUnit:
            //敌方建筑
            case GamePto.UseConditionEnum.EnemyBuilding:
            //所有单位
            case GamePto.UseConditionEnum.AllUnit:
            //所有建筑
            case GamePto.UseConditionEnum.AllBuilding:
            //友方地图实体
            case GamePto.UseConditionEnum.FriendEntity:
            //敌方地图实体
            case GamePto.UseConditionEnum.EnemyEntity:
            //所有地图实体
            case GamePto.UseConditionEnum.AllEntity:
                const tempArr = [];
                // 有些卡牌需要选择某些单位(友方、敌方或者都可以选择则), 选择完毕才可以执行
                if (!await SelectTargetView.ins().open(cardItem, tempArr, useType, cardConfig.useCondition[GamePto.UseConditionIndexEnum.UseConditionValueIndex])) {
                    return false;
                }
                dataArr.push(...tempArr)
                GameModel.ins().C_USE_CARD(cardIndex, dataArr);
                break;
            default:
                console.error("未知的使用条件类型:", useType);
                return false;
        }
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
    public async drawCards(msg: GamePto.S_DRAW_CARDS) {
        if (msg.inHandCards.length !== 0) {
            await this.addCard(ConfigMgr.ins().common.drawCardTime, ...GameCard.getGameCards(msg.inHandCards, this._cardPoolPosition.x, this._cardPoolPosition.y, 0.5, 90));
        }

        //弃掉拿不下的卡牌
        if (msg.discards.length !== 0) {
            await this.deleteCardByMaxHandCardNum(msg.discards);
        }
    }

    /**弃掉手牌拿不下的牌 */
    private deleteCardByMaxHandCardNum(cardsInfo: GamePto.ICard[]) {
        const deadCards = GameCard.getGameCards(cardsInfo, this._cardPoolPosition.x, this._cardPoolPosition.y, 0.5, 90);
        for (let index = 0; index < deadCards.length; index++) {
            const cardItem = deadCards[index].cardItem;
            this.view.addChild(cardItem);
            const showX = cardItem.x - cardItem.height * cardItem.scaleY + (index * cardItem.width * cardItem.scaleX);
            egret.Tween.get(cardItem).to({ x: showX, y: cardItem.y - cardItem.height * cardItem.scaleY, skewX: 0, skewY: 0 }, 400)
                .to({}, 1500)
                .to({ x: this._deadPoolPosition.x, y: this._deadPoolPosition.y, skewX: 90, skewY: 90 }, 300)
                .call(() => {
                    this.view.removeChild(cardItem);
                });
        }
        if (cardsInfo.length !== 0) {
            return this.wait(2200);
        }
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
            this.restoreCard(gameCard);
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
            const root = gameCard.cardItem.localToRoot();
            gameCard.cardItem.x = root.x;
            gameCard.cardItem.y = root.y;
            gameCard.cardItem.setPivot(0, 0);
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