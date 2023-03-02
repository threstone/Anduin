import { CardsPto, GamePto } from '../../../common/CommonProto';
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
        if (!table?.allowRoundOprate(user)) {
            return;
        }
        table.nodeDriver.onTrigger(user, msg);
    }

    //请求弃牌
    static C_DISCARD(user: GameUser, table: GameTable, msg: GamePto.C_DISCARD) {
        if (!table?.allowRoundOprate(user)) {
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
        if (!table?.allowRoundOprate(user)) {
            return;
        }

        const replay = new GamePto.S_USE_CARD();
        replay.isSuccess = false;
        replay.cardIndex = msg.cardIndex;
        replay.uid = user.uid;
        const card = user.handCards[msg.cardIndex] as UnitCard;
        if (card && card.fee <= user.fee) {
            replay.isSuccess = true;

            replay.card = card;
            user.handCards.splice(msg.cardIndex, 1)
            //减费用
            user.fee -= card.fee;
            replay.fee = user.fee;
            replay.feeMax = user.feeMax;

            switch (card.cardType) {
                case CardsPto.CardType.Building:
                case CardsPto.CardType.Unit:
                    //单位卡置入战场
                    card.blockX = msg.blockX;
                    card.blockY = msg.blockY;
                    table.mapData.setCard(card);
                    user.unitPool.push(card);
                    break;
                case CardsPto.CardType.Magic:
                    break;
                case CardsPto.CardType.Event:
                    user.eventPool.push(card);
                    break;
            }
            card.onUse();
        }
        table.broadcast(replay);
    }


    //请求移动
    static C_MOVE(user: GameUser, table: GameTable, msg: GamePto.C_MOVE) {
        if (!table?.allowRoundOprate(user)) {
            return;
        }
        const card = table.mapData.getCard(msg.sourceX, msg.sourceY) as UnitCard;
        if (card && card.allowMove && user.moveTimes > 0 && table.mapData.checkMovable(msg.targetX, msg.targetY, card)) {
            //扣除次数
            user.moveTimes--;
            card.allowMove = false;

            //执行战场移动前事件决定是否有后续
            if (!table.mapData.onProMove(card)) {
                return;
            }

            //执行卡牌移动前事件,如光环随从移除地图格子光环
            card.onPreMove();
            //更新卡牌位置
            table.mapData.updateCardPosition(msg.targetX, msg.targetY, card);
            //广播卡牌移动协议
            const replay = new GamePto.S_MOVE();
            replay.uid = user.uid;
            replay.sourceX = msg.sourceX;
            replay.sourceY = msg.sourceY;
            replay.targetX = msg.targetX;
            replay.targetY = msg.targetY;
            replay.allowMove = card.allowMove;
            table.broadcast(replay)

            //执行卡牌移动后事件,如光环随从增加地图格子光环
            card.onMoveAfter();
            //执行战场移动后事件 如移动后受伤陷阱
            table.mapData.onProMove(card)
        }
    }

    //请求攻击
    static C_ATTACK(user: GameUser, table: GameTable, msg: GamePto.C_ATTACK) {
        if (!table?.allowRoundOprate(user)) {
            return;
        }
        const sourceCard = table.mapData.getCard(msg.sourceX, msg.sourceY) as UnitCard;
        const targetCard = table.mapData.getCard(msg.targetX, msg.targetY) as UnitCard;
        table.doAttack(sourceCard, targetCard);
    }
}