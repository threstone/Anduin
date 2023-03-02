import { GamePto } from "../../../common/CommonProto";

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