class EventItem {

    public static getItem(card: GamePto.ICard) {
        const item = BaseUI.UIEventItem.createInstance();
        //秘密卡牌
        if (card.cardId === -1) {
            item.display.visible = false;
        } else {
            const cardConfig = CardsModel.ins().getCardConfigById(card.cardId);
            cardConfig.atkType === 0 ? item.secret.visible = false : item.display.visible = false;
            item.times.text = `${card.health}`;
            item.eventName.text = cardConfig.cardName;
        }
        return item;
    }

}