import { GamePto } from "../../../../../../common/CommonProto";
import { CardsPto } from "../../../../../../common/CommonProto";
import { EventData, EventType } from "../../../game/EventDefine";
import { GameTable } from "../../../game/GameTable";
import { BaseCard } from "../../BaseCard";
import { EventCard } from "../../EventCard";

/**单位反制 */
export class Card4 extends EventCard {

    constructor(cardId: number, uid: number, table: GameTable) {
        super(cardId, uid, table);
        this.on(EventType.PreUseCard, { id: this.id, fun: this.onPreUseCard });
    }

    /**战场卡牌使用前 */
    public onPreUseCard(eventData: EventData, next: Function, card: BaseCard): void {
        if (card.uid === this.uid) {
            next();
            return;
        }
        //如果是单位卡和建筑卡,反制
        if (card.cardType === CardsPto.CardType.Building || card.cardType === CardsPto.CardType.Unit) {
            //对方这张卡没了,减费用
            const targetUser = this.table.getUser(card.uid);
            targetUser.reduceFee(card.cardFee);
            const targetCardIndex = targetUser.handCards.indexOf(card);
            targetUser.deleteHandCard(targetCardIndex, 1);

            //通知
            const notice = new GamePto.S_CARD_DENY();
            notice.from = this;
            notice.target = card;
            notice.targetCardIndex = targetCardIndex;
            this.table.broadcast(notice);

            //通知用户费用信息
            this.table.noticeUserFeeInfo(targetUser);

            // 事件生效时必须调用此方法
            this.forceEvent();
            eventData.isContinue = false;
            return;
        }

        next();
    }
}