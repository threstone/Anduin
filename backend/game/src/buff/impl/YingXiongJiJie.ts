import { BuildingCard } from "../../card/BuildingCard";
import { BuffEffectiveDefine } from "../../game/GameDefine";
import { BuffData } from "../BuffData";
import { GameBuff } from "../GameBuff";
import { GlobalBuff } from "../GlobalBuff";

/**
 * 英雄集结：5费及以上的卡牌需要的费用降低1
 */
export class YingXiongJiJie extends GlobalBuff {

    public buffId: number = 4;

    public addBuff(card: BuildingCard,): void {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        super.addBuff(card, buff);
    }
    
    public deleteBuff(card: BuildingCard, buff: BuffData): void {
        throw new Error("Method not implemented.");
    }

    public addGlobalBuff(card: BuildingCard, buff: BuffData): void {
        throw new Error("Method not implemented.");
    }

    public deleteGlobalBuff(card: BuildingCard, buff: BuffData): void {
        throw new Error("Method not implemented.");
    }
}