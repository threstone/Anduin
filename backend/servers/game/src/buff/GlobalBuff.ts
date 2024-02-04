import { BaseCard } from "../card/BaseCard";
import { BuildingCard } from "../card/BuildingCard";
import { GlobalBuffData } from "./BuffDataClass";
import { GameBuff } from "./GameBuff";

export abstract class GlobalBuff extends GameBuff {
    
    public abstract addGlobalBuff(card: BaseCard, buff: GlobalBuffData): void;
    public abstract deleteGlobalBuff(card: BaseCard, buff: GlobalBuffData): void;

    public addBuff(card: BuildingCard, buff: GlobalBuffData) {
        card.addBuff(buff);
        buff.sourceCardUid = card.id;
        card.table.mapData.addGlobalBuff(buff);
    }

    public deleteBuff(card: BuildingCard, buff: GlobalBuffData) {
        //说明是光环源被移除
        card.deleteBuff(buff);
        card.table.mapData.deleteGlobalBuff(buff);
    }
}