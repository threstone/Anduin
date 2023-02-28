
import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";

export class GameMapData {

    private _width: number;
    private _height: number;

    /**战场足够小，直接用数组实现 */
    private _mapData: (UnitCard | BuildingCard)[];

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;

        const len = width * height;
        this._mapData = [];
        for (let index = 0; index < len; index++) {
            this._mapData.push(null);
        }
    }

    public getCard(x: number, y: number) {
        const position = y * this._width + x;
        return this._mapData[position];
    }

    public setCard(card: UnitCard | BuildingCard) {
        const position = card.blockY * this._width + card.blockX;
        if (this._mapData[position]) {
            return;
        }
        this._mapData[position] = card;
    }

    public delete(x: number, y: number) {
        const position = y * this._width + x;
        const card = this._mapData[position];
        if (!card) {
            return;
        }
        this._mapData[position] = null;
    }

    /**卡牌移动 */
    public move(targetX: number, targetY: number, card: UnitCard) {
        if (!card.allowMove) {
            return false;
        }
        const resultSet = this.getMovablePoint(card)
        if (!resultSet.has(targetY * this._width + targetX)) {
            return false;
        }
        this.delete(card.blockX, card.blockY);
        card.blockX = targetX;
        card.blockY = targetY;
        this.setCard(card);
        card.onMove();
        return true;
    }

    private hasCard(x: number, y: number) {
        const targetPosition = y * this._width + x;
        return this._mapData[targetPosition] != null;
    }

    private checkMove(x: number, y: number) {
        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            return false
        }
        return !this.hasCard(x, y)
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

    /**获取卡牌可移动步数 */
    public getCardMoveStep(card: UnitCard) {
        return 2;
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
                resultSet.add(y * 7 + x);
                this.getWalkablePoint(x, y, step - 1, resultSet)
            }
        }
    }

    /**获取可以飞到的位置 */
    private getFlyablePoint(baseX: number, baseY: number, step: number, resultSet: Set<number>) {
        for (let x = baseX - step; x < baseX + step; x++) {
            for (let y = baseY - step; y < baseY + step; y++) {
                if (this.checkMove(x, y)) {
                    resultSet.add(y * 7 + x);
                }
            }
        }
    }
}