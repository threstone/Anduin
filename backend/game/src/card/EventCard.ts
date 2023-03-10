import { getLogger } from "log4js";
import { GamePto } from "../../../common/CommonProto";
import { CardsPto } from "../../../common/CommonProto";
import { BaseEvent, EventFunction } from "../game/GameDefine";
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
    public onPreAtk(sourceCard: UnitCard, targetCard: BuildingCard, damage: number, dices: number[]): number | false {
        for (let index = 0; index < this.onPreAtkFuns.length; index++) {
            const funcObj = this.onPreAtkFuns[index];
            const result = funcObj.fun.call(this, sourceCard, targetCard, damage, dices);
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

    public onUse(...params: number[]) {
        super.onUse();
        if (this.cardType === CardsPto.CardType.Event) {
            this.table.mapData.addEvent(this);
            const user = this.table.getUser(this.uid);
            user.eventPool.push(this);
        }
    }

    /**检查时间是否结束 */
    public checkEventClose() {
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

            //派发结束时间
            const msg = new GamePto.S_EVENT_FINISH();
            msg.card = this;
            this.table.broadcast(msg);
        }
    }
}