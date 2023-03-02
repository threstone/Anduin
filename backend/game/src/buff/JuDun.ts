import { GamePto } from "../../../common/CommonProto";
import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";
import { BuffTypeDefine } from "../game/GameDefine";
import { GameTable } from "../game/GameTable";
import { BuffData } from "./BuffData";

/**
 * 举盾
 * 自身和相邻友军受到远程攻击时伤害-1
 */
export class JuDun {

    public static buffId: number = 1;

    public static addToCard(card: UnitCard, buff: BuffData) {
        if (buff.buffType === BuffTypeDefine.NormalBuff) {

        }
        card.onPreMoveFuns.push({ id: buff.id, fun: this.onPreMove });
        card.onMoveAfterFuns.push({ id: buff.id, fun: this.onMoveAfter });
    }

    public static removeFromCard(card: BuildingCard) {

    }

    public static onPreMove(table: GameTable, moveCard: UnitCard) {
        // 移除周围单位buff

    }

    public static onMoveAfter(table: GameTable, moveCard: UnitCard) {
        // 移除周围单位buff
    }

}