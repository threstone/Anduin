class RecordView extends BaseView<BaseUI.UIRecordCom> {

    protected init() {
        this.view = GameSceneView.ins().getView().record;
    }

    public open(): void {
        super.open();
        this.addEffectListener('S_USE_CARD', this.onUseCard);
        this.addEffectListener('S_MOVE', this.onMove);
        this.addEffectListener('S_ATTACK', this.onAtk);
        this.addEffectListener('S_ENTITY_DEAD', this.onEntityDead);
        this.addEffectListener('S_CARD_DENY', this.onCardDeny);
    }

    public close(): void {
        super.close();
        this.view.list.removeChildren();
    }

    public addRecord(text: string, uid: number) {
        const list = this.view.list;
        if (list.numChildren > 15) {
            list.removeChildAt(0);
        }
        const textField = new fairygui.GTextField();
        textField.autoSize = fairygui.AutoSizeType.Height;
        textField.color = uid === UserModel.ins().uid ? 0x00FF00 : 0xFF0000;
        textField.width = list.width;
        textField.text = text;
        textField.fontSize = 15;
        textField.stroke = 1;
        textField.strokeColor = 0x000000;
        list.addChild(textField);
        list.scrollToView(list.numChildren - 1);
    }

    /**使用卡牌 */
    private async onUseCard(msg: GamePto.S_USE_CARD) {
        const cardTypeName = CardsModel.ins().getCardTypeName(msg.card.cardType);
        const cardName = CardsModel.ins().getCardNameByCardId(msg.card.cardId);
        this.addRecord(`${msg.uid === UserModel.ins().uid ? '你' : '对方'} 使用了[${cardTypeName}] : [${cardName}]`, msg.uid);
    }

    /**移动 */
    private async onMove(msg: GamePto.S_MOVE) {
        const cardName = CardsModel.ins().getCardNameByCardId(msg.card.cardId);
        this.addRecord(`[${cardName}] 从(${msg.sourceX},${msg.sourceY})移动到了(${msg.card.blockX},${msg.card.blockY})`, msg.uid);
    }

    /**攻击 */
    private async onAtk(msg: GamePto.S_ATTACK) {
        const sourceCardInfo = MapModel.ins().getEntityCardByPoint(msg.sourceX, msg.sourceY, msg.sourceId);
        const sName = CardsModel.ins().getCardNameByCardId(sourceCardInfo.cardId);
        const targetCardInfo = MapModel.ins().getEntityCardByPoint(msg.targetX, msg.targetY, msg.targetId);
        const tName = CardsModel.ins().getCardNameByCardId(targetCardInfo.cardId);
        this.addRecord(`[${sName}(${msg.sourceX},${msg.sourceY})] 攻击 [${tName}(${msg.targetX},${msg.targetY})] 造成了 ${msg.damage} 点伤害`, msg.uid);
    }

    /**死亡 */
    private async onEntityDead(msg: GamePto.S_ENTITY_DEAD) {
        const cardName = CardsModel.ins().getCardNameByCardId(msg.deadCard.cardId);
        this.addRecord(`[${cardName}(${msg.deadCard.blockX},${msg.deadCard.blockY})] 死亡了`, msg.deadCard.uid);
    }

    /**反制 */
    private async onCardDeny(msg: GamePto.S_CARD_DENY) {
        const sName = CardsModel.ins().getCardNameByCardId(msg.from.cardId);
        const tName = CardsModel.ins().getCardNameByCardId(msg.target.cardId);
        this.addRecord(`[${sName}] 反制了 [${tName}]`, msg.from.uid);
    }
}