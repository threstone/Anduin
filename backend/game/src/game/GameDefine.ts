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
    [GamePto.DiceValueEnum.Bow, GamePto.DiceValueEnum.Magic],
    [GamePto.DiceValueEnum.Sword, GamePto.DiceValueEnum.Sword],
    [GamePto.DiceValueEnum.Sword, GamePto.DiceValueEnum.Magic],
    [GamePto.DiceValueEnum.Miss],
    [GamePto.DiceValueEnum.Sword, GamePto.DiceValueEnum.Bow],
]


export interface EventFunction {
    id: number;
    fun: Function;
    canSilent?: boolean;
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