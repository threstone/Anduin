import { GameUser } from "../../../game/GameUser";
import { MagicCard } from "../../MagicCard";

/** 广积粮 */
export class Card25 extends MagicCard {

    public onUse(user: GameUser, cardIndex: number): void {
        super.onUse(user, cardIndex);
        // 抽2张卡
        user.drawCardsFromPool(2);
    }
}