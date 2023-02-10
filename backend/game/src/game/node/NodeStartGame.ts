import { GamePto } from '../../../../common/CommonProto';
import { NodeDefine, NodeDriverResult } from '../GameDefine';
import { GlobalVar } from '../../GlobalVar';
import { NodeDriver } from '../../core/NodeDriver';
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
        this.nodeDriver.waitTime(GlobalVar.configMgr.common.replaceCardTime);
        return NodeDriverResult.Wait;
    }

    //跳到下一节点
    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        return NodeDriverResult.GoOn;
    }

    /**玩家操作换牌 */
    public trigger(user: GameUser, table: GameTable, msg: GamePto.C_PREPARE_TO_START) {
        if (user.isReplace) {
            return;
        }

        for (let index = 0; index < msg.replaceCardIndexes.length; index++) {
            const cardIndex = msg.replaceCardIndexes[index];
            //被替换的卡牌
            const replaceCardId = user.handCards[cardIndex];
            //替换掉卡牌
            user.handCards[cardIndex] = user.cardPool.pop();
            //将卡牌重新放入卡池
            user.cardPool.push(replaceCardId);
        }
        if (msg.replaceCardIndexes.length !== 0) {
            table.shuffle(user.cardPool);
        }
        user.isReplace = true;

        if (this.isAllUserReplace(table)) {
            return NodeDriverResult.GoOn;
        }
        return NodeDriverResult.Continue;
    }

    private isAllUserReplace(table: GameTable): boolean {
        let res = true;
        for (let index = 0; index < table.users.length; index++) {
            const user = table.users[index];
            if (user.isReplace === false) {
                return false;
            }
        }
        return res;
    }

    private deal(table: GameTable) {
        //确定先后手
        table.nextRoundUserIndex = table.random(2);

        //洗牌shuffle
        for (let index = 0; index < table.users.length; index++) {
            const user = table.users[index];
            table.shuffle(user.cardPool);

            const startHandCardData = new GamePto.S_START_HAND_CARD();
            user.handCards = [user.cardPool.pop(), user.cardPool.pop(), user.cardPool.pop()];
            startHandCardData.isFirst = table.nextRoundUserIndex === index;
            if (table.nextRoundUserIndex !== index) {
                user.handCards.push(user.cardPool.pop(), GlobalVar.cardMgr.getCardInstance(0));
            }

            startHandCardData.handCards = user.getHandCardIds();
            //发牌
            user.sendMsg(startHandCardData);
        }
    }
}