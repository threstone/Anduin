import { BaseCard } from "../../card/BaseCard";
import { BuildingCard } from "../../card/BuildingCard";
import { EventData, EventType } from "../../game/EventDefine";
import { BuffEffectiveDefine } from "../../game/GameDefine";
import { BuffData } from "../BuffData";
import { GameBuff } from "../GameBuff";

/**
 * 神圣护甲：受到的所有伤害-1
 */
export class ShenShengHuJia extends GameBuff {

    public static buffId: number = 3;

    public addBuff(card: BuildingCard): void {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        card.addBuff(buff);
        card.on(EventType.Damage, { id: buff.id, fun: this.onDamage })
    }

    public deleteBuff(card: BuildingCard, buff: BuffData): void {
        card.deleteBuff(buff);
        card.off(EventType.Damage, buff.id)
    }

    public onDamage(eventData: EventData) {
        return eventData.data -= 1;
    }
}