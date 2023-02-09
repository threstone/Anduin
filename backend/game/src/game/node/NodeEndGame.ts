import { NodeDefine, NodeDriverResult } from '../../GameDefine';
import { NodeDriver } from '../../NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';

//游戏结束,确定先后手、换牌、后手多硬币
export class NodeEndGame extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.GameEnd, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        this.deal(table);
        return NodeDriverResult.GoOn;
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        return NodeDriverResult.GoOn;
    }

    private deal(table: GameTable) {
        throw new Error('Method not implemented.');
    }
}