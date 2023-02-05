import { NodeDefine, NodeDriverResult } from '../../GameDefine';
import { NodeDriver } from '../../NodeDriver';
import { GameTable } from '../GameTable';
import { BaseNode } from './BaseNode';

//游戏开始,确定先后手、换牌、后手多硬币
export class NodeStartGame extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.GameStart, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        this.opration(table);

        this.nodeDriver.waitTime(5000);
        return NodeDriverResult.Wait;
    }

    //下一回合
    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        throw new Error('Method not implemented.');
    }

    private opration(table: GameTable) {
        //确定先后手
        table.nextRoundUserIndex = table.random(2);

        //洗牌shuffle
        for (let index = 0; index < table.users.length; index++) {
            const user = table.users[index];
            console.log(user.cards);
            table.shuffle(user.cards);
            console.log(user.cards);
        }

    }

}