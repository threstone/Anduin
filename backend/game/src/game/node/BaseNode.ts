import { NodeDefine, NodeDriverResult } from '../../GameDefine';
import { NodeDriver } from '../../NodeDriver';

export abstract class BaseNode {
    protected node: number
    protected nodeDriver: NodeDriver

    constructor(node: NodeDefine, driver: NodeDriver) {
        this.node = node;
        this.nodeDriver = driver;
    }
    abstract run(): NodeDriverResult;
}