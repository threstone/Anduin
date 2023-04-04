import { CardsPto, GamePto } from '../../../common/CommonProto';
import { RedisType } from '../../../common/ConstDefine';
import { IGameMessage } from '../../../common/I';
import { BaseCard } from '../card/BaseCard';
import { BuildingCard } from '../card/BuildingCard';
import { EventCard } from '../card/EventCard';
import { UnitCard } from '../card/UnitCard';
import { GlobalVar } from '../GlobalVar';
import { CardStatus } from './GameDefine';
import { MatchUser } from './GameMatchInfo';
import { GameTable } from './GameTable';

export class GameUser {

    uid: number;
    clientName: string;
    nick: string;
    isOnline: boolean;

    private _table: GameTable;
    get table() { return this._table; }

    private _cardGroup: CardsPto.CardGroup;
    get powerId() { return this._cardGroup.powerId }

    /**卡池 */
    private _cardPool: BaseCard[];
    get cardPool() { return this._cardPool; }
    public addToCardPool(card: BaseCard) {
        card.cardStatus = CardStatus.CardPool;
        this._cardPool.push(card);
    }

    /**手牌 */
    private _handCards: BaseCard[];
    get handCards() { return this._handCards; }
    public addToHand(card: BaseCard) {
        card.cardStatus = CardStatus.Hand;
        //向手牌新增的卡牌增加全局buff
        this.table.mapData.addGlobalBuffForNewHandCard(card);
        this._handCards.push(card);
    }
    public deleteHandCard(cardIndex: number, delNum: number) {
        this._handCards.splice(cardIndex, delNum);
    }

    /**坟场 */
    private _deadPool: BaseCard[];
    get deadPool() { return this._deadPool; }
    public addToDeadPool(card: BaseCard) {
        card.cardStatus = CardStatus.DeadPool;
        this._deadPool.push(card);
    }

    /**正在战场上起作用的事件卡 */
    private _eventPool: EventCard[];
    get eventPool() { return this._eventPool; }

    /**正在战场上起作用的单位卡 */
    private _entityPool: (UnitCard | BuildingCard)[];
    get entityPool() { return this._entityPool; }

    get hero() { return this._entityPool[0] }

    /**是否换牌 */
    isReplace: boolean;

    /**是否先手 */
    isFirst: boolean;

    /**疲劳值 */
    private _fatigue: number;

    /**可攻击次数 */
    atkTimes: number
    /* 可攻击次数上限 */
    atkTimesLimit: number

    /**可移动次数 */
    moveTimes: number
    /* 可移动次数上限 */
    moveTimesLimit: number

    /**费用增长上限*/
    feeUpperLimit: number;
    /**最大费用值 */
    feeMax: number;
    /**当前费用 */
    private _fee: number;
    get fee() {
        return this._fee;
    }
    public reduceFee(fee: number) {
        this._fee -= Math.max(fee, 0);
    }

    set fee(v: number) {
        this._fee = Math.max(0, v);
    }

    /** 替换的卡牌，用于首轮游戏给对方看换了哪些*/
    replaceIndexes: number[];

    constructor(matchUser: MatchUser, table: GameTable) {
        this.clientName = matchUser.clientName;
        this.uid = matchUser.uid;
        this._table = table;
        this.isOnline = true;

        this._cardGroup = matchUser.cardGroup;
    }

    /**回合开始 */
    public onRoundStart() {
        //重置移动、攻击次数
        this.atkTimes = GlobalVar.configMgr.common.roundAtkTimes;
        this.atkTimesLimit = GlobalVar.configMgr.common.roundAtkTimesLimit;
        this.moveTimes = GlobalVar.configMgr.common.roundMoveTimes;
        this.moveTimesLimit = GlobalVar.configMgr.common.roundMoveTimesLimit;
    }

