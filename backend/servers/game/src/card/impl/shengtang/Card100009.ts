import { GamePto } from "../../../../../../common/CommonProto";
import { EventData, EventType } from "../../../game/EventDefine";
import { GameUser } from "../../../game/GameUser";
import { BuildingCard } from "../../BuildingCard";
import { MagicCard } from "../../MagicCard";

/** 灵能陷阱 */
export class Card100009 extends MagicCard {
    private _cacheCards: BuildingCard[];
    private _cacheDamages: number[];

    public onUse(user: GameUser, cardIndex: number, x: number, y: number): void {
        super.onUse(user, cardIndex);
        const distance = this.hp;
        const cards = this.table.mapData.getEffectCardsByDistance(x, y, distance);

        const effectMsg = new GamePto.S_SPECIAL_EFFECT();
        effectMsg.effectId = this.effectList[0];
        effectMsg.dataArr.push(x, y);
        user.table.broadcast(effectMsg);

        const msg = new GamePto.S_UPDATE_ENTITYS();
        this._cacheCards = [];
        this._cacheDamages = [];
        for (let index = 0; index < cards.length; index++) {
            const card = cards[index];

            const damageEvent = new EventData(EventType.Damage);
            damageEvent.data = this.attack;
            //执行卡牌受伤事件
            card.emit(damageEvent, card, this);
            //执行卡牌受伤后事件
            card.emit(damageEvent.changeType(EventType.DamageAfter), card, this);

            msg.entityCards.push(card);
            msg.tipsList.push(`-${damageEvent.data}`);
            this._cacheCards.push(card);
            this._cacheDamages.push(damageEvent.data);
        }
        user.table.broadcast(msg);
    }

    /**通知双方卡牌使用 */
    public noticeUseActionRecord() {
        const notice = new GamePto.S_ACTION_RECORD();
        notice.source = this;
        for (let index = 0; index < this._cacheCards.length; index++) {
            const card = this._cacheCards[index];
            const damage = this._cacheDamages[index];
            notice.affectedList.push({ card: card, type: GamePto.AffectedEnum.HpReduce, value: damage });
        }
        this.table.broadcast(notice);
        this._cacheCards = null;
        this._cacheDamages = null;
    }
}