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
        Utils.defineTextFieldSet(cardItem.healthText, cardInfo.hp);
        //攻击设置会变色
        Utils.defineTextFieldSet(cardItem.atkText, cardInfo.attack);
        //射程设置会变色
        Utils.defineTextFieldSet(cardItem.atkRangeValue, cardInfo.atkRange);
        //移动力设置会变色
        Utils.defineTextFieldSet(cardItem.movementVaule, cardInfo.movement);
        //费用设置会变色
        Utils.defineTextFieldSet(cardItem.feeText, cardInfo.fee, 0xFF0000, 0x00FF00);
        this.updateCard(cardItem, cardInfo);
        return cardItem;
    }

    static getCardByServerCard(cardInfo: GamePto.ICard) {
        const cardItem = CardItem.getItem(CardsModel.ins().getCardConfigById(cardInfo.cardId));
        cardItem.feeText.text = `${Math.max(0, cardInfo.cardFee)}`;
        cardItem.atkText.text = `${cardInfo.attack}`;
        cardItem.healthText.text = `${cardInfo.hp}`;
        cardItem.atkRangeValue.text = `${cardInfo.atkRange}`;
        cardItem.movementVaule.text = `${cardInfo.movement}`;
        cardItem.cardNum.visible = false;
        cardItem.cardImg.alpha = 1;
        cardItem.slicencedGroup.visible = !!cardInfo.silenced;
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
        card.healthText.text = `${cardInfo.hp}`;
        card.quality.url = this.getQualityUrl(cardInfo.quality);
        card.atkRangeGroup.visible = !!cardInfo.atkRange && cardInfo.detailType === CardsPto.AtkType.LongRange;
        card.atkRangeValue.text = `${cardInfo.atkRange}`;
        card.movementVaule.text = `${cardInfo.movement}`;
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
                card.movementGroup.visible = false;
            case CardsPto.CardType.Building:
                card.atkGroup.visible = false;
                card.movementGroup.visible = false;
                break;
            case CardsPto.CardType.Event:
                card.atkGroup.visible = false;
                card.healthBg.visible = false;
                card.times.visible = true;
                card.movementGroup.visible = false;
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
        cardItem.healthText.text = `${cardInfo.hp}`;
        cardItem.atkText.text = `${cardInfo.attack}`;
        cardItem.atkRangeValue.text = `${cardInfo.atkRange}`;
        cardItem.movementVaule.text = `${cardInfo.movement}`;
        cardItem.slicencedGroup.visible = !!cardInfo.silenced;
        this.showBuffDesc(cardItem, cardInfo);
        return cardItem;
    }

    static showBuffDesc(cardItem: BaseUI.UICardItem, cardInfo: GamePto.ICard) {
        cardInfo.buffList.sort();
        //显示buff
        let buffTimes = 1;
        for (let index = 0; index < cardInfo.buffList.length; index++) {
            const buffId = cardInfo.buffList[index];
            //堆叠次数
            if (buffId === cardInfo.buffList[index + 1]) {
                buffTimes++;
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
                textField.text = `${buffData.buffName}${buffTimes > 1 ? `X${buffTimes}` : ''}:${buffData.desc}`;
                cardItem.buffDesc.addChild(textField);
                buffTimes = 1;
            }
        }
    }
}