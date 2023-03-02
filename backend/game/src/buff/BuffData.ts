import { BuffTypeDefine } from "../game/GameDefine";

export class BuffData {
    id: number;
    /**持续时间,如果-1表示永久执行 */
    duration: number;
    /**id,用于下发给前端做展示 */
    buffId: number;
    /**类型 */
    buffType: BuffTypeDefine
}