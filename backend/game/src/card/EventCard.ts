import { getLogger } from "log4js";
import { GamePto } from "../../../common/CommonProto";
import { CardsPto } from "../../../common/CommonProto";
import { BaseEvent, EventFunction } from "../game/GameDefine";
import { GameUser } from "../game/GameUser";
import { BaseCard } from "./BaseCard";
import { BuildingCard } from "./BuildingCard";
import { UnitCard } from "./UnitCard";

const logger = getLogger();
/**event card用health来决定持续回合数 */
export class EventCard extends BaseCard implements BaseEvent {

    /**由外部注册的回合开始函数 */
    public onRoundStartFuns: EventFunction[];
    /**由外部注册的回合结束函数 */
    public onRoundEndFuns: EventFunction[];

    /**战场卡牌使用前 */
    public onPreUseCardFuns: EventFunction[];
    /**战场卡牌使用后 */
    public onUseCardAfterFuns: EventFunction[];

    /**战场卡牌移动前 */
    public onPreMoveFuns: EventFunction[];
    /**战场卡牌移动后 */
    public onMoveAfterFuns: EventFunction[];

    /**战场卡牌攻击前 */
    public onPreAtkFuns: EventFunction[];
    /**战场卡牌攻击后 */
    public onAtkAfterFuns: EventFunction[];

    constructor(cardId: number) {
        super(cardId);
        this.onRoundStartFuns = [];
        this.onRoundEndFuns = [];

        this.onPreUseCardFuns = [];
        this.onUseCardAfterFuns = [];

        this.onPreMoveFuns = [];
        this.onMoveAfterFuns = [];

        this.onPreAtkFuns = [];
        this.onAtkAfterFuns = [];
    }

    /**回合开始触发 */
    public onRoundStart(self = this) {
        this.callFuns(this.onRoundStartFuns, self);
    }

    /**回合结束触发 */
    public onRoundEnd(self = this) {
        this.callFuns(this.onRoundEndFuns, self);
    }

    /**战场卡牌使用前 */
    public onPreUseCard(useCard: BaseCard): boolean {
        return this.callFuns(this.onPreUseCardFuns, useCard);
    }

    /**战场卡牌使用后 */
    public onUseCardAfter(useCard: BaseCard) {
        this.callFuns(this.onUseCardAfterFuns, useCard);
    }

    /**
     * 移动前触发
     * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
     * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
     */
    public onPreMove(moveCard: UnitCard): boolean {
        return this.callFuns(this.onPreMoveFuns, moveCard);
    }

    /**
     * 移动后触发
     * 一些卡牌会对周围的卡造成效果，当移动时，需要更新周围卡牌的效果，通过S_MAP_DATA协议
     * 有可能一张卡被同时两张周围的卡片光环影响，例如炉石随从左右都是恐狼，那么就会+2攻击力
     */
    public onMoveAfter(moveCard: UnitCard) {
        this.callFuns(this.onMoveAfterFuns, moveCard);
    }

    /**
     * 战场卡牌攻击前
     * @returns 返回是否可以攻击 | 攻击的伤害
     */
    public onPreAtk(sourceCard: UnitCard, targetCard: BuildingCard, damageCard: BuildingCard, damage: number, dices: number[]): number | false {
        for (let index = 0; index < this.onPreAtkFuns.length; index++) {
            const funcObj = this.onPreAtkFuns[index];
            const result = funcObj.fun.call(this, sourceCard, targetCard, damageCard, damage, dices);
            if (result === false) {
                return false;
            } else {
                damage = result;
            }
        }
        return Math.max(0, damage);
    }

    /**战场卡牌攻击后 */
    public onAtkAfter(sourceCard: UnitCard, targetCard: BuildingCard, damage: number, dices: number[]) {
        this.callFuns(this.onAtkAfterFuns, sourceCard, targetCard, damage, dices);
    }

    /**执行将指定的函数数组,当函数返回false的时候终止执行后续流程 */
    protected callFuns(funs: EventFunction[], ...param: any[]) {
        param.push(this);
        for (let index = 0; index < funs.length; index++) {
            const funcObj = funs[index];
            const res = funcObj.fun.apply(this, param);
            if (!res) {
                return false;
            }
        }
        return true;
    }

    public onUse(user: GameUser, cardIndex: number, ...params: number[]) {
        super.onUse(user, cardIndex, ...params);
        if (this.cardType === CardsPto.CardType.Event) {
            this.table.mapData.addEvent(this);
            const user = this.table.getUser(this.uid);
            user.eventPool.push(this);

            //send success card message
            const notice = new GamePto.S_USE_CARD();
            notice.isSuccess = true;
            notice.uid = this.uid;
            notice.cardIndex = cardIndex;
            notice.card = this;
            //事件卡的攻击类型标识事件类型是否可被对方知晓
            if (this.detailType == CardsPto.EventType.Common) {
                this.table.broadcast(notice);
            } else {
                user.sendMsg(notice);
                notice.card = this.getCardData();
                this.table.getOtherUser(user.uid).sendMsg(notice);
            }

            //通知用户费用信息
            this.table.noticeUserFeeInfo(user);
        }
    }

    /**检查事件是否结束 */
    private checkEventClose() {
        if (this.cardType === CardsPto.CardType.Event && this.health <= 0) {
            const user = this.table.getUser(this.uid);
            const index = user.eventPool.indexOf(this);
            if (index === -1) {
                logger.error('应该删除的事件卡不在玩家事件卡池中!', this);
                return;
            }
            //删除战场中的生效的此事件卡
            this.table.mapData.deleteEvent(this);
            //删除玩家事件卡池中的此卡
            user.eventPool.splice(index, 1);
            //进入墓地
            user.deadPool.push(this);
        }
        //派发事件更新协议
        const msg = new GamePto.S_EVENT_UPDATE();
        msg.card = this;
        this.table.broadcast(msg);
    }

    /**
     * 事件生效时必须调用此方法
     * 每次生效会减少一次生效次数
     */
    protected forceEvent() {
        if (this.cardType === CardsPto.CardType.Event) {
            this.health--;
            this.checkEventClose();
        }
    }

    /**获取发送到客户端的事件卡牌数据 */
    public getCardData(): GamePto.ICard {
        if (this.cardType === CardsPto.CardType.Event && this.detailType === CardsPto.EventType.Secret) {
            const res = new GamePto.Card();
            res.id = this.id;
            res.cardType = this.cardType;
            res.uid = this.uid;
            res.cardId = -1;
            res.health = this.health;
            return res;
        }
        return this;
    }
}