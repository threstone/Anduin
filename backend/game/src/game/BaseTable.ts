import * as MT19937 from '@stdlib/random-base-mt19937';
import { GamePto } from '../../../common/CommonProto';
import { IGameMessage } from '../../../common/I';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';
import { NodeDriver } from '../core/NodeDriver';
import { GameUser } from './GameUser';

export class BaseTable {
    randSeed_: number;
    mtrand_: () => number;

    tableId: number;
    talbeIndex: number;
    protected _users: GameUser[];
    get users() { return this._users; }
    protected _nodeDriver: NodeDriver;
    get nodeDriver() { return this._nodeDriver }

    protected _isDestroy: boolean;
    get isDestroy() { return this._isDestroy; }

    constructor(tableId: number, talbeIndex: number) {
        this.tableId = tableId;
        this.talbeIndex = talbeIndex;
        this._users = [];

    }

    public setRandSeed(seed: number) {
        this.randSeed_ = seed;
        this.mtrand_ = MT19937.factory({
            'seed': seed
        });
    }

    /**
     * @function 随机一个数
     * @param value 返回从 [0-value) 的一个自然整数
     * @description 假设 value=2 那么 返回 0或 1
     */
    public random(value: number) {
        value = value || 1;
        return this.mtrand_() % value;
    }


    /**洗牌 */
    public shuffle(cards: any[]) {
        for (let i = 0; i < cards.length; i++) {
            const lastIndex = cards.length - 1 - i;
            let index = this.random(lastIndex);

            const temp = cards[index];
            cards[index] = cards[lastIndex];
            cards[lastIndex] = temp;
        }
    }

    /**广播消息 */
    public broadcast(message: IGameMessage, excludeUid: number = -1) {
        const messageBuffer = ProtoBufEncoder.encode(message);
        const users = this._users;
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (user.uid === excludeUid || user.isOnline === false) {
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
}