import { getLogger } from 'log4js';
import { GameTable } from './game/GameTable';
import { BaseNode } from './game/node/BaseNode';
import { NodeDriverResult } from './GameDefine';

const logger = getLogger();
export class NodeDriver {
    private _nodeIndex: number
    private _nodes: BaseNode[]
    private _table: GameTable;
    constructor(table: GameTable) {
        this._table = table;
        this._nodeIndex = -1;
    }

    onRun(now: number) {
        const node = this.getCurNode();
        const nodeResult = node.run();
        this.handlerResult(nodeResult);
    }

    private handlerResult(result: NodeDriverResult) {
        switch (result) {
            case NodeDriverResult.GoOn:
                break;
            case NodeDriverResult.Wait:
                break;
            case NodeDriverResult.Continue:
                break;
            default:
                logger.error(`NodeDriver tableId:${this._table.tableId} 未知的返回值:${result}`);
                this._table.destroy();
        }
    }

    setNodes(nodes: BaseNode[]) {
        this._nodes = nodes;
    }

    resetNode() {
        this._nodeIndex = 0;
    }

    getCurNode(): BaseNode {
        return this._nodes[this._nodeIndex];
    }
}