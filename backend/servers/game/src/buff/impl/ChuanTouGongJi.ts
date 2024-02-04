import { BuildingCard } from "../../card/BuildingCard";
import { UnitCard } from "../../card/UnitCard";
import { BuffEffectiveDefine } from "../../game/GameDefine";
import { BuffData } from "../BuffDataClass";
import { GameBuff } from "../GameBuff";

/**
 * 穿透攻击：对目标背后的单位造成同等伤害
 */
export class ChuanTouGongJi extends GameBuff {

    public static buffId: number = 5;

    public addBuff(card: UnitCard): void {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        card.addBuff(buff);
        card.getBeAttackCard = this.getBeAttackCard;
    }

    public deleteBuff(card: UnitCard, buff: BuffData): void {
        card.deleteBuff(buff);
        card.getBeAttackCard = Object.getPrototypeOf(card).getBeAttackCard;
    }

    /**获取被攻击的目标 */
    public getBeAttackCard(targetCard: BuildingCard, self: UnitCard): BuildingCard[] {
        const result = Object.getPrototypeOf(self).getBeAttackCard(targetCard, self);
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