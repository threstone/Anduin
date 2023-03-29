import { BuildingCard } from "../../card/BuildingCard";
import { BuffData } from "../BuffData";
import { GameBuff } from "../GameBuff";
import { GlobalBuff } from "../GlobalBuff";

/**
 * 英雄集结：5费及以上的卡牌需要的费用降低1
 */
export class YingXiongJiJie extends GlobalBuff {
    public addGlobalBuff(card: BuildingCard, buff: BuffData): void {
        throw new Error("Method not implemented.");
    }
    public deleteGlobalBuff(card: BuildingCard, buff: BuffData): void {
        throw new Error("Method not implemented.");
    }
    public buffId: number = 4;
    // public addBuff(card: BuildingCard, ...param: any[]): void {
    //     throw new Error("Method not implemented.");
    // }
    // public deleteBuff(card: BuildingCard, buff: BuffData): void {
    //     throw new Error("Method not implemented.");
    // }
}