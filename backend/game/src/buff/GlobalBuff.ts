import { BaseCard } from "../card/BaseCard";
import { BuildingCard } from "../card/BuildingCard";
import { BuffData } from "./BuffData";
import { GameBuff } from "./GameBuff";

export abstract class GlobalBuff extends GameBuff {

    public abstract addGlobalBuff(card: BaseCard, buff: BuffData): void;
    public abstract deleteGlobalBuff(card: BaseCard, buff: BuffData): void;

    public addBuff(card: BuildingCard, buff: BuffData) {
        card.addBuff(buff);
        card.table.mapData.addGlobalBuff(buff);
    }

    public deleteBuff(card: BuildingCard, buff: BuffData) {
        //说明是光环源被移除
        card.deleteBuff(buff);
        card.table.mapData.deleteGlobalBuff(buff);
    }
}