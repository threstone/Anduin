class MapModel extends BaseModel {

    private _mapData: GamePto.ICard[][];

    private _serverData: GamePto.IMapData;
    set serverData(data: GamePto.IMapData) {
        this._serverData = data;

        //init mapData
        this._mapData = [];
        for (let x = 0; x < 7; x++) {
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

    public onUseCard(msg: GamePto.S_USE_CARD, cardConfig: CardInterface) {
        if (cardConfig.cardType === CardsPto.CardType.Event) {
            this._serverData.eventCards.push(msg.card);
        } else if (cardConfig.cardType === CardsPto.CardType.Building
            || cardConfig.cardType === CardsPto.CardType.Unit) {
            this._serverData.entityCards.push(msg.card);
            this._mapData[msg.card.blockX][msg.card.blockY] = msg.card;
        }
    }

    public getHero(uid: number) {
        for (let index = 0; index < this._serverData.entityCards.length; index++) {
            const entity = this._serverData.entityCards[index];
            if (entity.uid === uid && CardsModel.ins().getCardInfoById(entity.cardId).cardType === CardsPto.CardType.Hero) {
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
            const baseX = point % 7;
            const baseY = Math.floor(point / 7);
            this.getAttackablePoint(baseX, baseY, config, resultMap);
        })
        return resultMap;
    }

    /**获取可攻击位置 */
    public getAttackablePoint(baseX: number, baseY: number, config: CardInterface, resultMap = new Map<number, number>()) {
        //获取攻击距离
        const atkRange = CardsModel.ins().getCardAtkRange(config);
        const basePoint = baseY * 7 + baseX;
        for (let x = baseX - atkRange; x <= baseX + atkRange; x++) {
            const targetPoint = baseY * 7 + x;
            if (!resultMap.has(targetPoint) && this.allowAtk(x, baseY)) {
                resultMap.set(targetPoint, basePoint);
            }
        }
        for (let y = baseY - atkRange; y <= baseY + atkRange; y++) {
            const targetPoint = y * 7 + baseX;
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
        if (x < 0 || x >= 7 || y < 0 || y >= 8) {
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
                resultSet.add(y * 7 + x);
                this.getWalkablePoint(x, y, step - 1, resultSet)
            }
        }
    }

    /**获取可以飞到的位置 */
    private getFlyablePoint(baseX: number, baseY: number, step: number, resultSet: Set<number>) {
        for (let x = baseX - step; x <= baseX + step; x++) {
            for (let y = baseY - step; y <= baseY + step; y++) {
                if (this.getMovable(x, y)) {
                    resultSet.add(y * 7 + x);
                }
            }
        }
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
    private S_EVENT_FINISH(msg: GamePto.S_EVENT_FINISH) {
        for (let index = 0; index < this._serverData.eventCards.length; index++) {
            const eventCard = this._serverData.eventCards[index];
            if (eventCard.id === msg.card.id) {
                if (msg.card.uid === UserModel.ins().uid) {
                    GameModel.ins().deadPool.push(msg.card);
                } else {
                    GameModel.ins().targetDeadPoolNum++;
                }
                this.emit('UpdateDeadCardNum');
                this._serverData.eventCards.splice(index, 1);
                return;
            }
        }
    }

    //更新战场指定entity列表
    private S_UPDATE_ENTITYS(msg: GamePto.S_UPDATE_ENTITYS) {
        for (let index = 0; index < msg.entityCards.length; index++) {
            const entity = msg.entityCards[index];
            const oldCard = this._mapData[entity.blockX][entity.blockY];

            const cardIndex = this._serverData.entityCards.indexOf(oldCard);
            this._serverData.entityCards[cardIndex] = entity;
            this._mapData[entity.blockX][entity.blockY] = entity;
        }

        this.emit('S_UPDATE_ENTITYS', msg);
    }
}