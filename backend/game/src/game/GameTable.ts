import { GamePto } from '../../../common/CommonProto';
import { IGameMessage } from '../../../common/I';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';
import { NodeDriver } from '../NodeDriver';
import { GameMatchInfo } from './GameMatchInfo';
import { GameUser } from './GameUser';
import { NodeEndGame } from './node/NodeEndGame';
import { NodeRound } from './node/NodeRound';
import { NodeRoundEnd } from './node/NodeRoundEnd';
import { NodeRoundStart } from './node/NodeRoundStart';
import { NodeStartGame } from './node/NodeStartGame';

export class GameTable {
    tableId: number;
    talbeIndex: number;
    private _users: GameUser[];
    private _nodeDriver: NodeDriver;
    get users() { return this._users; }

    private _isDestroy: boolean;
    get isDestroy() { return this._isDestroy; }

    constructor(tableId: number, talbeIndex: number) {
        this.tableId = tableId;
        this.talbeIndex = talbeIndex;
        this._users = [];

        this._nodeDriver = new NodeDriver(this);
        this._nodeDriver.setNodes([
            new NodeStartGame(this._nodeDriver),
            new NodeRoundStart(this._nodeDriver),
            new NodeRound(this._nodeDriver),
            new NodeRoundEnd(this._nodeDriver),
            new NodeEndGame(this._nodeDriver),
        ]);
    }

    /**广播消息 */
    private broadcast(message: IGameMessage, excludeUid: number = -1) {
        const messageBuffer = ProtoBufEncoder.encode(message);
        const users = this._users;
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (user.uid !== excludeUid || user.isOnline === false) {
                continue;
            }
            user.sendBuffer(messageBuffer);
        }
    }

    public destroy() {
        //send tips
        const msg = new GamePto.S_SERVER_ERROR();
        msg.message = '出现异常,请联系相关人员(QQ:790325011)!';
        this.broadcast(msg);

        const users = this._users;
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            //clear user manager cache
            GlobalVar.userMgr.clearUser(user.uid);
            //unbind
            GlobalVar.socketServer.sendUnbindUserGameNode(user.clientName, user.uid);
        }
        this._isDestroy = true;
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