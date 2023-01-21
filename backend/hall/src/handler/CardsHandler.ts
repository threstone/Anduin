import { CardsPto } from '../CommonProto';
import { BaseHandler } from './BaseHandler';

export class CardsHandler extends BaseHandler {

    static C_REQ_CARDS_INFO(clientName: string, uid: number, msg: CardsPto.C_REQ_CARDS_INFO) {
        const response = new CardsPto.S_CARDS_INFO();
        response.cardInfos = [{ 'id': 1, 'count': 3 }, { 'id': 2, 'count': 3 }, { 'id': 3, 'count': 3 }, { 'id': 4, 'count': 3 }, { 'id': 5, 'count': 3 }, { 'id': 6, 'count': 3 }, { 'id': 7, 'count': 3 }, { 'id': 8, 'count': 3 }, { 'id': 9, 'count': 3 }, { 'id': 10, 'count': 3 }, { 'id': 11, 'count': 3 }, { 'id': 12, 'count': 3 }, { 'id': 13, 'count': 3 }, { 'id': 14, 'count': 3 }, { 'id': 15, 'count': 3 }, { 'id': 16, 'count': 3 }];
        this.sendMsg(clientName, uid, response);
    }

}