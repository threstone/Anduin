import { GamePto } from "../../../../../../common/CommonProto";
import { GlobalVar } from "../../../GlobalVar";
import { ChuanTouGongJi } from "../../../buff/impl/ChuanTouGongJi";
import { GameUser } from "../../../game/GameUser";
import { MagicCard } from "../../MagicCard";

/** 灵能之刃 */
export class Card100007 extends MagicCard {

    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const targetEntity = this.table.mapData.getCard(x, y);
        super.buffModify(targetEntity);

        GlobalVar.buffMgr.addBuff(targetEntity, ChuanTouGongJi.buffId);

        const notice = new GamePto.S_UPDATE_ENTITYS();
        notice.entityCards.push(targetEntity);
        targetEntity.table.broadcast(notice);
    }
}