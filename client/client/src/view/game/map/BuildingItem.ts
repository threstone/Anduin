class BuildingItem {
    static getItem(cardInfo: GamePto.ICard, cardConfig: CardInterface) {
        const building = BaseUI.UIMapUnit.createInstance();

        Object.defineProperty(building.healthText, 'text', {
            set: function (value) {
                this._text = value;
                building.healthText.color = 0xFFFFFF;
                const intValue = parseInt(value);
                if (!Number.isNaN(intValue)) {
                    if (intValue > cardConfig.health) {
                        building.healthText.color = 0x00FF00;
                    } else if (intValue < cardConfig.health) {
                        building.healthText.color = 0xFF0000;
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
        
        building.healthText.text = `${cardInfo.health}`;

        building.info.tempCardName.text = `${cardConfig.cardName}`;
        if (cardInfo.uid === UserModel.ins().uid) {
            building.info.tempCardName.strokeColor = 0x00FF00;
        }
        return building;
    }
}