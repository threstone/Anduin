/** 所有者枚举 */
enum OwnerEnum {
    /** 任意所有者 */
    AnyOwner,
    /** 己方所有者 */
    SelfOwner,
    /** 敌方所有者 */
    EnemyOwner
}

enum EntityTypeEnum {
    /** 所有地图实体 */
    AnyEntity,
    /** 建筑 */
    BuildingEntity,
    /** 单位 */
    UnitEntity,
    /** 英雄 */
    HeroEntity,
    /** 单位或建筑 */
    UnitOrBuilding,
}

class UseCardView extends BaseView<BaseUI.UIUseCardCom>{

    private _tipsArrow: fairygui.GImage;
    private _card: GameCard;
    private _resolve: Function;
    private _conditionIndex: number = 0;
    private _curConditionSelectNum: number = 0;
    private _useData: number[] = [];

    private _tipsComponts: fairygui.GComponent[] = [];
    private _tips: string;

    private _showEntity: boolean = false;

    protected init() {
        this.view = BaseUI.UIUseCardCom.createInstance();

        const sceneView = GameSceneView.ins().getView();
        //初始化遮罩
        this.view.bg0.height = sceneView.map.y;

        this.view.bg1.width = sceneView.map.x;
        this.view.bg1.height = sceneView.map.height;

        this.view.bg2.x = sceneView.map.x + sceneView.map.width;
        this.view.bg2.width = this.view.width - this.view.bg2.x;
        this.view.bg2.height = sceneView.map.height;

        this.view.bg3.height = this.view.height - sceneView.map.y - sceneView.map.height - sceneView.selfInfoBox.height;

        this.view.bg4.height = sceneView.selfInfoBox.height;
        this.view.bg4.width = sceneView.selfInfoBox.x;

        this.view.bg5.height = sceneView.selfInfoBox.height;
        this.view.bg5.width = sceneView.width - sceneView.selfInfoBox.x - sceneView.selfInfoBox.width;

        this.view.discardTips.x = sceneView.selfInfoBox.x + (sceneView.selfInfoBox.width - this.view.discardTips.width) / 2;

        this._tipsArrow = fairygui.UIPackage.createObject('BaseUI', 'use_arrow').asImage;
        this._tipsArrow.setPivot(0.5, 1, true);
    }

    public open(card: GameCard, event: fairygui.DragEvent): void {
        super.open();
        this._card = card;
        const cardItem = card.cardItem;

        cardItem.scaleX = 1;
        cardItem.scaleY = 1;
        cardItem.x = event.stageX - cardItem.width / 2;
        cardItem.y = event.stageY - cardItem.height / 2;
        this.view.addChild(card.cardItem);

        this.observe('S_ROUND_END_EVENT', this.close);
        this.AddClick(this.view, this.onClick);
    }

    public close(): void {
        super.close();
        this._card = null;
        this._conditionIndex = 0;
        this._curConditionSelectNum = 0;
        if (this._resolve) {
            this._resolve();
        }
        this._resolve = null;
        this._useData = [];
        this._showEntity = false;

        this.isShowDeadPool(true);
        this.clearUseTips();
    }

    private onClick(evt: egret.TouchEvent) {
        //拖入到战场则说明要使用卡牌，然后根据卡牌使用条件来执行后续逻辑
        const mapPoint = new egret.Point();
        if (!MapView.ins().isInMap(evt.stageX, evt.stageY, mapPoint)) {
            this.close();
            return;
        }
        this.doCondition(mapPoint);
    }

