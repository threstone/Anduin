import { EventFunction } from "../game/GameDefine";
import { BuildingCard } from "./BuildingCard";

export class UnitCard extends BuildingCard {

    allowAtk: boolean = false;
    allowMove: boolean = false;

    onPreMoveFuns: EventFunction[] = [];
    onMoveAfterFuns: EventFunction[] = [];

    /**
     * 回合开始触发
     * @returns 操作时间
     */
    public onRoundStart() {
        //重置攻击移动数据
        this.allowAtk = true;
        this.allowMove = true;
        return super.onRoundStart();
    }

    /**
     * 回合结束触发
     * @returns 操作时间
     */
    public onRoundEnd() {
        //重置攻击移动数据
        this.allowAtk = false;
        this.allowMove = false;
        return super.onRoundEnd();
    }

    // /**
    //  * 移动前触发
    //  * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
    //  * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
    //  */
    // public onPreMove() {
    //     return super.onPreMove(this);
    // }

    // /**
    //   * 移动后触发
    //   * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
    //   * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
    //   */
    // public onMoveAfter() {
    //     return super.onMoveAfter(this);
    // }

    // /**
    //  * 攻击触发
    //  */
    // public onAttack(demage: number) {
    //     this.allowAtk = false;
    // }
}