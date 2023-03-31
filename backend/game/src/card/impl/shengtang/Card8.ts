import { GamePto } from "../../../../../common/CommonProto";
import { EventData, EventType } from "../../../game/EventDefine";
import { GameUser } from "../../../game/GameUser";
import { UnitCard } from "../../UnitCard";

/**巫师学徒 */
export class Card8 extends UnitCard {
    public onUse(user: GameUser, cardIndex: number, blockX: number, blockY: number, targetX: number, targetY: number): void {
        super.onUse(user, cardIndex, blockX, blockY);

        const targetEntity = this.table.mapData.getCard(targetX, targetY);

        const damageEvent = new EventData(EventType.Damage);
        damageEvent.data = 1;
        targetEntity.emit(damageEvent, targetEntity, this);

        //派发飞行特效协议
        const msg = new GamePto.S_FLY_EFFECT();
        msg.from = this;
        msg.target = targetEntity;
        msg.targetShowTips = `-${damageEvent.data}`;
        this.table.broadcast(msg);
        //执行卡牌受伤后事件
        targetEntity.emit(damageEvent.changeType(EventType.DamageAfter), targetEntity, this);
    }
}