    public onMoving(event: fairygui.DragEvent) {
        if (this._card === null) {
            return;
        }

        const conditionType = this._card.cardConfig.useCondition[GamePto.UseConditionIndexEnum.UseConditionTypeIndex];
        if (conditionType === GamePto.UseConditionEnum.NoCondition) {
            return;
        }

        const cardItem = this._card.cardItem;
        //有使用条件的卡牌展示出箭头
        if (MapView.ins().isInMap(event.stageX, event.stageY)) {
            //如果在地图中，卡牌还原位置然后展示出箭头指引
            const localPoint = HandCardView.ins().getView().localToRoot(this._card.cacheX, this._card.cacheY);
            cardItem.x = localPoint.x;
            cardItem.y = localPoint.y;
            cardItem.scaleX = 0.5;
            cardItem.scaleY = 0.5;
            //展示箭头
            this._tipsArrow.x = localPoint.x + cardItem.width / 4;
            this._tipsArrow.y = localPoint.y + cardItem.height / 4 * 3;
            const distance = Utils.getDistance(this._tipsArrow.x, this._tipsArrow.y, event.stageX, event.stageY);
            this._tipsArrow.height = distance;
            const skew = Utils.getPointAngle(this._tipsArrow.x, this._tipsArrow.y, event.stageX, event.stageY);
            this._tipsArrow.skewX = skew;
            this._tipsArrow.skewY = skew;

            //展示提示
            if (!this._tipsArrow.parent) {
                this.showUseTips();
                this.view.addChild(this._tipsArrow);
            }
        } else {
            cardItem.scaleX = 1;
            cardItem.scaleY = 1;
            cardItem.x = event.stageX - cardItem.width / 2;
            cardItem.y = event.stageY - cardItem.height / 2;

            //移除提示
            if (this._tipsArrow.parent) {
                this.clearUseTips();
                this.view.removeChild(this._tipsArrow);
            }
        }
    }

    public doUseCard(event: fairygui.DragEvent) {
        return new Promise((resolve) => {
            this._resolve = resolve;
            //弃牌
            if (SelfInfoBox.ins().isInDeadPool(event.stageX, event.stageY)) {
                if (GameModel.ins().discardTimes < 1) {
                    TipsView.ins().showTips('已无弃牌次数,请下回合再弃牌哦');
                    return;
                }
                GameModel.ins().C_DISCARD(GameModel.ins().getHandCardIndex(this._card.cardInfo));
                this.close();
                return;
            }

            //拖入到战场则说明要使用卡牌，然后根据卡牌使用条件来执行后续逻辑
            const mapPoint = new egret.Point();
            if (!MapView.ins().isInMap(event.stageX, event.stageY, mapPoint)) {
                this.close();
                return;
            }

            //费用不够
            if (this._card.cardInfo.cardFee > GameModel.ins().fee) {
                TipsView.ins().showTips("费用不够!");
                this.close();
                return;
            }

            this.isShowDeadPool(false);

            this.doCondition(mapPoint);
        });
    }

    private doCondition(mapPoint: egret.Point) {
        //检查传入的位置是否满足当前条件
        if (!this.checkPoint(mapPoint.x, mapPoint.y)) {
            this.close();
            return;
        }

        if (this.checkOver()) {
            this.useCard();
        } else {
            this.clearUseTips();
            this.showUseTips();
        }
    }

    private checkOver() {
        return this._card.cardConfig.useCondition[this._conditionIndex * 2] == undefined;
    }

