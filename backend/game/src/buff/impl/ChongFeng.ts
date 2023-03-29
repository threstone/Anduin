import { BuildingCard } from "../../card/BuildingCard";
import { BuffData } from "../BuffData";
import { GameBuff } from "../GameBuff";

/**
 * 冲锋：本回合每移动一格，攻击力+1，且对目标背后的单位造成同等伤害
 */
export class ChongFeng extends GameBuff {
    public buffId: number = 2;
    public addBuff(card: BuildingCard, ...param: any[]): void {
        throw new Error("Method not implemented.");
    }
    public deleteBuff(card: BuildingCard, buff: BuffData): void {
        throw new Error("Method not implemented.");
    }
}