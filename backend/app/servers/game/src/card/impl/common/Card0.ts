import { GameUser } from "../../../game/GameUser";
import { MagicCard } from "../../MagicCard";

/**硬币 */
export class Card0 extends MagicCard {

    public onUse(user: GameUser, cardIndex: number): void {
        super.onUse(user, cardIndex);
        user.fee++;
        //派发费用协议
        user.broadcastFeeInfo();
    }
}