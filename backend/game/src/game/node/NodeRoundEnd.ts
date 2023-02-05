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
        throw new Error('Method not implemented.');
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        throw new Error('Method not implemented.');
    }
}