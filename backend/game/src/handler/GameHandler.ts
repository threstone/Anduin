import { CardsPto, GamePto } from '../../../common/CommonProto';
import { GameTable } from '../game/GameTable';
import { GameUser } from '../game/GameUser';
import { NodeDefine } from '../game/GameDefine';
import { BaseHandler } from './BaseHandler';
import { UnitCard } from '../card/UnitCard';
import { AttackUtils } from '../game/AttackUtils';

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
        replay.fee = user.fee;
        replay.feeMax = user.feeMax;

        const card = user.handCards[msg.cardIndex];

        //检查是否可以使用
        if (!card || card.useCardCheck(...msg.dataArr) === false) {
            user.sendMsg(replay);
            return;
        }

        //执行战场使用卡牌前事件决定是否有后续  有些卡会反制使用卡牌
        if (!table.mapData.onPreUseCard(card)) {
            return;
        }

        //到这里说明卡牌可以执行了,执行卡牌onUse事件 扣费用、设置到战场等等
        card.onUse(...msg.dataArr);
        replay.isSuccess = true;
        replay.card = card;
        replay.fee = user.fee;
        replay.feeMax = user.feeMax;
        table.broadcast(replay);

        //执行战场使用卡牌后事件
        table.mapData.onUseCardAfter(card);

        //检查游戏是否结束
        table.checkGameOver();
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
            if (!table.mapData.onPreMove(card)) {
                return;
            }

            //执行卡牌移动前事件,如光环随从移除地图格子光环
            card.onPreMove(card);
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
            card.onMoveAfter(card);
            //执行战场移动后事件 如移动后受伤陷阱
            table.mapData.onPreMove(card);

            //检查游戏是否结束
            table.checkGameOver();
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
        const damageCard = AttackUtils.getBeAttackCard(sourceCard, targetCard, table.mapData);

        if (sourceCard && damageCard && sourceCard.allowAtk && user.atkTimes > 0) {
            user.atkTimes--;
            sourceCard.allowAtk = false;


            //根据自身的攻击力决定投掷的骰子数量并且获得投掷的结果
            const dices = table.getDices(sourceCard.attack);
            //实际扣除的血量
            let damage = table.getTargetDiceValueNum(dices, sourceCard.atkType === CardsPto.AtkType.CloseRange ? GamePto.DiceValueEnum.Sword : GamePto.DiceValueEnum.Bow);

            //执行战场攻击前事件决定是否有后续
            const mapPreAtkResult = table.mapData.onPreAtk(sourceCard, targetCard, damageCard, damage, dices);
            //攻击被禁止了
            if (mapPreAtkResult === false) {
                return;
            }
            //战场的事件可能会导致伤害变化
            damage = mapPreAtkResult;

            //执行攻击前事件,可能会导致伤害变化
            damage = sourceCard.onPreAtk(sourceCard, targetCard, damageCard, damage, dices) as number;

            //返回实际收到的伤害
            damage = damageCard.onDamage(damage, sourceCard);
            //广播卡牌攻击协议
            const replay = new GamePto.S_ATTACK();
            replay.uid = user.uid;
            replay.sourceX = msg.sourceX;
            replay.sourceY = msg.sourceY;
            replay.sourceId = sourceCard.id;
            replay.targetX = damageCard.blockX;
            replay.targetY = damageCard.blockY;
            replay.targetId = damageCard.id;
            replay.damage = damage;
            replay.targetHealth = damageCard.health;
            replay.allowAtk = sourceCard.allowAtk;
            replay.uid = user.uid;
            replay.dices = dices;
            table.broadcast(replay);

            //执行卡牌受伤后事件
            damageCard.onDamageAfter();

            //执行卡牌攻击后事件
            sourceCard.onAtkAfter(sourceCard, damageCard, damage, dices);

            //执行战场攻击后事件
            table.mapData.onAtkAfter(sourceCard, damageCard, damage, dices);

            //检查游戏是否结束
            table.checkGameOver();
        }
    }
}