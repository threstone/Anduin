abstract class LeftInfoBox extends BaseView<BaseUI.UILeftInfoBox>{

    protected isSelf: boolean;
    /**悬浮时的显示卡牌 */
    private _detailCard: BaseUI.UICardItem;

    private _eventMap: Map<number, BaseUI.UIEventItem>;

    protected init() {
        this._eventMap = new Map<number, BaseUI.UIEventItem>();
    }

    public open() {
        super.open();

        this.observe('InitLeftHeroInfo', this.initLeftHero);
        this.observe('UpdateLeftHeroInfo', this.updateLeftHeroInfo);
        this.addEffectListener('S_USE_CARD', this.onUseCard);
        this.addEffectListener('S_EVENT_UPDATE', this.onEventUpdate);
        this.addEffectListener('S_MAP_DATA', this.updateEvent);
        this.addEffectListener('S_CARD_DENY', this.cardDeny);
    }

    public close(): void {
        super.close();
        this.view.eventList.removeChildren();
        this._eventMap.clear();
        this._detailCard = null;
    }

    /**反制卡牌 */
    private cardDeny(msg: GamePto.S_CARD_DENY) {
        if (this.isHandler(msg.from.uid)) {
            const eventItem = this._eventMap.get(msg.from.id);
            this.removeEventItem(msg.from.id, eventItem);
            const cardDetail = CardItem.getCardDetail(msg.from);
            const rootPoint = eventItem.localToRoot();
            cardDetail.x = rootPoint.x;
            cardDetail.y = rootPoint.y;
            return GameSceneView.ins().showCardToLeft(cardDetail);
        }
    }

    /**更新事件item */
    private updateEvent() {
        let eventCards = MapModel.ins().eventCards;
        for (let index = 0; index < eventCards.length; index++) {
            const cardInfo = eventCards[index];
            if (this._eventMap.has(cardInfo.id)) {
                this.onEventUpdate(cardInfo);
            } else {
                this.addEventItem(cardInfo);
            }
        }
    }

    /**当事件卡被使用 */
    private onUseCard(msg: GamePto.S_USE_CARD) {
        if (!msg.isSuccess || this.isHandler(msg.uid) === false) {
            return;
        }

        //不是事件卡也不处理
        if (msg.card.cardType !== CardsPto.CardType.Event) {
            return;
        }

        //加入到eventList中
        this.addEventItem(msg.card);
    }

    /**当事件信息更新 */
    private onEventUpdate(card: GamePto.ICard) {
        if (this.isHandler(card.uid) === false) {
            return;
        }

        const eventItem = this._eventMap.get(card.id);
        if (card.health <= 0) {
            this.removeEventItem(card.id, eventItem);
        } else {
            eventItem.times.text = `${card.health}`;
        }
    }

    /**删除eventItem */
    private removeEventItem(id: number, eventItem: BaseUI.UIEventItem) {
        if (!eventItem) {
            return;
        }
        this.removeTargetEvents(eventItem);
        this.view.eventList.removeChild(eventItem);
        this._eventMap.delete(id);
    }

    /**添加eventItem到eventList中 */
    private addEventItem(card: GamePto.ICard) {
        if (this.isHandler(card.uid) === false) {
            return;
        }
        
        const eventItem = EventItem.getItem(card);
        this._eventMap.set(card.id, eventItem);
        this.view.eventList.addChild(eventItem);

        //如果卡片id为-1则说明是秘密卡牌,不需要添加悬浮事件
        if (card.cardId === -1) {
            return;
        }

        this.addEvent(eventItem, mouse.MouseEvent.MOUSE_OVER, (event: egret.TouchEvent) => {
            this._detailCard = CardItem.getCardDetail(card);
            this.view.addChild(this._detailCard);

            const point = this.view.rootToLocal(event.stageX, event.stageY);
            //防止超出屏幕
            point.y -= Math.max(0, event.stageY + this._detailCard.height - fairygui.GRoot.inst.height)
            this._detailCard.x = point.x + eventItem.width;
            this._detailCard.y = point.y;
        }, this);

        this.addEvent(eventItem, mouse.MouseEvent.MOUSE_OUT, () => {
            this.view.removeChild(this._detailCard);
        }, this);
    }

    /**初始化英雄信息 */
    private initLeftHero(evt: EventData) {
        const card: GamePto.ICard = evt.data;
        const cardConfig = CardsModel.ins().getCardConfigById(card.cardId);
        if (this.isHandler(card.uid)) {
            RES.getResByUrl(`./resource/card/${card.cardId}.jpg`, (data: egret.Texture) => {
                if (!data) {
                    return
                }
                this.view.heroImg.texture = data;
            });
            this.view.cardName.text = `${cardConfig.cardName}`;
            this.view.desc.text = `${cardConfig.desc}`;
            if (cardConfig.atkType === CardsPto.AtkType.CloseRange) {
                this.view.longRange.visible = false;
                this.view.closeRange.visible = true;
            } else {
                this.view.longRange.visible = true;
                this.view.closeRange.visible = false;
            }

            Utils.defineTextFieldSet(this.view.healthText, cardConfig.health);
            Utils.defineTextFieldSet(this.view.atkText, cardConfig.attack);
            this.view.atkText.text = `${card.attack}`;
            this.view.healthText.text = `${card.health}`;
        }
    }

    /**更新英雄信息 */
    private updateLeftHeroInfo(evt: EventData) {
        const card: GamePto.ICard = evt.data;
        if (this.isHandler(card.uid)) {
            this.view.atkText.text = `${card.attack}`;
            this.view.healthText.text = `${card.health}`;
        }
    }

    private isHandler(uid: number) {
        return (uid === UserModel.ins().uid) === this.isSelf;
    }
}

class SelfLeftInfoBox extends LeftInfoBox {
    protected init() {
        super.init();
        this.view = GameSceneView.ins().getView().selfLeftInfoBox;
        this.isSelf = true;
    }
}

class TargetLeftInfoBox extends LeftInfoBox {
    protected init() {
        super.init();
        this.view = GameSceneView.ins().getView().targetLeftInfoBox;
        this.isSelf = false;
    }
}