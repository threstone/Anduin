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

            this.view.addChild(cardItem);
            //把卡片缓动到右侧展示出来
            egret.Tween.get(cardItem).to({ y: (this.view.height - cardItem.height) / 2, x: (this.view.bg1.width - cardItem.width) / 2 }, 400);

            this.showTips();
        });
    }

    /**
     * 提示
     */
    private showTips() {
        switch (this._useType) {
            //友方单位
            case GamePto.UseConditionEnum.FriendlyUnit:
                this._tips = '请选择友方单位';
                break;
            //友方建筑
            case GamePto.UseConditionEnum.FriendlyBuilding:
                this._tips = '请选择友方建筑';
                break;
            //敌方单位
            case GamePto.UseConditionEnum.EnemyUnit:
                this._tips = '请选择敌方单位';
                break;
            //敌方建筑
            case GamePto.UseConditionEnum.EnemyBuilding:
                this._tips = '请选择敌方建筑';
                break;
            //所有单位
            case GamePto.UseConditionEnum.AllUnit:
                this._tips = '请选择单位';
                break;
            //所有建筑
            case GamePto.UseConditionEnum.AllBuilding:
                this._tips = '请选择建筑';
                break;
            //友方地图实体
            case GamePto.UseConditionEnum.FriendEntity:
                this._tips = '请选择友方单位或建筑';
                break;
            //敌方地图实体
            case GamePto.UseConditionEnum.EnemyEntity:
                this._tips = '请选择敌方单位或建筑';
                break;
            //所有地图实体
            case GamePto.UseConditionEnum.AllEntity:
                this._tips = '请选择单位或建筑';
                break;
            default:
                console.error("未知的使用条件类型:", this._useType);
        }
        if (this._targetNum > 1) {
            this._tips += `(${this._allowReapet ? '允许重复选择同一单位' : '禁止重复选择同一单位'})`;
        }
        this.view.tips.text = this._tips;
    }

    public close(): void {
        super.close();
        this._resolve(false);
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
        if (!entity) {
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
            default:
                this._resolve(false);
                return;
        }

        //不匹配弹出提示
        if (!isMatch) {
            TipsView.ins().showTips(this._tips);
            return;
        }

        //检查数据
        const result = entity.blockY * MapWidth + entity.blockX;
        if (!this._allowReapet && this._dataArr.indexOf(result) === -1) {
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
            super.close();
            //数据展开
            const len = this._dataArr.length;
            for (let index = len - 1; index > 0; index--) {
                const position = this._dataArr[index];
                this._dataArr[index] = position % MapWidth;;
                this._dataArr[index + 1] = Math.floor(position / MapWidth);
            }
            this._resolve(true);
        }
    }
}