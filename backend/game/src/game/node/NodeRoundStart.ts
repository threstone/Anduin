import { NodeDefine, NodeDriverResult } from '../GameDefine';
import { NodeDriver } from '../../core/NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';
import { GamePto } from '../../../../common/CommonProto';

//回合开始,执行一些回合开始时的任务,如卡牌开始事件,确定操作者
export class NodeRoundStart extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.RoundStart, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        if (table.isGameOver) {
            return NodeDriverResult.GoOn;
        }
        return this.deal(table);
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        return NodeDriverResult.GoOn;
    }

    private deal(table: GameTable) {
        const user = table.users[table.nextRoundUserIndex];
        // //费用增长以及重置
        // if (user.feeMax < user.feeUpperLimit) {
        //     user.feeMax++;
        //     user.fee = user.feeMax;
        // }

        //派发回合开始
        const roundStartMsg = new GamePto.S_ROUND_START_EVENT();
        roundStartMsg.uid = user.uid;
        roundStartMsg.maxFee = user.feeMax;
        roundStartMsg.fee = user.fee;

        table.broadcast(roundStartMsg);

        console.log("派发回合开始协议");

        let sum = 0;
        //执行场上所有乙方事件卡的回合开始事件
        for (let index = 0; index < user.eventPool.length; index++) {
            const card = user.eventPool[index];
            //计算所有回合开始事件所需要的时间
            sum += card.onRoundStart();
        }

        //执行场上所有单位卡牌的回合开始事件
        for (let index = 0; index < user.unitPool.length; index++) {
            const card = user.unitPool[index];
            //计算所有回合开始事件所需要的时间
            sum += card.onRoundStart();
        }

        //发牌
        user.drawCardsFromPool(1);

        //玩家有可能在这个阶段死亡
        if (table.checkGameOver()) {
            return NodeDriverResult.GoOn;
        }

        this.nodeDriver.waitTime(sum);
        return NodeDriverResult.Wait;
    }
}