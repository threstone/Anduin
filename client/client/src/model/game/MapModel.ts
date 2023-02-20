class MapModel extends BaseModel {

    mapData: GamePto.IMapData;

    onCardUse(msg: GamePto.S_USE_CARD) {
        const cardConfig = CardsModel.ins().getCardInfoById(msg.card.cardId);
        if (cardConfig.cardType === CardsPto.CardType.Event) {
            this.mapData.eventCards.push(msg.card);
        } else if (cardConfig.cardType === CardsPto.CardType.Building
            || cardConfig.cardType === CardsPto.CardType.Unit) {
            this.mapData.unitCards.push(msg.card);
        }
    }
}