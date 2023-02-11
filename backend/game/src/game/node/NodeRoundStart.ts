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

        //派发回合开始
        const roundStartMsg = new GamePto.S_ROUND_START_EVENT();
        roundStartMsg.uid = user.uid;
        table.broadcast(roundStartMsg);

        //执行场上所有乙方卡牌的回合开始事件
        for (let index = 0; index < user.enablePool.length; index++) {
            const card = user.enablePool[index];
            // card.onRoundStart();
        }

        //计算所有回合开始事件所需要的时间

        //玩家有可能在这个阶段死亡

        return NodeDriverResult.GoOn;
        this.nodeDriver.waitTime(1234);
        return NodeDriverResult.Wait;
    }
}