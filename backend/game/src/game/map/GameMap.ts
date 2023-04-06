
import { GamePto } from "../../../../common/CommonProto";
import { CardsPto } from "../../../../common/CommonProto";
import { BuffData } from "../../buff/BuffData";
import { BaseCard } from "../../card/BaseCard";
import { BuildingCard } from "../../card/BuildingCard";
import { EventCard } from "../../card/EventCard";
import { UnitCard } from "../../card/UnitCard";
import { GlobalVar } from "../../GlobalVar";
import { EventData, EventType } from "../EventDefine";
import { CardStatus } from "../GameDefine";
import { GameTable } from "../GameTable";
import { MapBlock } from "./MapBlock";

export class GameMap {

    private _width: number;
    get width() { return this._width }
    private _height: number;
    get height() { return this._height }

    private _table: GameTable;

    /**战场上生效的卡牌 */
    private _mapCards: EventCard[];

    /**战场足够小，直接用二维数组实现 */
    private _mapData: MapBlock[][];

    /**全局buff */
    private _globalBuff: BuffData[];

    constructor(width: number, height: number, table: GameTable) {
        this._width = width;
        this._height = height;
        this._table = table;

        this._mapCards = [];

        this._mapData = [];
        this._globalBuff = [];

        /**初始化 */
        for (let x = 0; x < width; x++) {
            this._mapData[x] = [];
            for (let y = 0; y < this._height; y++) {
                this._mapData[x][y] = new MapBlock();
            }
        }
    }

    /**向手牌新增的卡牌增加全局buff */
    public addGlobalBuffForNewHandCard(card: BaseCard) {
        this._globalBuff.forEach((buff) => {
            GlobalVar.buffMgr.addGlobalBuff(card, buff);
        });
    }

    /**向战场添加全局buff*/
    public addGlobalBuff(buff: BuffData) {
        const notice = new GamePto.S_UPDATE_ENTITYS();
        this._globalBuff.push(buff);
        //给战场上的单位增加buff
        for (let index = 0; index < this._mapCards.length; index++) {
            const card = this._mapCards[index];
            if (card.cardType !== CardsPto.CardType.Event) {
                GlobalVar.buffMgr.addGlobalBuff(card, buff);
                notice.entityCards.push(card);
            }
        }
        if (notice.entityCards.length !== 0) {
            this._table.broadcast(notice);
        }

        //给手牌增加buff
        this._table.users.forEach((user) => {
            user.handCards.forEach((card) => {
                GlobalVar.buffMgr.addGlobalBuff(card, buff);
            });
            //通知手牌变化
            user.noticeHandCardsChange();
        });
    }

    /**移除战场指定全局buff*/
    public deleteGlobalBuff(buff: BuffData) {
        const index = this._globalBuff.indexOf(buff);
        if (index === -1) {
            return;
        }

        const notice = new GamePto.S_UPDATE_ENTITYS();
        this._globalBuff.splice(index, 1);
        // 给战场上的单位移除buff
        for (let index = 0; index < this._mapCards.length; index++) {
            const card = this._mapCards[index];
            if (card.cardType !== CardsPto.CardType.Event) {
                GlobalVar.buffMgr.deleteGlobalBuff(card as BuildingCard, buff);
                notice.entityCards.push(card);
            }
        }
        if (notice.entityCards.length !== 0) {
            this._table.broadcast(notice);
        }

        //给手牌增加buff
        this._table.users.forEach((user) => {
            user.handCards.forEach((card) => {
                GlobalVar.buffMgr.deleteGlobalBuff(card, buff);
            });
            //通知手牌变化
            user.noticeHandCardsChange();
        });
    }

    /**增加位置buff */
    public addPositionBuff(baseX: number, baseY: number, effectiveDistance: number, buff: BuffData) {
        const notice = new GamePto.S_UPDATE_ENTITYS();
        const pointArr = this.getAroundByDistance(baseX, baseY, effectiveDistance);
        for (let index = 0; index < pointArr.length; index++) {
            const point = pointArr[index];
            const block = this._mapData[point.x][point.y]
            block.addBuff(buff);
            if (block.card) {
                notice.entityCards.push(block.card);
            }
        }
        if (notice.entityCards.length !== 0) {
            this._table.broadcast(notice);
        }
    }

    /**删除位置buff */
    public deletePositionBuff(baseX: number, baseY: number, effectiveDistance: number, buff: BuffData) {
        const notice = new GamePto.S_UPDATE_ENTITYS();
        const pointArr = this.getAroundByDistance(baseX, baseY, effectiveDistance);
        for (let index = 0; index < pointArr.length; index++) {
            const point = pointArr[index];
            const block = this._mapData[point.x][point.y]
            block.deleteBuff(buff);
            if (block.card) {
                notice.entityCards.push(block.card);
            }
        }
        if (notice.entityCards.length !== 0) {
            this._table.broadcast(notice);
        }
    }

    /**移除指定位置的指定格子的指定buff */
    public deletePositionBuffById(x: number, y: number, id: number) {
        this._mapData[x][y].deleteBuffById(id);
    }

