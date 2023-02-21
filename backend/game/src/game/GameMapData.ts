
import { UnitCard } from "../card/UnitCard";

export class GameMapData {

    private _width: number;
    private _height: number;

    /**战场足够小，直接用数组实现 */
    private _mapData: UnitCard[];

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;

        const len = width * height;
        this._mapData = [];
        for (let index = 0; index < len; index++) {
            this._mapData.push(null);
        }
    }

    public setCard(card: UnitCard) {
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

    public move(targetX: number, targetY: number, card: UnitCard) {
        const resultSet = new Set<number>();
        this.canMove(card.blockX, card.blockY, 2, resultSet)
        if (!resultSet.has(targetY * this._width + targetX)) {
            return false;
        }
        this.delete(card.blockX, card.blockY);
        card.blockX = targetX;
        card.blockY = targetY;
        this.setCard(card);
        return true;
    }

    private hasCard(x: number, y: number) {
        const targetPosition = y * this._width + x;
        return this._mapData[targetPosition] != null;
    }

    /**获取可以去的位置 */
    private canMove(baseX: number, baseY: number, step: number, resultSet: Set<number>) {
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
                this.canMove(x, y, step - 1, resultSet)
            }
        }
    }

    private checkMove(x: number, y: number) {
        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            return false
        }
        return !this.hasCard(x, y)
    }

}