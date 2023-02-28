import { BuildingCard } from "./BuildingCard";

export abstract class UnitCard extends BuildingCard {

    allowAtk: boolean = false;
    allowMove: boolean = false;

    /**
     * 回合开始触发
     * @returns 操作时间
     */
    public onRoundStart(): number {
        super.onRoundStart();
        //重置攻击移动数据
        this.allowAtk = true;
        this.allowMove = true;
        return 0;
    }

    /**
     * 回合结束触发
     * @returns 操作时间
     */
    public onRoundEnd(): number {
        super.onRoundEnd();

        //重置攻击移动数据
        this.allowAtk = false;
        this.allowMove = false;
        return 0;
    }

    /**
     * 移动触发
     */
    public onMove() {
        this.allowMove = false;
    }

    /**
     * 攻击触发
     */
    public onAttack() {
        this.allowAtk = false;
    }
}