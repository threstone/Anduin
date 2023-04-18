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
        card.getBeAttackCard = this.getBeAttackCard;
        card.tempAtkAdd = 0;
        card.on(EventType.SelfMoveAfter, { id: buff.id, fun: this.onSelfMoveAfter });
        card.on(EventType.RoundEnd, { id: buff.id, fun: this.onRoundEnd });
    }

    public deleteBuff(card: UnitCard, buff: BuffData): void {
        card.deleteBuff(buff);
        card.getBeAttackCard = UnitCard.prototype.getBeAttackCard;
        card.off(EventType.SelfMoveAfter, buff.id);
        card.off(EventType.RoundEnd, buff.id);
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

    /**获取被攻击的目标 */
    public getBeAttackCard(targetCard: BuildingCard, self: UnitCard): BuildingCard[] {
        const result = UnitCard.prototype.getBeAttackCard(targetCard, self);
        let x = targetCard.blockX;
        let y = targetCard.blockY;
        if (self.blockX === targetCard.blockX) {
            if (self.blockY > targetCard.blockY) {
                y -= 1;
            } else {
                y += 1;
            }
        } else {
            if (self.blockX > targetCard.blockX) {
                x -= 1;
            } else {
                x += 1;
            }
        }

        const afterEntity = self.table.mapData.getCard(x, y);
        if (afterEntity && afterEntity.uid !== self.uid) {
            result.push(afterEntity);
        }
        return result;
    }
}