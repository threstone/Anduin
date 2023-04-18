class ActionRecordDetailView extends BaseView<BaseUI.UIActionRecordDetail>{

    private tempCard: BaseUI.UICardItem;

    protected init() {
        this.view = BaseUI.UIActionRecordDetail.createInstance();
        this.view.x = (fairygui.GRoot.inst.width - this.view.width) / 2;
        this.view.y = (fairygui.GRoot.inst.height - this.view.height) / 2;
    }

    public open(msg: IMessage) {
        super.open();
        this.showDetail(msg);
    }

    public close(): void {
        super.close();
        this.view.unknowCard.x = 0;
        this.view.unknowCard.visible = false;
        this.view.arrow.visible = true;
        this.view.removeChild(this.tempCard);
    }

    private showDetail(msg: IMessage) {
        switch (msg.scmd) {
            case GamePto.S_MOVE.prototype.scmd:
                this.onMove(msg as GamePto.S_MOVE);
                break;
            case GamePto.S_ATTACK.prototype.scmd:
                this.onAtk(msg as GamePto.S_ATTACK);
                break;
            case GamePto.S_ENTITY_DEAD.prototype.scmd:
                this.onEntityDead(msg as GamePto.S_ENTITY_DEAD);
                break;
            case GamePto.S_CARD_DENY.prototype.scmd:
                this.onCardDeny(msg as GamePto.S_CARD_DENY);
                break;
            case GamePto.S_SELF_EFFECT.prototype.scmd:
                this.onCardEffect(msg as GamePto.S_SELF_EFFECT);
                break;
            case GamePto.S_ACTION_RECORD.prototype.scmd:
                this.onActionRecord(msg as GamePto.S_ACTION_RECORD);
                break;
        }
    }

    private showSourceCard(serverCard: GamePto.ICard) {
        if (serverCard.cardId === -1) {
            this.view.unknowCard.visible = true;
            return;
        }
        const card = CardItem.getCardByServerCard(serverCard);
        card.x = this.view.unknowCard.x;
        card.y = this.view.unknowCard.y;
        this.tempCard = card;
        this.view.addChild(card);
    }

    private showTips(text: string, uid: number) {
        this.view.tips.text = text;
        this.view.tips.color = uid === UserModel.ins().uid ? 0x00FF00 : 0xFF0000;
    }

    private showAffectedCard(affectedList: GamePto.IAffectedCard[]) {
        if (affectedList.length === 0) {
            this.view.arrow.visible = false;
        }
        //todo

        affectedList.forEach(card => {
            if (card.card.cardId === -1) {
                //展示卡背
            }
        });
    }

    /**移动 */
    private async onMove(msg: GamePto.S_MOVE) {
        this.showSourceCard(msg.card);
        this.view.arrow.visible = false;
        const cardName = CardsModel.ins().getCardNameByCardId(msg.card.cardId);
        this.showTips(`[${cardName}] 从(${msg.sourceX},${msg.sourceY})移动到了(${msg.card.blockX},${msg.card.blockY})`, msg.uid);
    }

    /**攻击 */
    private async onAtk(msg: GamePto.S_ATTACK) {
        this.showSourceCard(msg.from);
        const affectedList: GamePto.IAffectedCard[] = [];
        msg.targetList.forEach((targetCard) => {
            affectedList.push({ card: targetCard, type: GamePto.AffectedEnum.HealthReduce, value: msg.damage })
        });
        const target = msg.targetList[0];
        const sName = CardsModel.ins().getCardNameByCardId(msg.from.cardId);
        const tName = CardsModel.ins().getCardNameByCardId(msg.targetList[0].cardId);
        this.showTips(`[${sName}(${msg.from.blockX},${msg.from.blockY})] 攻击 [${tName}(${target.blockX},${target.blockY})] 造成了 ${msg.damage} 点伤害`, msg.uid);
    }

    /**死亡 */
    private async onEntityDead(msg: GamePto.S_ENTITY_DEAD) {
        this.showSourceCard(msg.deadCard);
        const cardName = CardsModel.ins().getCardNameByCardId(msg.deadCard.cardId);
        this.showTips(`[${cardName}(${msg.deadCard.blockX},${msg.deadCard.blockY})] 死亡了`, msg.deadCard.uid);
    }

    /**反制 */
    private async onCardDeny(msg: GamePto.S_CARD_DENY) {
        this.showSourceCard(msg.from);
        this.showAffectedCard([{ card: msg.target, type: GamePto.AffectedEnum.Show }]);

        const sName = CardsModel.ins().getCardNameByCardId(msg.from.cardId);
        const tName = CardsModel.ins().getCardNameByCardId(msg.target.cardId);
        this.showTips(`[${sName}] 反制了 [${tName}]`, msg.from.uid);
    }

    /**卡牌效果 */
    private onCardEffect(msg: GamePto.S_SELF_EFFECT) {
        this.showSourceCard(msg.card);
        this.view.tips.visible = false;
        this.showAffectedCard(msg.affectedList);
    }

    /**兼容所有日志的协议 */
    private onActionRecord(msg: GamePto.S_ACTION_RECORD) {
        this.showSourceCard(msg.source);
        this.showAffectedCard(msg.affectedList);
        this.view.tips.visible = false;
    }
}