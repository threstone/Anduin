const MapWidth = 7;
const MapHeight = 8;
const PXNeedMs = 5;
class MapView extends BaseView<BaseUI.UIMapView> {
    /**悬浮时的显示卡牌 */
    private _detailCard: BaseUI.UICardItem;

    blockWidth: number;
    blockHeight: number;

    entityMap: Map<number, BaseUI.UIMapUnit | BaseUI.UIMapBuilding>;

    protected init() {
        this.view = GameSceneView.ins().getView().map;
        this.blockWidth = 140;
        this.blockHeight = 95;
    }

    public open(): void {
        super.open();
        this.entityMap = new Map<number, BaseUI.UIMapUnit | BaseUI.UIMapBuilding>();

        this.addEffectListener('S_MAP_DATA', this.updateMap);
        this.addEffectListener('S_ROUND_END_EVENT', this.onRoundEnd);
        this.addEffectListener('S_MOVE', this.moveUnit);
        this.addEffectListener('S_ATTACK', this.onAttack);
        this.addEffectListener('S_ENTITY_DEAD', this.entityDead);
        this.addEffectListener('S_UPDATE_ENTITYS', this.entitysUpdate);
        this.addEffectListener('S_SELF_EFFECT', this.entitysSelfEffect);
        this.addEffectListener('S_FLY_EFFECT', this.flyEffect);
    }

    private onRoundEnd(msg: GamePto.S_ROUND_END_EVENT) {
        if (msg.uid === UserModel.ins().uid) {
            this.updateMap();
        }
    }

    public close(): void {
        super.close();
        this.entityMap.clear();
        this.view.removeChildren();
        this.view.addChild(this.view.bg);
    }

    public addMapItem(cardInfo: GamePto.ICard) {
        const cardItem = MapItem.getItem(cardInfo);
        this.entityMap.set(cardInfo.id, cardItem);

        this.view.addChild(cardItem);

        //增加悬浮事件
        this.addEvent(cardItem, mouse.MouseEvent.MOUSE_OVER, this.onEntityHover, this);
        this.addEvent(cardItem, mouse.MouseEvent.MOUSE_OUT, () => {
            this.view.removeChild(this._detailCard);
            this._detailCard = null;
        }, this);

        this.AddClick(cardItem, this.onEntityClick);
        //非建筑增加拖动操作
        if (cardInfo.cardType !== CardsPto.CardType.Building) {
            const unitItem = cardItem as BaseUI.UIMapUnit;
            this.addDragEvent(unitItem, unitItem.dragLoader, this.onEntityDragStart, this.onEntityDragEnd)
        }

        const mapPoint = this.getMapPoint(cardInfo.blockX, cardInfo.blockY);
        cardItem.x = mapPoint.x;
        cardItem.y = mapPoint.y;

        //英雄的添加同时也要初始化左侧英雄控件的信息
        if (cardInfo.cardType === CardsPto.CardType.Hero) {
            this.emit('InitLeftHeroInfo', cardInfo);
        }

        this.updateUnitOperateTips(cardItem as BaseUI.UIMapUnit, cardInfo);
    }

    public deleteMapItem(entity: BaseUI.UIMapUnit | BaseUI.UIMapBuilding) {
        this.view.removeChild(entity);
        this.removeTargetEvents(entity);
    }

    /**更新指定地图卡 */
    public updateMapItem(cardInfo: GamePto.ICard) {
        if (!cardInfo) {
            return;
        }
        const mapItem = this.entityMap.get(cardInfo.id);
        //英雄的信息变更要跟着变左侧英雄控件的信息
        if (cardInfo.cardType === CardsPto.CardType.Hero) {
            this.emit('UpdateLeftHeroInfo', cardInfo);
        }
        MapItem.updateEntityDesc(mapItem, cardInfo);
        this.updateUnitOperateTips(mapItem as BaseUI.UIMapUnit, cardInfo);
    }

