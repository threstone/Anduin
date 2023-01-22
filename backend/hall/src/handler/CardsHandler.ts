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
    static C_MAKE_CARD(clientName: string, uid: number, msg: CardsPto.C_MAKE_CARD) {
        const config = GlobalVar.configMgr.getCardConfigById(msg.cardId);
        //通过品质确定制作卡牌的消耗
        const cardMakeFee = GlobalVar.configMgr.common.cardMakeFee[config.quality];

        //判断是否够制造
        if (cardMakeFee > 0) {//TODO

            // msg.cardId
        }
    }

    //请求分解卡牌
    static C_DISASSEMBLE_CARD(clientName: string, uid: number, msg: CardsPto.C_DISASSEMBLE_CARD) {
        //通过品质和返还比例确定分解卡牌的收益
        const config = GlobalVar.configMgr.getCardConfigById(msg.cardId);
        const returnRedio = GlobalVar.configMgr.common.cardDisassembleReturnRatio;
        const cardMakeFee = GlobalVar.configMgr.common.cardMakeFee[config.quality];
        const returnFee = cardMakeFee * returnRedio;

    }

    //保存卡组
    static C_SAVE_CARDS(clientName: string, uid: number, msg: CardsPto.C_SAVE_CARDS) {

    }

    private static syncCards() {

    }

}