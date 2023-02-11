import { CardsPto } from '../../../common/CommonProto';
import { RedisType } from '../../../common/ConstDefine';
import { IGameMessage } from '../../../common/I';
import { BaseCard } from '../card/BaseCard';
import { EventCard } from '../card/EventCard';
import { UnitCard } from '../card/UnitCard';
import { GlobalVar } from '../GlobalVar';
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

    /**手牌 */
    private _handCards: BaseCard[];
    get handCards() { return this._handCards; }

    /**坟场 */
    private _deadPool: BaseCard[];
    get deadPool() { return this._deadPool; }

    /**正在战场上起作用的事件卡 */
    private _eventPool: EventCard[];
    get eventPool() { return this._eventPool; }

    /**正在战场上起作用的单位卡 */
    private _unitPool: UnitCard[];
    get unitPool() { return this._unitPool; }

    get hero() { return this._unitPool[0] }

    /**是否换牌 */
    isReplace: boolean;

    constructor(matchUser: MatchUser, table: GameTable) {
        this.clientName = matchUser.clientName;
        this.uid = matchUser.uid;
        this._table = table;
        this.isOnline = true;

        this._cardGroup = matchUser.cardGroup;
    }

    /**重置用户游戏数据 */
    public resetInfo() {
        this.isReplace = false
        this._cardPool = [];
        for (let index = 1; index < this._cardGroup.cards.length; index++) {
            const cardInfo = this._cardGroup.cards[index];
            for (let z = 0; z < cardInfo.count; z++) {
                const card = GlobalVar.cardMgr.getCardInstance(cardInfo.id);
                card.uid = this.uid;
                this._cardPool.push(card);
            }
        }
        this._deadPool = [];
        this._eventPool = [];
        this._unitPool = [];
        this._handCards = [];

        /**设置英雄到战场 */
        const heroCard = this._cardPool.shift() as UnitCard;
        heroCard.x = 3;
        //如果自己是先手玩家,那么自己的英雄的位置在下方
        heroCard.y = this === this.table.users[this.table.nextRoundUserIndex] ? 7 : 0;
        this.setUnitCardToMap(heroCard);
    }

    /**设置单位卡到地图 */
    public setUnitCardToMap(card: UnitCard) {
        this.table.mapData.setCard(card);
        this._unitPool.push(card);
    }

    /**获取手牌id */
    public getHandCardIds() {
        const result: number[] = [];
        for (let index = 0; index < this._handCards.length; index++) {
            result.push(this._handCards[index].cardId)
        }
        return result;
    }

    public sendMsg(message: IGameMessage) {
        if (!this.isOnline === false) {
            return;
        }
        GlobalVar.socketServer.sendMsg(this.clientName, this.uid, message);
    }

    public sendBuffer(messageBuffer: Buffer) {
        if (!this.isOnline === false) {
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

}