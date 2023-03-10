class MapView extends BaseView<BaseUI.UIMapView> {

    //先手方一定是在下方，所以后手方需要做地图反转
    private _isFirst: boolean;
    set isFirst(v: boolean) {
        this._isFirst = v;
    }

    /**悬浮时的显示卡牌 */
    private _detailCard: BaseUI.UICardItem;
    /**选中的卡牌信息 */
    private _selectCardInfo: GamePto.ICard

    blockWidth: number;
    blockHeight: number;

    entityPool: BaseUI.UIMapUnit[][] | BaseUI.UIMapBuilding[][];

    protected init() {
        this.view = GameSceneView.ins().getView().map;
        this.blockWidth = 140;
        this.blockHeight = 95;
    }

    public open(): void {
        super.open();
        this.entityPool = [];
        for (let x = 0; x < 7; x++) {
            this.entityPool[x] = [];
        }

        this.addEffectListener('S_MAP_DATA', this.updateMap);
        this.addEffectListener('S_ROUND_END_EVENT', this.updateMap);
        this.addEffectListener('S_MOVE', this.moveUnit);
        this.addEffectListener('S_ATTACK', this.onAttack)
    }

    public close(): void {
        super.close();
        this.view.removeChildren();
        this.view.addChild(this.view.bg);
    }

    public addMapItem(cardInfo: GamePto.ICard) {
        const cardItem = MapItem.getItem(cardInfo)
        this.entityPool[cardInfo.blockX][cardInfo.blockY] = cardItem;
        this.view.addChild(cardItem);

        //增加悬浮事件
        this.addEvent(cardItem, mouse.MouseEvent.MOUSE_OVER, () => {
            this._detailCard = CardItem.getEntityCard(cardInfo);
            this.view.addChild(this._detailCard);
            this._detailCard.x = cardItem.x + cardItem.width;
            this._detailCard.y = cardItem.y;
            if (this._detailCard.y + this._detailCard.height > this.view.height) {
                this._detailCard.y = this.view.height - this._detailCard.height;
            }
        }, this);
        this.addEvent(cardItem, mouse.MouseEvent.MOUSE_OUT, () => {
            this.view.removeChild(this._detailCard);
        }, this);

        this.AddClick(cardItem, this.onEntityClick);

        const mapPoint = this.getMapPoint(cardInfo.blockX, cardInfo.blockY);
        cardItem.x = mapPoint.x;
        cardItem.y = mapPoint.y;
    }

    public updateMapItem(cardInfo: GamePto.ICard) {
        const mapItem = this.entityPool[cardInfo.blockX][cardInfo.blockY];
        const config = CardsModel.ins().getCardInfoById(cardInfo.cardId);
        if (cardInfo.uid === UserModel.ins().uid && (config.cardType === CardsPto.CardType.Unit || config.cardType === CardsPto.CardType.Hero)) {
            this.updateUnitOperateTips(mapItem as BaseUI.UIMapUnit, cardInfo, config);
        }
    }

    /**根据可移动状态以及可攻击对象来决定是否显示提示 */
    private updateUnitOperateTips(unit: BaseUI.UIMapUnit, cardInfo: GamePto.ICard, config: CardInterface) {
        unit.allowOperate.visible = false;
        if (cardInfo.allowMove && GameModel.ins().moveTimes > 0) {
            if (MapModel.ins().getMovablePoint(cardInfo, config).size > 0) {
                unit.allowOperate.visible = true;
                return;
            }
        }

        if (cardInfo.allowAtk && GameModel.ins().atkTimes > 0) {
            /**检查是否有可攻击的目标 */
            if (MapModel.ins().getAttackablePoint(cardInfo.blockX, cardInfo.blockY, config).size) {
                unit.allowOperate.visible = true;
            }
        }
    }

    /**当地图元素被点击 */
    private onEntityClick(evt: egret.TouchEvent) {
        const mapBlock = new egret.Point();
        this.isInMap(evt.stageX, evt.stageY, mapBlock);
        const cardInfo = MapModel.ins().getEntityCardByPoint(mapBlock.x, mapBlock.y);
        if (!cardInfo) {
            return;
        }

        //如果是对方的卡牌被点击,那么有可能是尝试攻击,或者对他使用法术
        if (cardInfo.uid !== UserModel.ins().uid) {
            //攻击对方卡牌
            if (this._selectCardInfo != null) {
                //TODO检查攻击是否有效，比如攻击距离够不够
            } else {
                //TODO 对卡牌使用法术
            }
            return;
        }

        const config = CardsModel.ins().getCardInfoById(cardInfo.cardId);
        //自己的卡牌被点击
        if (GameSceneView.ins().allowToOprate && config.cardType !== CardsPto.CardType.Building) {
            // 显示所有可移动路径
            const movePointSet = new Set<number>();
            movePointSet.add(cardInfo.blockY * 7 + cardInfo.blockX);
            if (cardInfo.allowMove && GameModel.ins().moveTimes > 0) {
                MapModel.ins().getMovablePoint(cardInfo, config, movePointSet);
                MapTipsView.ins().showMoveTips(cardInfo, movePointSet);
            }

            //显示可攻击
            if (cardInfo.allowAtk && GameModel.ins().atkTimes > 0) {
                const atkPointMap = MapModel.ins().getAttackablePointSet(movePointSet, config);
                if (atkPointMap.size !== 0) {
                    MapTipsView.ins().showAtkTips(cardInfo, atkPointMap);
                }
            }
        }
    }

    /**移动单位 */
    public async moveUnit(msg: GamePto.S_MOVE) {
        const mapItem = this.entityPool[msg.sourceX][msg.sourceY];
        this.entityPool[msg.targetX][msg.targetY] = mapItem;
        this.entityPool[msg.sourceX][msg.sourceY] = null;
        const targetPoint = this.getMapPoint(msg.targetX, msg.targetY);
        const cardInfo = MapModel.ins().getEntityCardByPoint(msg.targetX, msg.targetY);
        this.updateMapItem(cardInfo)
        egret.Tween.get(mapItem).to({ x: targetPoint.x, y: targetPoint.y }, 500);
    }

    /**单位攻击单位 */
    public async onAttack(msg: GamePto.S_ATTACK) {
        const sourceEntity = this.entityPool[msg.sourceX][msg.sourceY] as BaseUI.UIMapUnit;
        const targetEntity = this.entityPool[msg.targetX][msg.targetY];
        if (!sourceEntity || !targetEntity) {
            console.error('攻击所需对象缺失', msg);
            return;
        }

        await RightCtrlView.ins().showDices(msg.dices);

        //攻击动画
        this.showAttack(sourceEntity, targetEntity);
        MapModel.ins().getEntityCardByPoint(msg.sourceX, msg.sourceY)
        // this.updateMapItem(MapModel.ins().unitCards[msg.sourceX][msg.sourceY])
        // this.updateMapItem(MapModel.ins().unitCards[msg.targetX][msg.targetY])

        //飘血
        this.entityShowTips(targetEntity, `-${msg.damage}`);

    }

    private showAttack(source: BaseUI.UIMapUnit, target: BaseUI.UIMapUnit | BaseUI.UIMapBuilding) {

        throw new Error("Method not implemented.");
    }

    /**更新地图信息 */
    public updateMap() {
        let entityCards: GamePto.ICard[];
        if (TEST_GAME) {
            entityCards = [{ "cardId": 1, "attack": 4, "health": 10, "fee": 0, "uid": 2, "blockX": 3, "blockY": 0 }, { "cardId": 1, "attack": 4, "health": 10, "fee": 0, "uid": 1, "blockX": 3, "blockY": 7 }];
        } else {
            entityCards = MapModel.ins().entityCards;
        }
        for (let index = 0; index < entityCards.length; index++) {
            const cardInfo = entityCards[index];
            const entity = this.entityPool[cardInfo.blockX][cardInfo.blockY];
            if (entity) {
                this.updateMapItem(cardInfo);
            } else {
                if (arguments.length !== 0) {
                    throw '由S_MAP_DATA协议驱动的地图更新,正常来说都应该是update的才对,检查为什么这个位置缺少了对象'
                }
                this.addMapItem(cardInfo)
            }
        }
    }

    /**传入一个位置，检查是否在地图范围中 */
    public isInMap(x: number, y: number, mapPoint: egret.Point) {
        const map = this.view;
        const position = map.localToRoot();
        if (x >= position.x && x <= position.x + map.width &&
            y >= position.y && y <= position.y + map.height) {
            const localPoint = this.view.rootToLocal(x, y);
            if (this._isFirst) {
                mapPoint.x = Math.floor(localPoint.x / this.blockWidth);
                mapPoint.y = Math.floor(localPoint.y / this.blockHeight);
            } else {
                mapPoint.x = Math.floor((this.view.width - localPoint.x) / this.blockWidth);
                mapPoint.y = Math.floor((this.view.height - localPoint.y) / this.blockHeight);
            }
            return true;
        }
        return false;
    }

    /**根据地图坐标返回地图坐标 */
    public getMapPoint(blockX: number, blockY: number) {
        const mapPoint = new egret.Point();
        if (this._isFirst) {
            mapPoint.x = blockX * this.blockWidth;
            mapPoint.y = blockY * this.blockHeight;
        } else {
            mapPoint.x = this.view.width - (blockX + 1) * this.blockWidth;
            mapPoint.y = this.view.height - (blockY + 1) * this.blockHeight;
        }
        return mapPoint
    }

    /**根据地图坐标返回场景坐标 */
    public getScenePoint(blockX: number, blockY: number) {
        if (this._isFirst) {
            return this.view.localToRoot(blockX * this.blockWidth, blockY * this.blockHeight);
        } else {
            return this.view.localToRoot(this.view.width - (blockX + 1) * this.blockWidth, this.view.height - (blockY + 1) * this.blockHeight);
        }
    }

    /**单位扣血 */
    public entityReduceHeath(entityCard: GamePto.ICard, damage: number) {
        const entity = this.entityPool[entityCard.blockX][entityCard.blockY];
        entity.healthText.text = `${entityCard.health}`;
        this.entityShowTips(entity, `${-damage}`);
    }

    /**单位头上飘提示 */
    public entityShowTips(entity: BaseUI.UIMapUnit | BaseUI.UIMapBuilding, text: string, color: number = 0xFF0000) {
        let tips = new fairygui.GTextField();
        tips.fontSize = 26;
        tips.color = color;
        tips.bold = true;
        tips.text = text;
        const point = entity.localToRoot((entity.width - tips.width) / 2, (entity.height - tips.height) / 2);
        tips.x = point.x;
        tips.y = point.y;
        fairygui.GRoot.inst.addChild(tips)
        egret.Tween.get(tips).to({ y: tips.y - entity.height }, 2500).call(() => {
            fairygui.GRoot.inst.removeChild(tips)
        })
    }

    /**根据数据生成地图 */
    private initMapBlock() {
        const shp: egret.Shape = new egret.Shape();
        shp.x = this.view.x;
        shp.y = this.view.y;

        shp.graphics.lineStyle(2, 0xFFFFFF);
        let endX = 7 * this.blockWidth;
        let endY = 8 * this.blockHeight;
        for (let index = 0; index < 8; index++) {
            shp.graphics.moveTo(index * this.blockWidth, 0);
            shp.graphics.lineTo(index * this.blockWidth, endY);
        }

        for (let index = 0; index < 9; index++) {
            shp.graphics.moveTo(0, index * this.blockHeight);
            shp.graphics.lineTo(endX, index * this.blockHeight);
        }
        shp.graphics.endFill();
        (GameSceneView.ins().getView().displayObject as egret.DisplayObjectContainer).addChild(shp);
    }
}