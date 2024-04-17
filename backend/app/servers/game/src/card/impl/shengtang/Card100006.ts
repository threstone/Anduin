import { GamePto } from "../../../../../../common/CommonProto";
import { GameUser } from "../../../game/GameUser";
import { BuildingCard } from "../../BuildingCard";
import { MagicCard } from "../../MagicCard";

/** 隐匿 */
export class Card100006 extends MagicCard {

    private _cacheEntity: BuildingCard;

    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const targetEntity = this.table.mapData.getCard(x, y);
        targetEntity.buffModify(this.attack, this.getHp());

        /** 更新客户端卡牌实体数据 */
        targetEntity.updateClientEntity();

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