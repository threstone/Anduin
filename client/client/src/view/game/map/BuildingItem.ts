class BuildingItem {
    static getItem(cardInfo: GamePto.ICard, cardConfig: CardInterface) {
        const building = BaseUI.UIMapBuilding.createInstance();
        Utils.defineTextFieldSet(building.healthText, cardConfig.health);
        building.setPivot(0.5, 0.5, true);

        building.healthText.text = `${cardInfo.health}`;
        building.info.tempCardName.text = `${cardConfig.cardName}`;
        if (cardInfo.uid === UserModel.ins().uid) {
            building.info.tempCardName.strokeColor = 0x00FF00;
            building.enemyTips.visible = false;
        }
        return building;
    }
}