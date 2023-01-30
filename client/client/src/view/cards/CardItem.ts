class CardItem {

    private static qualityColors = [0xFFFFFF, 0x0033CC, 0xCC00FF, 0xFF6600];

    static setNum(item: BaseUI.UICardItem, count: number) {
        count = Math.max((count || 0), 0);
        item.cardNum.text = `X${count}`;
        if (count <= 0) {
            item.cardImg.alpha = 0.5;
        } else {
            item.cardImg.alpha = 1;
        }
    }

    static updateNum(item: BaseUI.UICardItem, cardInfo: CardInterface) {
        if (CardsView.ins().isCreating) {
            this.setNum(item, CardsView.ins().getLeftCardNum(cardInfo));
        } else {
            this.setNum(item, cardInfo.count);
        }
    }

    static getItem(cardInfo: CardInterface) {
        const item = BaseUI.UICardItem.createInstance();
        item.feeText.text = `${cardInfo.fee}`;
        item.cardName.text = `${cardInfo.cardName}`;
        item.desc.text = `${cardInfo.desc}`;
        item.atkText.text = `${cardInfo.attack}`;
        item.healthText.text = `${cardInfo.health}`;
        item.quality.color = CardItem.qualityColors[cardInfo.quality];
        CardItem.updateNum(item, cardInfo);
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