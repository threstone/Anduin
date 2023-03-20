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
}