import { CardsPto, GamePto } from '../../../../common/CommonProto';
import { GameTable } from '../game/GameTable';
import { GameUser } from '../game/GameUser';
import { NodeDefine } from '../game/GameDefine';
import { BaseHandler } from './BaseHandler';
import { UnitCard } from '../card/UnitCard';
import { AttackUtils } from '../game/AttackUtils';
import { EventData, EventType } from '../game/EventDefine';
import { GlobalVar } from '../GlobalVar';

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

        if (user.discardTimes <= 0) {
            return;
        }

        const replay = new GamePto.S_DISCARD();
        replay.isSuccess = false;
        replay.uid = user.uid;
        const card = user.handCards[msg.cardIndex];
        if (card) {
            user.discardTimes--;
            //入墓地
            replay.isSuccess = true;
            user.deleteHandCard(msg.cardIndex, 1);
            user.addToDeadPool(card);
            replay.cardIndex = msg.cardIndex;
            //加费用
            if (user.fee < user.feeUpperLimit) {
                user.fee += 1;
                //通知用户费用信息
                user.broadcastFeeInfo();
            }
        }
        replay.discardTimes = user.discardTimes;
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
        //广播卡牌使用日志
        card.noticeUseActionRecord();

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

            const moveEvent = new EventData(EventType.UnitPreMove);
            //执行卡牌移动前事件,如光环随从移除地图格子光环
            table.mapData.emit(moveEvent, card);
            if (moveEvent.isContinue === false) {
                return;
            }

            //执行卡牌自身移动前事件
            card.emit(moveEvent.changeType(EventType.SelfPreMove), card);

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

            //执行卡牌自身移动后事件,如光环随从增加地图格子光环
            card.emit(moveEvent.changeType(EventType.SelfMoveAfter), card);

            //执行战场移动后事件 如移动后受伤陷阱
            table.mapData.emit(moveEvent.changeType(EventType.UnitMoveAfter), card);
        }
    }

    //请求攻击
    static C_ATTACK(user: GameUser, table: GameTable, msg: GamePto.C_ATTACK) {
        if (!table?.allowRoundOprate(user)) {
            return;
        }
        const sourceCard = table.mapData.getCard(msg.sourceX, msg.sourceY) as UnitCard;
        const targetCard = table.mapData.getCard(msg.targetX, msg.targetY);
        if (!sourceCard || !targetCard || sourceCard.allowAtk === false || user.atkTimes <= 0) {
            return;
        }

        // 是否可攻击检验
        if (AttackUtils.allowAtk(sourceCard, targetCard) === false) {
            return;
        }

        //获取到真正会受到伤害的卡牌例如远程攻击会被挡住、一些贯穿伤害逻辑要重写此方法
        const damageCards = sourceCard.getBeAttackCard(targetCard, sourceCard);

        const damage = sourceCard.attack;
        // 攻击力少于0不能攻击
        if (!damage) {
            return;
        }

        // 攻击次数减少
        user.atkTimes--;
        // 卡牌本回合禁止攻击
        sourceCard.allowAtk = false;
        const atkEvent = new EventData(EventType.UnitPreAtk);
        atkEvent.data = damage;

        //执行攻击前事件,可能会导致伤害变化
        table.mapData.emit(atkEvent, sourceCard, targetCard, damageCards);
        //攻击被禁止了
        if (atkEvent.isContinue === false) {
            return;
        }

        sourceCard.doAttack(atkEvent, targetCard, damageCards);

        //执行战场攻击后事件
        table.mapData.emit(atkEvent.changeType(EventType.UnitAtkAfter), sourceCard, targetCard, damageCards);
    }

    //请求重连
    static C_RECONNECT(user: GameUser, table: GameTable, msg: GamePto.C_ATTACK) {
        //说明没有取到user的话说明进程中没有对应的信息了,取消绑定
        if (typeof (user) === 'string' && typeof (table) === 'number') {
            const clientName = user;
            const uid = table;
            GlobalVar.socketServer.sendUnbindUserGameNode(clientName, uid);
            return;
        }

        table.onUserReconnect(user);
    }

    //投降
    static C_SURRENDER(user: GameUser, table: GameTable, msg: GamePto.C_SURRENDER) {
        table.doGameOver(table.getOtherUser(user.uid).uid);
    }
}