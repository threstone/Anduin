import { GamePto } from '../../../common/CommonProto';
import { GameTable } from '../game/GameTable';
import { GameUser } from '../game/GameUser';
import { NodeDefine } from '../game/GameDefine';
import { BaseHandler } from './BaseHandler';
import { UnitCard } from '../card/UnitCard';

export class GameHandler extends BaseHandler {

    //准备开始(包含更换卡牌数据)
    static C_PREPARE_TO_START(user: GameUser, table: GameTable, msg: GamePto.C_PREPARE_TO_START) {
        if (!table.nodeDriver || table.nodeDriver.getCurNode() !== NodeDefine.GameStart) {
            return;
        }
        table.nodeDriver.onTrigger(user, msg);
    }

    //请求结束回合
    static C_END_ROUND(user: GameUser, table: GameTable, msg: GamePto.C_END_ROUND) {
        if (!table.allowRoundOprate(user)) {
            return;
        }
        table.nodeDriver.onTrigger(user, msg);
    }

    //请求弃牌
    static C_DISCARD(user: GameUser, table: GameTable, msg: GamePto.C_DISCARD) {
        if (!table.allowRoundOprate(user)) {
            return;
        }

        const replay = new GamePto.S_DISCARD();
        replay.isSuccess = false;
        replay.uid = user.uid;
        const card = user.handCards[msg.cardIndex];
        if (card) {
            //入墓地
            replay.isSuccess = true;
            user.handCards.splice(msg.cardIndex, 1)
            user.deadPool.push(card);
            replay.cardIndex = msg.cardIndex;
            //加费用
            if (user.fee < user.feeMax) {
                user.fee += 1;
                replay.fee = user.fee;
                replay.feeMax = user.feeMax;
            }
        }

        table.broadcast(replay);
    }

    //使用卡牌
    static C_USE_CARD(user: GameUser, table: GameTable, msg: GamePto.C_USE_CARD) {
        if (!table.allowRoundOprate(user)) {
            return;
        }

        const replay = new GamePto.S_USE_CARD();
        replay.isSuccess = false;
        replay.cardIndex = msg.cardIndex;
        replay.uid = user.uid;
        const card = user.handCards[msg.cardIndex] as UnitCard;
        if (card && card.fee <= user.fee) {
            replay.isSuccess = true;
            card.blockX = msg.blockX;
            card.blockY = msg.blockY;
            replay.card = card;
            user.handCards.splice(msg.cardIndex, 1)
            //减费用
            user.fee -= card.fee;
            replay.fee = user.fee;
            replay.feeMax = user.feeMax;

            //置入战场
            table.mapData.setCard(card);
        }
        table.broadcast(replay);
    }

}