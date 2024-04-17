import { GamePto } from "../../../../../../common/CommonProto";
import { EventType } from "../../../game/EventDefine";
import { GameUser } from "../../../game/GameUser";
import { BuildingCard } from "../../BuildingCard";
import { MagicCard } from "../../MagicCard";

/** 刺杀 */
export class Card100008 extends MagicCard {
    private _cacheEntity: BuildingCard;

    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const targetEntity = this.table.mapData.getCard(x, y);
        targetEntity.emit(EventType.Dead, targetEntity, this);
        this._cacheEntity = targetEntity;
    }

    /**通知双方卡牌使用 */
    public noticeUseActionRecord() {
        const notice = new GamePto.S_ACTION_RECORD();
        notice.source = this;
        notice.affectedList.push({ card: this._cacheEntity, type: GamePto.AffectedEnum.Show })
        this.table.broadcast(notice);
        this._cacheEntity = null;
    }
}