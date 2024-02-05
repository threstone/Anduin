import { GamePto } from "../../../../../../common/CommonProto";
import { GameUser } from "../../../game/GameUser";
import { BuildingCard } from "../../BuildingCard";
import { UnitCard } from "../../UnitCard";

/** 药品走私贩 */
export class Card26 extends UnitCard {

    private _cacheEntity: BuildingCard;

    public onUse(user: GameUser, cardIndex: number, blockX: number, blockY: number, targetX: number, targetY: number): void {
        super.onUse(user, cardIndex, blockX, blockY);
 
        // 增加血量
        const targetEntity = this.table.mapData.getCard(targetX, targetY);
        targetEntity.incrHp(this.hp);

        // 通知
        // 更新客户端卡牌实体数据
        targetEntity.updateClientEntity(`+${this.hp}`);
        this._cacheEntity = targetEntity;
    }

    /**通知双方卡牌使用 */
    public noticeUseActionRecord() {
        const notice = new GamePto.S_ACTION_RECORD();
        notice.source = this;
        notice.affectedList.push({ card: this._cacheEntity, type: GamePto.AffectedEnum.HpAdd, value: this.hp })
        this.table.broadcast(notice);
        this._cacheEntity = null;
    }
}