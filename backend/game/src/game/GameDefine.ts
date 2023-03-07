import { GamePto } from "../../../common/CommonProto";
import { BaseCard } from "../card/BaseCard";
import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";

export enum NodeDefine {
    GameStart,
    RoundStart,
    Round,
    RoundEnd,
    GameEnd
}

export enum NodeDriverResult {
    GoOn,
    Wait,
    Continue
}

export const DiceValueDefine = [
    [GamePto.DiceValueEnum.Sword, GamePto.DiceValueEnum.Bow],
    [GamePto.DiceValueEnum.Sword, GamePto.DiceValueEnum.Bow],
    [GamePto.DiceValueEnum.Bow, GamePto.DiceValueEnum.Magic],
    [GamePto.DiceValueEnum.Sword, GamePto.DiceValueEnum.Sword],
    [GamePto.DiceValueEnum.Sword, GamePto.DiceValueEnum.Magic],
    [GamePto.DiceValueEnum.Miss]
]


export interface EventFunction {
    id: number;
    fun: Function;
}

export enum BuffTypeDefine {
    /**全局buff,如暴风城守卫提供的全体+1+1 */
    GlobalBuff,
    /**位置buff,如守卫提供的周围一个各自远程防御+1 */
    PositionBuff,
    /**自身的buff,可以被沉默,如务农:每回合开始时获得一个法力水晶 */
    NormalBuff
}

/** buff生效定义 */
export enum BuffEffectiveDefine {
    /**全局生效,所有战场卡牌都被影响*/
    All,
    /**友方Buff,仅仅对友方卡牌生效 */
    Friend,
    /**敌方Buff,仅仅对敌方卡牌生效  */
    Enemy
}

/**用于卡牌和buff实现 */
export interface BaseEvent {
    /**回合开始触发 */
    onRoundStart(card: BaseCard): void;

    /**回合结束触发 */
    onRoundEnd(card: BaseCard): void;

    /**战场卡牌使用前 */
    onPreUseCard(card: BaseCard): boolean;

    /**战场卡牌使用后 */
    onUseCardAfter(card: BaseCard): void;

    /**
     * 移动前触发
     * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
     * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
     */
    onPreMove(moveCard: UnitCard): boolean

    /**
     * 移动后触发
     * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
     * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
     */
    onMoveAfter(moveCard: UnitCard): void

    /**
     * 战场卡牌攻击前
     * @returns 返回是否可以攻击 | 攻击的伤害
     */
    onPreAtk(sourceCard: UnitCard, targetCard: BuildingCard, damage: number, dices: number[]): number | false

    /**战场卡牌攻击后 */
    onAtkAfter(sourceCard: UnitCard, targetCard: BuildingCard, damage: number, dices: number[]): void
}