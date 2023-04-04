import { UserModel } from '../../../common/sequelize/model/UserModel';
import { CardsPto } from '../../../common/CommonProto';
import { BaseHandler } from './BaseHandler';
import { GlobalVar } from '../GlobalVar';
import { RedisType } from '../../../common/ConstDefine';
import { getLogger } from 'log4js';

//禁止枚举值改为枚举name
CardsPto.CardGroup.prototype.toJSON = null;

const GroupCardsNum = 40;
const logger = getLogger();
export class CardsHandler extends BaseHandler {
    //请求卡牌收藏数据
    static async C_REQ_CARDS_INFO(clientName: string, uid: number) {
        const response = new CardsPto.S_CARDS_INFO();
        const user = await UserModel.findOne({ attributes: ['cardsInfo', 'cardGroupInfo'], where: { uid } });
        response.cardInfos = user.cardsInfo;
        response.cardGroups = user.cardGroupInfo;
        this.sendMsg(clientName, uid, response);
    }

    //请求制作卡牌
    static async C_MAKE_CARD(clientName: string, uid: number, msg: CardsPto.C_MAKE_CARD) {
        const replay = new CardsPto.S_MAKE_CARD();
        replay.cardId = msg.cardId;
        replay.code = 1;

        const redis = GlobalVar.redisMgr.getClient(RedisType.userInfo);
        const lockId = `lock${uid}`;
        //已经上锁了
        if (!(await redis.lock(lockId, 60))) {
            this.sendMsg(clientName, uid, replay);
            return;
        }

        //通过品质确定制作卡牌的消耗
        const cardMakeFee = this.getCardMakeFee(msg.cardId);

        const user = await UserModel.findOne({ attributes: ['uid', 'gold', 'cardsInfo'], where: { uid } });
        //判断是否够制造
        if (user.gold >= cardMakeFee) {
            user.gold -= cardMakeFee;
            let isFind = false;
            const cardsInfo = user.cardsInfo;
            for (let index = 0; index < cardsInfo.length; index++) {
                const cardInfo = cardsInfo[index];
                if (cardInfo.id === msg.cardId) {
                    cardInfo.count++;
                    isFind = true;
                }
            }
            if (!isFind) {
                cardsInfo.push({ id: msg.cardId, count: 1 });
            }
            user.cardsInfo = cardsInfo;
            //同步数据到数据库
            await user.save();
            replay.code = 0;
            //同步对应数据到redis
            GlobalVar.dbHelper.syncUserInfoToMysql(uid, user);
        } else {
            replay.code = 2;
        }
        //解锁
        redis.unlock(lockId);
        this.sendMsg(clientName, uid, replay);
    }

