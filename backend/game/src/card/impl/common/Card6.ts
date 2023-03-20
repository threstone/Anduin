import { GameUser } from "../../../game/GameUser";
import { MagicCard } from "../../MagicCard";

export class Card6 extends MagicCard {
    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const entity = this.table.mapData.getCard(x, y);
        const damage = entity.onDamage(2, this);
        //派发使用法术协议


        //执行卡牌受伤后事件
        entity.onDamageAfter();
    }
}