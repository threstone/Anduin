import { BaseCard } from "../card/BaseCard";
import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";
import { BaseEvent } from "../game/GameDefine";
import { BuffData } from "./BuffData";

export abstract class GameBuff implements BaseEvent {
    public abstract buffId: number;
    /**给卡牌添加buff */
    public abstract addBuff(card: BuildingCard, ...param: any[]): void;
    /**移除卡牌上的指定buff */
    public abstract deleteBuff(card: BuildingCard, buff: BuffData): void;

    public onRoundStart(card: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onRoundEnd(card: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onPreUseCard(card: BaseCard): boolean {
        throw new Error("Method not implemented.");
    }
    public onUseCardAfter(card: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onPreMove(moveCard: UnitCard): boolean {
        throw new Error("Method not implemented.");
    }
    public onMoveAfter(moveCard: UnitCard): void {
        throw new Error("Method not implemented.");
    }
    public onPreAtk(sourceCard: UnitCard, targetCard: BuildingCard, damageCard: BuildingCard, damage: number, dices: number[]): number | false {
        throw new Error("Method not implemented.");
    }
    public onAtkAfter(sourceCard: UnitCard, targetCard: BuildingCard, damage: number, dices: number[]): void {
        throw new Error("Method not implemented.");
    }
    public onDamage(damage: number, atkCard: BaseCard, card: BuildingCard): number {
        throw new Error("Method not implemented.");
    }
}