    /**重置用户游戏数据 */
    public resetInfo() {
        this.isReplace = false;
        this.isFirst = false;
        this._cardPool = [];
        for (let index = 0; index < this._cardGroup.cards.length; index++) {
            const cardInfo = this._cardGroup.cards[index];
            for (let z = 0; z < cardInfo.count; z++) {
                const card = GlobalVar.cardMgr.getCardInstance(cardInfo.id, this.uid, this.table);
                this.addToCardPool(card);
            }
        }
        this._deadPool = [];
        this._eventPool = [];
        this._entityPool = [];
        this._handCards = [];
        this.replaceIndexes = [];

        this._fatigue = 1;

        this.feeUpperLimit = 10;
        this.feeMax = 10;
        this.fee = 1;

        this.initHero();
    }

    public initHero() {
        /**设置英雄到战场 */
        const heroCard = this._cardPool.shift() as UnitCard;
        heroCard.blockX = 3;
        //如果自己是先手玩家,那么自己的英雄的位置在下方
        heroCard.blockY = this === this.table.users[this.table.roundUserIndex] ? 7 : 0;
        this.setEntityToMap(heroCard);
    }

    /**
     * 从卡池中抽牌
     * 如果没有卡可以抽取,则返回疲劳伤害数组
     * 因为派发给双方玩家的信息不同，不适合广播,所以会派发对应的消息给双方玩家
     * @param num 张数
     */
    public drawCardsFromPool(num: number) {
        const message = new GamePto.S_DRAW_CARDS();
        message.uid = this.uid;
        for (let index = 0; index < num; index++) {
            if (this._cardPool.length === 0) {
                message.damages.push(this._fatigue);
                this.hero.health -= this._fatigue;
                this._fatigue++;

                if (this.hero.health <= 0) {
                    this.table.doGameOver();
                }
                continue;
            }
            const card = this._cardPool.pop();
            //小于手牌上限
            if (this._handCards.length < GlobalVar.configMgr.common.maxHandCardNum) {
                this.addToHand(card);
                message.inHandCards.push(card);
            } else {
                //大于手牌上限直接放到墓地中
                this.addToDeadPool(card);
                message.discards.push(card);
            }
        }
        message.inHandCardCount = message.inHandCards.length;
        message.discardsCount = message.discards.length;
        message.cardPoolNum = this._cardPool.length;
        message.deadPoolNum = this._deadPool.length;
        this.sendMsg(message);
        message.inHandCards = [];
        message.discards = [];
        //派发消息给另外一个玩家
        this.table.getOtherUser(this.uid).sendMsg(message);
        return GlobalVar.configMgr.common.drawCardTime;
    }

    /**设置单位卡到地图 */
    public setEntityToMap(card: UnitCard | BuildingCard) {
        this.table.mapData.setCard(card);
        this._entityPool.push(card);
    }

    /**广播费用 */
    public broadcastFeeInfo() {
        const msg = new GamePto.S_FEE_INFO()
        msg.uid = this.uid;
        msg.fee = this.fee;
        msg.maxFee = this.feeMax;
        this._table.broadcast(msg);
    }

    public sendMsg(message: IGameMessage) {
        if (this.isOnline === false) {
            return;
        }
        GlobalVar.socketServer.sendMsg(this.clientName, this.uid, message);
    }

    public sendBuffer(messageBuffer: Buffer) {
        if (this.isOnline === false) {
            return;
        }
        GlobalVar.socketServer.sendBuffer(this.clientName, this.uid, messageBuffer);
    }

    /**
     * 将redis数据同步过来
     */
    public async syncUserInfo() {
        const redis = GlobalVar.redisMgr.getClient(RedisType.userInfo);
        const sInfo = await redis.hmget(this.uid, ['nick']);
        this.nick = sInfo[0];
    }

    /**通知手牌变化,例如因为光环全部加减费用了,或者Buff改变了手牌的属性等 */
    public noticeHandCardsChange() {
        const notice = new GamePto.S_HANDCARDS_UPDATE();
        notice.uid = this.uid;
        notice.cards = this.handCards;
        this.sendMsg(notice);
    }

}