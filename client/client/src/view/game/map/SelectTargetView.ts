const AnyOwner = 0;
const SelfOwner = 1;
const EnemyOwner = 2;
const AnyEntity = 0;
const BuildingEntity = 1;
const UnitEntity = 2;
/**
 * 有些卡牌需要选择某些单位(友方、敌方或者都可以选择则)
 * 选择完毕才可以执行
 * TODO 将来要优化选择效果,可以选择的高亮
 */
class SelectTargetView extends BaseView<BaseUI.UISelectTargetCom>{

    private _resolve: Function;
    private _dataArr: number[];
    private _useType: GamePto.UseConditionEnum;
    //有的卡可能要选择多个目标,如果是负数则说明可以选择同一单位,如果是正数则不允许选择重复的单位
    private _targetNum: number;
    private _allowReapet: boolean;

    private _tips: string;

    protected init() {
        this.view = BaseUI.UISelectTargetCom.createInstance();
        const scencView = GameSceneView.ins().getView();
        //初始化遮罩
        this.view.bg0.height = scencView.map.y;

        this.view.bg1.width = scencView.map.x;
        this.view.bg1.height = scencView.map.height;

        this.view.bg2.x = scencView.map.x + scencView.map.width;
        this.view.bg2.width = this.view.width - this.view.bg2.x;
        this.view.bg2.height = scencView.map.height;

        this.view.bg3.height = this.view.height - scencView.map.y - scencView.map.height;
    }

    public open(cardItem: BaseUI.UICardItem, dataArr: number[], useType: GamePto.UseConditionEnum, targetNum: number): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            super.open();
            this._resolve = resolve;
            this._dataArr = dataArr;
            this._useType = useType;
            this._targetNum = Math.abs(targetNum);
            this._allowReapet = targetNum < 0;

            this.AddClick(this.view.click, this.onClick);
            this.AddClick(this.view.bg0, this.close);
            this.AddClick(this.view.bg1, this.close);
            this.AddClick(this.view.bg2, this.close);
            this.AddClick(this.view.bg3, this.close);

            //把卡片缓动到右侧展示出来
            cardItem.scaleX = 1;
            cardItem.scaleY = 1;
            const point = HandCardView.ins().getView().rootToLocal(MapView.ins().getView().x - cardItem.width, (this.view.height - cardItem.height) / 2);
            egret.Tween.get(cardItem).to({ x: point.x, y: point.y, scaleX: 1, scaleY: 1 }, 400);

