const PageCardNum = 10;
class CardsView extends BaseView<BaseUI.UICardsCom> {

    /**创建卡组数据缓存 */
    private cacheCreateGroupInfo: { count: number, cardInfo: CardInterface }[];
    /**是否已经有英雄卡了 */
    private hasPremium: boolean;

    /**是否正在创建卡组中 */
    private _isCreating: boolean;
    get isCreating() { return this._isCreating }


    protected init() {
        this.view = BaseUI.UICardsCom.createInstance();

        this.cacheCreateGroupInfo = [];
        this.hasPremium = false;
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
            if (this.view.functionBtn.backImg.visible) {
                this.close();
            } else {
                this._isCreating = false;
                this.cacheCreateGroupInfo = [];
                this.hasPremium = false;
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

    /**
     * @returns 返回此卡还有多少张 如果-1则说明添加失败 
     */
    public doAddCard(cardInfo: CardInterface): number {
        //只能添加一张橙卡
        if (this.hasPremium && cardInfo.cardType === CardsPto.CardType.Hero) {
            return -1;
        }
        for (let index = 0; index < this.cacheCreateGroupInfo.length; index++) {
            const info = this.cacheCreateGroupInfo[index];
            //已经有了
            if (cardInfo.cardId === info.cardInfo.cardId) {
                //橙卡和英雄卡只能一张 
                if (cardInfo.quality === CardsPto.QualityType.Premium || cardInfo.cardType === CardsPto.CardType.Hero) {
                    return -1;
                }
                //同一张卡已经携带了3张了
                if (info.count === 3) {
                    return -1;
                }
                //拥有的卡没有那么多
                if (cardInfo.count <= info.count) {
                    return -1;
                }
                info.count++;
                return cardInfo.count - info.count;
            }
        }
        //拥有的卡没有那么多
        if (cardInfo.count === 0) {
            return -1;
        }
        //如果是橙卡,那后面就不能增加橙卡了
        if (cardInfo.cardType === CardsPto.CardType.Hero) {
            this.hasPremium = true;
        }
        this.cacheCreateGroupInfo.push({ cardInfo, count: 1 });
        this.cacheCreateGroupInfo.sort((a, b) => {
            if (b.cardInfo.cardType === CardsPto.CardType.Hero) {
                return 1;
            }
            if (a.cardInfo.cardType === CardsPto.CardType.Hero) {
                return -1;
            }
            if (a.cardInfo.fee === b.cardInfo.fee) {
                return a.cardInfo.quality - b.cardInfo.quality;
            }
            return a.cardInfo.fee - b.cardInfo.fee;
        });
        return cardInfo.count - 1;
    }

    /**根据数据渲染出卡牌 */
    public refreshCreateGroupList() {
        const list = this.view.createGroupList;
        this.removeChildrenEvents(list)
        list.removeChildren();
        let sum = 0;
        for (let index = 0; index < this.cacheCreateGroupInfo.length; index++) {
            const info = this.cacheCreateGroupInfo[index];
            const miniCard = MiniCard.getMiniCard(info.cardInfo, info.count);
            list.addChild(miniCard);
            this.AddClick(miniCard, () => {
                if (info.cardInfo.cardType === CardsPto.CardType.Hero) {
                    this.hasPremium = false;
                }
                this.refreshCreateGroupList();
                this.cacheCreateGroupInfo.splice(index, 1);
                ShowCardsCom.ins().changePowerChannel();
            })
            //TODO 悬浮详情功能
            sum += info.count;
        }
        this.view.functionTips.text = `${sum}/30`;
    }

    /**获取剩余卡牌的数量 */
    public getLeftCardNum(cardInfo: CardInterface) {
        for (let index = 0; index < this.cacheCreateGroupInfo.length; index++) {
            const info = this.cacheCreateGroupInfo[index];
            if (info.cardInfo === cardInfo) {
                return cardInfo.count - info.count;
            }
        }
        return cardInfo.count;
    }
}