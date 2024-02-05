class BuildingItem {
    static getItem(cardInfo: GamePto.ICard, cardConfig: CardInterface) {
        const building = BaseUI.UIMapBuilding.createInstance();
        Utils.defineTextFieldSet(building.healthText, cardInfo.hpUpperLimit);
        Utils.defineTextFieldSet(building.atkText, cardConfig.attack);
        building.setPivot(0.5, 0.5, true);

        RES.getResByUrl(`./resource/card/${cardConfig.powerId}/${cardInfo.cardId}.jpg`, (data: egret.Texture) => {
            if (!data) {
                return
            }
            building.info.cardImg.texture = data;
        });
        building.atkText.text = `${cardInfo.attack}`;
        if (cardConfig.detailType === CardsPto.AtkType.CloseRange) {
            building.longRange.visible = false;
        } else {
            building.closeRange.visible = false;
        }
        building.healthText.text = `${cardInfo.hp}`;
        building.info.tempCardName.text = `${cardConfig.cardName}`;
        if (cardInfo.uid === UserModel.ins().uid) {
            building.info.tempCardName.strokeColor = 0x00FF00;
            building.enemyTips.visible = false;
        }
        return building;
    }

    static getDisplayItem(cardConfig: CardInterface) {
        const building = BaseUI.UIMapBuilding.createInstance();
        building.setPivot(0.5, 0.5, true);
        RES.getResByUrl(`./resource/card/${cardConfig.powerId}/${cardConfig.cardId}.jpg`, (data: egret.Texture) => {
            if (!data) {
                return
            }
            building.info.cardImg.texture = data;
        });
        building.healthText.text = `${cardConfig.hp}`;
        building.info.tempCardName.text = `${cardConfig.cardName}`;
        building.info.tempCardName.strokeColor = 0x00FF00;
        building.enemyTips.visible = false;
        return building;
    }
}