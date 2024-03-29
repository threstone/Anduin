import { GamePto } from "../../../../common/CommonProto";
import { GameUser } from "../game/GameUser";
import { BaseCard } from "./BaseCard";
import { BuildingCard } from "./BuildingCard";

export class MagicCard extends BaseCard {
    public onUse(user: GameUser, cardIndex: number, ...params: number[]) {
        super.onUse(user, cardIndex, ...params);

        //进墓地
        user.addToDeadPool(this);

        //send success card message
        const notice = new GamePto.S_USE_CARD();
        notice.isSuccess = true;
        notice.uid = this.uid;
        notice.card = this;
        notice.cardIndex = cardIndex;
        this.table.broadcast(notice);
    }
}