import { getLogger } from "log4js";
import { GamePto } from "../../../../common/CommonProto";
import { CardsPto } from "../../../../common/CommonProto";
import { EventData, EventType } from "../game/EventDefine";
import { EventFunction } from "../game/GameDefine";
import { GameTable } from "../game/GameTable";
import { GameUser } from "../game/GameUser";
import { BaseCard } from "./BaseCard";

const logger = getLogger('game');
/**event card用health来决定持续回合数 */
export class EventCard extends BaseCard {

    protected eventMap: Map<EventType, EventFunction[]>;

    constructor(cardId: number, uid: number, table: GameTable) {
        super(cardId, uid, table);
        this.eventMap = new Map<EventType, EventFunction[]>();
    }

    /**监听 */
    public on(eventType: EventType, fun: EventFunction) {
        let eventFunArr = this.eventMap.get(eventType);
        if (!eventFunArr) {
            eventFunArr = [];
            this.eventMap.set(eventType, eventFunArr);
        }
        eventFunArr.push(fun);
    }

    /**取消监听 */
    public off(eventType: EventType, id: number) {
        const eventFunArr = this.eventMap.get(eventType);
        if (eventFunArr) {
            for (let index = 0; index < eventFunArr.length; index++) {
                const funcInfo = eventFunArr[index];
                if (funcInfo.id === id) {
                    eventFunArr.splice(index, 1);
                }
            }
        }
    }

    public emit(event: EventType | EventData, ...params: any[]): EventData {
        let eventType: EventType;
        if (event instanceof EventData) {
            eventType = event.eventType;
        } else {
            eventType = event;
        }

        let eventData: EventData;
        const eventFunArr = this.eventMap.get(eventType);
        if (eventFunArr) {
            if (event instanceof EventData) {
                eventData = event;
            } else {
                eventData = new EventData(event);
            }
            this.dispatch(eventData, eventFunArr, 0, params);
        }
        return eventData;
    }

    private dispatch(eventData: EventData, eventFunArr: EventFunction[], index: number, params: any[]) {
        const fn = eventFunArr[index]?.fun;
        if (fn) {
            fn.call(this, eventData, this.dispatch.bind(this, eventData, eventFunArr, index + 1, params), ...params);
        }
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
            user.addToDeadPool(this);
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

    /**通知双方卡牌使用 */
    public noticeUseActionRecord() {
        const notice = new GamePto.S_ACTION_RECORD();
        notice.source = this;
        //事件卡的攻击类型标识事件类型是否可被对方知晓
        if (this.detailType == CardsPto.EventType.Common) {
            this.table.broadcast(notice);
        } else {
            const user = this.table.getUser(this.uid);
            user.sendMsg(notice);
            notice.source = this.getCardData();
            this.table.getOtherUser(user.uid).sendMsg(notice);
        }
    }
}