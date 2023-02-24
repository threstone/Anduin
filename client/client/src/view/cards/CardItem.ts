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
        const cardItem = BaseUI.UICardItem.createInstance();
        //血量设置会变色
        Utils.defineTextFieldSet(cardItem.healthText, cardInfo.health);
        //攻击设置会变色
        Utils.defineTextFieldSet(cardItem.atkText, cardInfo.attack);
        //费用设置会变色
        Utils.defineTextFieldSet(cardItem.feeText, cardInfo.fee, 0xFF0000, 0x00FF00);
        this.updateCard(cardItem, cardInfo);
        return cardItem;
    }

    static updateCard(card: BaseUI.UICardItem, cardInfo: CardInterface) {
        card.feeText.text = `${cardInfo.fee}`;
        card.cardName.text = `${cardInfo.cardName}`;
        card.desc.text = `${cardInfo.desc}`;
        // TODO waiting for img
        // RES.getResByUrl(`./resource/card/${0/**cardInfo.cardId */}.jpg`, (data) => {
        //     if (!data) {
        //         return
        //     }
        //     card.cardImg.texture = data;
        // })
        card.tempCardName.text = `${cardInfo.cardName}`;
        if (cardInfo.atkType === CardsPto.AtkType.CloseRange) {
            card.longRange.visible = false;
        } else {
            card.closeRange.visible = false;
        }
        card.atkText.text = `${cardInfo.attack}`;
        card.healthText.text = `${cardInfo.health}`;
        card.quality.color = CardItem.qualityColors[cardInfo.quality];
        CardItem.updateNum(card, cardInfo);
        switch (cardInfo.cardType) {
            case CardsPto.CardType.Hero:
                card.heroCardTips.visible = true;
                card.feeGroup.visible = false;
                break;
            case CardsPto.CardType.Unit:
                break;
            case CardsPto.CardType.Magic:
                card.healthGroup.visible = false;
            case CardsPto.CardType.Building:
                card.atkGroup.visible = false;
                break;
            case CardsPto.CardType.Event:
                card.atkGroup.visible = false;
                card.healthBg.visible = false;
                card.times.visible = true;
                break;
        }
    }

    static getUnitCard(cardInfo: GamePto.ICard) {
        const cardConfig = CardsModel.ins().getCardInfoById(cardInfo.cardId)
        const cardItem = this.getItem(cardConfig);
        cardItem.cardNum.visible = false;
        //TODO  同样要显示实时的血量和buff
        return cardItem;
    }
}