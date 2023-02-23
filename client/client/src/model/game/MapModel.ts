class MapModel extends BaseModel {

    mapData: GamePto.IMapData;

    public onCardUse(msg: GamePto.S_USE_CARD) {
        const cardConfig = CardsModel.ins().getCardInfoById(msg.card.cardId);
        if (cardConfig.cardType === CardsPto.CardType.Event) {
            this.mapData.eventCards.push(msg.card);
        } else if (cardConfig.cardType === CardsPto.CardType.Building
            || cardConfig.cardType === CardsPto.CardType.Unit) {
            this.mapData.unitCards.push(msg.card);
        }
    }

    public getHero(uid: number) {
        for (let index = 0; index < this.mapData.unitCards.length; index++) {
            const unit = this.mapData.unitCards[index];
            if (unit.uid === uid && CardsModel.ins().getCardInfoById(unit.cardId).cardType === CardsPto.CardType.Hero) {
                return unit;
            }
        }
    }
}