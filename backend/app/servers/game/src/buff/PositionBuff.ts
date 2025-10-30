import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";
import { EventData, EventType } from "../game/EventDefine";
import { PositionBuffData } from "./BuffDataClass";
import { GameBuff } from "./GameBuff";

export abstract class PositionBuff extends GameBuff {

    /**光环受影响的范围 */
    protected abstract effectiveDistance: number;

    public abstract addPositionBuff(card: BuildingCard, buff: PositionBuffData): void;
    public abstract deletePositionBuff(card: BuildingCard, buff: PositionBuffData): void;

    public addBuff(card: BuildingCard, buff: PositionBuffData) {
        card.addBuff(buff);
        buff.sourceCardUid = card.id;
        //给周围位置绑定buff
        card.table.mapData.addPositionBuff(card.blockX, card.blockY, this.effectiveDistance, buff);
        //增加移动事件
        card.on(EventType.SelfPreMove, { id: buff.id, fun: this.onSourcePreMove.bind(this, buff) });
        card.on(EventType.SelfMoveAfter, { id: buff.id, fun: this.onSourceMoveAfter.bind(this, buff) });
    }

    public deleteBuff(card: BuildingCard, buff: PositionBuffData) {
        //说明是光环源被移除
        card.off(EventType.SelfPreMove, buff.id);
        card.off(EventType.SelfMoveAfter, buff.id);
        //移除周围地图格子绑定的光环
        const pointArr = card.table.mapData.getAroundByDistance(card.blockX, card.blockY, this.effectiveDistance);
        for (let index = 0; index < pointArr.length; index++) {
            const point = pointArr[index];
            card.table.mapData.deletePositionBuffById(point.x, point.y, buff.id);
        }
        card.deleteBuff(buff);
    }

    private onSourcePreMove(buff: PositionBuffData, eventData: EventData, next: Function, source: UnitCard) {
        const table = source.table;
        // 移除周围格子buff
        table.mapData.deletePositionBuff(source.blockX, source.blockY, this.effectiveDistance, buff);
        next();
    }

    private onSourceMoveAfter(buff: PositionBuffData, eventData: EventData, next: Function, source: UnitCard) {
        const table = source.table;
        //给周围位置绑定buff
        table.mapData.addPositionBuff(source.blockX, source.blockY, this.effectiveDistance, buff);
        next();
    }
}