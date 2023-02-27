class MapModel extends BaseModel {

    mapEntityData: GamePto.IMapData;

    public onCardUse(msg: GamePto.S_USE_CARD) {
        const cardConfig = CardsModel.ins().getCardInfoById(msg.card.cardId);
        if (cardConfig.cardType === CardsPto.CardType.Event) {
            this.mapEntityData.eventCards.push(msg.card);
        } else if (cardConfig.cardType === CardsPto.CardType.Building
            || cardConfig.cardType === CardsPto.CardType.Unit) {
            this.mapEntityData.unitCards.push(msg.card);
        }
    }

    public getHero(uid: number) {
        for (let index = 0; index < this.mapEntityData.unitCards.length; index++) {
            const unit = this.mapEntityData.unitCards[index];
            if (unit.uid === uid && CardsModel.ins().getCardInfoById(unit.cardId).cardType === CardsPto.CardType.Hero) {
                return unit;
            }
        }
    }

    public getUnitCardByPoint(blockX: number, blockY: number): GamePto.ICard {
        for (let index = 0; index < this.mapEntityData.unitCards.length; index++) {
            const unitCard = this.mapEntityData.unitCards[index];
            if (unitCard.blockX === blockX && unitCard.blockY === blockY) {
                return unitCard;
            }
        }
    }

    /**回合结束将所有卡牌的可操作性权限中止 */
    public onGameEnd() {
        for (let index = 0; index < this.mapEntityData.unitCards.length; index++) {
            const unitCard = this.mapEntityData.unitCards[index];
            unitCard.allowAtk = false;
            unitCard.allowMove = false;
        }
    }
}