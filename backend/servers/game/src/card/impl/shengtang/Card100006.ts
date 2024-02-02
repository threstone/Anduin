import { GamePto } from "../../../../../../common/CommonProto";
import { GameUser } from "../../../game/GameUser";
import { MagicCard } from "../../MagicCard";

/** 隐匿 */
export class Card100006 extends MagicCard {

    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const targetEntity = this.table.mapData.getCard(x, y);
        this.buffModify(targetEntity);

        const notice = new GamePto.S_UPDATE_ENTITYS();
        notice.entityCards.push(targetEntity);
        targetEntity.table.broadcast(notice);
    }
}