    /**检查传入的位置是否满足当前条件 */
    private checkPoint(x: number, y: number): boolean {
        const conditionType = this._card.cardConfig.useCondition[this._conditionIndex * 2 + GamePto.UseConditionIndexEnum.UseConditionTypeIndex];
        let selectNum = this._card.cardConfig.useCondition[this._conditionIndex * 2 + GamePto.UseConditionIndexEnum.UseConditionValueIndex];
        const allowRepeat = selectNum < 0;
        selectNum = Math.abs(selectNum);

        let isMatch = false;
        const entity = MapModel.ins().getEntityCard(x, y);
        switch (conditionType) {
            //无条件
            case GamePto.UseConditionEnum.NoCondition:
                isMatch = true;
                break;
            //建筑部署限制
            case GamePto.UseConditionEnum.BuidingCondition:
                if (entity) {
                    return false;
                }
                const pointSet = MapModel.ins().getAccessPointForUseBuilding(this._card.cardInfo.uid);
                isMatch = pointSet.has(x + y * MapWidth);
                this._showEntity = isMatch;
                break;
            //单位部署限制
            case GamePto.UseConditionEnum.UnitCondition:
                if (entity) {
                    return false;
                }
                const buildings = MapModel.ins().getCampBuildings(this._card.cardInfo.uid);
                for (let index = 0; index < buildings.length; index++) {
                    const building = buildings[index];
                    //距离出兵建筑1格
                    if (Math.abs(building.blockX - x) + Math.abs(building.blockY - y) === 1) {
                        isMatch = true;
                        this._showEntity = true;
                        break;
                    }
                }
                break;
            //空格子
            case GamePto.UseConditionEnum.EmptyBlock:
                isMatch = entity == null;
                break;
            //友方单位
            case GamePto.UseConditionEnum.FriendlyUnit:
                isMatch = entity != null && entity.uid === UserModel.ins().uid && entity.cardType === CardsPto.CardType.Unit;
                break;
            //友方建筑
            case GamePto.UseConditionEnum.FriendlyBuilding:
                isMatch = entity != null && entity.uid === UserModel.ins().uid && entity.cardType === CardsPto.CardType.Building;
                break;
            //敌方单位
            case GamePto.UseConditionEnum.EnemyUnit:
                isMatch = entity != null && entity.uid !== UserModel.ins().uid && entity.cardType === CardsPto.CardType.Unit;
                break;
            //敌方建筑
            case GamePto.UseConditionEnum.EnemyBuilding:
                isMatch = entity != null && entity.uid !== UserModel.ins().uid && entity.cardType === CardsPto.CardType.Building;
                break;
            //所有单位
            case GamePto.UseConditionEnum.AllUnit:
                isMatch = entity != null && entity.cardType === CardsPto.CardType.Unit;
                break;
            //所有建筑
            case GamePto.UseConditionEnum.AllBuilding:
                isMatch = entity != null && entity.cardType === CardsPto.CardType.Building;
                break;
            //友方地图实体
            case GamePto.UseConditionEnum.FriendEntity:
                isMatch = entity != null && entity.uid === UserModel.ins().uid;
                break;
            //敌方地图实体
            case GamePto.UseConditionEnum.EnemyEntity:
                isMatch = entity != null && entity.uid !== UserModel.ins().uid;
                break;
            //所有地图实体
            case GamePto.UseConditionEnum.AllEntity:
                isMatch = entity != null;
                break;
            //友方非英雄实体
            case GamePto.UseConditionEnum.FriendUnitOrBuilding:
                isMatch = entity != null && entity.uid === UserModel.ins().uid && (entity.cardType === CardsPto.CardType.Unit || entity.cardType === CardsPto.CardType.Building);
                break;
            //敌方非英雄实体
            case GamePto.UseConditionEnum.EnemyUnitOrBuilding:
                isMatch = entity != null && entity.uid !== UserModel.ins().uid && (entity.cardType === CardsPto.CardType.Unit || entity.cardType === CardsPto.CardType.Building);
                break;
            //所有非英雄实体
            case GamePto.UseConditionEnum.AllUnitOrBuilding:
                isMatch = entity != null && (entity.cardType === CardsPto.CardType.Unit || entity.cardType === CardsPto.CardType.Building);
                break;
            //友方英雄
            case GamePto.UseConditionEnum.FriendHero:
                isMatch = entity != null && entity.cardType === CardsPto.CardType.Hero && entity.uid === UserModel.ins().uid;
                break;
            //敌方英雄
            case GamePto.UseConditionEnum.EnemyHero:
                isMatch = entity != null && entity.cardType === CardsPto.CardType.Hero && entity.uid !== UserModel.ins().uid;
                break;
            //任意英雄
            case GamePto.UseConditionEnum.AllHero:
                isMatch = entity != null && entity.cardType === CardsPto.CardType.Hero;
                break;
            //任意格子
            case GamePto.UseConditionEnum.AnyBlock:
                isMatch = true;
                break;
            default:
                return false;
        }

        //不匹配弹出提示
        if (!isMatch) {
            TipsView.ins().showTips(this._tips);
            return false;
        }

        //重复判断
        const pointData = x + MapWidth * y;
        if (!allowRepeat && this._useData.indexOf(pointData) !== -1) {
            TipsView.ins().showTips('不允许选择重复的目标');
            return false;
        }

        //匹配的话
        this._curConditionSelectNum++;
        if (this._curConditionSelectNum >= selectNum) {
            this._conditionIndex++;
            this._curConditionSelectNum = 0;
        }

        if (conditionType !== GamePto.UseConditionEnum.NoCondition) {
            this._useData.push(pointData);
        }
        return true;
    }

