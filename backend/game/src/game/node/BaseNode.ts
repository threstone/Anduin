import { IGameMessage } from '../../../../common/I';
import { NodeDefine, NodeDriverResult } from '../../GameDefine';
import { NodeDriver } from '../../NodeDriver';
import { GameTable } from '../GameTable';
import { GameUser } from '../GameUser';

export abstract class BaseNode {
    protected node: number
    protected nodeDriver: NodeDriver

    constructor(node: NodeDefine, driver: NodeDriver) {
        this.node = node;
        this.nodeDriver = driver;
    }


    public abstract run(table: GameTable): NodeDriverResult;
    public abstract onWaitTimeArrive(table: GameTable): NodeDriverResult;

    public trigger(user: GameUser, table: GameTable, msg: IGameMessage) {
        throw new Error('Method not implemented.');
    }
}