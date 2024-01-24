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

    static getCardByServerCard(cardInfo: GamePto.ICard) {
        const cardItem = CardItem.getItem(CardsModel.ins().getCardConfigById(cardInfo.cardId));
        cardItem.feeText.text = `${Math.max(0, cardInfo.cardFee)}`;
        cardItem.atkText.text = `${cardInfo.attack}`;
        cardItem.healthText.text = `${cardInfo.health}`;
        cardItem.cardNum.visible = false;
        return cardItem;
    }

    static updateCard(card: BaseUI.UICardItem, cardInfo: CardInterface) {
        card.feeText.text = `${cardInfo.fee}`;
        card.cardName.text = `${cardInfo.cardName}`;
        card.desc.text = `${cardInfo.desc}`;
        RES.getResByUrl(`./resource/card/${cardInfo.powerId}/${cardInfo.cardId}.jpg`, (data: egret.Texture) => {
            if (!data) {
                return
            }
            card.cardImg.texture = data;
        });
        card.tempCardName.text = `${cardInfo.cardName}`;
        if (cardInfo.detailType === CardsPto.AtkType.CloseRange) {
            card.longRange.visible = false;
        } else {
            card.closeRange.visible = false;
        }
        card.atkText.text = `${cardInfo.attack}`;
        card.healthText.text = `${cardInfo.health}`;
        card.quality.url = this.getQualityUrl(cardInfo.quality);
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

    private static getQualityUrl(quality: CardsPto.QualityType) {
        switch (quality) {
            case CardsPto.QualityType.Normal:
                return fairygui.UIPackage.getItemURL('BaseUI', 'normal');
            case CardsPto.QualityType.Rare:
                return fairygui.UIPackage.getItemURL('BaseUI', 'rare');
            case CardsPto.QualityType.Precious:
                return fairygui.UIPackage.getItemURL('BaseUI', 'precious');
            case CardsPto.QualityType.Premium:
                return fairygui.UIPackage.getItemURL('BaseUI', 'premium');
        }
    }

    static getCardDetail(cardInfo: GamePto.ICard) {
        const cardConfig = CardsModel.ins().getCardConfigById(cardInfo.cardId)
        const cardItem = this.getItem(cardConfig);
        cardItem.cardNum.visible = false;
        cardItem.healthText.text = `${cardInfo.health}`;
        cardItem.atkText.text = `${cardInfo.attack}`;
        this.showBuffDesc(cardItem, cardInfo);
        return cardItem;
    }

    static showBuffDesc(cardItem: BaseUI.UICardItem, cardInfo: GamePto.ICard) {
        cardInfo.buffList.sort();
        //显示buff
        let buffTImes = 1;
        for (let index = 0; index < cardInfo.buffList.length; index++) {
            const buffId = cardInfo.buffList[index];
            //堆叠次数
            if (buffId === cardInfo.buffList[index + 1]) {
                buffTImes++;
                continue;
            } else {
                cardItem.buffDesc.visible = true;
                const buffData = ConfigMgr.ins().getBuffDataByBuffId(buffId);
                if (!buffData) {
                    console.error(`未知的buff类型 buffId:${buffId}`);
                    return;
                }
                const textField = new fairygui.GTextField();
                textField.width = cardItem.buffDesc.width;
                textField.autoSize = fairygui.AutoSizeType.Height;
                textField.fontSize = 22;
                textField.text = `${buffData.buffName}${buffTImes > 1 ? `X${buffTImes}` : ''}:${buffData.desc}`;
                cardItem.buffDesc.addChild(textField);
                buffTImes = 1;
            }
        }
    }
}