import { GlobalVar } from '../GlobalVar';
import { GameMatchInfo } from './GameMatchInfo';
import { GameUser } from './GameUser';

export class GameTable {
    tableId: number;
    talbeIndex: number;
    private _users: GameUser[];

    constructor(tableId: number, talbeIndex: number) {
        this.tableId = tableId;
        this.talbeIndex = talbeIndex;
        this._users = [];
    }

    onRun(now: number) {

    }

    /**
     * 尝试开启游戏
     * @param matchInfo 游戏开始必须的用户相关信息
     */
    tryToStartGame(matchInfo: GameMatchInfo) {
        this.initUserInfo(matchInfo);
    }

    private initUserInfo(matchInfo: GameMatchInfo) {
        const user1 = new GameUser(matchInfo.souceClient, matchInfo.souceUid, matchInfo.souceGroupId);
        this._users.push(user1);
        GlobalVar.userMgr.setUser(user1);
        
        const user2 = new GameUser(matchInfo.targetClient, matchInfo.targetUid, matchInfo.targetGroupId);
        this._users.push(user2);
        GlobalVar.userMgr.setUser(user2);
    }
}