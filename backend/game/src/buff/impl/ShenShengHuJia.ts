import { BuildingCard } from "../../card/BuildingCard";
import { BuffEffectiveDefine } from "../../game/GameDefine";
import { BuffData } from "../BuffData";
import { GameBuff } from "../GameBuff";

/**
 * 神圣护甲：受到的所有伤害-1
 */
export class ShenShengHuJia extends GameBuff {

    public buffId: number = 3;

    public addBuff(card: BuildingCard): void {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        card.addBuff(buff);
        card.onDamageFuns.push({ id: buff.id, fun: this.onDamage });
    }

    public deleteBuff(card: BuildingCard, buff: BuffData): void {
        card.deleteBuff(buff);
        card.deleteFunById(card.onDamageFuns, buff.id);
    }

    public onDamage(damage: number) {
        return damage - 1;
    }
}