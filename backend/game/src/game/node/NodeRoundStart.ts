import { NodeDefine, NodeDriverResult } from '../GameDefine';
import { NodeDriver } from '../../core/NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';

//回合开始,执行一些回合开始时的任务,如卡牌开始事件,确定操作者
export class NodeRoundStart extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.RoundStart, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        return this.deal(table);
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        return NodeDriverResult.GoOn;
    }

    private deal(table: GameTable) {
        //执行场上所有卡牌的回合开始事件
        //计算所有回合开始事件所需要的时间
        //玩家有可能在这个阶段死亡
        return NodeDriverResult.GoOn;
        this.nodeDriver.waitTime(1234);
        return NodeDriverResult.Wait;
    }
}