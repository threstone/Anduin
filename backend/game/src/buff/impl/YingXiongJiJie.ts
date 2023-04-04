import { BaseCard } from "../../card/BaseCard";
import { BuildingCard } from "../../card/BuildingCard";
import { BuffEffectiveDefine, CardStatus } from "../../game/GameDefine";
import { BuffData } from "../BuffData";
import { GlobalBuff } from "../GlobalBuff";

/**
 * 英雄集结：5费及以上的卡牌需要的费用降低1
 */
export class YingXiongJiJie extends GlobalBuff {

    public buffId: number = 4;

    public addBuff(card: BuildingCard): void {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        super.addBuff(card, buff);
    }

    public addGlobalBuff(card: BaseCard, buff: BuffData): void {
        /**手牌中,费用大于5,属于自己 */
        if (card.cardStatus === CardStatus.Hand && card.fee >= 5 && card.uid === buff.uid) {
            card.cardFee--;
        }
    }

    public deleteGlobalBuff(card: BaseCard, buff: BuffData): void {
        /**手牌中,费用大于5,属于自己 */
        if (card.cardStatus === CardStatus.Hand && card.fee >= 5 && card.uid === buff.uid) {
            card.cardFee++;
        }
    }
}