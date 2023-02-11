import { NodeDefine, NodeDriverResult } from '../GameDefine';
import { NodeDriver } from '../../core/NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';
import { GamePto } from '../../../../common/CommonProto';

//回合结束,执行一些回合结束时的任务,如卡牌结束事件
export class NodeRoundEnd extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.RoundEnd, driver);
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

        //派发回合结束
        const roundStartMsg = new GamePto.S_ROUND_END_EVENT();
        roundStartMsg.uid = user.uid;

        let sum = 0;
        //执行场上所有乙方事件卡的回合结束事件
        for (let index = 0; index < user.eventPool.length; index++) {
            const card = user.eventPool[index];
            const event = card.onRoundEnd();
            if (event) {
                //计算所有回合结束事件所需要的时间
                sum += event.opTime;
                roundStartMsg.events.push(event)
            }
        }

        //执行场上所有单位卡牌的回合结束事件
        for (let index = 0; index < user.unitPool.length; index++) {
            const card = user.unitPool[index];
            const event = card.onRoundEnd();
            if (event) {
                event.x = card.x;
                event.y = card.y;
                //计算所有回合结束事件所需要的时间
                sum += event.opTime;
                roundStartMsg.events.push(event)
            }
        }

        //玩家有可能在这个阶段死亡
        if (table.checkGameOver()) {
            return NodeDriverResult.GoOn;
        }

        this.nodeDriver.waitTime(sum);
        return NodeDriverResult.Wait;
    }
}