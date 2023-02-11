import { GamePto } from "../../../common/CommonProto";
import { BaseCard } from "./BaseCard";

export class EventCard extends BaseCard {
    /**回合开始 */
    public onRoundStart(): GamePto.GameEvent {
        return null;
    }

    /**回合结束 */
    public onRoundEnd(): GamePto.GameEvent {
        return null;
    }

     /**当置入战场 */
     public onAddToMap() {

     }
}