import { CardsPto, GamePto } from '../../../common/CommonProto';
import { GameTable } from '../game/GameTable';
import { GameUser } from '../game/GameUser';
import { NodeDefine } from '../game/GameDefine';
import { BaseHandler } from './BaseHandler';
import { UnitCard } from '../card/UnitCard';
import { AttackUtils } from '../game/AttackUtils';
import { EventData, EventType } from '../game/EventDefine';

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
                //通知用户费用信息
                table.noticeUserFeeInfo(user);
            }
        }

        table.broadcast(replay);
    }

    //使用卡牌
    static C_USE_CARD(user: GameUser, table: GameTable, msg: GamePto.C_USE_CARD) {
        if (!table?.allowRoundOprate(user)) {
            return;
        }

        const card = user.handCards[msg.cardIndex];

        //检查是否可以使用
        if (!card || card.useCardCheck(...msg.dataArr) === false) {
            const replay = new GamePto.S_USE_CARD();
            replay.isSuccess = false;
            replay.cardIndex = msg.cardIndex;
            replay.uid = user.uid;
            user.sendMsg(replay);
            return;
        }

        const useCardEvent = new EventData(EventType.PreUseCard);
        //执行战场使用卡牌前事件决定是否有后续  有些卡会反制使用卡牌
        table.mapData.emit(useCardEvent, card)
        if (useCardEvent.isContinue === false) {
            return;
        }

        //到这里说明卡牌可以执行了,执行卡牌onUse事件 扣费用、设置到战场等等
        card.onUse(user, msg.cardIndex, ...msg.dataArr);

        //执行战场使用卡牌后事件
        table.mapData.emit(useCardEvent.changeType(EventType.UseCardAfter), card);
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

            const moveEvent = new EventData(EventType.PreMove);
            //执行战场移动前事件决定是否有后续
            table.mapData.emit(moveEvent, card);
            if (moveEvent.isContinue === false) {
                return;
            }

            //执行卡牌移动前事件,如光环随从移除地图格子光环
            card.emit(moveEvent, card);
            //更新卡牌位置
            table.mapData.updateCardPosition(msg.targetX, msg.targetY, card);
            //广播卡牌移动协议
            const replay = new GamePto.S_MOVE();
            replay.uid = user.uid;
            replay.sourceX = msg.sourceX;
            replay.sourceY = msg.sourceY;
            replay.card = card;
            replay.allowMove = card.allowMove;
            table.broadcast(replay);

            //执行卡牌移动后事件,如光环随从增加地图格子光环
            card.emit(moveEvent.changeType(EventType.MoveAfter), card);
            //执行战场移动后事件 如移动后受伤陷阱
            table.mapData.emit(moveEvent, card);
        }
    }

    //请求攻击
    static C_ATTACK(user: GameUser, table: GameTable, msg: GamePto.C_ATTACK) {
        if (!table?.allowRoundOprate(user)) {
            return;
        }
        const sourceCard = table.mapData.getCard(msg.sourceX, msg.sourceY) as UnitCard;
        const targetCard = table.mapData.getCard(msg.targetX, msg.targetY);
        if (!sourceCard || !targetCard) {
            return;
        }
        //获取到真正会受到伤害的卡牌(远程攻击会被挡住)
        const damageTarget = AttackUtils.getBeAttackCard(sourceCard, targetCard, table.mapData);

        if (sourceCard && damageTarget && sourceCard.allowAtk && user.atkTimes > 0) {
            user.atkTimes--;
            sourceCard.allowAtk = false;

            //根据自身的攻击力决定投掷的骰子数量并且获得投掷的结果
            const dices = table.getDices(sourceCard.attack);
            //实际扣除的血量
            const damage = table.getTargetDiceValueNum(dices, sourceCard.detailType === CardsPto.AtkType.CloseRange ? GamePto.DiceValueEnum.Sword : GamePto.DiceValueEnum.Bow);

            const atkEvent = new EventData(EventType.PreAtk);
            atkEvent.data = damage;

            //执行战场攻击前事件决定是否有后续
            table.mapData.emit(EventType.PreAtk, sourceCard, targetCard, damageTarget, dices);
            //攻击被禁止了
            if (atkEvent.isContinue === false) {
                return;
            }

            //执行攻击前事件,可能会导致伤害变化
            sourceCard.emit(atkEvent, sourceCard, targetCard, damageTarget, dices);


            //返回实际收到的伤害
            damageTarget.emit(atkEvent.changeType(EventType.Damage), damage, sourceCard);

            //广播卡牌攻击协议
            const replay = new GamePto.S_ATTACK();
            replay.uid = user.uid;
            replay.sourceX = msg.sourceX;
            replay.sourceY = msg.sourceY;
            replay.sourceId = sourceCard.id;
            replay.targetX = damageTarget.blockX;
            replay.targetY = damageTarget.blockY;
            replay.targetId = damageTarget.id;
            replay.damage = atkEvent.data;
            replay.targetHealth = damageTarget.health;
            replay.allowAtk = sourceCard.allowAtk;
            replay.uid = user.uid;
            replay.dices = dices;
            replay.leastAtkTimes = user.atkTimes;
            table.broadcast(replay);

            //执行卡牌受伤后事件
            damageTarget.emit(atkEvent.changeType(EventType.DamageAfter), damageTarget, sourceCard);

            //执行卡牌攻击后事件
            sourceCard.emit(atkEvent.changeType(EventType.AtkAfter), sourceCard, damageTarget, dices);

            //执行战场攻击后事件
            table.mapData.emit(atkEvent, sourceCard, damageTarget, dices);
        }
    }
}