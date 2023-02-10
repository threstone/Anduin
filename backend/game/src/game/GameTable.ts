import { GamePto } from '../../../common/CommonProto';
import { GlobalVar } from '../GlobalVar';
import { NodeDriver } from '../core/NodeDriver';
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
    public async tryToStartGame(matchInfo: GameMatchInfo) {
        await this.initUserInfo(matchInfo);
        this.initNode();

        const message = new GamePto.S_INIT_GAME();
        message.targetNick = this.users[1].nick;
        message.targetPower = this.users[1].cardGroup.powerId;
        this.users[0].sendMsg(message);

        message.targetNick = this.users[0].nick;
        message.targetPower = this.users[0].cardGroup.powerId;
        this.users[1].sendMsg(message);
    }

    private initNode() {
        this._nodeDriver.resetNode();
    }

    private async initUserInfo(matchInfo: GameMatchInfo) {
        const user1 = new GameUser(matchInfo.souceUser, this);
        this._users.push(user1);
        GlobalVar.userMgr.setUser(user1);

        const user2 = new GameUser(matchInfo.targetUser, this);
        this._users.push(user2);
        GlobalVar.userMgr.setUser(user2);
        return Promise.all([user1.syncUserInfo(), user2.syncUserInfo()]);
    }
}