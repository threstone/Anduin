class MapModel extends BaseModel {

    private _mapData: GamePto.ICard[][];

    private _serverData: GamePto.IMapData;
    set serverData(data: GamePto.IMapData) {
        this._serverData = data;

        //init mapData
        this._mapData = [];
        for (let x = 0; x < MapWidth; x++) {
            this._mapData[x] = [];
        }
        for (let index = 0; index < data.entityCards.length; index++) {
            const entityCard = data.entityCards[index];
            this._mapData[entityCard.blockX][entityCard.blockY] = entityCard;
        }
    }

    get entityCards() {
        return this._serverData.entityCards;
    }

    get eventCards() {
        return this._serverData.eventCards;
    }

    /**获得可以放置建筑位置 */
    public getAccessPointForUseBuilding(uid: number) {
        //英雄旁边
        const pointSet = new Set<number>();
        const hero = MapModel.ins().getHero(uid);
        Utils.getAroundByDistance(hero.blockX, hero.blockY, 1).forEach((p) => {
            if (!this.getEntityCardByPoint(p.x, p.y)) {
                pointSet.add(p.x + p.y * MapWidth);
            }
        });
        // 或者后三格
        let yStart = GameModel.ins().isFirst ? MapHeight - 3 : 0;
        const yMax = GameModel.ins().isFirst ? MapHeight : 3;
        for (let x = 0; x < MapWidth; x++) {
            for (let y = yStart; y < yMax; y++) {
                if (!this.getEntityCardByPoint(x, y)) {
                    pointSet.add(x + y * MapWidth);
                }
            }
        }
        return pointSet;
    }

    /**是否有出兵建筑 */
    public hasCampBuilding(uid: number) {
        for (let index = 0; index < this.entityCards.length; index++) {
            const entity = this.entityCards[index];
            if (entity.uid === uid && entity.cardType === CardsPto.CardType.Building) {
                const cardConfig = CardsModel.ins().getCardConfigById(entity.cardId);
                if (cardConfig.detailType === CardsPto.BuilingType.Base || cardConfig.detailType === CardsPto.BuilingType.Camp) {
                    return true;
                }
            }
        }
        return false;
    }

    /**获取到所有出兵建筑 */
    public getCampBuildings(uid: number) {
        const res: GamePto.ICard[] = [];
        for (let index = 0; index < this.entityCards.length; index++) {
            const entity = this.entityCards[index];
            if (entity.uid === uid && entity.cardType === CardsPto.CardType.Building) {
                const cardConfig = CardsModel.ins().getCardConfigById(entity.cardId);
                if (cardConfig.detailType === CardsPto.BuilingType.Base || cardConfig.detailType === CardsPto.BuilingType.Camp) {
                    res.push(entity)
                }
            }
        }
        return res;
    }

    public onUseCard(msg: GamePto.S_USE_CARD) {
        if (msg.card.cardType === CardsPto.CardType.Event) {
            this._serverData.eventCards.push(msg.card);
        } else if (msg.card.cardType === CardsPto.CardType.Building
            || msg.card.cardType === CardsPto.CardType.Unit) {
            this._serverData.entityCards.push(msg.card);
            this._mapData[msg.card.blockX][msg.card.blockY] = msg.card;
        }
    }

    public getHero(uid: number) {
        for (let index = 0; index < this._serverData.entityCards.length; index++) {
            const entity = this._serverData.entityCards[index];
            if (entity.uid === uid && entity.cardType === CardsPto.CardType.Hero) {
                return entity;
            }
        }
    }

    /**获取指定位置的单位 */
    public getEntityCardByPoint(blockX: number, blockY: number): GamePto.ICard {
        return this._mapData[blockX][blockY];
    }

    /**回合结束将所有卡牌的可操作性权限中止 */
    public onGameEnd() {
        for (let index = 0; index < this._serverData.entityCards.length; index++) {
            const unitCard = this._serverData.entityCards[index];
            unitCard.allowAtk = false;
            unitCard.allowMove = false;
        }
    }

    /**获取可攻击位置 */
    public getAttackablePointSet(pointSet: Set<number>, config: CardInterface) {
        const resultMap = new Map<number, number>();
        pointSet.forEach((point) => {
            const baseX = point % MapWidth;
            const baseY = Math.floor(point / MapWidth);
            this.getAttackablePoint(baseX, baseY, config, resultMap);
        })
        return resultMap;
    }

    /**获取可攻击位置 */
    public getAttackablePoint(baseX: number, baseY: number, config: CardInterface, resultMap = new Map<number, number>()) {
        //获取攻击距离
        const atkRange = CardsModel.ins().getCardAtkRange(config);
        const basePoint = baseY * MapWidth + baseX;
        for (let x = baseX - atkRange; x <= baseX + atkRange; x++) {
            const targetPoint = baseY * MapWidth + x;
            if (!resultMap.has(targetPoint) && this.allowAtk(x, baseY)) {
                resultMap.set(targetPoint, basePoint);
            }
        }
        for (let y = baseY - atkRange; y <= baseY + atkRange; y++) {
            const targetPoint = y * MapWidth + baseX;
            if (!resultMap.has(targetPoint) && this.allowAtk(baseX, y)) {
                resultMap.set(targetPoint, basePoint);
            }
        }
        return resultMap;
    }

    /**是否允许攻击 */
    private allowAtk(x: number, y: number) {
        if (!this._mapData[x]) {
            return false;
        }
        const unit = this._mapData[x][y];
        //有单位且非友方单位
        if (unit && unit.uid !== UserModel.ins().uid) {
            return true;
        }
        return false;
    }

    /**获取可移动坐标 */
    public getMovablePoint(cardInfo: GamePto.ICard, config: CardInterface, movePointSet = new Set<number>()) {
        //要根据卡片配置决定是飞行还是行走
        const step = CardsModel.ins().getCardMoveStep(config);
        const isFly = step < 0;
        if (isFly) {
            this.getFlyablePoint(cardInfo.blockX, cardInfo.blockY, step, movePointSet);
        } else {
            this.getWalkablePoint(cardInfo.blockX, cardInfo.blockY, step, movePointSet);
        }
        return movePointSet;
    }

    /**获取目标位置是否可以移动 */
    private getMovable(x: number, y: number) {
        if (x < 0 || x >= MapWidth || y < 0 || y >= MapHeight) {
            return false;
        }
        return this._mapData[x][y] == null;
    }

    /**获取可以走去的位置 */
    private getWalkablePoint(baseX: number, baseY: number, step: number, resultSet: Set<number>) {
        if (step === 0) {
            return;
        }

        const checkXArr = [baseX - 1, baseX + 1, baseX, baseX];
        const checkYArr = [baseY, baseY, baseY + 1, baseY - 1];
        for (let index = 0; index < 4; index++) {
            const x = checkXArr[index];
            const y = checkYArr[index];
            if (this.getMovable(x, y)) {
                resultSet.add(y * MapWidth + x);
                this.getWalkablePoint(x, y, step - 1, resultSet)
            }
        }
    }

    /**获取可以飞到的位置 */
    private getFlyablePoint(baseX: number, baseY: number, step: number, resultSet: Set<number>) {
        for (let x = baseX - step; x <= baseX + step; x++) {
            for (let y = baseY - step; y <= baseY + step; y++) {
                if (this.getMovable(x, y)) {
                    resultSet.add(y * MapWidth + x);
                }
            }
        }
    }

    /**更新entity数据 */
    private updateEntity(entity: GamePto.ICard) {
        const oldCard = this._mapData[entity.blockX][entity.blockY];
        const cardIndex = this._serverData.entityCards.indexOf(oldCard);
        this._serverData.entityCards[cardIndex] = entity;
        this._mapData[entity.blockX][entity.blockY] = entity;
    }

    /**请求移动 */
    public C_MOVE(sourceX: number, sourceY: number, targetX: number, targetY: number) {
        const msg = new GamePto.C_MOVE();
        msg.sourceX = sourceX;
        msg.sourceY = sourceY;
        msg.targetX = targetX;
        msg.targetY = targetY;
        this.sendMsg(msg);
    }

    /**请求攻击 */
    public C_ATTACK(sourceX: number, sourceY: number, targetX: number, targetY: number) {
        const msg = new GamePto.C_ATTACK();
        msg.sourceX = sourceX;
        msg.sourceY = sourceY;
        msg.targetX = targetX;
        msg.targetY = targetY;
        this.sendMsg(msg);
    }

    //请求移动返回
    private S_MOVE(msg: GamePto.S_MOVE) {
        const oldCard = this._mapData[msg.sourceX][msg.sourceY];
        const cardIndex = this._serverData.entityCards.indexOf(oldCard);
        this._serverData.entityCards[cardIndex] = msg.card;

        this._mapData[msg.sourceX][msg.sourceY] = null;
        this._mapData[msg.card.blockX][msg.card.blockY] = msg.card;

        this.emit('S_MOVE', msg);
        GameModel.ins().moveTimes--;
        if (GameModel.ins().moveTimes === 0) {
            this.emit('S_MAP_DATA', msg);
        }
    }

    //请求攻击返回
    private S_ATTACK(msg: GamePto.S_ATTACK) {
        const sourceCard = this._mapData[msg.sourceX][msg.sourceY];
        const targetCard = this._mapData[msg.targetX][msg.targetY];
        if (!sourceCard || !targetCard) {
            console.error('攻击所需对象缺失', msg);
            return;
        }
        sourceCard.allowAtk = msg.allowAtk;
        targetCard.health = msg.targetHealth;
        this.emit('S_ATTACK', msg);
        GameModel.ins().atkTimes--;
        if (GameModel.ins().atkTimes === 0) {
            this.emit('S_MAP_DATA', msg);
        }
    }

    //单位死亡
    private S_ENTITY_DEAD(msg: GamePto.S_ENTITY_DEAD) {
        this._mapData[msg.deadCard.blockX][msg.deadCard.blockY] = null;
        if (msg.deadCard.uid === UserModel.ins().uid) {
            GameModel.ins().deadPool.push(msg.deadCard);
        } else {
            GameModel.ins().targetDeadPoolNum++;
        }
        this.emit('UpdateDeadCardNum');
        this.emit('S_ENTITY_DEAD', msg);
    }

    //事件卡结束
    private S_EVENT_UPDATE(msg: GamePto.S_EVENT_UPDATE) {
        for (let index = 0; index < this._serverData.eventCards.length; index++) {
            const eventCard = this._serverData.eventCards[index];
            if (eventCard.id === msg.card.id) {
                //事件卡结束了
                if (msg.card.health <= 0) {
                    if (msg.card.uid === UserModel.ins().uid) {
                        GameModel.ins().deadPool.push(msg.card);
                    } else {
                        GameModel.ins().targetDeadPoolNum++;
                    }
                    this.emit('UpdateDeadCardNum');
                    this._serverData.eventCards.splice(index, 1);
                }

                this.emit('S_EVENT_UPDATE', msg.card);
                return;
            }
        }
    }

    //更新战场指定entity列表
    private S_UPDATE_ENTITYS(msg: GamePto.S_UPDATE_ENTITYS) {
        for (let index = 0; index < msg.entityCards.length; index++) {
            const entity = msg.entityCards[index];
            this.updateEntity(entity);
        }

        this.emit('S_UPDATE_ENTITYS', msg);
    }

    //公共卡牌效果
    private S_COMMON_EFFECT(msg: GamePto.S_COMMON_EFFECT) {
        //TODO
    }

    //飞行弹道效果 类似火球术、魔法箭
    private S_FLY_EFFECT(msg: GamePto.S_FLY_EFFECT) {
        this.updateEntity(msg.from);
        this.updateEntity(msg.target);
        this.emit('S_FLY_EFFECT', msg);
    }

    //在自己身上的一些特效，如农夫种田特效
    private S_SELF_EFFECT(msg: GamePto.S_SELF_EFFECT) {
        this.emit('S_SELF_EFFECT', msg);
    }

    //反制类卡牌会用到的协议
    private S_CARD_DENY(msg: GamePto.S_CARD_DENY) {
        //自己的卡被反制
        const gameModel = GameModel.ins();
        if (msg.target.uid === UserModel.ins().uid) {
            gameModel.deadPool.push(gameModel.handCards[msg.targetCardIndex]);
            gameModel.handCards.splice(msg.targetCardIndex, 1);
        } else {
            gameModel.targetDeadPoolNum++;
        }
        this.emit('S_CARD_DENY', msg);
        this.emit('UpdateDeadCardNum');
    }
}