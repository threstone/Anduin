import { GamePto } from "../../../../../../common/CommonProto";
import { EventData, EventType } from "../../../game/EventDefine";
import { GameUser } from "../../../game/GameUser";
import { BuildingCard } from "../../BuildingCard";
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