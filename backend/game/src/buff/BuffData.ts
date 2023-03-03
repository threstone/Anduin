import { BuffEffectiveDefine, BuffTypeDefine } from "../game/GameDefine";

export class BuffData {
    /**唯一id */
    id: number;
    /**buff所属的uid */
    uid: number
    /**持续时间,如果-1表示永久执行 */
    duration: number;
    /**id,用于下发给前端做展示 */
    buffId: number;
    /**类型 */
    buffType: BuffTypeDefine;
    /**受影响单位 */
    effectiveType: BuffEffectiveDefine;
    /**是否忽略,如果为true,则不会下发到前端,例如一些只对敌人生效的debuff,因为一定要把光环源设置到自己,所以引入这个 */
    ignore: boolean;

    constructor(id: number, uid: number, duration: number, buffId: number, buffType: BuffTypeDefine, effectiveType: BuffEffectiveDefine) {
        this.id = id;
        this.uid = uid;
        this.duration = duration;
        this.buffId = buffId;
        this.buffType = buffType;
        this.effectiveType = effectiveType;
    }
}