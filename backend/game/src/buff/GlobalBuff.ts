import { BuildingCard } from "../card/BuildingCard";
import { BuffTypeDefine, BuffEffectiveDefine } from "../game/GameDefine";
import { BuffData } from "./BuffData";
import { GameBuff } from "./GameBuff";

export abstract class GlobalBuff extends GameBuff {

    public abstract addGlobalBuff(card: BuildingCard, buff: BuffData): void;
    public abstract deleteGlobalBuff(card: BuildingCard, buff: BuffData): void;

    public addBuff(card: BuildingCard) {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        card.addBuff(buff);
        card.table.mapData.addGlobalBuff(buff);
        return buff.id;
    }

    public deleteBuff(card: BuildingCard, buff: BuffData) {
        //说明是光环源被移除
        card.table.mapData.deleteGlobalBuff(buff);
        card.deleteBuff(buff);
    }
}