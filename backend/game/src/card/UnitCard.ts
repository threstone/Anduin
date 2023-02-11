import { GamePto } from "../../../common/CommonProto";
import { EventCard } from "./EventCard";

export class UnitCard extends EventCard {
    x: number;
    y: number;

    /**被攻击前触发 */
    public onPreAtk() {
    }

    /**当被攻击 */
    public onAtkAfter() {
        //死亡了
        if (this.health <= 0) {

        }
    }
}