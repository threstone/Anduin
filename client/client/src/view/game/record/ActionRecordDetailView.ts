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
        this.view.tips.visible = true;
        this.view.removeChild(this.tempCard);
        this.view.list.removeChildren();
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
        // 将传入的提示文本赋值给this.view.tips.text以显示
        this.view.tips.text = text;
        // 判断传入的uid是否等于当前用户的uid并相应改变文本颜色。
        this.view.tips.color = uid === UserModel.ins().uid ? 0x00FF00 : 0xFF0000;
    }


    /**
     * 显示影响的卡牌
     * @param affectedList 受影响的卡牌列表
     */
    private showAffectedCard(affectedList: GamePto.IAffectedCard[]) {
        // 如果受影响的卡牌列表为空，则隐藏箭头
        if (affectedList.length === 0) {
            this.view.arrow.visible = false;
            return;
        }

        // 获取卡牌列表对象
        const list = this.view.list;

        // 遍历受影响的卡牌列表并展示
        affectedList.forEach(affectInfo => {
            let cardItem: BaseUI.UICardItem | BaseUI.UICardBackItem;

            // 如果卡牌 ID 为 -1，则展示卡背
            if (affectInfo.card.cardId === -1) {
                cardItem = BaseUI.UICardBackItem.createInstance();
            } else {
                cardItem = CardItem.getCardByServerCard(affectInfo.card);
                this.showCardEffect(cardItem, affectInfo); // 展示卡牌效果
            }

            // 将卡牌添加到卡牌列表中
            list.addChild(cardItem);
        });

        // 计算卡牌列表需要缩放的比例
        const scale = this.calculateItemScale(list);

        // 如果需要缩放卡牌列表，则进行缩放
        if (scale < 1) {
            for (let index = 0; index < list.numChildren; index++) {
                const child = list.getChildAt(index);
                child.scaleX = scale;
                child.scaleY = scale;
                child.width *= scale;
                child.height *= scale;
            }
        }
    }

    /**计算子项缩放以展示出所有卡牌 */
    private calculateItemScale(list: fairygui.GList): number {
        const containerWidth = list.width;
        const containerHeight = list.height;
        const child = list.getChildAt(0);
        let itemWidth = child.width; // 所有子项宽度相同
        let itemHeight = child.height; // 所有子项高度相同

        const maxNumItemsPerRow = Math.floor(containerWidth / itemWidth); // 全部等比缩放情况下，每行最多子项数量
        let numRows = Math.ceil(list.numChildren / maxNumItemsPerRow); // 总行数

        if (numRows * itemHeight > containerHeight) { // 高度超出容器，等比缩放每个子项
            const scaleRatio = containerHeight / (numRows * itemHeight);
            itemWidth *= scaleRatio;
            itemHeight *= scaleRatio;

            const numItemsPerRow = Math.floor(containerWidth / itemWidth); // 当前等比缩放情况下，每行子项数量
            numRows = Math.ceil(list.numChildren / numItemsPerRow); // 更新总行数
        }

        return itemWidth / child.width;
    }

    private showCardEffect(cardItem: BaseUI.UICardItem, affectInfo: GamePto.IAffectedCard) {
        switch (affectInfo.type) {
            case GamePto.AffectedEnum.HpReduce:
                this.showHpReduceEffect(cardItem, affectInfo.value);
                break;
            case GamePto.AffectedEnum.HpAdd:
                this.showHpRecoveryEffect(cardItem, affectInfo.value);
                break;
        }
    }

    private showHpRecoveryEffect(cardItem: BaseUI.UICardItem, add: number) {
        const tips = BaseUI.UIRecoveryTips.createInstance();
        tips.countText.text = `+${add}`;
        cardItem.addChild(tips);
        tips.x = (cardItem.width - tips.width) / 2;
        tips.y = (cardItem.height - tips.height) / 2;
        egret.Tween.get(tips).to({ alpha: 0 }, 3000, egret.Ease.backInOut).call(() => {
            cardItem.removeChild(tips);
        });
    }

    private showHpReduceEffect(cardItem: BaseUI.UICardItem, damage: number) {
        const tips = BaseUI.UIDamageTips.createInstance();
        tips.damageDetail.text = `-${damage}`;
        cardItem.addChild(tips);
        tips.x = (cardItem.width - tips.width) / 2;
        tips.y = (cardItem.height - tips.height) / 2;
        egret.Tween.get(tips).to({ alpha: 0 }, 3000, egret.Ease.backInOut).call(() => {
            cardItem.removeChild(tips);
        });
    }

    /**移动 */
    private onMove(msg: GamePto.S_MOVE) {
        this.showSourceCard(msg.card);
        this.view.arrow.visible = false;
        const cardName = CardsModel.ins().getCardNameByCardId(msg.card.cardId);
        this.showTips(`[${cardName}] 从(${msg.sourceX},${msg.sourceY})移动到了(${msg.card.blockX},${msg.card.blockY})`, msg.uid);
    }

    /**攻击 */
    private onAtk(msg: GamePto.S_ATTACK) {
        this.showSourceCard(msg.from);
        const affectedList: GamePto.IAffectedCard[] = [];
        msg.targetList.forEach((targetCard) => {
            affectedList.push({ card: targetCard, type: GamePto.AffectedEnum.HpReduce, value: msg.damage })
        });
        const target = msg.targetList[0];
        const sName = CardsModel.ins().getCardNameByCardId(msg.from.cardId);
        const tName = CardsModel.ins().getCardNameByCardId(target.cardId);
        this.showTips(`[${sName}(${msg.from.blockX},${msg.from.blockY})] 攻击 [${tName}(${target.blockX},${target.blockY})] 造成了 ${msg.damage} 点伤害`, msg.uid);
        this.showAffectedCard(affectedList);
    }

    /**死亡 */
    private onEntityDead(msg: GamePto.S_ENTITY_DEAD) {
        this.showSourceCard(msg.deadCard);
        const cardName = CardsModel.ins().getCardNameByCardId(msg.deadCard.cardId);
        this.showTips(`[${cardName}(${msg.deadCard.blockX},${msg.deadCard.blockY})] 死亡了`, msg.deadCard.uid);
        this.view.arrow.visible = false;
    }

    /**反制 */
    private onCardDeny(msg: GamePto.S_CARD_DENY) {
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