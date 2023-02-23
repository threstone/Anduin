const PageCardNum = 10;
class CardsView extends BaseView<BaseUI.UICardsCom> {

    /**创建卡组数据缓存 */
    private _cacheCreateGroupInfo: CardGroupInfo;
    get cacheCreateGroupInfo() { return this._cacheCreateGroupInfo }

    /**是否正在创建卡组中 */
    private _isCreating: boolean;
    get isCreating() { return this._isCreating }


    private _hoverItem: BaseUI.UICardItem;

    protected init() {
        this.view = BaseUI.UICardsCom.createInstance();

        this._cacheCreateGroupInfo = new CardGroupInfo();
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
        if (!CardsModel.ins().cardGroups) {
            TipsView.ins().showTips('loading...', 5000);
            return;
        }

        super.open();
        ShowCardsCom.ins().open();
        this.initView();
    }

    private initView() {
        this.observe('CardsGroupUpdate', this.updateGroupList);
        this.observe('CardChange', this.refreshCreateGroupList);
        this.initRightGroup();
    }

    /**更新卡组list */
    private updateGroupList() {
        const list = this.view.cardGroupList;
        this.removeChildrenEvents(list, ['clickLoader', 'delete']);
        list.removeChildren();

        //将卡组加入list
        const cardGroups = CardsModel.ins().cardGroups;
        for (let index = 0; index < cardGroups.length; index++) {
            const cardGourpInfo = cardGroups[index];
            const cardsBtn = BaseUI.UICardsBtn.createInstance();
            cardsBtn.describe.text = `${cardGourpInfo.groupName}[${ConfigMgr.ins().powerConfig[cardGourpInfo.powerId].powerName}]` +
                `\n${CardsModel.ins().getGroupCardNum(cardGourpInfo)}/${GroupCardsNum}`;
            list.addChild(cardsBtn);
            this.AddClick(cardsBtn.clickLoader, () => {
                this.doCreateCardGroup(cardGourpInfo.powerId, cardGourpInfo.groupName, cardGourpInfo);
            });
            this.AddClick(cardsBtn.delete, async () => {
                if (await TipsView.ins().open('确定要删除此卡组吗?')) {
                    CardsModel.ins().C_DELETE_CARD_GROUP(cardGourpInfo.groupId);
                }
            });
        }

        if (CardsModel.ins().cardGroups.length < ConfigMgr.ins().common.maxGroupNum) {
            //在套牌最后加入创建新套牌的btn
            const cardsBtn = BaseUI.UICardsBtn.createInstance();
            cardsBtn.describe.text = '新套牌';
            cardsBtn.describe.fontSize = 44;
            cardsBtn.delete.visible = false;
            this.AddClick(cardsBtn.clickLoader, CreateCardGroup.ins().open.bind(CreateCardGroup.ins()));
            list.addChild(cardsBtn);
        }
        this.changeRightGroupFunction(false, `${CardsModel.ins().cardGroups.length}/${ConfigMgr.ins().common.maxGroupNum}`);
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
                CardsModel.ins().C_SAVE_CARDS(this._cacheCreateGroupInfo);
                this._cacheCreateGroupInfo.clear();
                this.changeRightGroupFunction(false, `${CardsModel.ins().cardGroups.length}/${ConfigMgr.ins().common.maxGroupNum}`);
                ShowCardsCom.ins().showPowerPannel(ConfigMgr.ins().powerConfig);
                ShowCardsCom.ins().changePowerChannel(0, 0);
            }
        })
    }


    /**开始创建卡组流程 */
    public doCreateCardGroup(powerId: CardsPto.PowerType, groupName: string, groupInfo?: CardsPto.ICardGroup) {
        if (!groupInfo) {
            TipsView.ins().showTips('将卡牌拖动至右侧来组建卡组吧!', 6000)
        }
        this._isCreating = true;
        this.changeRightGroupFunction(true, `0/${GroupCardsNum}`);
        this.view.groupName.text = groupName;
        this._cacheCreateGroupInfo.startGroupEdit(powerId, groupName, groupInfo);
        this.refreshCreateGroupList();
        ShowCardsCom.ins().showPowerPannel([ConfigMgr.ins().powerConfig[CardsPto.PowerType.Common], ConfigMgr.ins().powerConfig[powerId]]);
        ShowCardsCom.ins().changePowerChannel(0, 0);
    }


    /**
     * 根据isSave的值决定右侧组件的功能
     */
    private changeRightGroupFunction(isSave: boolean, text: string) {
        this.view.cardGroupGroup.visible = isSave;

        this.view.cardGroupList.visible = !isSave;
        this.view.cardGroupList.touchable = !isSave;

        this.view.functionTips.text = text;
        this.view.functionBtn.backImg.visible = !isSave;
        this.view.functionBtn.describe.visible = isSave;
    }

    /**根据数据渲染出卡牌 */
    public refreshCreateGroupList() {
        if (!this._isCreating) {
            return;
        }
        const list = this.view.createGroupList;

        this.removeChildrenEvents(list, ['dragLoader']);
        list.removeChildren();
        let sum = 0;
        const cardsInfo = this._cacheCreateGroupInfo.cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            const showItemNum = Math.min(info.cardInfo.count, info.count);
            if (showItemNum !== 0) {
                const miniCard = MiniCard.getMiniCard(info.cardInfo, showItemNum);
                list.addChild(miniCard);
                this.addMiniCardEvent(miniCard, index, info)
            }
            //判断自己是否拥有足够的卡牌,没有足够的卡牌的话要多一个虚的item
            if (info.cardInfo.count < info.count) {
                const virtualCard = MiniCard.getMiniCard(info.cardInfo, info.count - info.cardInfo.count);
                virtualCard.alpha = 0.5;
                list.addChild(virtualCard);
                this.addMiniCardEvent(virtualCard, index, info)
            }
            sum += info.count;
        }
        this.view.functionTips.text = `${sum}/${GroupCardsNum}`;
    }

    private addMiniCardEvent(miniCard: BaseUI.UIMiniCard, index: number, info: { count: number, cardInfo: CardInterface }) {
        const list = this.view.createGroupList;
        const cardsInfo = this._cacheCreateGroupInfo.cardsInfo;
        let isDrag = false;
        const onClick = (index: number, info: { count: number, cardInfo: CardInterface }) => {
            if (isDrag === true) {
                isDrag = false
                return;
            }
            if (info.cardInfo.cardType === CardsPto.CardType.Hero) {
                this._cacheCreateGroupInfo.hasPremium = false;
            }
            info.count--;
            if (info.count <= 0) {
                cardsInfo.splice(index, 1);
            }
            fairygui.GRoot.inst.removeChild(this._hoverItem);
            this.refreshCreateGroupList();
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
        const cardsInfo = this._cacheCreateGroupInfo.cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            if (info.cardInfo === cardInfo) {
                return cardInfo.count - info.count;
            }
        }
        return cardInfo.count;
    }
}