            this.showTips();
        });
    }

    /**
     * 文字提示及高亮
     */
    private showTips() {
        let filterOwner = AnyOwner;
        let filterEntity = AnyEntity;
        switch (this._useType) {
            //友方单位
            case GamePto.UseConditionEnum.FriendlyUnit:
                this._tips = '请选择友方单位';
                filterOwner = SelfOwner;
                filterEntity = UnitEntity;
                break;
            //友方建筑
            case GamePto.UseConditionEnum.FriendlyBuilding:
                this._tips = '请选择友方建筑';
                filterOwner = SelfOwner;
                filterEntity = BuildingEntity;
                break;
            //敌方单位
            case GamePto.UseConditionEnum.EnemyUnit:
                this._tips = '请选择敌方单位';
                filterOwner = EnemyOwner;
                filterEntity = UnitEntity;
                break;
            //敌方建筑
            case GamePto.UseConditionEnum.EnemyBuilding:
                this._tips = '请选择敌方建筑';
                filterOwner = EnemyOwner;
                filterEntity = BuildingEntity;
                break;
            //所有单位
            case GamePto.UseConditionEnum.AllUnit:
                this._tips = '请选择单位';
                filterEntity = UnitEntity;
                break;
            //所有建筑
            case GamePto.UseConditionEnum.AllBuilding:
                this._tips = '请选择建筑';
                filterEntity = BuildingEntity;
                break;
            //友方地图实体
            case GamePto.UseConditionEnum.FriendEntity:
                this._tips = '请选择友方单位或建筑';
                filterOwner = SelfOwner;
                break;
            //敌方地图实体
            case GamePto.UseConditionEnum.EnemyEntity:
                this._tips = '请选择敌方单位或建筑';
                filterOwner = EnemyOwner;
                break;
            //所有地图实体
            case GamePto.UseConditionEnum.AllEntity:
                this._tips = '请选择单位或建筑';
                break;
            //空格子
            case GamePto.UseConditionEnum.EmptyBlock:
                this._tips = '请选择一个未被占用的位置';
                break;
            default:
                console.error("未知的使用条件类型:", this._useType);
                this.close(false);
                return;
        }

        const entitys = MapModel.ins().entityCards;
        for (let index = 0; index < entitys.length; index++) {
            const entityCard = entitys[index];
            const mapEntity = MapView.ins().entityMap.get(entityCard.id);
            if (!mapEntity) {
                console.error(`为在场景中获取到指定的entity ${entityCard}`);
                this.close(false);
                return;
            }
            //低亮
            mapEntity.filters = Utils.getFilterByColor(0x666666);
            //空格子的话直接全部低亮
            if (GamePto.UseConditionEnum.EmptyBlock === this._useType) {
                continue;
            }
            if (filterOwner !== AnyOwner && (entityCard.uid === UserModel.ins().uid) !== (filterOwner === SelfOwner)) {
                continue;
            }
            const cardConfig = CardsModel.ins().getCardConfigById(entityCard.cardId);
            if (filterEntity !== AnyEntity && (cardConfig.cardType === CardsPto.CardType.Building) !== (filterEntity === BuildingEntity)) {
                continue;
            }
            //高亮
            mapEntity.filters = Utils.getFilterByColor(0xFFFFFF);
        }

        if (this._targetNum > 1) {
            this._tips += `(${this._allowReapet ? '允许重复选择同一单位' : '禁止重复选择同一单位'})`;
        }
        this.view.tips.text = this._tips;
    }

    public close(result: boolean): void {
        //取消高亮低亮
        const entitys = MapModel.ins().entityCards;
        for (let index = 0; index < entitys.length; index++) {
            const entityCard = entitys[index];
            const mapEntity = MapView.ins().entityMap.get(entityCard.id);
            if (!mapEntity) {
                console.error(`为在场景中获取到指定的entity ${entityCard}`);
            }
            mapEntity.filters = null;
        }

        super.close();
        this._resolve(result);
        this._resolve = null;
    }

    private onClick(event: egret.TouchEvent) {
        const mapBlock = new egret.Point();
        //地图被点击
        if (!MapView.ins().isInMap(event.stageX, event.stageY, mapBlock)) {
            console.error('点击的位置不在地图范围内!');
            return;
        }

        const entity = MapModel.ins().getEntityCardByPoint(mapBlock.x, mapBlock.y);
        //是否有单位
        if (!entity && GamePto.UseConditionEnum.EmptyBlock !== this._useType) {
            return;
        }

        const cardConfig = CardsModel.ins().getCardConfigById(entity.cardId);
        let isMatch = false;
        switch (this._useType) {
            //友方单位
            case GamePto.UseConditionEnum.FriendlyUnit:
                isMatch = entity.uid === UserModel.ins().uid && cardConfig.cardType === CardsPto.CardType.Unit;
                break;
            //友方建筑
            case GamePto.UseConditionEnum.FriendlyBuilding:
                isMatch = entity.uid === UserModel.ins().uid && cardConfig.cardType === CardsPto.CardType.Building;
                break;
            //敌方单位
            case GamePto.UseConditionEnum.EnemyUnit:
                isMatch = entity.uid !== UserModel.ins().uid && cardConfig.cardType === CardsPto.CardType.Unit;
                break;
            //敌方建筑
            case GamePto.UseConditionEnum.EnemyBuilding:
                isMatch = entity.uid !== UserModel.ins().uid && cardConfig.cardType === CardsPto.CardType.Building;
                break;
            //所有单位
            case GamePto.UseConditionEnum.AllUnit:
                isMatch = cardConfig.cardType === CardsPto.CardType.Unit;
                break;
            //所有建筑
            case GamePto.UseConditionEnum.AllBuilding:
                isMatch = cardConfig.cardType === CardsPto.CardType.Building;
                break;
            //友方地图实体
            case GamePto.UseConditionEnum.FriendEntity:
                isMatch = entity.uid === UserModel.ins().uid;
                break;
            //敌方地图实体
            case GamePto.UseConditionEnum.EnemyEntity:
                isMatch = entity.uid !== UserModel.ins().uid;
                break;
            //所有地图实体
            case GamePto.UseConditionEnum.AllEntity:
                isMatch = true;
                break;
            //空格子
            case GamePto.UseConditionEnum.EmptyBlock:
                isMatch = entity == null;
                break;
            default:
                this.close(false);
                return;
        }

        //不匹配弹出提示
        if (!isMatch) {
            TipsView.ins().showTips(this._tips);
            return;
        }

        //检查数据  
        const result = mapBlock.y * MapWidth + mapBlock.x;
        if (!this._allowReapet && this._dataArr.indexOf(result) !== -1) {
            TipsView.ins().showTips('不允许选择重复的单位');
            return;
        }
        //检推入数据
        this._dataArr.push(result);
        TipsView.ins().showTips('选择成功');

        //选择完毕后,检查是否完成
        this.checkSelectComplete();
    }

    private checkSelectComplete() {
        if (this._dataArr.length === this._targetNum) {
            //数据展开
            const len = this._dataArr.length;
            for (let index = len - 1; index > -1; index--) {
                const position = this._dataArr[index];
                this._dataArr[index] = position % MapWidth;;
                this._dataArr[index + 1] = Math.floor(position / MapWidth);
            }
            this.close(true);
        }
    }
}