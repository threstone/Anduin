import { GamePto } from "../../../../../../common/CommonProto";
import { EventData, EventType } from "../../../game/EventDefine";
import { GameUser } from "../../../game/GameUser";
import { BuildingCard } from "../../BuildingCard";

/** 箭塔 */
export class Card28 extends BuildingCard {
    public onUse(user: GameUser, cardIndex: number, blockX: number, blockY: number): void {
        super.onUse(user, cardIndex, blockX, blockY);
        this.on(EventType.RoundEnd, { id: user.table.uniqueId, fun: this.onRoundEndAtk, canSilent: false })
    }

    /**
     * 回合结束触发
     */
    public onRoundEndAtk(eventData: EventData, next: Function) {
        const ememyEntitys = this.table.mapData.getAroundEnemyEntityByDistance(
            this.blockX, this.blockY, this.atkRange, this.table.getOtherUser(this.uid).uid
        );
        if (ememyEntitys.length !== 0) {
            const atkEntity = ememyEntitys[this.table.random(ememyEntitys.length)];
            const damageEvent = new EventData(EventType.Damage);
            damageEvent.data = this.atkRange;
            this.doAttack(damageEvent, atkEntity, [atkEntity]);
        }
        next();
    }
}