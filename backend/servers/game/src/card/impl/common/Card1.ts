import { GamePto } from "../../../../../../common/CommonProto";
import { EventData, EventType } from "../../../game/EventDefine";
import { GameUser } from "../../../game/GameUser";
import { BuildingCard } from "../../BuildingCard";
import { MagicCard } from "../../MagicCard";

/**魔法神箭 */
export class Card1 extends MagicCard {

    private _cacheEntity: BuildingCard;
    private _cacheDamage: number;

    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const targetEntity = this.table.mapData.getCard(x, y);

        const damageEvent = new EventData(EventType.Damage);
        damageEvent.data = 2;

        targetEntity.emit(damageEvent, targetEntity, this)

        //派发飞行特效协议
        const msg = new GamePto.S_FLY_EFFECT();
        msg.from = this;
        msg.target = targetEntity;
        msg.targetShowTips = `-${damageEvent.data}`;
        this.table.broadcast(msg);
        //执行卡牌受伤后事件
        targetEntity.emit(damageEvent.changeType(EventType.DamageAfter), targetEntity, this);

        this._cacheDamage = damageEvent.data;
        this._cacheEntity = targetEntity;
    }

    /**通知双方卡牌使用 */
    public noticeUseActionRecord() {
        const notice = new GamePto.S_ACTION_RECORD();
        notice.source = this;
        notice.affectedList.push({ card: this._cacheEntity, type: GamePto.AffectedEnum.HealthReduce, value: this._cacheDamage })
        this.table.broadcast(notice);
        this._cacheEntity = null;
        this._cacheDamage = undefined;
    }
}