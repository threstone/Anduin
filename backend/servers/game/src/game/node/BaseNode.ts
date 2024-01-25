import { IGameMessage } from '../../../../../common/I';
import { NodeDefine, NodeDriverResult } from '../GameDefine';
import { NodeDriver } from '../../core/NodeDriver';
import { GameTable } from '../GameTable';
import { GameUser } from '../GameUser';

export abstract class BaseNode {
    protected _node: NodeDefine
    get node() { return this._node; }
    protected nodeDriver: NodeDriver

    constructor(node: NodeDefine, driver: NodeDriver) {
        this._node = node;
        this.nodeDriver = driver;
    }


    public abstract run(table: GameTable): NodeDriverResult;
    public abstract onWaitTimeArrive(table: GameTable): NodeDriverResult;

    public trigger(user: GameUser, table: GameTable, msg: IGameMessage): NodeDriverResult {
        throw new Error('Method not implemented.');
    }
}