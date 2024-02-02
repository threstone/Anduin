import { GamePto } from "../../../../../../common/CommonProto";
import { GameUser } from "../../../game/GameUser";
import { BuildingCard } from "../../BuildingCard";
import { UnitCard } from "../../UnitCard";

/** 药品走私贩 */
const AddNum = 3;
export class Card26 extends UnitCard {

    private _cacheEntity: BuildingCard;

    public onUse(user: GameUser, cardIndex: number, blockX: number, blockY: number, targetX: number, targetY: number): void {
        super.onUse(user, cardIndex, blockX, blockY);
 
        // 增加血量
        const targetEntity = this.table.mapData.getCard(targetX, targetY);
        targetEntity.incrHealth(AddNum);

        // 通知
        const updateMsg = new GamePto.S_UPDATE_ENTITYS();
        updateMsg.entityCards.push(targetEntity);
        updateMsg.tipsList.push(`+${AddNum}`);
        user.table.broadcast(updateMsg);

        this._cacheEntity = targetEntity;
    }

    /**通知双方卡牌使用 */
    public noticeUseActionRecord() {
        const notice = new GamePto.S_ACTION_RECORD();
        notice.source = this;
        notice.affectedList.push({ card: this._cacheEntity, type: GamePto.AffectedEnum.HPAdd, value: AddNum })
        this.table.broadcast(notice);
        this._cacheEntity = null;
    }
}