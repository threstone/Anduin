import { getLogger } from 'log4js';
import { IGameMessage } from '../../../common/I';
import { GameTable } from '../game/GameTable';
import { GameUser } from '../game/GameUser';
import { BaseNode } from '../game/node/BaseNode';
import { NodeDriverResult } from '../game/GameDefine';

const logger = getLogger();
export class NodeDriver {

    private _nodeIndex: number
    private _nodes: BaseNode[]
    private _table: GameTable

    private _awakenTime: number
    get awakenTime() { return this._awakenTime }

    constructor(table: GameTable) {
        this._table = table;
        this._nodeIndex = -1;
        this._awakenTime = -1;
    }

    onRun(now: number) {
        if (this._nodeIndex === -1 || now < this._awakenTime) {
            return;
        }

        const node = this._nodes[this._nodeIndex];

        let nodeResult: NodeDriverResult;
        if (this._awakenTime !== -1) {
            nodeResult = node.onWaitTimeArrive(this._table);
        } else {
            nodeResult = node.run(this._table);
        }

        this.handlerResult(nodeResult);
    }

    onTrigger(user: GameUser, msg: IGameMessage) {
        const node = this._nodes[this._nodeIndex];
        const nodeResult = node.trigger(user, this._table, msg);
        this.handlerResult(nodeResult);
    }

    private handlerResult(result: NodeDriverResult) {
        switch (result) {
            case NodeDriverResult.GoOn:
                this._nodeIndex++;
                this._awakenTime = -1;
                if (this._nodeIndex === this._nodes.length) {
                    this._nodeIndex = -1;
                }
                break;
            case NodeDriverResult.Wait:
                if (this._awakenTime === -1) {
                    logger.error('未设置等待时间!');
                    this._table.destroy(true);
                }
                break;
            case NodeDriverResult.Continue:
                break;
            default:
                logger.error(`NodeDriver tableId:${this._table.tableId} 未知的返回值:${result}`);
                this._table.destroy(true);
        }
    }

    waitTime(ms: number) {
        this._awakenTime = Date.now() + ms;
    }

    setNodes(nodes: BaseNode[]) {
        this._nodes = nodes;
    }

    resetNode() {
        this._nodeIndex = 0;
    }

    getCurNode() {
        return this._nodes[this._nodeIndex].node;
    }
}