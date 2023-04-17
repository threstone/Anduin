class ActionRecordView extends BaseView<BaseUI.UIActionRecordCom> {

    private _msgPool: IMessage[];

    protected init() {
        this.view = GameSceneView.ins().getView().record;
        this._msgPool = [];
    }

    public open(): void {
        super.open();
        this.addEffectListener('S_MOVE', this.onMove);
        this.addEffectListener('S_ENTITY_DEAD', this.onEntityDead);
        this.addEffectListener('S_CARD_DENY', this.onCardDeny);
        this.addEffectListener('S_SELF_EFFECT', this.onCardEffect);
        this.addEffectListener('S_ACTION_RECORD', this.onActionRecord);
    }

    public close(): void {
        super.close();
        this.view.list.removeChildren();
        this._msgPool = [];
    }

    private addRecord(item: BaseUI.UIActionRecordItem, msg: IMessage) {
        const list = this.view.list;
        list.touchable = true;
        if (list.numChildren >= 15) {
            const delItem = list.removeChildAt(0);
            this.removeTargetEvents(delItem);
            this._msgPool.shift();
        }

        list.addChild(item);
        this._msgPool.push(msg);

        //增加悬浮事件
        this.addEvent(item, mouse.MouseEvent.MOUSE_OVER, this.onRecordItemHoverStart.bind(this, item), this);
        this.addEvent(item, mouse.MouseEvent.MOUSE_OUT, this.onRecordItemHoverEnd, this);
    }

    private getRecordItem(uid: number, cardId: number) {
        const item = BaseUI.UIActionRecordItem.createInstance();
        item.selfBg.visible = uid === UserModel.ins().uid;
        item.enemyBg.visible = uid !== UserModel.ins().uid;
        if (cardId !== -1) {
            RES.getResByUrl(`./resource/card/${cardId}.jpg`, (data: egret.Texture) => {
                if (!data) {
                    return
                }
                item.cardImg.texture = data;
            });
        }
        return item;
    }

    private onRecordItemHoverStart(item: BaseUI.UIActionRecordItem) {
        GameSceneView.ins().getView().grayed = true;
        this.view.grayed = false;
        const index = this.view.list.getChildIndex(item);
        console.log(index);
        const msg = this._msgPool[index];
        ActionRecordDetailView.ins().open(msg);
    }

    private onRecordItemHoverEnd() {
        ActionRecordDetailView.ins().close();
        console.log('out');
        GameSceneView.ins().getView().grayed = false;
    }

    // /**使用卡牌 */
    // private async onUseCard(msg: GamePto.S_USE_CARD) {
    //     const item = this.getRecordItem(msg.uid, msg.card.cardId);
    //     this.addRecord(item, msg);
    //     // const cardTypeName = CardsModel.ins().getCardTypeName(msg.card.cardType);
    //     // const cardName = CardsModel.ins().getCardNameByCardId(msg.card.cardId);
    //     // this.addRecord(`${msg.uid === UserModel.ins().uid ? '你' : '对方'} 使用了[${cardTypeName}] : [${cardName}]`, msg.uid);
    // }

    /**移动 */
    private async onMove(msg: GamePto.S_MOVE) {
        const item = this.getRecordItem(msg.uid, msg.card.cardId);
        item.moveImg.visible = true;
        this.addRecord(item, msg);
        // const cardName = CardsModel.ins().getCardNameByCardId(msg.card.cardId);
        // this.addRecord(`[${cardName}] 从(${msg.sourceX},${msg.sourceY})移动到了(${msg.card.blockX},${msg.card.blockY})`, msg.uid);
    }

    // /**攻击 */
    // private async onAtk(msg: GamePto.S_ATTACK) {
    //     const sourceCardInfo = MapModel.ins().getEntityCard(msg.sourceX, msg.sourceY, msg.sourceId);
    //     const item = this.getRecordItem(msg.uid, sourceCardInfo.cardId);
    //     item.atkImg.visible = true;
    //     this.addRecord(item, msg);
    //     // const sName = CardsModel.ins().getCardNameByCardId(sourceCardInfo.cardId);
    //     // const targetCardInfo = MapModel.ins().getEntityCardByPoint(msg.targetX, msg.targetY, msg.targetId);
    //     // const tName = CardsModel.ins().getCardNameByCardId(targetCardInfo.cardId);
    //     // this.addRecord(`[${sName}(${msg.sourceX},${msg.sourceY})] 攻击 [${tName}(${msg.targetX},${msg.targetY})] 造成了 ${msg.damage} 点伤害`, msg.uid);
    // }

    /**死亡 */
    private async onEntityDead(msg: GamePto.S_ENTITY_DEAD) {
        const item = this.getRecordItem(msg.deadCard.uid, msg.deadCard.cardId);
        item.deadImg.visible = true;
        this.addRecord(item, msg);
        // const cardName = CardsModel.ins().getCardNameByCardId(msg.deadCard.cardId);
        // this.addRecord(`[${cardName}(${msg.deadCard.blockX},${msg.deadCard.blockY})] 死亡了`, msg.deadCard.uid);
    }

    /**反制 */
    private async onCardDeny(msg: GamePto.S_CARD_DENY) {
        const item = this.getRecordItem(msg.from.uid, msg.from.cardId);
        item.denyImg.visible = true;
        this.addRecord(item, msg);
        // const sName = CardsModel.ins().getCardNameByCardId(msg.from.cardId);
        // const tName = CardsModel.ins().getCardNameByCardId(msg.target.cardId);
        // this.addRecord(`[${sName}] 反制了 [${tName}]`, msg.from.uid);
    }

    /**卡牌效果 */
    private onCardEffect(msg: GamePto.S_SELF_EFFECT) {
        const item = this.getRecordItem(msg.card.uid, msg.card.cardId);
        item.effectImg.visible = true;
        this.addRecord(item, msg);
    }

    private onActionRecord(msg: GamePto.S_ACTION_RECORD) {
        const item = this.getRecordItem(msg.source.uid, msg.source.cardId);
        switch (msg.recordType) {
            case GamePto.RecordType.Attack:
                item.atkImg.visible = true;
                break;
            case GamePto.RecordType.Effect:
                item.effectImg.visible = true;
                break;
            case GamePto.RecordType.Move:
                item.moveImg.visible = true;
                break;
            case GamePto.RecordType.Dead:
                item.deadImg.visible = true;
                break;
            case GamePto.RecordType.Deny:
                item.denyImg.visible = true;
                break;
        }
        this.addRecord(item, msg);
    }
}