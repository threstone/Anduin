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
        throw new Error('Method not implemented.');
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        throw new Error('Method not implemented.');
    }
}