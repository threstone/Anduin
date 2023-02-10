import { CardsPto } from '../../../common/CommonProto';
import { RedisType } from '../../../common/ConstDefine';
import { IGameMessage } from '../../../common/I';
import { BaseCard } from '../card/BaseCard';
import { GlobalVar } from '../GlobalVar';
import { MatchUser } from './GameMatchInfo';
import { GameTable } from './GameTable';

export class GameUser {

    uid: number;
    clientName: string;
    nick: string;
    isOnline: boolean;

    table: GameTable;
    cardGroup: CardsPto.CardGroup;

    /**卡池 */
    cardPool: BaseCard[];
    /**手牌 */
    handCards: BaseCard[];
    /**是否换牌 */
    isReplace: boolean;

    constructor(matchUser: MatchUser, table: GameTable) {
        this.clientName = matchUser.clientName;
        this.uid = matchUser.uid;
        this.table = table;
        this.isOnline = true;

        this.cardGroup = matchUser.cardGroup;
        this.cardPool = [];
        for (let index = 0; index < this.cardGroup.cards.length; index++) {
            const cardInfo = this.cardGroup.cards[index];
            for (let z = 0; z < cardInfo.count; z++) {
                this.cardPool.push(GlobalVar.cardMgr.getCardInstance(cardInfo.id));
            }
        }
    }

    sendMsg(message: IGameMessage) {
        if (!this.isOnline === false) {
            return;
        }
        GlobalVar.socketServer.sendMsg(this.clientName, this.uid, message);
    }

    sendBuffer(messageBuffer: Buffer) {
        if (!this.isOnline === false) {
            return;
        }
        GlobalVar.socketServer.sendBuffer(this.clientName, this.uid, messageBuffer);
    }

    /**
     * 将redis数据同步过来
     */
    async syncUserInfo() {
        const redis = GlobalVar.redisMgr.getClient(RedisType.userInfo);
        const sInfo = await redis.hmget(this.uid, ['nick']);
        this.nick = sInfo[0];
    }

    getHandCardIds() {
        const result: number[] = [];
        for (let index = 0; index < this.handCards.length; index++) {
            const cardInfo = this.handCards[index];
            result.push(this.handCards[index].cardId)
        }
        return result;
    }
}