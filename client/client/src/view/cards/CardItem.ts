class CardItem {

    private static qualityColors = [0xFFFFFF, 0x0033CC, 0xCC00FF, 0xFF6600];

    static getItem(cardInfo: CardInterface) {
        const item = BaseUI.UICardItem.createInstance();
        item.feeText.text = `${cardInfo.fee}`;
        item.cardName.text = `${cardInfo.cardName}`;
        item.desc.text = `${cardInfo.desc}`;
        item.atkText.text = `${cardInfo.attack}`;
        item.healthText.text = `${cardInfo.health}`;
        item.quality.color = CardItem.qualityColors[cardInfo.quality];
        switch (cardInfo.cardType) {
            case CardsPto.CardType.Hero:
                item.heroCardTips.visible = true;
                item.feeGroup.visible = false;
                break;
            case CardsPto.CardType.Unit:
                break;
            case CardsPto.CardType.Magic:
            case CardsPto.CardType.Building:
                item.atkGroup.visible = false;
                break;
            case CardsPto.CardType.Event:
                item.atkGroup.visible = false;
                item.healthBg.visible = false;
                item.times.visible = true;
                break;
        }
        return item;
    }
}