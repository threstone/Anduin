import { BaseCard } from "../card/BaseCard";
import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";
import { BaseEvent, EventData } from "../game/EventDefine";
import { BuffData } from "./BuffDataClass";

export abstract class GameBuff implements BaseEvent {

    public buffId: number;
    /**给卡牌添加buff */
    public abstract addBuff(card: BuildingCard, buff?: BuffData): void;
    /**移除卡牌上的指定buff */
    public abstract deleteBuff(card: BuildingCard, buff: BuffData): void;

    public onDamage(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onDamageAfter(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onDead(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onRoundStart(eventData: EventData, next: Function, card: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onRoundEnd(eventData: EventData, next: Function, card: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onPreUseCard(eventData: EventData, next: Function, card: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onUseCardAfter(eventData: EventData, next: Function, card: BaseCard): void {
        throw new Error("Method not implemented.");
    }
    public onPreMove(eventData: EventData, next: Function, moveCard: UnitCard): void {
        throw new Error("Method not implemented.");
    }
    public onMoveAfter(eventData: EventData, next: Function, moveCard: UnitCard): void {
        throw new Error("Method not implemented.");
    }
    public onSelfPreMove(eventData: EventData, next: Function, source: UnitCard): void {
        throw new Error("Method not implemented.");
    }
    public onSelfMoveAfter(eventData: EventData, next: Function, source: UnitCard): void {
        throw new Error("Method not implemented.");
    }
    public onPreAtk(eventData: EventData, next: Function, sourceCard: UnitCard, targetCard: BuildingCard, damageCards: BuildingCard[], dices: number[]): void {
        throw new Error("Method not implemented.");
    }
    public onAtkAfter(eventData: EventData, next: Function, sourceCard: UnitCard, targetCard: BuildingCard, damageCards: BuildingCard[], dices: number[]): void {
        throw new Error("Method not implemented.");
    }
    public onSelfPreAtk(eventData: EventData, next: Function, sourceCard: UnitCard, targetCard: BuildingCard, damageCards: BuildingCard[], dices: number[]): void {
        throw new Error("Method not implemented.");
    }
    public onSelfAtkAfter(eventData: EventData, next: Function, sourceCard: UnitCard, targetCard: BuildingCard, damageCards: BuildingCard[], dices: number[]): void {
        throw new Error("Method not implemented.");
    }
}