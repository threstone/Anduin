import { NodeDefine, NodeDriverResult } from '../GameDefine';
import { GlobalVar } from '../../GlobalVar';
import { NodeDriver } from '../../core/NodeDriver';
import { GameTable } from '../GameTable';
import { GameUser } from '../GameUser';
import { BaseNode } from './BaseNode';
import { IGameMessage } from '../../../../common/I';
import { GamePto } from '../../../../common/CommonProto';

//回合中,负责处理玩家操作,执行某些操作后要判断玩家英雄是否死亡
export class NodeRound extends BaseNode {

    constructor(driver: NodeDriver) {
        super(NodeDefine.Round, driver);
    }

    public run(table: GameTable): NodeDriverResult {
        if (table.isGameOver) {
            return NodeDriverResult.GoOn;
        }

        this.deal(table);
        this.nodeDriver.waitTime(GlobalVar.configMgr.common.roundOptTime);
        return NodeDriverResult.Wait;
    }

    public onWaitTimeArrive(table: GameTable): NodeDriverResult {
        //派发回合结束信息
        return NodeDriverResult.GoOn;
    }

    private deal(table: GameTable) {
        const user = table.users[table.roundUserIndex];
    }

    //玩家回合操作
    public trigger(user: GameUser, table: GameTable, msg: IGameMessage) {

        if (table.users[table.roundUserIndex].uid !== user.uid) {
            return NodeDriverResult.Continue;
        }

        switch (msg.scmd) {
            //结束回合
            case GamePto.C_END_ROUND.prototype.scmd:
                return NodeDriverResult.GoOn;
        }


        //TODO Logic

        //玩家有可能在这个阶段死亡
        if (table.checkGameOver()) {
            return NodeDriverResult.GoOn;
        }
        return NodeDriverResult.Continue;
    }
}