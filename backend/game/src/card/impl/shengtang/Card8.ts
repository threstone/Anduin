import { GamePto } from "../../../../../common/CommonProto";
import { GameUser } from "../../../game/GameUser";
import { UnitCard } from "../../UnitCard";

export class Card8 extends UnitCard {
    public onUse(user: GameUser, cardIndex: number, blockX: number, blockY: number, targetX: number, targetY: number): void {
        super.onUse(user, cardIndex, blockX, blockY);

        const targetEntity = this.table.mapData.getCard(targetX, targetY);
        const damage = targetEntity.onDamage(1, this);
        //派发飞行特效协议
        const msg = new GamePto.S_FLY_EFFECT();
        msg.from = this;
        msg.target = targetEntity;
        msg.targetShowTips = `-${damage}`;
        this.table.broadcast(msg);
        //执行卡牌受伤后事件
        targetEntity.onDamageAfter(this);
    }
}