import { UserModel } from '../../../common/sequelize/model/UserModel';
import { CardsPto } from '../CommonProto';
import { BaseHandler } from './BaseHandler';
import { GlobalVar } from '../GlobalVar';

export class CardsHandler extends BaseHandler {


    //请求卡牌收藏数据
    static async C_REQ_CARDS_INFO(clientName: string, uid: number, msg: CardsPto.C_REQ_CARDS_INFO) {
        const response = new CardsPto.S_CARDS_INFO();
        const user = await UserModel.findOne({ attributes: ['cardsInfo'], where: { uid } });
        GlobalVar.dbHelper.getUserInfo(uid, 'cardsInfo');
        response.cardInfos = user.cardsInfo;
        this.sendMsg(clientName, uid, response);
    }

    //请求制作卡牌
    static async C_MAKE_CARD(clientName: string, uid: number, msg: CardsPto.C_MAKE_CARD) {


        //TODO 用户会快速点击制作，防止因为await导致的gold cardsInfo异常问题
        //使用redis 锁或者利用redis的异步io特性来实现


        const config = GlobalVar.configMgr.getCardConfigById(msg.cardId);
        //通过品质确定制作卡牌的消耗
        const cardMakeFee = GlobalVar.configMgr.common.cardMakeFee[config.quality];
        const user = await UserModel.findOne({ attributes: ['uid', 'gold', 'cardsInfo'], where: { uid } });
        const replay = new CardsPto.S_MAKE_CARD();
        replay.cardId = msg.cardId;
        replay.code = 1;
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
            user.save();
            replay.code = 0;
            this.syncUserInfo();
        } else {
            replay.code = 2;
        }
        this.sendMsg(clientName, uid, replay);
    }

    //请求分解卡牌
    static async C_DISASSEMBLE_CARD(clientName: string, uid: number, msg: CardsPto.C_DISASSEMBLE_CARD) {
        //通过品质和返还比例确定分解卡牌的收益
        const config = GlobalVar.configMgr.getCardConfigById(msg.cardId);
        const returnRedio = GlobalVar.configMgr.common.cardDisassembleReturnRatio;
        const cardMakeFee = GlobalVar.configMgr.common.cardMakeFee[config.quality];
        //收益
        const returnFee = cardMakeFee * returnRedio;
        const user = await UserModel.findOne({ attributes: ['uid', 'gold', 'cardsInfo'], where: { uid } });
        user.gold += returnFee;
        const cardsInfo = user.cardsInfo;
        for (let index = 0; index < cardsInfo.length; index++) {
            const cardInfo = cardsInfo[index];
            if (cardInfo.id === msg.cardId) {
                cardInfo.count--;

            }
        }
        const replay = new CardsPto.S_DISASSEMBLE_CARD();
        replay.cardId = msg.cardId;
        replay.code = 0;
        this.sendMsg(clientName, uid, replay);
    }

    //保存卡组
    static C_SAVE_CARDS(clientName: string, uid: number, msg: CardsPto.C_SAVE_CARDS) {

    }

    /**
     * 同步最新的gold和卡组信息到redis
     */
    private static syncUserInfo() {

    }

}