const PageCardNum = 10;
class CardsView extends BaseView<BaseUI.UICardsCom> {

    /**创建卡组数据缓存 */
    private _cacheCreateGroupInfo: CardGroupInfo;
    get cacheCreateGroupInfo() { return this._cacheCreateGroupInfo }

    /**是否正在创建卡组中 */
    private _isCreating: boolean;
    get isCreating() { return this._isCreating }


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
        this.initRightGroup();
    }

    /**初始化右侧 */
    private initRightGroup() {
        const list = this.view.cardGroupList;
        list.removeChildren();

        //将卡组加入list
        const cardGroups = CardsModel.ins().cardGroups;
        for (let index = 0; index < cardGroups.length; index++) {
            const cardGourpInfo = cardGroups[index];
            const cardsBtn = BaseUI.UICardsBtn.createInstance();
            cardsBtn.describe.text = `${cardGourpInfo.groupName}/${ConfigMgr.ins().powerConfig[cardGourpInfo.powerId]}`
        }

        if (CardsModel.ins().cardGroups.length < ConfigMgr.ins().common.maxGroupNum) {
            //在套牌最后加入创建新套牌的btn
            const cardsBtn = BaseUI.UICardsBtn.createInstance();
            cardsBtn.describe.text = '新套牌';
            this.AddClick(cardsBtn, CreateCardGroup.ins().open.bind(CreateCardGroup.ins()));
            list.addChild(cardsBtn);
        }

        this.changeRightGroupFunction(false, `${CardsModel.ins().cardGroups.length}/${ConfigMgr.ins().common.maxGroupNum}`);
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
    public doCreateCardGroup(powerId: CardsPto.PowerType, groupName: string, groupId: number) {
        this._isCreating = true;
        this.changeRightGroupFunction(true, `0/30`);
        ShowCardsCom.ins().showPowerPannel([ConfigMgr.ins().powerConfig[CardsPto.PowerType.Common], ConfigMgr.ins().powerConfig[powerId]]);
        ShowCardsCom.ins().changePowerChannel(0, 0);
        this.refreshCreateGroupList();
        this._cacheCreateGroupInfo.startGroupEdit(powerId, groupName, groupId)
    }


    /**
     * 根据isSave的值决定右侧组件的功能
     */
    private changeRightGroupFunction(isSave: boolean, text: string) {
        this.view.createGroupList.visible = isSave;

        this.view.cardGroupList.visible = !isSave;
        this.view.cardGroupList.touchable = !isSave;

        this.view.functionTips.text = text;
        this.view.functionBtn.backImg.visible = !isSave;
        this.view.functionBtn.describe.visible = isSave;
    }

    /**根据数据渲染出卡牌 */
    public refreshCreateGroupList() {
        const list = this.view.createGroupList;
        this.removeChildrenEvents(list)
        list.removeChildren();
        let sum = 0;
        const cardsInfo = this._cacheCreateGroupInfo.cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            const miniCard = MiniCard.getMiniCard(info.cardInfo, info.count);
            list.addChild(miniCard);
            this.AddClick(miniCard, () => {
                if (info.cardInfo.cardType === CardsPto.CardType.Hero) {
                    this._cacheCreateGroupInfo.hasPremium = false;
                }
                this.refreshCreateGroupList();
                cardsInfo.splice(index, 1);
                ShowCardsCom.ins().changePowerChannel();
            })
            //TODO 悬浮详情功能
            sum += info.count;
        }
        this.view.functionTips.text = `${sum}/30`;
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