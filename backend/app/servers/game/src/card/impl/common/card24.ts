import { GameUser } from "../../../game/GameUser";
import { UnitCard } from "../../UnitCard";

/** 慷慨的路人 */
export class Card24 extends UnitCard {
    public onUse(user: GameUser, cardIndex: number, blockX: number, blockY: number): void {
        super.onUse(user, cardIndex, blockX, blockY);
        // 抽2张卡
        user.drawCardsFromPool(2);
    }
}