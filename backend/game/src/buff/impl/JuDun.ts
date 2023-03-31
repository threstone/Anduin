import { CardsPto } from "../../../../common/CommonProto";
import { BaseCard } from "../../card/BaseCard";
import { BuildingCard } from "../../card/BuildingCard";
import { EventData, EventType } from "../../game/EventDefine";
import { BuffEffectiveDefine, BuffTypeDefine } from "../../game/GameDefine";
import { BuffData } from "../BuffData";
import { PositionBuff } from "../PositionBuff";

/**
 * 举盾
 * 自身和相邻友军受到远程攻击时伤害-1
 */
export class JuDun extends PositionBuff {

    protected effectiveDistance: number = 1;
    public buffId: number = 1;

    public addPositionBuff(card: BuildingCard, buff: BuffData): void {
        card.on(EventType.Damage, { id: buff.id, fun: this.onDamage });
        card.addBuff(buff);
    }

    public deletePositionBuff(card: BuildingCard, buff: BuffData): void {
        card.deleteBuff(buff);
        card.off(EventType.Damage, buff.id);
    }

    public addBuff(card: BuildingCard) {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        super.addBuff(card, buff);
        card.on(EventType.Damage, { id: buff.id, fun: this.onDamage });
    }

    public deleteBuff(card: BuildingCard, buff: BuffData) {
        super.deleteBuff(card, buff);
        card.off(EventType.Damage, buff.id);
    }

    public onDamage(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard) {
        //当攻击方是远程的时候
        if (damageSource.cardType === CardsPto.CardType.Unit && damageSource.detailType === CardsPto.AtkType.LongRange) {
            eventData.data -= 1;
        }
        next();
    }
}