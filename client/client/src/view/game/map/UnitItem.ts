class UnitItem {
    static getItem(cardInfo: GamePto.ICard, cardConfig: CardInterface) {
        const unit = BaseUI.UIMapUnit.createInstance();
        Object.defineProperty(unit.healthText, 'text', {
            set: function (value: string) {
                this._text = value;
                unit.healthText.color = 0xFFFFFF;
                const intValue = parseInt(value);
                if (!Number.isNaN(intValue)) {
                    if (intValue > cardConfig.health) {
                        unit.healthText.color = 0x00FF00;
                    } else if (intValue < cardConfig.health) {
                        unit.healthText.color = 0xFF0000;
                    }
                }
                if (this._text == null)
                    this._text = 0;
                this.updateGear(6);
                if (this.parent && this.parent._underConstruct)
                    this.renderNow();
                else
                    this.render();
            },
        });

        Object.defineProperty(unit.atkText, 'text', {
            set: function (value) {
                this._text = value;
                unit.atkText.color = 0xFFFFFF;
                const intValue = parseInt(value);
                if (!Number.isNaN(intValue)) {
                    if (intValue > cardConfig.attack) {
                        unit.atkText.color = 0x00FF00;
                    } else if (intValue < cardConfig.attack) {
                        unit.atkText.color = 0xFF0000;
                    }
                }
                if (this._text == null)
                    this._text = "";
                this.updateGear(6);
                if (this.parent && this.parent._underConstruct)
                    this.renderNow();
                else
                    this.render();
            },
        });

        unit.healthText.text = `${cardInfo.health}`;
        unit.atkText.text = `${cardInfo.attack}`;

        if (cardConfig.atkType === CardsPto.AtkType.CloseRange) {
            unit.longRange.visible = false;
        } else {
            unit.closeRange.visible = false;
        }
        unit.allowOperate.visible = cardInfo.allowAtk || cardInfo.allowMove;

        unit.info.tempCardName.text = `${cardConfig.cardName}`;
        if (cardInfo.uid === UserModel.ins().uid) {
            unit.info.tempCardName.strokeColor = 0x00FF00;
        }
        return unit;
    }
}