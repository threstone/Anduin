import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";
import { BuffTypeDefine, BuffEffectiveDefine } from "../game/GameDefine";
import { GameTable } from "../game/GameTable";
import { BuffData } from "./BuffData";
import { GameBuff } from "./GameBuff";

export abstract class PositionBuff extends GameBuff {

    /**光环受影响的范围 */
    protected abstract effectiveDistance: number;

    public abstract addPositionBuff(card: BuildingCard, buff: BuffData): void;
    public abstract deletePositionBuff(card: BuildingCard, buff: BuffData): void;

    public addBuff(card: BuildingCard, buff: BuffData) {
        //给周围位置绑定buff
        const positionBuff = new BuffData(buff.id, card.uid, -1, this.buffId, BuffTypeDefine.PositionBuff, buff.effectiveType);
        const pointArr = card.table.mapData.getAroundByDistance(card.blockX, card.blockY, this.effectiveDistance);
        for (let index = 0; index < pointArr.length; index++) {
            const point = pointArr[index];
            card.table.mapData.addBuffToMap(positionBuff, point.x, point.y);
        }

        //增加移动事件
        card.onPreMoveFuns.push({ id: buff.id, fun: this.onPreMove.bind(card, positionBuff) });
        card.onMoveAfterFuns.push({ id: buff.id, fun: this.onMoveAfter.bind(card, positionBuff) });
    }

    public deleteBuff(card: BuildingCard, buff: BuffData) {
        //说明是光环源被移除
        card.deleteFunById(card.onPreMoveFuns, buff.id)
        card.deleteFunById(card.onMoveAfterFuns, buff.id)
        //移除周围地图格子绑定的光环
        const pointArr = card.table.mapData.getAroundByDistance(card.blockX, card.blockY, this.effectiveDistance);
        for (let index = 0; index < pointArr.length; index++) {
            const point = pointArr[index];
            card.table.mapData.deletePositionBuffById(point.x, point.y, buff.id);
        }
        card.deleteBuff(buff);
    }

    private onPreMove(positionBuff: BuffData, table: GameTable, moveCard: UnitCard) {
        // 移除周围格子buff
        const pointArr = table.mapData.getAroundByDistance(moveCard.blockX, moveCard.blockY, 1);
        for (let index = 0; index < pointArr.length; index++) {
            const point = pointArr[index];
            table.mapData.deleteBuffFromMap(positionBuff, point.x, point.y);
        }
    }

    private onMoveAfter(positionBuff: BuffData, table: GameTable, moveCard: UnitCard) {
        // 增加周围格子位置buff
        const pointArr = table.mapData.getAroundByDistance(moveCard.blockX, moveCard.blockY, 1);
        for (let index = 0; index < pointArr.length; index++) {
            const point = pointArr[index];
            table.mapData.addBuffToMap(positionBuff, point.x, point.y);
        }
    }
}