import { GlobalVar } from '../GlobalVar';
import { NodeDriver } from '../NodeDriver';
import { BaseTable } from './BaseTable';
import { GameMatchInfo } from './GameMatchInfo';
import { GameUser } from './GameUser';
import { NodeEndGame } from './node/NodeEndGame';
import { NodeRound } from './node/NodeRound';
import { NodeRoundEnd } from './node/NodeRoundEnd';
import { NodeRoundStart } from './node/NodeRoundStart';
import { NodeStartGame } from './node/NodeStartGame';

export class GameTable extends BaseTable {

    /**接下来执行回合操作的玩家 */
    nextRoundUserIndex: number;

    constructor(tableId: number, talbeIndex: number) {
        super(tableId, talbeIndex);

        this._nodeDriver = new NodeDriver(this);
        this._nodeDriver.setNodes([
            new NodeStartGame(this._nodeDriver),
            new NodeRoundStart(this._nodeDriver),
            new NodeRound(this._nodeDriver),
            new NodeRoundEnd(this._nodeDriver),
            new NodeEndGame(this._nodeDriver),
        ]);
    }

    public onRun(now: number) {
        this._nodeDriver.onRun(now);
    }

    /**用户断开连接 */
    public onUserOffline(user: GameUser) {
        //TODO 
        user.isOnline = false;
    }

    /**
     * 尝试开启游戏
     * @param matchInfo 游戏开始必须的用户相关信息
     */
    public tryToStartGame(matchInfo: GameMatchInfo) {
        this.initUserInfo(matchInfo);
        this.initNode();
    }

    private initNode() {
        this._nodeDriver.resetNode();
    }

    private initUserInfo(matchInfo: GameMatchInfo) {
        const user1 = new GameUser(matchInfo.souceClient, matchInfo.souceUid, matchInfo.souceCardGroup, this);
        this._users.push(user1);
        GlobalVar.userMgr.setUser(user1);

        const user2 = new GameUser(matchInfo.targetClient, matchInfo.targetUid, matchInfo.targetCardGroup, this);
        this._users.push(user2);
        GlobalVar.userMgr.setUser(user2);
    }
}