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
import { GameMapData } from './GameMapData';

export class GameTable extends BaseTable {

    /**接下来执行回合操作的玩家 */
    nextRoundUserIndex: number;

    /**地图数据 */
    private _mapData: GameMapData;

    get mapData() { return this._mapData; }

    isGameOver: boolean;

    constructor(tableId: number, talbeIndex: number) {
        super(tableId, talbeIndex);

        this._mapData = new GameMapData(7, 8);
        this.isGameOver = false;

        this._nodeDriver = new NodeDriver(this);
        this._nodeDriver.setNodes([
            new NodeStartGame(this._nodeDriver),
            new NodeRoundStart(this._nodeDriver),
            new NodeRound(this._nodeDriver),
            new NodeRoundEnd(this._nodeDriver),
            new NodeEndGame(this._nodeDriver),
        ]);
    }

    /**检查是否结束 */
    public checkGameOver() {
        for (let index = 0; index < this._users.length; index++) {
            const user = this._users[index];
            //英雄死亡
            if (user.hero.health <= 0) {
                this.isGameOver = true;
                return true;
            }
        }
        return false;
    }


    public getOtherUser(uid: number) {
        if (this._users[0].uid === uid) {
            return this._users[1];
        }
        return this._users[0];
    }

    /**获取地图数据 */
    public getMapData() {
        const mapData = new GamePto.MapData();
        for (let index = 0; index < this._users.length; index++) {
            const user = this._users[index];
            for (let eventIndex = 0; eventIndex < user.eventPool?.length; eventIndex++) {
                const eventCard = user.eventPool[eventIndex];
                // const gameCard = new GamePto.Card();
                // gameCard.cardId = eventCard.cardId;
                // gameCard.attack = eventCard.attack;
                // gameCard.health = eventCard.health;
                // gameCard.uid = user.uid;
                mapData.eventCard.push(eventCard);
            }

            for (let unitIndex = 0; unitIndex < user.unitPool?.length; unitIndex++) {
                const unitCard = user.unitPool[unitIndex];
                // const gameCard = new GamePto.Card();
                // gameCard.cardId = unitCard.cardId;
                // gameCard.attack = unitCard.attack;
                // gameCard.health = unitCard.health;
                // gameCard.allowAtk = unitCard.allowAtk;
                // gameCard.uid = user.uid;
                mapData.eventCard.push(unitCard);
            }
        }
        return mapData;
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
        for (let index = 0; index < this._users.length; index++) {
            const user = this._users[index];
            const userInfo = new GamePto.UserInfo();
            userInfo.nick = user.nick;
            userInfo.power = user.powerId;
            userInfo.uid = user.uid;
            message.users.push(userInfo);
        }

        this.broadcast(message);
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