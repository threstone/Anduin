import { BaseCard } from "../card/BaseCard";
import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";

/**用于卡牌和buff实现 */
export interface BaseEvent {
    /**
     * 当受到伤害
     * @returns 实际受到的伤害
     */
    onDamage(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard): void;

    /**
     * 当受到伤害之后
     * 之所以要单独抽出来作为一个函数且不在onDamage中执行,是为了分离协议,延后卡牌死亡协议的下发。
     */
    onDamageAfter(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard): void;

    onDead(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard): void;

    /**回合开始触发 */
    onRoundStart(eventData: EventData, next: Function, card: BaseCard): void;

    /**回合结束触发 */
    onRoundEnd(eventData: EventData, next: Function, card: BaseCard): void;

    /**战场卡牌使用前 */
    onPreUseCard(eventData: EventData, next: Function, card: BaseCard): void;

    /**战场卡牌使用后 */
    onUseCardAfter(eventData: EventData, next: Function, card: BaseCard): void;

    /**
     * 移动前触发
     * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
     * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
     */
    onPreMove(eventData: EventData, next: Function, moveCard: UnitCard): void

    /**
     * 移动后触发
     * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
     * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
     */
    onMoveAfter(eventData: EventData, next: Function, moveCard: UnitCard): void

    /**
    * 卡牌自身移动前触发
    * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
    * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
    */
    onSelfPreMove(eventData: EventData, next: Function, source: UnitCard): void

    /**
     * 卡牌自身移动后触发
     * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
     * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
     */
    onSelfMoveAfter(eventData: EventData, next: Function, source: UnitCard): void

    /**
     * 战场卡牌攻击前
     * @returns 返回是否可以攻击 | 攻击的伤害
     */
    onPreAtk(eventData: EventData, next: Function, sourceCard: UnitCard, targetCard: BuildingCard, damageCard: BuildingCard, dices: number[]): void

    /**战场卡牌攻击后 */
    onAtkAfter(eventData: EventData, next: Function, sourceCard: UnitCard, targetCard: BuildingCard, dices: number[]): void

    /**
     * 卡牌自身攻击前
     * @returns 返回是否可以攻击 | 攻击的伤害
     */
    onSelfPreAtk(eventData: EventData, next: Function, sourceCard: UnitCard, targetCard: BuildingCard, damageCard: BuildingCard, dices: number[]): void

    /**卡牌自身攻击后 */
    onSelfAtkAfter(eventData: EventData, next: Function, sourceCard: UnitCard, targetCard: BuildingCard, dices: number[]): void
}

export enum EventType {
    /**当受伤 */
    Damage,
    /**受伤后 */
    DamageAfter,
    /**死亡 */
    Dead,
    /**回合开始函数 */
    RoundStart,
    /**回合结束函数 */
    RoundEnd,
    /**卡牌使用前 */
    PreUseCard,
    /**卡牌使用后 */
    UseCardAfter,
    /**战场卡牌移动前 */
    UnitPreMove,
    /**战场卡牌移动后 */
    UnitMoveAfter,
    /**卡牌自身移动前 */
    SelfPreMove,
    /**卡牌自身移动后 */
    SelfMoveAfter,
    /**战场卡牌攻击前 */
    UnitPreAtk,
    /**战场卡牌攻击后 */
    UnitAtkAfter,
    /**卡牌自身攻击前 */
    SelfPreAtk,
    /**卡牌自身攻击后 */
    SelfAtkAfter,
}

export class EventData {
    /**反制类卡牌使用到的,会影响战场emit函数是否继续派发后续卡牌的指定事件 */
    isContinue: boolean;
    data: number;
    eventType: EventType;
    constructor(eventType: EventType) {
        this.isContinue = true;
        this.eventType = eventType;
    }

    public changeType(eventType: EventType) {
        this.eventType = eventType;
        return this;
    }
}