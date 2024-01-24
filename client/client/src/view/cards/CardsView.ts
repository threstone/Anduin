const PageCardNum = 10;
class CardsView extends BaseView<BaseUI.UICardsCom> {

    /**创建卡组数据缓存 */
    private _cacheCreateDeckInfo: DeckInfo;
    get cacheCreateDeckInfo() { return this._cacheCreateDeckInfo }

    /**是否正在创建卡组中 */
    private _isCreating: boolean;
    get isCreating() { return this._isCreating }


    private _hoverItem: BaseUI.UICardItem;

    protected init() {
        this.view = BaseUI.UICardsCom.createInstance();

        this._cacheCreateDeckInfo = new DeckInfo();
        this._isCreating = false;

        this.view.functionBtn.describe.text = '保存';

        //请求收藏信息
        CardsModel.ins().C_REQ_CARDS_INFO();
    }


    public close(): void {
        super.close();
        ShowCardsCom.ins().close();
    }

    public open(): void {
        if (!CardsModel.ins().deckList) {
            TipsView.ins().showTips('loading...', 5000);
            return;
        }

        super.open();
        ShowCardsCom.ins().open();
        this.initView();
    }

    private initView() {
        this.observe('DeckUpdate', this.updateGroupList);
        this.observe('CardChange', this.refreshCreateDeckList);
        this.initRightGroup();
    }

    /**更新卡组list */
    private updateGroupList() {
        const list = this.view.deckList;
        this.removeChildrenEvents(list, ['clickLoader', 'delete']);
        list.removeChildren();

        //将卡组加入list
        const deckList = CardsModel.ins().deckList;
        for (let index = 0; index < deckList.length; index++) {
            const deckInfo = deckList[index];
            const cardsBtn = BaseUI.UICardsBtn.createInstance();
            cardsBtn.describe.text = `${deckInfo.deckName}[${ConfigMgr.ins().powerConfig[deckInfo.powerId].powerName}]` +
                `\n${CardsModel.ins().getDeckCardNum(deckInfo)}/${DeckCardsNum}`;
            list.addChild(cardsBtn);
            this.AddClick(cardsBtn.clickLoader, () => {
                this.doCreateDeck(deckInfo.powerId, deckInfo.deckName, deckInfo);
            });
            this.AddClick(cardsBtn.delete, async () => {
                if (await TipsView.ins().open('确定要删除此卡组吗?')) {
                    CardsModel.ins().C_DELETE_DECK(deckInfo.deckId);
                }
            });
        }

        if (CardsModel.ins().deckList.length < ConfigMgr.ins().common.maxDeckNum) {
            //在套牌最后加入创建新套牌的btn
            const cardsBtn = BaseUI.UICardsBtn.createInstance();
            cardsBtn.describe.text = '新套牌';
            cardsBtn.describe.fontSize = 44;
            cardsBtn.delete.visible = false;
            this.AddClick(cardsBtn.clickLoader, CreateDeckCom.ins().open.bind(CreateDeckCom.ins()));
            list.addChild(cardsBtn);
        }
        this.changeRightGroupFunction(false, `${CardsModel.ins().deckList.length}/${ConfigMgr.ins().common.maxDeckNum}`);
    }

    /**初始化右侧 */
    private initRightGroup() {
        this.updateGroupList();
        this.AddClick(this.view.functionBtn, () => {
            //关闭界面
            if (this.view.functionBtn.backImg.visible) {
                this.close();
            } else {
                //保存卡组
                this._isCreating = false;
                this._cacheCreateDeckInfo.deckName = this.view.deckName.text;
                CardsModel.ins().C_SAVE_CARDS(this._cacheCreateDeckInfo);
                this._cacheCreateDeckInfo.clear();
                this.changeRightGroupFunction(false, `${CardsModel.ins().deckList.length}/${ConfigMgr.ins().common.maxDeckNum}`);
                ShowCardsCom.ins().showPowerPannel(ConfigMgr.ins().powerConfig);
                ShowCardsCom.ins().changePowerChannel(0, 0);
            }
        })
    }


    /**开始创建卡组流程 */
    public doCreateDeck(powerId: CardsPto.PowerType, deckName: string, deckInfo?: CardsPto.IDeck) {
        if (!deckInfo) {
            TipsView.ins().showTips('将卡牌拖动至右侧来组建卡组吧!', 6000)
        }
        this._isCreating = true;
        this.changeRightGroupFunction(true, `0/${DeckCardsNum}`);
        this.view.deckName.text = deckName;
        this._cacheCreateDeckInfo.startDeckEdit(powerId, deckName, deckInfo);
        this.refreshCreateDeckList();
        ShowCardsCom.ins().showPowerPannel([ConfigMgr.ins().powerConfig[CardsPto.PowerType.Common], ConfigMgr.ins().powerConfig[powerId]]);
        ShowCardsCom.ins().changePowerChannel(0, 0);
    }


