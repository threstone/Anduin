import { GamePto } from "../../../common/CommonProto";
import { BuffData } from "../game/buff/BuffData";
import { GlobalVar } from "../GlobalVar";
import { EventCard } from "./EventCard";



export abstract class BuildingCard extends EventCard {
    blockX: number;
    blockY: number;

    /**自身的所有buff,包括全局buff、位置buff、普通buff */
    private _buffMap: Map<number, BuffData>;


    /**发送到客户端的状态数据 */
    get buffArr() {
        if (!this._buffMap) {
            return null;
        }
        const res: number[] = [];
        this._buffMap.forEach((value) => {
            res.push(value.buffType);
        });
        return res;
    }

    /**添加指定的buff */
    public setBuff(buff: BuffData) {
        if (!this._buffMap) {
            this._buffMap = new Map<number, BuffData>();
        }
        //置入数据
        this._buffMap.set(buff.id, buff);
        GlobalVar.buffMgr.addBuff(this, buff);
    }

    /**移除buff */
    public removeBuff(id: number) {
        const buff = this._buffMap?.get(id);
        if (buff) {
            this._buffMap.delete(id);
            GlobalVar.buffMgr.removeBuff(this, buff);
        }
    }

    // /**被攻击前触发 */
    // public onPreAtk(demage: number) {
    // }

    // /**当被攻击 */
    // public onAtkAfter(demage: number) {
    //     //死亡了
    //     if (this.health <= 0) {

    //     }
    // }

    // /**
    //  * 回合结束触发
    //  * @returns 操作时间
    //  */
    // public onRoundEnd(table: GameTable): number {

    //     // //所有buff的持续回合减1
    //     // this.buffMap?.forEach((value, key, buffMap) => {
    //     //     if (value === 1) {
    //     //         buffMap.delete(key);
    //     //     } else {
    //     //         buffMap.set(key, value - 1);
    //     //     }
    //     //     //TODO 有些buff可能会在结束回合的是做点什么，比如-1血
    //     // });
    //     return super.onRoundEnd(table);
    // }
}