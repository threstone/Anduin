import { GamePto } from "../../../../common/CommonProto";
import { BuildingCard } from "../../card/BuildingCard";
import { UnitCard } from "../../card/UnitCard";
import { EventData, EventType } from "../../game/EventDefine";
import { BuffEffectiveDefine } from "../../game/GameDefine";
import { BuffData } from "../BuffData";
import { GameBuff } from "../GameBuff";

/**
 * 冲锋：本回合每移动一格，攻击力+1，且对目标背后的单位造成同等伤害
 */
export class ChongFeng extends GameBuff {

    public buffId: number = 2;

    public addBuff(card: UnitCard): void {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        card.addBuff(buff);
        card.tempAtkAdd = 0;
        card.on(EventType.SelfMoveAfter, { id: buff.id, fun: this.onSelfMoveAfter });
        card.on(EventType.RoundEnd, { id: buff.id, fun: this.onRoundEnd });
        card.on(EventType.SelfAtkAfter, { id: buff.id, fun: this.onSelfAtkAfter });
    }

    public deleteBuff(card: UnitCard, buff: BuffData): void {
        card.deleteBuff(buff);
        card.off(EventType.SelfMoveAfter, buff.id);
        card.off(EventType.RoundEnd, buff.id);
        card.off(EventType.SelfAtkAfter, buff.id);
    }

    /**移动后增加攻击力 */
    public onSelfMoveAfter(eventData: EventData, next: Function, source: UnitCard): void {
        const addAtk = Math.abs(source.blockX - source.lastX) + Math.abs(source.blockY - source.lastY);
        source.attack += addAtk;
        source.tempAtkAdd = addAtk;

        const notice = new GamePto.S_UPDATE_ENTITYS();
        notice.entityCards.push(source);
        source.table.broadcast(notice);
        next();
    }

    /**回合结束后攻击恢复原来的值 */
    public onRoundEnd(eventData: EventData, next: Function, self: UnitCard): void {
        self.attack -= self.tempAtkAdd;
        self.tempAtkAdd = 0;

        const notice = new GamePto.S_UPDATE_ENTITYS();
        notice.entityCards.push(self);
        self.table.broadcast(notice);
        next();
    }

    /**攻击后对身后的单位也造成同样的伤害 */
    public onSelfAtkAfter(eventData: EventData, next: Function, sourceCard: UnitCard, targetCard: BuildingCard, dices: number[]): void {
        let x = targetCard.blockX;
        let y = targetCard.blockY;
        if (sourceCard.blockX === targetCard.blockX) {
            if (sourceCard.blockY > targetCard.blockY) {
                y -= 1;
            } else {
                y += 1;
            }
        } else {
            if (sourceCard.blockX > targetCard.blockX) {
                x -= 1;
            } else {
                x += 1;
            }
        }

        const afterEntity = sourceCard.table.mapData.getCard(x, y);
        if (afterEntity && afterEntity.uid !== sourceCard.uid) {
            //减少对应生命值
            const damage = eventData.data;
            afterEntity.health -= damage;
            //对应的一些效果和通知
            const notice = new GamePto.S_UPDATE_ENTITYS();
            notice.entityCards.push(afterEntity);
            notice.tipsList.push(`${-damage}`)
            afterEntity.table.broadcast(notice);

            //死亡了
            if (afterEntity.health <= 0) {
                afterEntity.emit(EventType.Dead, afterEntity, sourceCard);
            }
        }

        next();
    }
}