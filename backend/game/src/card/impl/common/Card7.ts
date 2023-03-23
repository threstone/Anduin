import { GamePto } from "../../../../../common/CommonProto";
import { CardsPto } from "../../../../../common/CommonProto";
import { BaseCard } from "../../BaseCard";
import { EventCard } from "../../EventCard";

export class Card7 extends EventCard {

    /**战场卡牌使用前 */
    public onPreUseCard(useCard: BaseCard): boolean {
        //如果是单位卡和建筑卡,反制
        if (useCard.cardType === CardsPto.CardType.Building || useCard.cardType === CardsPto.CardType.Unit) {
            //对方这张卡没了,减费用
            const targetUser = this.table.getUser(useCard.uid);
            targetUser.fee -= useCard.fee;
            const targetCardIndex = targetUser.handCards.indexOf(useCard);
            targetUser.handCards.splice(targetCardIndex, 1);

            //通知
            const notice = new GamePto.S_CARD_DENY();
            notice.from = this;
            notice.target = useCard;
            notice.targetCardIndex = targetCardIndex;
            notice.fee = targetUser.fee;
            notice.feeMax = targetUser.feeMax;
            this.table.broadcast(notice);

            // 事件生效时必须调用此方法
            this.forceEvent();
            return false;
        }

        return super.onPreUseCard(useCard);
    }
}