class MapItem {
    public static getItem(cardInfo: GamePto.ICard) {
        const config = CardsModel.ins().getCardInfoById(cardInfo.cardId);
        switch (config.cardType) {
            case CardsPto.CardType.Building:
                return BuildingItem.getItem(cardInfo, config);
            case CardsPto.CardType.Unit:
                return UnitItem.getItem(cardInfo, config);
            case CardsPto.CardType.Hero:
                const hero = UnitItem.getItem(cardInfo, config);
                hero.heroFlag.visible = true;
                return hero;
        }
    }

    public static updateEntityDesc(entity: BaseUI.UIMapUnit | BaseUI.UIMapBuilding, cardInfo: GamePto.ICard) {
        if (entity.healthText) {

        }
    }
}