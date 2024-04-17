import { GamePto } from "../../../../../../common/CommonProto";
import { EventData, EventType } from "../../../game/EventDefine";
import { GameUser } from "../../../game/GameUser";
import { UnitCard } from "../../UnitCard";

/** 搬运工 */
export class Card23 extends UnitCard {
    public onUse(user: GameUser, cardIndex: number, blockX: number, blockY: number): void {
        super.onUse(user, cardIndex, blockX, blockY);
        // 抽一张卡
        user.drawCardsFromPool(1);
    }
}