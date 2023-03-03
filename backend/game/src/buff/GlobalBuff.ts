import { BuildingCard } from "../card/BuildingCard";
import { BuffTypeDefine, BuffEffectiveDefine } from "../game/GameDefine";
import { BuffData } from "./BuffData";
import { GameBuff } from "./GameBuff";

export abstract class GlobalBuff extends GameBuff {
    public addBuff(card: BuildingCard) {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffTypeDefine.GlobalBuff, BuffEffectiveDefine.Friend);
        card.addBuff(buff);
        card.table.mapData.addBuffToMap(buff);
        return buff.id;
    }

    public deleteBuff(card: BuildingCard, buff: BuffData) {
        //说明是光环源被移除
        card.table.mapData.deleteBuffFromMap(buff);
        card.deleteBuff(buff);
    }
}