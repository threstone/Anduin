import { NodeDefine, NodeDriverResult } from '../GameDefine';
import { NodeDriver } from '../../core/NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';
import { GamePto } from '../../../../common/CommonProto';

//游戏结束,确定先后手、换牌、后手多硬币
export class NodeEndGame extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.GameEnd, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        if (!table.isGameOver) {
            //如果不是回合结束状态就reset node
            //实现下一阶段又到回合开始
            this.nodeDriver.resetNode();
            return NodeDriverResult.GoOn;
        }
        this.deal(table);
        return NodeDriverResult.GoOn;
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        return NodeDriverResult.GoOn;
    }

    private deal(table: GameTable) {
        const msg = new GamePto.S_GAME_OVER();
        //平局判断
        if (table.users[0].hero.health <= 0 && table.users[1].hero.health <= 0) {
            msg.winnerUid = -1;
        } else {
            const winner = table.users[0].hero.health > 0 ? table.users[0] : table.users[1];
            msg.winnerUid = winner.uid;
        }
        table.broadcast(msg);
    }
}