    /**获取指定位置的卡牌 */
    public getCard(x: number, y: number) {
        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            return null;
        }
        return this._mapData[x][y].card;
    }

    /**设置卡牌到战场 */
    public setCard(card: UnitCard | BuildingCard, isAddGlobalBuff: boolean = true) {
        const mapBlock = this._mapData[card.blockX][card.blockY];
        if (mapBlock.card) {
            return;
        }

        card.cardStatus = CardStatus.Scene;
        mapBlock.setCard(card);
        this._mapCards.push(card);

        //增加全局Buff到卡牌
        if (isAddGlobalBuff) {
            this._globalBuff.forEach((buff) => {
                GlobalVar.buffMgr.addGlobalBuff(card, buff);
            });
        }
    }

    public deleteCard(x: number, y: number, isDeleteGlobalBuff: boolean = true) {
        const mapBlock = this._mapData[x][y];
        if (!mapBlock.card) {
            return;
        }
        const index = this._mapCards.indexOf(mapBlock.card);
        this._mapCards.splice(index, 1);

        //删除卡牌全局Buff
        if (isDeleteGlobalBuff) {
            this._globalBuff.forEach((buff) => {
                GlobalVar.buffMgr.deleteGlobalBuff(mapBlock.card, buff);

            });
        }

        mapBlock.removeCard();
    }

    /** 往战场上添加事件卡*/
    public addEvent(card: EventCard) {
        card.cardStatus = CardStatus.Scene;
        this._mapCards.push(card);
    }

    /** 删除战场上的事件卡*/
    public deleteEvent(card: EventCard) {
        const index = this._mapCards.indexOf(card);
        if (index !== -1) {
            this._mapCards.splice(index, 1);
        }
    }

    /**是否可以移动到目标地点 */
    public checkMovable(targetX: number, targetY: number, card: UnitCard) {
        const resultSet = this.getMovablePoint(card);
        return resultSet.has(targetY * this._width + targetX);
    }

    /**更新卡牌位置 */
    public updateCardPosition(targetX: number, targetY: number, card: UnitCard) {
        this.deleteCard(card.blockX, card.blockY, false);
        card.lastX = card.blockX;
        card.lastY = card.blockY;
        card.blockX = targetX;
        card.blockY = targetY;
        this.setCard(card, false);
    }

    private checkMove(x: number, y: number) {
        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            return false;
        }
        return this.getCard(x, y) == null;
    }

    /**获取可移动坐标 */
    public getMovablePoint(card: UnitCard) {
        const resultSet = new Set<number>();
        //要根据卡片配置决定是飞行还是行走
        const step = this.getCardMoveStep(card);
        const isFly = step < 0;
        if (isFly) {
            this.getFlyablePoint(card.blockX, card.blockY, step, resultSet);
        } else {
            this.getWalkablePoint(card.blockX, card.blockY, step, resultSet);
        }
        return resultSet;
    }

    /**获取根据距离附近的坐标 */
    public getAroundByDistance(baseX: number, baseY: number, distance: number) {
        const result: { x: number, y: number }[] = [];
        for (let x = baseX - distance; x <= baseX + distance; x++) {
            for (let y = baseY - distance; y <= baseY + distance; y++) {
                if (x >= 0 && x < this._width && y >= 0 && y < this._height) {
                    const tempDistance = Math.abs(baseX - x) + Math.abs(baseY - y);
                    if (tempDistance !== 0 && tempDistance <= distance) {
                        result.push({ x, y });
                    }
                }
            }
        }
        return result;
    }

    /**获取卡牌可移动步数 */
    public getCardMoveStep(card: UnitCard) {
        return card.movement;
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
            if (this.checkMove(x, y)) {
                resultSet.add(y * this._width + x);
                this.getWalkablePoint(x, y, step - 1, resultSet)
            }
        }
    }

    /**获取可以飞到的位置 */
    private getFlyablePoint(baseX: number, baseY: number, step: number, resultSet: Set<number>) {
        for (let x = baseX - step; x <= baseX + step; x++) {
            for (let y = baseY - step; y <= baseY + step; y++) {
                if (this.checkMove(x, y)) {
                    resultSet.add(y * this._width + x);
                }
            }
        }
    }

    /**获得可以放置建筑位置 */
    public getAccessPointForUseBuilding(uid: number) {
        //英雄旁边
        const pointSet = new Set<number>();
        const user = this._table.getUser(uid);
        const hero = user.hero;
        this.getAroundByDistance(hero.blockX, hero.blockY, 1).forEach((p) => {
            if (!this.getCard(p.x, p.y)) {
                pointSet.add(p.x + p.y * this._width);
            }
        });
        // 或者后三格
        let yStart = user.isFirst ? this._height - 3 : 0;
        const yMax = user.isFirst ? this._height : 3;
        for (let x = 0; x < this._width; x++) {
            for (let y = yStart; y < yMax; y++) {
                if (!this.getCard(x, y)) {
                    pointSet.add(x + y * this._width);
                }
            }
        }
        return pointSet;
    }

    /**获取到所有出兵建筑 */
    public getCampBuildings(uid: number) {
        const res: BuildingCard[] = [];
        for (let index = 0; index < this._mapCards.length; index++) {
            const card = this._mapCards[index];
            if (card.uid === uid && card.cardType === CardsPto.CardType.Building) {
                if (card.detailType === CardsPto.BuilingType.Camp) {
                    res.push(card as BuildingCard);
                }
            }
        }
        return res;
    }

    public emit(event: EventType | EventData, ...param: any[]) {
        //根据传入的参数构建出EventData
        let eventData: EventData;
        if (event instanceof EventData) {
            eventData = event;
        } else {
            eventData = new EventData(event);
        }
        for (let index = 0; index < this._mapCards.length; index++) {
            const card = this._mapCards[index];
            card.emit(eventData, ...param);
            if (eventData.isContinue === false) {
                break;
            }
        }
        return eventData;
    }
}