    /**根据可移动状态以及可攻击对象来决定是否显示提示 */
    private updateUnitOperateTips(unit: BaseUI.UIMapUnit, cardInfo: GamePto.ICard) {
        //如果是自己回合、自己的单位、且是可以操作的单位,就需要判断是否显示可操作提示
        if (cardInfo.uid === UserModel.ins().uid && (cardInfo.cardType === CardsPto.CardType.Unit || cardInfo.cardType === CardsPto.CardType.Hero)) {
            unit.allowOperate.visible = false;
            if (!GameSceneView.ins().allowToOprate) {
                return;
            }
            const config = CardsModel.ins().getCardConfigById(cardInfo.cardId);
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
    }

    /**
     * 操作合法性检测
     * @returns 返回被操作卡牌的信息
     */
    private operateAccessCheck(evt: egret.TouchEvent) {
        if (!GameSceneView.ins().allowToOprate) {
            return;
        }

        const mapBlock = new egret.Point();
        this.isInMap(evt.stageX, evt.stageY, mapBlock);
        const cardInfo = MapModel.ins().getEntityCard(mapBlock.x, mapBlock.y);
        if (!cardInfo || cardInfo.uid !== UserModel.ins().uid || cardInfo.cardType === CardsPto.CardType.Building) {
            return;
        }
        return cardInfo;
    }

    /**当地图元素被点击 */
    private onEntityClick(evt: egret.TouchEvent) {
        const cardInfo = this.operateAccessCheck(evt);
        if (!cardInfo) {
            return;
        }

        const config = CardsModel.ins().getCardConfigById(cardInfo.cardId);
        // 显示所有可移动路径
        const movePointSet = new Set<number>();
        movePointSet.add(cardInfo.blockY * MapWidth + cardInfo.blockX);
        //检查是否允许移动
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

    /**当悬浮地图元素 */
    private onEntityHover(evt: egret.TouchEvent) {
        const mapBlock = new egret.Point();
        this.isInMap(evt.stageX, evt.stageY, mapBlock);
        const cardInfo = MapModel.ins().getEntityCard(mapBlock.x, mapBlock.y);
        if (!cardInfo) {
            return;
        }


        this._detailCard = CardItem.getCardDetail(cardInfo);
        this.view.addChild(this._detailCard);

        const cardItem = this.entityMap.get(cardInfo.id);
        this._detailCard.x = cardItem.x + cardItem.width;
        this._detailCard.y = cardItem.y;
        if (this._detailCard.y + this._detailCard.height > this.view.height) {
            this._detailCard.y = this.view.height - this._detailCard.height;
        }
    }

    /**当地图场景被拖动 */
    private onEntityDragEnd(evt: egret.TouchEvent) {
        const point = new egret.Point();
        if (!this.isInMap(evt.stageX, evt.stageY, point)) {
            return;
        }
        MapTipsView.ins().dispatchTipsEvent(point.x, point.y);
        MapTipsView.ins().close();
    }

    /**中途停止拖动 */
    private stopItemDrag(evt: egret.TouchEvent) {
        evt.preventDefault();
        const loader = evt.currentTarget as fairygui.GLoader;
        loader.dispatchEvent(new egret.Event(fairygui.DragEvent.DRAG_END));
    }

    /**当地图场景被拖动 */
    private onEntityDragStart(evt: egret.TouchEvent) {
        const cardInfo = this.operateAccessCheck(evt);
        if (!cardInfo) {
            this.stopItemDrag(evt);
            return;
        }

        const config = CardsModel.ins().getCardConfigById(cardInfo.cardId);
        // 显示所有可移动路径
        const movePointSet = new Set<number>();
        movePointSet.add(cardInfo.blockY * MapWidth + cardInfo.blockX);
        //检查是否允许移动
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

        //没有操作就结束拖动
        if (MapTipsView.ins().hasTips() === false) {
            this.stopItemDrag(evt);
            return;
        }

        //走到这里说明使有操作的
        this.view.removeChild(this._detailCard);
        this._detailCard = null;
    }

    /**移动单位 */
    public async moveUnit(msg: GamePto.S_MOVE) {
        const mapItem = this.entityMap.get(msg.card.id) as BaseUI.UIMapUnit;
        const oldIndex = this.view.getChildIndex(mapItem);
        this.view.setChildIndex(mapItem, 999);
        const targetPoint = this.getMapPoint(msg.card.blockX, msg.card.blockY);
        egret.Tween.get(mapItem).to({ x: targetPoint.x, y: targetPoint.y }, 500).call(() => {
            this.view.setChildIndex(mapItem, oldIndex);
        });
        const cardInfo = msg.card;
        if (cardInfo.uid === UserModel.ins().uid) {
            this.updateUnitOperateTips(mapItem, cardInfo);
        }
        await this.wait(500);
    }

    /**单位攻击单位 */
    private async onAttack(msg: GamePto.S_ATTACK) {
        const sourceEntity = this.entityMap.get(msg.from.id) as BaseUI.UIMapUnit;
        const targetEntity = this.entityMap.get(msg.targetList[0].id);

        const sourceCardInfo = msg.from;
        const targetCardInfo = msg.targetList[0];

        await RightCtrlView.ins().showDices(msg.dices);

        //攻击效果
        const sourceConfig = CardsModel.ins().getCardConfigById(sourceCardInfo.cardId);
        await this.showAttack(sourceEntity, targetEntity, sourceConfig);

        //执行完效果后就飘血扣血
        msg.targetList.forEach((target) => {
            const entity = this.entityMap.get(target.id);
            this.entityShowTips(entity, `-${msg.damage}`);
            this.updateMapItem(target);
        });

        this.updateMapItem(sourceCardInfo);
        this.updateMapItem(targetCardInfo);
    }

    /**攻击效果 根据近战远程区分效果 */
    private async showAttack(source: BaseUI.UIMapUnit, target: BaseUI.UIMapUnit | BaseUI.UIMapBuilding, sourceConfig: CardInterface) {
        //近战
        if (sourceConfig.detailType === CardsPto.AtkType.CloseRange) {
            const cacheX = source.x;
            const cacheY = source.y;
            let oldIndex = this.view.getChildIndex(source);
            this.view.setChildIndex(source, 999);
            egret.Tween.get(source).to({ x: target.x, y: target.y }, 500, egret.Ease.quintIn).to({ x: cacheX, y: cacheY }, 300).call(() => {
                this.view.setChildIndex(source, oldIndex);
            });
            await this.wait(500);
        }//远程 
        else if (sourceConfig.detailType === CardsPto.AtkType.LongRange) {
            const effectData = ConfigMgr.ins().getEffectDataById(sourceConfig.effectId);
            if (!effectData) {
                return;
            }
            const effect = await EffectMgr.ins().loadEffectById(effectData);

            effect.x = source.x;
            effect.y = source.y;

            let skew = 0;
            let time = 0;
            //确定旋转角度及飞行时间
            if (source.x === target.x) {
                skew = source.y > target.y ? 0 : 180;
                time = Math.abs(source.y - target.y) * PXNeedMs;
            } else {
                skew = source.x > target.x ? 270 : 90;
                time = Math.abs(source.x - target.x) * PXNeedMs;
            }
            effect.skewX = skew - effectData.defaultRotation;
            effect.skewY = skew - effectData.defaultRotation;

            this.view.displayListContainer.addChild(effect);
            egret.Tween.get(effect).to({ x: target.x, y: target.y }, time, egret.Ease.quintInOut).to({}, 300).call(() => {
                this.view.displayListContainer.removeChild(effect);
            });
            await this.wait(time);
        }
    }

    /**死亡 */
    private async entityDead(msg: GamePto.S_ENTITY_DEAD) {
        const entity = this.entityMap.get(msg.deadCard.id);;
        //淡化死亡
        egret.Tween.get(entity).to({ alpha: 0, x: entity.x, y: entity.y }, 500, egret.Ease.bounceInOut).call(() => {
            this.deleteMapItem(entity);
        })
        await this.wait(500);
    }

    /**更新地图信息 */
    public updateMap() {
        const entityCards = MapModel.ins().entityCards;
        for (let index = 0; index < entityCards.length; index++) {
            const cardInfo = entityCards[index];
            const entity = this.entityMap.get(cardInfo.id);
            if (entity) {
                this.updateMapItem(cardInfo);
            } else {
                this.addMapItem(cardInfo);
            }
        }
    }

    /**更新战场指定entity列表 */
    private entitysUpdate(msg: GamePto.S_UPDATE_ENTITYS) {
        for (let index = 0; index < msg.entityCards.length; index++) {
            const entityInfo = msg.entityCards[index];
            const entity = this.entityMap.get(entityInfo.id);
            if (entity) {
                this.updateMapItem(entityInfo);
            } else {
                this.addMapItem(entityInfo);
            }
            const tips = msg.tipsList[index];
            if (tips) {
                this.entityShowTips(this.entityMap.get(entityInfo.id), tips);
            }
        }
    }

    /**实体自身特效 */
    private async entitysSelfEffect(msg: GamePto.S_SELF_EFFECT) {
        const card = MapModel.ins().getEntityCard(msg.x, msg.y);
        if (!card) {
            return;
        }

        const cardConfig = CardsModel.ins().getCardConfigById(card.cardId);
        if (!cardConfig) {
            return;
        }

        const effectData = ConfigMgr.ins().getEffectDataById(cardConfig.effectId);
        if (!effectData) {
            return;
        }
        const effect = await EffectMgr.ins().loadEffectById(effectData);
        const entityItem = this.entityMap.get(card.id);
        effect.x = entityItem.width / 2;
        effect.y = entityItem.height / 2;
        entityItem.displayListContainer.addChild(effect);
        return new Promise<void>((resolve) => {
            //如果是bitmap那么执行一个放大变小的效果
            if (effect instanceof egret.Bitmap) {
                egret.Tween.get(entityItem).to({ scaleX: 1.1, scaleY: 1.1 }, 500).to({ scaleX: 1, scaleY: 1 }, 400).call(() => {
                    entityItem.displayListContainer.removeChild(effect);
                    resolve();
                });
            } else {
                //movieClip的话直接执行就好
                effect.once(egret.Event.COMPLETE, () => {
                    entityItem.displayListContainer.removeChild(effect);
                    resolve();
                }, this)
                effect.play(1);
            }
        });
    }

    /**飞行弹道效果 类似火球术、魔法箭 */
    private async flyEffect(msg: GamePto.S_FLY_EFFECT) {
        const targetEntity = this.entityMap.get(msg.target.id);
        if (!targetEntity) {
            console.error('获取不到目标');
            return;
        }

        let sourceEntity = this.entityMap.get(msg.from.id);
        //如果找不到对应的实体，那就由英雄为起点发送
        if (!sourceEntity) {
            const hero = MapModel.ins().getHero(msg.from.uid);
            sourceEntity = this.entityMap.get(hero.id);
        }

        const sourceConfig = CardsModel.ins().getCardConfigById(msg.from.cardId);
        const effectData = ConfigMgr.ins().getEffectDataById(sourceConfig.effectId);
        if (!effectData) {
            return;
        }

        const effect = await EffectMgr.ins().loadEffectById(effectData);
        effect.x = sourceEntity.x;
        effect.y = sourceEntity.y;
        this.view.displayListContainer.addChild(effect);
        return new Promise<void>((resolve) => {
            //计算飞行时间
            const time = Utils.getDistance(sourceEntity.x, sourceEntity.y, targetEntity.x, targetEntity.y) * PXNeedMs / 2;

            if (effect instanceof egret.MovieClip) {
                effect.play(-1);
            } else {
                //计算角度
                let skew = Utils.getPointAngle(sourceEntity.x, sourceEntity.y, targetEntity.x, targetEntity.y);
                effect.skewX = skew - effectData.defaultRotation;
                effect.skewY = skew - effectData.defaultRotation;
            }
            egret.Tween.get(effect).to({ x: targetEntity.x, y: targetEntity.y }, time, egret.Ease.quintInOut).to({}, 300).call(() => {
                this.view.displayListContainer.removeChild(effect);
                if (effect instanceof egret.MovieClip) {
                    effect.stop();
                }
                //执行完效果后就飘血扣血
                this.entityShowTips(targetEntity, msg.targetShowTips);
                this.updateMapItem(msg.target);
                resolve();
            });
        });

    }

    /**传入一个位置，检查是否在地图范围中 */
    public isInMap(x: number, y: number, mapPoint?: egret.Point) {
        const map = this.view;
        const position = map.localToRoot();
        if (x >= position.x && x <= position.x + map.width &&
            y >= position.y && y <= position.y + map.height) {
            const localPoint = this.view.rootToLocal(x, y);
            if (mapPoint) {
                if (GameModel.ins().isFirst) {
                    mapPoint.x = Math.floor(localPoint.x / this.blockWidth);
                    mapPoint.y = Math.floor(localPoint.y / this.blockHeight);
                } else {
                    mapPoint.x = Math.floor((this.view.width - localPoint.x) / this.blockWidth);
                    mapPoint.y = Math.floor((this.view.height - localPoint.y) / this.blockHeight);
                }
            }
            return true;
        }
        return false;
    }

    /**根据地图坐标返回地图坐标格子中心 */
    public getMapPoint(blockX: number, blockY: number) {
        const mapPoint = new egret.Point();
        if (GameModel.ins().isFirst) {
            mapPoint.x = blockX * this.blockWidth;
            mapPoint.y = blockY * this.blockHeight;
        } else {
            mapPoint.x = this.view.width - (blockX + 1) * this.blockWidth;
            mapPoint.y = this.view.height - (blockY + 1) * this.blockHeight;
        }
        mapPoint.x += this.blockWidth / 2;
        mapPoint.y += this.blockHeight / 2;
        return mapPoint;
    }

    /**根据地图坐标返回场景坐标 */
    public getScenePoint(blockX: number, blockY: number) {
        if (GameModel.ins().isFirst) {
            return this.view.localToRoot(blockX * this.blockWidth, blockY * this.blockHeight);
        } else {
            return this.view.localToRoot(this.view.width - (blockX + 1) * this.blockWidth, this.view.height - (blockY + 1) * this.blockHeight);
        }
    }

    /**单位扣血 */
    public entityReduceHeath(entityCard: GamePto.ICard, damage: number) {
        const entity = this.entityMap.get(entityCard.id);;
        entity.healthText.text = `${entityCard.health}`;
        this.entityShowTips(entity, `${-damage}`);
    }

    /**单位头上飘提示 */
    public entityShowTips(entity: BaseUI.UIMapUnit | BaseUI.UIMapBuilding, text: string, color: number = 0xFF0000) {
        //减号开始的是伤害
        if (text.startsWith('-')) {
            this.showEntityDamageTips(entity, text);
            return;
        }
        const tips = new fairygui.GTextField();
        tips.fontSize = 26;
        tips.color = color;
        //加号开始的是恢复
        if (text.startsWith('+')) {
            tips.color = 0x00FF00;
        }
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

    /**伤害提示 */
    public showEntityDamageTips(entity: BaseUI.UIMapUnit | BaseUI.UIMapBuilding, text: string) {
        const atkTips = BaseUI.UIDamageTips.createInstance();
        atkTips.setPivot(0.5, 0.5, true);
        atkTips.damageDetail.text = text;
        atkTips.scaleX = 0.2;
        atkTips.scaleY = 0.2;
        const point = entity.localToRoot((entity.width) / 2, (entity.height) / 2);
        atkTips.x = point.x;
        atkTips.y = point.y;
        fairygui.GRoot.inst.addChild(atkTips);
        egret.Tween.get(atkTips).to({ scaleX: 0.7, scaleY: 0.7 }, 400, egret.Ease.quintOut).to({}, 1000).call(() => {
            fairygui.GRoot.inst.removeChild(atkTips)
        })
    }

    /**根据数据生成地图 */
    private initMapBlock() {
        const shp: egret.Shape = new egret.Shape();
        shp.x = this.view.x;
        shp.y = this.view.y;

        shp.graphics.lineStyle(2, 0xFFFFFF);
        let endX = MapWidth * this.blockWidth;
        let endY = MapHeight * this.blockHeight;
        for (let index = 0; index < MapWidth + 1; index++) {
            shp.graphics.moveTo(index * this.blockWidth, 0);
            shp.graphics.lineTo(index * this.blockWidth, endY);
        }

        for (let index = 0; index < MapHeight + 1; index++) {
            shp.graphics.moveTo(0, index * this.blockHeight);
            shp.graphics.lineTo(endX, index * this.blockHeight);
        }
        shp.graphics.endFill();
        GameSceneView.ins().getView().displayListContainer.addChild(shp);
    }
}