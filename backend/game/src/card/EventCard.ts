import { EventFunction } from "../game/GameDefine";
import { GameTable } from "../game/GameTable";
import { BaseCard } from "./BaseCard";
import { BuildingCard } from "./BuildingCard";
import { UnitCard } from "./UnitCard";

/**event card用health来决定持续回合数 */
export class EventCard extends BaseCard {

    /**由外部注册的回合开始函数 */
    public onRundStartFuns: EventFunction[] = [];
    /**由外部注册的回合结束函数 */
    public onRoundEndFuns: EventFunction[] = [];

    /**战场卡牌使用前 */
    public onPreUseCardFuns: EventFunction[];
    /**战场卡牌使用后 */
    public onUseCardAfterFuns: EventFunction[];

    /**战场卡牌移动前 */
    public onPreMoveFuns: EventFunction[];
    /**战场卡牌移动后 */
    public onMoveAfterFuns: EventFunction[];

    /**战场卡牌攻击前 */
    public onPreAtkFuns: EventFunction[];
    /**战场卡牌攻击后 */
    public onAtkAfterFuns: EventFunction[];

    /**回合开始触发 */
    public onRoundStart() {
        return this.callFunArr(this.onRundStartFuns);
    }

    /**回合结束触发 */
    public onRoundEnd() {
        return this.callFunArr(this.onRoundEndFuns);
    }

    /**战场卡牌使用前 */
    public onPreUseCard(useCard: BaseCard): boolean {
        return this.callFunArr(this.onPreUseCardFuns, useCard);
    }

    /**战场卡牌使用后 */
    public onUseCardAfter(useCard: BaseCard) {
        return this.callFunArr(this.onUseCardAfterFuns, useCard);
    }

    /**战场卡牌移动前 */
    public onPreMove(moveCard: UnitCard): boolean {
        return this.callFunArr(this.onPreMoveFuns, moveCard);
    }

    /**战场卡牌移动后 */
    public onMoveAfter(moveCard: UnitCard) {
        return this.callFunArr(this.onMoveAfterFuns, moveCard);
    }

    /**战场卡牌攻击前 */
    public onPreAtk(sourceCard: UnitCard, targetCard: BuildingCard): boolean {
        return this.callFunArr(this.onPreAtkFuns, sourceCard, targetCard);
    }

    /**战场卡牌攻击后 */
    public onAtkAfter(sourceCard: UnitCard, targetCard: BuildingCard) {
        return this.callFunArr(this.onAtkAfterFuns, sourceCard, targetCard);
    }

    /**执行将指定的函数数组,当函数返回false的时候终止执行后续流程 */
    protected callFunArr(funcArr: EventFunction[], ...param: any[]) {
        param.push(this);
        for (let index = 0; index < funcArr.length; index++) {
            const funcObj = funcArr[index];
            const res = funcObj.fun.apply(this, param);
            if (!res) {
                return false;
            }
        }
        return true;
    }

    public onUse(...params: number[]) {
        super.onUse();
        this.table.mapData.addEvent(this);
        const user = this.table.getUser(this.uid);
        user.eventPool.push(this);
    }
}