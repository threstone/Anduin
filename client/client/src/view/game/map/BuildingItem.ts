class BuildingItem {
    static getItem(cardInfo: GamePto.ICard, cardConfig: CardInterface) {
        const building = BaseUI.UIMapUnit.createInstance();

        building.healthText.text = `${cardInfo.health}`;
        building.healthText.color = 0xFFFFFF;
        if (cardInfo.health > cardConfig.health) {
            building.healthText.color = 0x66FF00;
        } else if (cardInfo.health < cardConfig.health) {
            building.healthText.color = 0xFF0000;
        }
        building.info.tempCardName.text = `${cardConfig.cardName}`;
        return building;
    }
}