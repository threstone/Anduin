import { NodeDefine, NodeDriverResult } from '../../GameDefine';
import { NodeDriver } from '../../NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';

//回合中,负责处理玩家操作,执行某些操作后要判断玩家英雄是否死亡
export class NodeRound extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.Round, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        throw new Error('Method not implemented.');
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        throw new Error('Method not implemented.');
    }
}