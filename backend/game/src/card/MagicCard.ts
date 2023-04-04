import { GamePto } from "../../../common/CommonProto";
import { GameUser } from "../game/GameUser";
import { BaseCard } from "./BaseCard";

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

        //通知用户费用信息
        this.table.noticeUserFeeInfo(user);
    }
}