class UnitItem {
    static getItem(cardInfo: GamePto.ICard, cardConfig: CardInterface) {
        const unit = BaseUI.UIMapUnit.createInstance();

        unit.healthText.text = `${cardInfo.health}`;
        unit.healthText.color = 0xFFFFFF;
        if (cardInfo.health > cardConfig.health) {
            unit.healthText.color = 0x66FF00;
        } else if (cardInfo.health < cardConfig.health) {
            unit.healthText.color = 0xFF0000;
        }

        unit.atkText.text = `${cardInfo.attack}`;
        unit.atkText.color = 0xFFFFFF;
        if (cardInfo.attack > cardConfig.attack) {
            unit.atkText.color = 0x66FF00;
        } else if (cardInfo.health < cardConfig.health) {
            unit.atkText.color = 0xFF0000;
        }
        if (cardConfig.atkType === CardsPto.AtkType.CloseRange) {
            unit.longRange.visible = false;
        } else {
            unit.closeRange.visible = false;
        }
        unit.allowAtk.visible = cardInfo.allowAtk;

        unit.info.tempCardName.text = `${cardConfig.cardName}`;

        return unit;
    }
}