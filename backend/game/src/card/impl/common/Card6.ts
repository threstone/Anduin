import { GamePto } from "../../../../../common/CommonProto";
import { EventData, EventType } from "../../../game/EventDefine";
import { GameUser } from "../../../game/GameUser";
import { MagicCard } from "../../MagicCard";

/**魔法神箭 */
export class Card6 extends MagicCard {
    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const entity = this.table.mapData.getCard(x, y);

        const damageEvent = new EventData(EventType.Damage);
        damageEvent.data = 2;

        entity.emit(damageEvent, entity, this)

        //派发飞行特效协议
        const msg = new GamePto.S_FLY_EFFECT();
        msg.from = this;
        msg.target = entity;
        msg.targetShowTips = `-${damageEvent.data}`;
        this.table.broadcast(msg);
        //执行卡牌受伤后事件
        entity.emit(damageEvent.changeType(EventType.DamageAfter), entity, this);
    }
}