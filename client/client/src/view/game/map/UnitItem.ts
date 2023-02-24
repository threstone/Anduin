class UnitItem {
    static getItem(cardInfo: GamePto.ICard, cardConfig: CardInterface) {
        const unit = BaseUI.UIMapUnit.createInstance();
        Utils.defineTextFieldSet(unit.healthText, cardConfig.health);
        Utils.defineTextFieldSet(unit.atkText, cardConfig.attack);

        unit.healthText.text = `${cardInfo.health}`;
        unit.atkText.text = `${cardInfo.attack}`;

        if (cardConfig.atkType === CardsPto.AtkType.CloseRange) {
            unit.longRange.visible = false;
        } else {
            unit.closeRange.visible = false;
        }
        unit.allowOperate.visible = cardInfo.allowAtk || cardInfo.allowMove;

        unit.info.tempCardName.text = `${cardConfig.cardName}`;
        if (cardInfo.uid === UserModel.ins().uid) {
            unit.info.tempCardName.strokeColor = 0x00FF00;
        }
        return unit;
    }
}