    /**使用卡牌 */
    private useCard() {
        //数据展开
        const len = this._useData.length;
        for (let index = len - 1; index > -1; index--) {
            const position = this._useData[index];
            this._useData[index * 2] = position % MapWidth;;
            this._useData[index * 2 + 1] = Math.floor(position / MapWidth);
        }
        GameModel.ins().C_USE_CARD(GameModel.ins().getHandCardIndex(this._card.cardInfo), this._useData);
        this.close();
    }

    /**在地图上放置一个提示对象 */
    private showTipsInMap(x: number, y: number) {
        const position = MapView.ins().getScenePoint(x, y);
        const tips = BaseUI.UIMoveTips.createInstance();
        tips.x = position.x;
        tips.y = position.y;
        this._tipsComponts.push(tips);
        this.view.addChild(tips);
    }

    /**
     * 展示提示 
     * 根据卡牌使用条件展示出对应的提示,是建筑卡或者单位卡限制,那么提示放置位置
     * 如果是目标选择限制则高亮低亮相应目标
     */
    private showUseTips() {
        //如果使用的卡牌是建筑卡或者单位卡
        if (this._showEntity && (this._card.cardInfo.cardType === CardsPto.CardType.Building || this._card.cardInfo.cardType === CardsPto.CardType.Unit)) {
            const x = this._useData[0] % MapWidth;;
            const y = Math.floor(this._useData[0] / MapWidth);
            const mapPoint = MapView.ins().getMapPoint(x, y);
            const cardItem = MapItem.getItem(this._card.cardInfo);
            cardItem.alpha = 0.7;
            cardItem.x = mapPoint.x + MapView.ins().getView().x;
            cardItem.y = mapPoint.y + MapView.ins().getView().y;
            this._tipsComponts.push(cardItem);
            this.view.addChildAt(cardItem, 0);
        }

        const conditionType = this._card.cardConfig.useCondition[this._conditionIndex * 2 + GamePto.UseConditionIndexEnum.UseConditionTypeIndex];
        let selectNum = this._card.cardConfig.useCondition[this._conditionIndex * 2 + GamePto.UseConditionIndexEnum.UseConditionValueIndex];
        const allowRepeat = selectNum < 0;
        selectNum = Math.abs(selectNum);
        switch (conditionType) {
            //无条件
            case GamePto.UseConditionEnum.NoCondition:
                this._tips = '拖入战场以使用';
                break;
            //建筑部署限制
            case GamePto.UseConditionEnum.BuidingCondition:
                {
                    this._tips = '请选择一个位置部署建筑';
                    const pointSet = MapModel.ins().getAccessPointForUseBuilding(this._card.cardInfo.uid);
                    pointSet.forEach((point) => {
                        const x = point % MapWidth;
                        const y = Math.floor(point / MapWidth);
                        this.showTipsInMap(x, y);
                    });
                    break;
                }
            //单位部署限制
            case GamePto.UseConditionEnum.UnitCondition:
                this._tips = '请选择一个位置部署单位';
                const pointSet = new Set<number>();
                const buildings = MapModel.ins().getCampBuildings(this._card.cardInfo.uid);
                for (let index = 0; index < buildings.length; index++) {
                    const building = buildings[index];
                    Utils.getAroundByDistance(building.blockX, building.blockY, 1).forEach((p) => {
                        if (!MapModel.ins().getEntityCard(p.x, p.y)) {
                            pointSet.add(p.x + p.y * MapWidth);
                        }
                    });
                }
                pointSet.forEach((point) => {
                    const x = point % MapWidth;
                    const y = Math.floor(point / MapWidth);
                    this.showTipsInMap(x, y);
                });
                break;
            //空格子
            case GamePto.UseConditionEnum.EmptyBlock:
                this._tips = '请选择一个未被占用的位置';
                break;
            //友方单位
            case GamePto.UseConditionEnum.FriendlyUnit:
                this._tips = '请选择友方单位';
                this.highLightEntity(OwnerEnum.SelfOwner, EntityTypeEnum.UnitEntity, conditionType, selectNum, allowRepeat);
                break;
            //友方建筑
            case GamePto.UseConditionEnum.FriendlyBuilding:
                this._tips = '请选择友方建筑';
                this.highLightEntity(OwnerEnum.SelfOwner, EntityTypeEnum.BuildingEntity, conditionType, selectNum, allowRepeat);
                break;
            //敌方单位
            case GamePto.UseConditionEnum.EnemyUnit:
                this._tips = '请选择敌方单位';
                this.highLightEntity(OwnerEnum.EnemyOwner, EntityTypeEnum.UnitEntity, conditionType, selectNum, allowRepeat);
                break;
            //敌方建筑
            case GamePto.UseConditionEnum.EnemyBuilding:
                this._tips = '请选择敌方建筑';
                this.highLightEntity(OwnerEnum.EnemyOwner, EntityTypeEnum.BuildingEntity, conditionType, selectNum, allowRepeat);
                break;
            //所有单位
            case GamePto.UseConditionEnum.AllUnit:
                this._tips = '请选择单位';
                this.highLightEntity(OwnerEnum.AnyOwner, EntityTypeEnum.UnitEntity, conditionType, selectNum, allowRepeat);
                break;
            //所有建筑
            case GamePto.UseConditionEnum.AllBuilding:
                this._tips = '请选择建筑';
                this.highLightEntity(OwnerEnum.AnyOwner, EntityTypeEnum.BuildingEntity, conditionType, selectNum, allowRepeat);
                break;
            //友方地图实体
            case GamePto.UseConditionEnum.FriendEntity:
                this._tips = '请选择友方单位或建筑';
                this.highLightEntity(OwnerEnum.SelfOwner, EntityTypeEnum.AnyEntity, conditionType, selectNum, allowRepeat);
                break;
            //敌方地图实体
            case GamePto.UseConditionEnum.EnemyEntity:
                this._tips = '请选择敌方单位建筑';
                this.highLightEntity(OwnerEnum.EnemyOwner, EntityTypeEnum.AnyEntity, conditionType, selectNum, allowRepeat);
                break;
            //所有地图实体
            case GamePto.UseConditionEnum.AllEntity:
                this._tips = '请选择单位或建筑';
                this.highLightEntity(OwnerEnum.AnyOwner, EntityTypeEnum.AnyEntity, conditionType, selectNum, allowRepeat);
                break;
            //友方单位或建筑(非英雄)
            case GamePto.UseConditionEnum.FriendUnitOrBuilding:
                this._tips = '请选择友方非英雄单位或建筑';
                this.highLightEntity(OwnerEnum.SelfOwner, EntityTypeEnum.UnitOrBuilding, conditionType, selectNum, allowRepeat);
                break;
            //敌方单位或建筑(非英雄)
            case GamePto.UseConditionEnum.EnemyUnitOrBuilding:
                this._tips = '请选择敌方非英雄单位或建筑';
                this.highLightEntity(OwnerEnum.EnemyOwner, EntityTypeEnum.UnitOrBuilding, conditionType, selectNum, allowRepeat);
                break;
            //所有单位或建筑(非英雄)
            case GamePto.UseConditionEnum.AllUnitOrBuilding:
                this._tips = '请选择非英雄单位或建筑';
                this.highLightEntity(OwnerEnum.AnyOwner, EntityTypeEnum.UnitOrBuilding, conditionType, selectNum, allowRepeat);
                break;

            //友方英雄
            case GamePto.UseConditionEnum.FriendHero:
                this._tips = '请选择友方英雄';
                this.highLightEntity(OwnerEnum.SelfOwner, EntityTypeEnum.HeroEntity, conditionType, selectNum, allowRepeat);
                break;
            //敌方英雄
            case GamePto.UseConditionEnum.EnemyHero:
                this._tips = '请选择敌方英雄';
                this.highLightEntity(OwnerEnum.EnemyOwner, EntityTypeEnum.HeroEntity, conditionType, selectNum, allowRepeat);
                break;
            //任意英雄
            case GamePto.UseConditionEnum.AllHero:
                this._tips = '请选择任意英雄';
                this.highLightEntity(OwnerEnum.AnyOwner, EntityTypeEnum.HeroEntity, conditionType, selectNum, allowRepeat);
                break;
            //任意英雄
            case GamePto.UseConditionEnum.AnyBlock:
                this._tips = '请选择任意格子';
                this.highLightEntity(OwnerEnum.AnyOwner, EntityTypeEnum.AnyEntity, conditionType, selectNum, allowRepeat);
                break;
            default:
                console.error("未知的使用条件类型:", conditionType);
                this.close();
                return;
        }

        if (selectNum > 1) {
            this._tips += `(${allowRepeat ? '允许重复选择同一单位' : '禁止重复选择同一单位'})`;
        }
        this.view.mapTips.text = this._tips;
    }

