abstract class LeftInfoBox extends BaseView<BaseUI.UILeftInfoBox>{
    protected isSelf: boolean;

    public open() {
        super.open();

        this.observe('InitLeftHeroInfo', this.initLeftHero);
        this.observe('UpdateLeftHeroInfo', this.updateLeftHeroInfo);
        this.addEffectListener('S_USE_CARD', this.onUseCard);

    }

    private onUseCard(msg: GamePto.S_USE_CARD) {
        if (!msg.isSuccess || this.isHandler(msg.uid) === false) {
            return;
        }

        //不是事件卡也不处理
        const cardConfig = CardsModel.ins().getCardConfigById(msg.card.cardId);
        if (msg.card.cardType !== CardsPto.CardType.Event) {
            return;
        }

        //加入到eventList中
        
    }

    private initLeftHero(evt: EventData) {
        const card: GamePto.ICard = evt.data;
        const cardConfig = CardsModel.ins().getCardConfigById(card.cardId);
        if (this.isHandler(card.uid)) {
            RES.getResByUrl(`./resource/card/${card.cardId}.jpg`, (data: egret.Texture) => {
                if (!data) {
                    return
                }
                this.view.heroImg.texture = data;
            });
            this.view.cardName.text = `${cardConfig.cardName}`;
            this.view.desc.text = `${cardConfig.desc}`;
            if (cardConfig.atkType === CardsPto.AtkType.CloseRange) {
                this.view.longRange.visible = false;
                this.view.closeRange.visible = true;
            } else {
                this.view.longRange.visible = true;
                this.view.closeRange.visible = false;
            }

            Utils.defineTextFieldSet(this.view.healthText, cardConfig.health);
            Utils.defineTextFieldSet(this.view.atkText, cardConfig.attack);
            this.view.atkText.text = `${card.attack}`;
            this.view.healthText.text = `${card.health}`;
        }
    }

    private updateLeftHeroInfo(evt: EventData) {
        const card: GamePto.ICard = evt.data;
        if (this.isHandler(card.uid)) {
            this.view.atkText.text = `${card.attack}`;
            this.view.healthText.text = `${card.health}`;
        }
    }

    private isHandler(uid: number) {
        return (uid === UserModel.ins().uid) === this.isSelf;
    }
}

class SelfLeftInfoBox extends LeftInfoBox {
    protected init() {
        this.view = GameSceneView.ins().getView().selfLeftInfoBox;
        this.isSelf = true;
    }
}

class TargetLeftInfoBox extends LeftInfoBox {
    protected init() {
        this.view = GameSceneView.ins().getView().targetLeftInfoBox;
        this.isSelf = false;
    }
}