    //请求分解卡牌
    static async C_DISASSEMBLE_CARD(clientName: string, uid: number, msg: CardsPto.C_DISASSEMBLE_CARD) {
        const replay = new CardsPto.S_DISASSEMBLE_CARD();
        replay.cardId = msg.cardId;
        replay.code = 2;

        const redis = GlobalVar.redisMgr.getClient(RedisType.userInfo);
        const lockId = `lock${uid}`;
        //已经上锁了
        if (!(await redis.lock(lockId, 60))) {
            replay.code = 1;
            this.sendMsg(clientName, uid, replay);
            return;
        }

        //通过品质和返还比例确定分解卡牌的收益
        const returnFee = this.getReturnFeeById(msg.cardId);

        const user = await UserModel.findOne({ attributes: ['uid', 'gold', 'cardsInfo'], where: { uid } });
        const cardsInfo = user.cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const cardInfo = cardsInfo[index];
            //成功找到要分解的卡牌
            if (cardInfo.id === msg.cardId) {
                user.gold += returnFee;
                cardInfo.count--;
                if (cardInfo.count === 0) {
                    cardsInfo.splice(index, 1);
                }
                user.cardsInfo = cardsInfo;
                //同步数据到数据库
                await user.save();
                replay.code = 0;
                //同步对应数据到redis
                GlobalVar.dbHelper.syncUserInfoToMysql(uid, user);
                break;
            }
        }
        //解锁
        redis.unlock(lockId);
        this.sendMsg(clientName, uid, replay);
    }

    //保存卡组
    static async C_SAVE_CARDS(clientName: string, uid: number, msg: CardsPto.C_SAVE_CARDS) {
        if (this.checkCardGroup(msg.cardGroup) === false) {
            GlobalVar.socketServer.sendTips(clientName, uid, '保存卡组失败,卡组非法!');
            return;
        }
        const redis = GlobalVar.redisMgr.getClient(RedisType.userInfo);
        const lockId = `lock${uid}`;
        //已经上锁了
        if (!(await redis.lock(lockId, 60))) {
            GlobalVar.socketServer.sendTips(clientName, uid, '保存卡组失败,请稍后再试!');
            return;
        }

        const user = await UserModel.findOne({ attributes: ['uid', 'cardGroupInfo'], where: { uid } });
        //卡组可用性检测
        await this.checkCardAccess(uid, msg.cardGroup);
        const cardGroupInfo = user.cardGroupInfo;
        //新卡组
        if (msg.cardGroup.groupId === -1) {
            cardGroupInfo.push(msg.cardGroup);
            msg.cardGroup.groupId = this.getNewGroupId(cardGroupInfo);
        }//卡组变更
        else {
            for (let index = 0; index < cardGroupInfo.length; index++) {
                const group = cardGroupInfo[index];
                if (group.groupId === msg.cardGroup.groupId) {
                    cardGroupInfo[index] = msg.cardGroup;
                    break;
                }
            }
        }
        user.cardGroupInfo = cardGroupInfo;
        await user.save();
        //同步对应数据到redis
        GlobalVar.dbHelper.syncUserInfoToMysql(uid, user);
        //解锁
        redis.unlock(lockId);

        const replay = new CardsPto.S_SAVE_CARDS();
        replay.cardGroup = msg.cardGroup;
        this.sendMsg(clientName, uid, replay);
    }


    /**请求删除卡组 */
    static async C_DELETE_CARD_GROUP(clientName: string, uid: number, msg: CardsPto.C_DELETE_CARD_GROUP) {
        const redis = GlobalVar.redisMgr.getClient(RedisType.userInfo);
        const lockId = `lock${uid}`;
        //已经上锁了
        if (!(await redis.lock(lockId, 60))) {
            GlobalVar.socketServer.sendTips(clientName, uid, '保存卡组失败,请稍后再试!');
            return;
        }

        const reply = new CardsPto.S_DELETE_CARD_GROUP();
        const user = await UserModel.findOne({ attributes: ['uid', 'cardGroupInfo'], where: { uid } });
        const cardGroupInfo = user.cardGroupInfo;
        for (let index = 0; index < cardGroupInfo.length; index++) {
            const cardGroup = cardGroupInfo[index];
            if (cardGroup.groupId === msg.groupId) {
                cardGroupInfo.splice(index, 1);
                reply.groupId = msg.groupId;
                break;
            }
        }
        user.cardGroupInfo = cardGroupInfo;
        await user.save();
        //同步对应数据到redis
        GlobalVar.dbHelper.syncUserInfoToMysql(uid, user);
        //解锁
        redis.unlock(lockId);
        this.sendMsg(clientName, uid, reply);
    }

    /**通过品质确定制作卡牌的消耗 */
    private static getCardMakeFee(cardId: number) {
        const config = GlobalVar.configMgr.getCardConfigById(cardId);
        return GlobalVar.configMgr.common.cardMakeFee[config.quality];
    }

    /**通过品质和返还比例确定分解卡牌的收益*/
    private static getReturnFeeById(cardId: number) {
        const config = GlobalVar.configMgr.getCardConfigById(cardId);
        const returnRedio = GlobalVar.configMgr.common.cardDisassembleReturnRatio;
        const cardMakeFee = GlobalVar.configMgr.common.cardMakeFee[config.quality];
        //收益
        return cardMakeFee * returnRedio;
    }

    /**获取一个还未使用的cardGroup id */
    private static getNewGroupId(cardGroupInfo: CardsPto.ICardGroup[]) {
        let id = 1;
        for (let index = 0; index < cardGroupInfo.length; index++) {
            const info = cardGroupInfo[index];
            if (info.groupId === id) {
                id++;
            }
        }
        return id;
    }

    /**卡组合法检测 */
    private static checkCardGroup(cardGroup: CardsPto.ICardGroup) {
        //没有卡牌的情况下
        if (cardGroup.cards.length === 0) {
            return true;
        }

        let hasHero = false;
        let sum = 0;
        const cardSet = new Set<number>();
        for (let index = cardGroup.cards.length - 1; index >= 0; index--) {
            const card = cardGroup.cards[index];
            //如何卡牌数量是0,把这个信息删了
            if (card.count === 0) {
                cardGroup.cards.splice(index, 1);
                continue;
            }
            //如果没合并，要么是客户端bug，要么是协议被修改
            if (cardSet.has(card.id)) {
                return false;
            }
            const cardConfig = GlobalVar.configMgr.getCardConfigById(card.id);
            if (!cardConfig) {
                logger.error(`未找到卡片配置,cardId:${card.id}`);
                return false;
            }
            //英雄卡只能携带一张
            if (cardConfig.cardType === CardsPto.CardType.Hero) {
                if (hasHero === true) {
                    return false;
                }
                hasHero = true;
            }
            //同一种橙卡只能携带一张
            if (cardConfig.quality === CardsPto.QualityType.Premium && card.count > 1) {
                return false;
            }
            //只能携带本职业卡或中立卡
            if (cardConfig.powerId !== cardGroup.powerId && cardConfig.powerId !== CardsPto.PowerType.Common) {
                return false;
            }
            //同一张卡最多携带3张
            if (card.count > 3) {
                return false;
            }
            sum += card.count;
            cardSet.add(card.id);
        }
        //最多携带40张卡牌
        if (sum > GroupCardsNum) {
            return false;
        }
        //卡组无英雄卡
        if (sum === GroupCardsNum && hasHero === false) {
            return false;
        }
        return true;
    }

    /**卡组可用性检测 */
    private static async checkCardAccess(uid: number, cardGroup: CardsPto.ICardGroup) {
        const user = await GlobalVar.dbHelper.getUserInfoByKeys(uid, 'cardsInfo');
        cardGroup.accessToUse = true;
        let sum = 0;
        for (let index = 0; index < cardGroup.cards.length; index++) {
            const cardInfo = cardGroup.cards[index];
            //拥有的卡没有那么多
            if (this.getOwnerCardNumById(cardInfo.id, user) < cardInfo.count) {
                cardGroup.accessToUse = false;
                return;
            }
            sum += cardInfo.count;
        }
        if (sum !== GroupCardsNum) {
            cardGroup.accessToUse = false;
        }
    }

    /**获取自身拥有的卡的数量 */
    private static getOwnerCardNumById(cardId: number, user: UserModel) {
        const cardsInfo = user.cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const info = cardsInfo[index];
            if (cardId === info.id) {
                return info.count;
            }
        }
        return 0;
    }
}