    /**
     * 根据isSave的值决定右侧组件的功能
     */
    private changeRightGroupFunction(isSave: boolean, text: string) {
        this.view.deckGroup.visible = isSave;

        this.view.deckList.visible = !isSave;
        this.view.deckList.touchable = !isSave;

        this.view.functionTips.text = text;
        this.view.functionBtn.backImg.visible = !isSave;
        this.view.functionBtn.describe.visible = isSave;
    }

    /**根据数据渲染出卡牌 */
    public refreshCreateDeckList() {
        if (!this._isCreating) {
            return;
        }

        const heroId = this._cacheCreateDeckInfo.heroId;
        if (heroId !== -1) {
            this.removeTargetEvents(this.view.heroCard);
            this.view.removeChild(this.view.heroCard);

            this.view.heroCard = MiniCard.getMiniCard(this._cacheCreateDeckInfo.heroCard, 1);
            this.view.heroCard.group = this.view.deckGroup;
            this.view.heroCard.x = 1320;
            this.view.heroCard.y = 93;
            this.view.addChild(this.view.heroCard);
            this.addMiniCardEvent(this.view.heroCard, -1, { count: 1, cardInfo: this._cacheCreateDeckInfo.heroCard });
        }

        const list = this.view.createDeckList;

        this.removeChildrenEvents(list, ['dragLoader']);
        list.removeChildren();
        let sum = 0;
        const cardsInfo = this._cacheCreateDeckInfo.cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            const showItemNum = Math.min(info.cardInfo.count, info.count);
            if (showItemNum !== 0) {
                const miniCard = MiniCard.getMiniCard(info.cardInfo, showItemNum);
                list.addChild(miniCard);
                this.addMiniCardEvent(miniCard, index, info);
            }
            //判断自己是否拥有足够的卡牌,没有足够的卡牌的话要多一个虚的item
            if (info.cardInfo.count < info.count) {
                const virtualCard = MiniCard.getMiniCard(info.cardInfo, info.count - info.cardInfo.count);
                virtualCard.alpha = 0.5;
                list.addChild(virtualCard);
                this.addMiniCardEvent(virtualCard, index, info);
            }
            sum += info.count;
        }
        this.view.functionTips.text = `${sum}/${DeckCardsNum}`;
    }

    private addMiniCardEvent(miniCard: BaseUI.UIMiniCard, index: number, info: { count: number, cardInfo: CardInterface }) {
        const list = this.view.createDeckList;
        const cardsInfo = this._cacheCreateDeckInfo.cardsInfo;
        let isDrag = false;
        const onClick = (index: number, info: { count: number, cardInfo: CardInterface }) => {
            if (isDrag === true) {
                isDrag = false
                return;
            }
            if (info.cardInfo.cardType === CardsPto.CardType.Hero) {
                this._cacheCreateDeckInfo.heroId = -1;
                this._cacheCreateDeckInfo.heroCard = null;
                this.removeTargetEvents(this.view.heroCard);
                this.view.removeChild(this.view.heroCard);
            } else {
                info.count--;
                this._cacheCreateDeckInfo.cardCount--;
                if (info.count <= 0) {
                    cardsInfo.splice(index, 1);
                }
            }

            fairygui.GRoot.inst.removeChild(this._hoverItem);
            this.refreshCreateDeckList();
            ShowCardsCom.ins().changePowerChannel();
        }

        this.AddClick(miniCard, onClick.bind(this, index, info));
        this.addEvent(miniCard, mouse.MouseEvent.MOUSE_OVER, () => {
            this.showCardDetail(info.cardInfo, list.x, miniCard.y);
        }, this);
        this.addEvent(miniCard, mouse.MouseEvent.MOUSE_OUT, () => {
            fairygui.GRoot.inst.removeChild(this._hoverItem);
        }, this);

        // 拖动效果
        this.addDragEvent(miniCard, miniCard.dragLoader, null, (evt: fairygui.DragEvent) => {
            if (evt.stageX < list.x) {
                onClick(index, info);
                return;
            }
            isDrag = true;
        });
    }

    private showCardDetail(cardInfo: CardInterface, x: number, y: number) {
        const item = CardItem.getItem(cardInfo);
        item.cardNum.visible = false;
        item.x = x - item.width;
        item.y = y;
        item.name = 'cardDetail';
        item.cardImg.alpha = 1;
        fairygui.GRoot.inst.addChild(item);
        this._hoverItem = item;
    }

    /**获取剩余卡牌的数量 */
    public getLeftCardNum(cardInfo: CardInterface) {
        if (cardInfo.cardType === CardsPto.CardType.Hero) {
            return this._cacheCreateDeckInfo.heroId === -1 ? cardInfo.count : cardInfo.count - 1;
        }

        const cardsInfo = this._cacheCreateDeckInfo.cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            if (info.cardInfo === cardInfo) {
                return cardInfo.count - info.count;
            }
        }
        return cardInfo.count;
    }
}