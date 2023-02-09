import { NodeDefine, NodeDriverResult } from '../../GameDefine';
import { NodeDriver } from '../../NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';

//回合结束,执行一些回合结束时的任务,如卡牌结束事件
export class NodeRoundEnd extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.RoundEnd, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        return this.deal(table);
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        return NodeDriverResult.GoOn;
    }

    private deal(table: GameTable) {
        //执行场上所有卡牌的回合结束事件
        //计算所有回合结束事件所需要的时间
        //玩家有可能在这个阶段死亡
        return NodeDriverResult.GoOn;
        this.nodeDriver.waitTime(1234);
        return NodeDriverResult.Wait;
    }
}