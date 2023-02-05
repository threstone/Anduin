import { NodeDefine, NodeDriverResult } from '../../GameDefine';
import { NodeDriver } from '../../NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';

//回合开始,执行一些回合开始时的任务,如卡牌开始事件,确定操作者
export class NodeRoundStart extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.RoundStart, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        throw new Error('Method not implemented.');
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        throw new Error('Method not implemented.');
    }
}