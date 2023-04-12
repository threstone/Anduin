class UnitItem {
    static getItem(cardInfo: GamePto.ICard, cardConfig: CardInterface) {
        const unit = BaseUI.UIMapUnit.createInstance();
        unit.setPivot(0.5, 0.5, true);
        Utils.defineTextFieldSet(unit.healthText, cardConfig.health);
        Utils.defineTextFieldSet(unit.atkText, cardConfig.attack);

        unit.healthText.text = `${cardInfo.health}`;
        unit.atkText.text = `${cardInfo.attack}`;

        if (cardConfig.detailType === CardsPto.AtkType.CloseRange) {
            unit.longRange.visible = false;
        } else {
            unit.closeRange.visible = false;
        }

        unit.info.tempCardName.text = `${cardConfig.cardName}`;
        RES.getResByUrl(`./resource/card/${cardInfo.cardId}.jpg`, (data: egret.Texture) => {
            if (!data) {
                return
            }
            unit.info.cardImg.texture = data;
        });
        if (cardInfo.uid === UserModel.ins().uid) {
            unit.info.tempCardName.strokeColor = 0x00FF00;
            unit.enemyTips.visible = false;
        }
        return unit;
    }
}