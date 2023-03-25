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
import { GameMap } from './map/GameMap';
import { DiceValueDefine, NodeDefine } from './GameDefine';
import { IGameMessage } from '../../../common/I';

export class GameTable extends BaseTable {

    /**执行回合操作的玩家 */
    roundUserIndex: number;

    /**地图数据 */
    private _mapData: GameMap;

    get mapData() { return this._mapData; }

    isGameOver: boolean;

    private _incrId: number;
    /**用于游戏中出现的各种唯一id */
    get uniqueId() {
        return this._incrId++;
    }

    constructor(tableId: number, talbeIndex: number) {
        super(tableId, talbeIndex);

        this._mapData = new GameMap(7, 8, this);
        this.isGameOver = false;

        this._incrId = 0;

        this._nodeDriver = new NodeDriver(this);
        this._nodeDriver.setNodes([
            new NodeStartGame(this._nodeDriver),
            new NodeRoundStart(this._nodeDriver),
            new NodeRound(this._nodeDriver),
            new NodeRoundEnd(this._nodeDriver),
            new NodeEndGame(this._nodeDriver),
        ]);
    }

    /**检查用户是否有回合操作权限 */
    public allowRoundOprate(user: GameUser) {
        //此时非此用户的回合
        if (this.users[this.roundUserIndex].uid !== user.uid) {
            return false
        }

        //检查node是否在回合流程中
        if (!this.nodeDriver || this.nodeDriver.getCurNode() !== NodeDefine.Round) {
            return false;
        }

        return true;
    }

    public getUser(uid: number) {
        if (this._users[0].uid === uid) {
            return this._users[0];
        }
        return this._users[1];
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
            mapData.eventCards.push(...user.eventPool.map((item) => item.getCardData()));
            mapData.entityCards.push(...user.entityPool);
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

    /** 根据骰子的数量获得结果*/
    public getDices(diceNum: number) {
        const res: number[] = [];
        for (let index = 0; index < diceNum; index++) {
            res.push(this.random(6));
        }
        return res;
    }

    /**根据骰子获取指定结果的数额 */
    public getTargetDiceValueNum(diceResArr: number[], targetType: GamePto.DiceValueEnum) {
        let num = 0;
        for (let index = 0; index < diceResArr.length; index++) {
            const dice = diceResArr[index];
            const DiceValueArr = DiceValueDefine[dice]
            for (let d = 0; d < DiceValueArr.length; d++) {
                if (DiceValueArr[d] === targetType) {
                    num++;
                }
            }
        }
        return num;
    }

    /**游戏结束 */
    public doGameOver() {
        const msg = new GamePto.S_GAME_OVER();
        //平局判断
        if (this.users[0].hero.health <= 0 && this.users[1].hero.health <= 0) {
            msg.winnerUid = -1;
        } else {
            const winner = this.users[0].hero.health > 0 ? this.users[0] : this.users[1];
            msg.winnerUid = winner.uid;
        }
        this.broadcast(msg);
        this.destroy(false)
    }

    /**广播指定用户的费用信息 */
    public noticeUserFeeInfo(user: GameUser) {
        const feeNotice = new GamePto.S_FEE_INFO();
        feeNotice.uid = user.uid
        feeNotice.fee = user.fee;
        feeNotice.maxFee = user.feeMax;
        this.broadcast(feeNotice);
    }
}
