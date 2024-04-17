import { NodeDefine, NodeDriverResult } from '../GameDefine';
import { NodeDriver } from '../../core/NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';
import { GamePto } from '../../../../../common/CommonProto';
import { EventType } from '../EventDefine';

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
        const user = table.users[table.roundUserIndex];

        //派发回合结束
        const roundStartMsg = new GamePto.S_ROUND_END_EVENT();
        roundStartMsg.uid = user.uid;
        table.broadcast(roundStartMsg);
        console.log("派发回合结束协议");

        //执行场上所有乙方事件卡的回合结束事件
        for (let index = 0; index < user.eventPool.length; index++) {
            const card = user.eventPool[index];
            //计算所有回合结束事件所需要的时间
            card.emit(EventType.RoundEnd, card);
        }

        //执行场上所有单位卡牌的回合结束事件
        for (let index = 0; index < user.entityPool.length; index++) {
            const card = user.entityPool[index];
            //计算所有回合结束事件所需要的时间
            card.emit(EventType.RoundEnd, card);
        }

        //玩家有可能在这个阶段死亡
        if (table.isGameOver) {
            return NodeDriverResult.GoOn;
        }

        this.nodeDriver.waitTime(100);

        //更改下一个回合操作玩家
        table.roundUserIndex = (table.roundUserIndex + 1) % table.users.length;
        return NodeDriverResult.Wait;
    }
}