    /**高亮地图指定元素 */
    private highLightEntity(
        filterOwner: OwnerEnum,
        filterEntity: EntityTypeEnum,
        conditionType: GamePto.UseConditionEnum,
        selectNum: number,
        allowRepeat: boolean
    ) {
        const entitys = MapModel.ins().entityCards;
        for (let index = 0; index < entitys.length; index++) {
            const entityCard = entitys[index];
            const mapEntity = MapView.ins().entityMap.get(entityCard.id);
            if (!mapEntity) {
                console.error(`为在场景中获取到指定的entity ${entityCard}`);
                this.close();
                return;
            }
            //低亮
            mapEntity.filters = Utils.getFilterByColor(0x666666);
            //空格子的话直接全部低亮
            if (GamePto.UseConditionEnum.EmptyBlock === conditionType) {
                continue;
            }

            //所有者筛选
            if (filterOwner !== OwnerEnum.AnyOwner && (entityCard.uid === UserModel.ins().uid) !== (filterOwner === OwnerEnum.SelfOwner)) {
                continue;
            }

            //类型筛选
            let isMatch = false;
            switch (filterEntity) {
                /** 所有地图实体 */
                case EntityTypeEnum.AnyEntity:
                    isMatch = true;
                    break;
                /** 建筑 */
                case EntityTypeEnum.BuildingEntity:
                    isMatch = entityCard.cardType === CardsPto.CardType.Building;
                    break;
                /** 单位 */
                case EntityTypeEnum.UnitEntity:
                    isMatch = entityCard.cardType === CardsPto.CardType.Unit;
                    break;
                /** 英雄 */
                case EntityTypeEnum.HeroEntity:
                    isMatch = entityCard.cardType === CardsPto.CardType.Hero;
                    break;
                /** 单位或建筑 */
                case EntityTypeEnum.UnitOrBuilding:
                    isMatch = entityCard.cardType === CardsPto.CardType.Unit || entityCard.cardType === CardsPto.CardType.Building;
                    break;
            }
            if (!isMatch) {
                continue;
            }

            //重复筛选
            if (selectNum > 1 && !allowRepeat && this._useData.indexOf(entityCard.blockX + entityCard.blockY * MapWidth) !== -1) {
                continue;
            }

            //高亮
            mapEntity.filters = Utils.getFilterByColor(0xFFFFFF);
        }
    }

    /**移除提示 */
    private clearUseTips() {
        //移除提示
        if (this._tipsArrow.parent) {
            this.view.removeChild(this._tipsArrow);
        }

        this._tipsComponts.forEach((item) => {
            this.view.removeChild(item);
        });
        this._tipsComponts = [];

        //取消高亮低亮
        const entitys = MapModel.ins().entityCards;
        for (let index = 0; index < entitys.length; index++) {
            const entityCard = entitys[index];
            const mapEntity = MapView.ins().entityMap.get(entityCard.id);
            if (mapEntity) {
                mapEntity.filters = null;
            }
        }
    }

    /**是否展示弃牌区域 */
    private isShowDeadPool(isShow: boolean) {
        this.view.discardTips.visible = isShow;
        const sceneView = GameSceneView.ins().getView();
        this.view.bg5.width = sceneView.width - sceneView.selfInfoBox.x;
        if (isShow) {
            this.view.bg5.width -= sceneView.selfInfoBox.width;
        }
    }
}