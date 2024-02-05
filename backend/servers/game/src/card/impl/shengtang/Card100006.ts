import { GameUser } from "../../../game/GameUser";
import { MagicCard } from "../../MagicCard";

/** 隐匿 */
export class Card100006 extends MagicCard {

    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const targetEntity = this.table.mapData.getCard(x, y);
        targetEntity.buffModify(this.attack, this.getHp());

        /** 更新客户端卡牌实体数据 */
        targetEntity.updateClientEntity();
    }
}