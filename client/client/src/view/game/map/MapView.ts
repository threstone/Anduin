const MapWidth = 7;
const MapHeight = 8;
const PXNeedMs = 5;
class MapView extends BaseView<BaseUI.UIMapView> {

    //先手方一定是在下方，所以后手方需要做地图反转
    private _isFirst: boolean;
    set isFirst(v: boolean) {
        this._isFirst = v;
    }

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
        this.addEffectListener('S_ROUND_END_EVENT', this.updateMap);
        this.addEffectListener('S_MOVE', this.moveUnit);
        this.addEffectListener('S_ATTACK', this.onAttack);
        this.addEffectListener('S_ENTITY_DEAD', this.entityDead);
        this.addEffectListener('S_UPDATE_ENTITYS', this.entitysUpdate);
        this.addEffectListener('S_SELF_EFFECT', this.entitysSelfEffect);
        this.addEffectListener('S_FLY_EFFECT', this.flyEffect);
    }

    public close(): void {
        super.close();
        this.view.removeChildren();
        this.view.addChild(this.view.bg);
    }

    public addMapItem(cardInfo: GamePto.ICard) {
        const cardItem = MapItem.getItem(cardInfo)
        cardItem.setPivot(0.5, 0.5, true);
        this.entityMap.set(cardInfo.id, cardItem);
        this.view.addChild(cardItem);

        //增加悬浮事件
        this.addEvent(cardItem, mouse.MouseEvent.MOUSE_OVER, this.onEntityHover, this);
        this.addEvent(cardItem, mouse.MouseEvent.MOUSE_OUT, () => {
            this.view.removeChild(this._detailCard);
        }, this);

        this.AddClick(cardItem, this.onEntityClick);

        const mapPoint = this.getMapPoint(cardInfo.blockX, cardInfo.blockY);
        cardItem.x = mapPoint.x;
        cardItem.y = mapPoint.y;

        const config = CardsModel.ins().getCardConfigById(cardInfo.cardId);
        //英雄的添加同时也要初始化左侧英雄控件的信息
        if (config.cardType === CardsPto.CardType.Hero) {
            this.emit('InitLeftHeroInfo', [cardInfo, config]);
        }
    }

    public deleteMapItem(entity: BaseUI.UIMapUnit | BaseUI.UIMapBuilding) {
        this.view.removeChild(entity);
        this.removeTargetEvents(entity);
    }

    /**更新指定地图卡 */
    public updateMapItem(cardInfo: GamePto.ICard) {
        const mapItem = this.entityMap.get(cardInfo.id);
        const config = CardsModel.ins().getCardConfigById(cardInfo.cardId);
        //英雄的信息变更要跟着变左侧英雄控件的信息
        if (config.cardType === CardsPto.CardType.Hero) {
            this.emit('UpdateLeftHeroInfo', cardInfo);
        }
        MapItem.updateEntityDesc(mapItem, cardInfo);
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

        const config = CardsModel.ins().getCardConfigById(cardInfo.cardId);
        //自己的卡牌被点击
        if (GameSceneView.ins().allowToOprate && config.cardType !== CardsPto.CardType.Building) {
            // 显示所有可移动路径
            const movePointSet = new Set<number>();
            movePointSet.add(cardInfo.blockY * MapWidth + cardInfo.blockX);
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

    /**当悬浮地图元素 */
    private onEntityHover(evt: egret.TouchEvent) {
        const mapBlock = new egret.Point();
        this.isInMap(evt.stageX, evt.stageY, mapBlock);
        const cardInfo = MapModel.ins().getEntityCardByPoint(mapBlock.x, mapBlock.y);
        if (!cardInfo) {
            return;
        }
        this._detailCard = CardItem.getEntityCard(cardInfo);
        this.view.addChild(this._detailCard);

        const cardItem = this.entityMap.get(cardInfo.id);
        this._detailCard.x = cardItem.x + cardItem.width;
        this._detailCard.y = cardItem.y;
        if (this._detailCard.y + this._detailCard.height > this.view.height) {
            this._detailCard.y = this.view.height - this._detailCard.height;
        }
    }

    /**移动单位 */
    public async moveUnit(msg: GamePto.S_MOVE) {
        const mapItem = this.entityMap.get(msg.card.id) as BaseUI.UIMapUnit;
        const targetPoint = this.getMapPoint(msg.card.blockX, msg.card.blockY);
        egret.Tween.get(mapItem).to({ x: targetPoint.x, y: targetPoint.y }, 500);
        const cardInfo = msg.card;
        if (cardInfo.uid === UserModel.ins().uid) {
            const config = CardsModel.ins().getCardConfigById(cardInfo.cardId);
            this.updateUnitOperateTips(mapItem, cardInfo, config);
        }
        await this.wait(500);
    }

    /**单位攻击单位 */
    private async onAttack(msg: GamePto.S_ATTACK) {
        const sourceEntity = this.entityMap.get(msg.sourceId) as BaseUI.UIMapUnit;
        const targetEntity = this.entityMap.get(msg.targetId);
        if (!sourceEntity || !targetEntity) {
            console.error('攻击所需对象缺失', msg);
            return;
        }

        const sourceCardInfo = MapModel.ins().getEntityCardByPoint(msg.sourceX, msg.sourceY);
        const targetCardInfo = MapModel.ins().getEntityCardByPoint(msg.targetX, msg.targetY);

        await RightCtrlView.ins().showDices(msg.dices);

        //攻击效果
        const sourceConfig = CardsModel.ins().getCardConfigById(sourceCardInfo.cardId);
        await this.showAttack(sourceEntity, targetEntity, sourceConfig);

        //执行完效果后就飘血扣血
        this.entityShowTips(targetEntity, `-${msg.damage}`);

        this.updateMapItem(sourceCardInfo);
        this.updateMapItem(targetCardInfo);
    }

    /**攻击效果 根据近战远程区分效果 */
    private async showAttack(source: BaseUI.UIMapUnit, target: BaseUI.UIMapUnit | BaseUI.UIMapBuilding, sourceConfig: CardInterface) {
        //近战
        if (sourceConfig.atkType === CardsPto.AtkType.CloseRange) {
            const cacheX = source.x;
            const cacheY = source.y;
            let oldIndex = this.view.getChildIndex(source);
            this.view.setChildIndex(source, 99);
            egret.Tween.get(source).to({ x: target.x, y: target.y }, 500, egret.Ease.quintIn).to({ x: cacheX, y: cacheY }, 300).call(() => {
                this.view.setChildIndex(source, oldIndex);
            });
            await this.wait(500);
        }//远程 
        else if (sourceConfig.atkType === CardsPto.AtkType.LongRange) {
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
        let entityCards: GamePto.ICard[];
        if (TEST_GAME) {
            entityCards = [{ "cardId": 1, "attack": 4, "health": 10, "fee": 0, "uid": 2, "blockX": 3, "blockY": 0 }, { "cardId": 1, "attack": 4, "health": 10, "fee": 0, "uid": 1, "blockX": 3, "blockY": 7 }];
        } else {
            entityCards = MapModel.ins().entityCards;
        }
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
        }
    }

    /**实体自身特效 */
    private async entitysSelfEffect(msg: GamePto.S_SELF_EFFECT) {
        const card = MapModel.ins().getEntityCardByPoint(msg.x, msg.y);
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

        let sourceEntity = this.entityMap.get(msg.from.cardId);
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
                let skew = Utils.getPointAngle(sourceEntity.x, sourceEntity.y, targetEntity.x, targetEntity.y) - 90;
                if (targetEntity.x >= sourceEntity.x) {
                    skew += 180;
                }
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

    /**根据地图坐标返回地图坐标格子中心 */
    public getMapPoint(blockX: number, blockY: number) {
        const mapPoint = new egret.Point();
        if (this._isFirst) {
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
        if (this._isFirst) {
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