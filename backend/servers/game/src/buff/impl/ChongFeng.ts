import { UnitCard } from "../../card/UnitCard";
import { EventData, EventType } from "../../game/EventDefine";
import { BuffEffectiveDefine } from "../../game/GameDefine";
import { BuffData } from "../BuffDataClass";
import { GameBuff } from "../GameBuff";

/**
 * 冲锋：本回合每移动一格，攻击力+1
 */
export class ChongFeng extends GameBuff {

    public static buffId: number = 2;

    public addBuff(card: UnitCard): void {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        card.addBuff(buff);
        card.tempAtkAdd = 0;
        card.on(EventType.SelfMoveAfter, { id: buff.id, fun: this.onSelfMoveAfter });
        card.on(EventType.RoundEnd, { id: buff.id, fun: this.onRoundEnd });
    }

    public deleteBuff(card: UnitCard, buff: BuffData): void {
        card.deleteBuff(buff);
        card.off(EventType.SelfMoveAfter, buff.id);
        card.off(EventType.RoundEnd, buff.id);
    }

    /**移动后增加攻击力 */
    public onSelfMoveAfter(eventData: EventData, next: Function, source: UnitCard): void {
        const addAtk = Math.abs(source.blockX - source.lastX) + Math.abs(source.blockY - source.lastY);
        source.attack += addAtk;
        source.tempAtkAdd = addAtk;

        // 更新客户端卡牌实体数据
        source.updateClientEntity();
        next();
    }

    /**回合结束后攻击恢复原来的值 */
    public onRoundEnd(eventData: EventData, next: Function, self: UnitCard): void {
        self.attack -= self.tempAtkAdd;
        self.tempAtkAdd = 0;

        // 更新客户端卡牌实体数据
        self.updateClientEntity();

        next();
    }
}