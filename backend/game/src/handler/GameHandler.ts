import { GamePto } from '../../../common/CommonProto';
import { GameTable } from '../game/GameTable';
import { GameUser } from '../game/GameUser';
import { BaseHandler } from './BaseHandler';

export class GameHandler extends BaseHandler {

    //准备开始(包含更换卡牌数据)
    static C_PREPARE_TO_START(user: GameUser, table: GameTable, msg: GamePto.C_PREPARE_TO_START) {
        // table.nextRoundUserIndex
    }
}