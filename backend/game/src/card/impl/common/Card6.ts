import { GamePto } from "../../../../../common/CommonProto";
import { GameUser } from "../../../game/GameUser";
import { MagicCard } from "../../MagicCard";

export class Card6 extends MagicCard {
    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const entity = this.table.mapData.getCard(x, y);
        const damage = entity.onDamage(2, this);
        //派发飞行特效协议
        const msg = new GamePto.S_FLY_EFFECT();
        msg.from = this;
        msg.target = entity;
        msg.targetShowTips = `-${damage}`;
        this.table.broadcast(msg);
        //执行卡牌受伤后事件
        entity.onDamageAfter(this);
    }
}