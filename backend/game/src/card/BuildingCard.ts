import { GamePto } from "../../../common/CommonProto";
import { EventCard } from "./EventCard";

export abstract class BuildingCard extends EventCard {
    blockX: number;
    blockY: number;

    /**定身等状态信息,在自身回合结束时对应-1 */
    buffMap: Map<GamePto.BuffEnum, number>;
    /**发送到客户端的状态数据 */
    get buffArr() {
        if (!this.buffMap) {
            return null;
        }
        const res = [];
        this.buffMap.forEach((_value, key) => {
            res.push(key);
        });
        return res;
    }

    public setBuff(type: GamePto.BuffEnum, roundTimes: number) {
        if (!this.buffMap) {
            this.buffMap = new Map<GamePto.BuffEnum, number>();
        }

        //设置状态回合数
        const curValue = this.buffMap.get(type);
        if (curValue == undefined || roundTimes > curValue) {
            this.buffMap.set(type, roundTimes);
        }
    }

    /**被攻击前触发 */
    public onPreAtk() {
    }

    /**当被攻击 */
    public onAtkAfter() {
        //死亡了
        if (this.health <= 0) {

        }
    }

    /**
     * 回合结束触发
     * @returns 操作时间
     */
    public onRoundEnd(): number {
        super.onRoundEnd();
        //所有buff的持续回合减1
        this.buffMap?.forEach((value, key, buffMap) => {
            if (value === 1) {
                buffMap.delete(key);
            } else {
                buffMap.set(key, value - 1);
            }
            //TODO 有些buff可能会在结束回合的是做点什么，比如-1血
        });
        return 0;
    }
}