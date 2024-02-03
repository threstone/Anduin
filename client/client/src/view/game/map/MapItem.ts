class MapItem {
    public static getItem(cardInfo: GamePto.ICard) {
        const config = CardsModel.ins().getCardConfigById(cardInfo.cardId);
        switch (config.cardType) {
            case CardsPto.CardType.Building:
                return BuildingItem.getItem(cardInfo, config);
            case CardsPto.CardType.Unit:
                return UnitItem.getItem(cardInfo, config);
            case CardsPto.CardType.Hero:
                return UnitItem.getItem(cardInfo, config);
        }
    }

    public static updateEntityDesc(entity: BaseUI.UIMapUnit | BaseUI.UIMapBuilding, cardInfo: GamePto.ICard) {
        if (entity.healthText) {
            entity.healthText.text = `${cardInfo.hp}`;
        }

        const unit = entity as BaseUI.UIMapUnit;
        if (unit.atkText) {
            unit.atkText.text = `${cardInfo.attack}`;
        }
    }

    public static getDisplayItem(cardInfo: CardInterface) {
        let item: BaseUI.UIMapBuilding | BaseUI.UIMapUnit;
        switch (cardInfo.cardType) {
            case CardsPto.CardType.Building:
                item = BuildingItem.getDisplayItem(cardInfo);
                break;
            case CardsPto.CardType.Unit:
                item = UnitItem.getDisplayItem(cardInfo);
                break;
            case CardsPto.CardType.Hero:
                item = UnitItem.getDisplayItem(cardInfo);
                break;
        }
        return item;
    }
}