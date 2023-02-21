import { EventCard } from "./EventCard";

export abstract class UnitCard extends EventCard {
    blockX: number;
    blockY: number;
    allowAtk: boolean;

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