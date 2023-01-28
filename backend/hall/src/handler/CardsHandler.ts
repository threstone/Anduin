import { UserModel } from '../../../common/sequelize/model/UserModel';
import { CardsPto } from '../../../common/CommonProto';
import { BaseHandler } from './BaseHandler';
import { GlobalVar } from '../GlobalVar';
import { RedisType } from '../../../common/ConstDefine';

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
        if (!this.checkCardGroup(msg.cardGroup)) {
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
        const cardGroupInfo = user.cardGroupInfo;
        //新卡组
        if (msg.cardGroup.groupId === -1) {
            CardsPto.CardGroup.prototype.toJSON = null;
            cardGroupInfo.push(msg.cardGroup);
            msg.cardGroup.groupId = this.getNewGroupId(cardGroupInfo);
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

    /**卡组检测 */
    private static checkCardGroup(cardGroup: CardsPto.ICardGroup) {
        //TODO
        return false;
    }
}