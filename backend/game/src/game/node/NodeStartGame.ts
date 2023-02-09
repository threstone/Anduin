import { GamePto } from '../../../../common/CommonProto';
import { NodeDefine, NodeDriverResult } from '../../GameDefine';
import { NodeDriver } from '../../NodeDriver';
import { GameTable } from '../GameTable';
import { GameUser } from '../GameUser';
import { BaseNode } from './BaseNode';

//游戏开始,确定先后手、换牌、后手多硬币
export class NodeStartGame extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.GameStart, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        this.deal(table);

        this.nodeDriver.waitTime(5000);
        return NodeDriverResult.Wait;
    }

    //跳到下一节点
    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        return NodeDriverResult.GoOn;
    }

    /**玩家操作换牌 */
    public trigger(user: GameUser, table: GameTable, msg: GamePto.C_PREPARE_TO_START) {
        
    }

    private deal(table: GameTable) {
        //确定先后手
        table.nextRoundUserIndex = table.random(2);

        //洗牌shuffle
        for (let index = 0; index < table.users.length; index++) {
            const user = table.users[index];
            console.log(user.cardPool);
            table.shuffle(user.cardPool);
            console.log(user.cardPool);

            const startHandCardData = new GamePto.S_START_HAND_CARD();
            user.handCards = [user.cardPool.pop(), user.cardPool.pop(), user.cardPool.pop()];
            startHandCardData.isFirst = table.nextRoundUserIndex === index;
            if (table.nextRoundUserIndex !== index) {
                user.handCards.push(user.cardPool.pop(), 0);
            }
            startHandCardData.handCards = user.handCards;
            //发牌
            user.sendMsg(startHandCardData);
        }
    }
}