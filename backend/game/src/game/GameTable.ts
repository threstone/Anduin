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
import { GameMapData } from './map/GameMapData';
import { DiceValueDefine, NodeDefine } from './GameDefine';
import { UnitCard } from '../card/UnitCard';
import { BuildingCard } from '../card/BuildingCard';
import { AttackUtils } from './AttackUtils';

export class GameTable extends BaseTable {

    /**执行回合操作的玩家 */
    roundUserIndex: number;

    /**地图数据 */
    private _mapData: GameMapData;

    get mapData() { return this._mapData; }

    isGameOver: boolean;

    private _incrId: number;
    /**用于游戏中出现的各种唯一id */
    get uniqueId() {
        return this._incrId++;
    }

    constructor(tableId: number, talbeIndex: number) {
        super(tableId, talbeIndex);

        this._mapData = new GameMapData(7, 8, this);
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
            mapData.eventCards.push(...user.eventPool);
            mapData.unitCards.push(...user.unitPool);
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

    /**
     * 
     * @param sourceCard 发起攻击者
     * @param targetCard 被攻击的单位
     * @returns 
     */
    public doAttack(sourceCard: UnitCard, targetCard: BuildingCard) {
        if (!sourceCard || !targetCard) {
            return;
        }
        //判断是否能够攻击
        if (!sourceCard.allowAtk || !AttackUtils.allowAtk(sourceCard, targetCard)) {
            return;
        }

        // const msg = new GamePto.S_ATTACK();
        // msg.sourceX = sourceCard.blockX;
        // msg.sourceY = sourceCard.blockY;
        // msg.targetX = targetCard.blockX;
        // msg.targetY = targetCard.blockY;
        // //获取到真正会受到伤害的卡牌
        // const beAttackCard = AttackUtils.getBeAttackCard(sourceCard, targetCard, this.mapData);
        // //根据自身的攻击力决定投掷的骰子数量并且获得投掷的结果
        // const dices = this.getDices(sourceCard.attack);
        // //实际扣除的血量
        // const targetNum = this.getTargetDiceValueNum(dices, sourceCard.atkType === CardsPto.AtkType.CloseRange ? GamePto.DiceValueEnum.Sword : GamePto.DiceValueEnum.Bow);
        // beAttackCard.onPreAtk(targetNum);
        // sourceCard.onAttack(targetNum);
        // beAttackCard.onAtkAfter(targetNum);
    }

    /** 根据骰子的数量获得结果*/
    private getDices(diceNum: number) {
        const res: number[] = [];
        for (let index = 0; index < diceNum; index++) {
            res.push(this.random(6));
        }
        return res;
    }

    private getTargetDiceValueNum(diceResArr: number[], targetType: GamePto.DiceValueEnum) {
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
}
