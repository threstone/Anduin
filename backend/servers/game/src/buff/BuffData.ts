import { BuffEffectiveDefine } from "../game/GameDefine";
export enum BuffTypeEnum {
    Normal,
    Position,
    Global
}
export class BuffData {
    /**唯一id */
    id: number;
    /**buff所属的uid */
    uid: number
    /**持续时间,如果-1表示永久执行 */
    duration: number;
    /**buff唯一id*/
    buffId: number;
    /**受影响单位 */
    effectiveType: BuffEffectiveDefine;
    /**是否忽略,如果为true,则不会下发到前端,例如一些只对敌人生效的debuff,因为一定要把光环源设置到自己,所以引入这个 */
    ignore: boolean;
    /**源卡牌id,适用于位置buff和全局buff用来标识此buff的源卡牌唯一id */
    sourceCardUid: number;
    /**buff类型 */
    buffType: BuffTypeEnum;

    constructor(id: number, uid: number, duration: number, buffId: number, effectiveType: BuffEffectiveDefine) {
        this.id = id;
        this.uid = uid;
        this.duration = duration;
        this.buffId = buffId;
        this.effectiveType = effectiveType;
        this.ignore = false;
    }
}