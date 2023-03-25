import { CardsPto } from "../../../common/CommonProto";
import { GamePto } from "../../../common/CommonProto";
import { BuffData } from "../buff/BuffData";
import { EventFunction } from "../game/GameDefine";
import { GameUser } from "../game/GameUser";
import { GlobalVar } from "../GlobalVar";
import { BaseCard } from "./BaseCard";
import { EventCard } from "./EventCard";

export class BuildingCard extends EventCard {
    public blockX: number;
    public blockY: number;

    /**自身的所有buff,包括全局buff、位置buff、普通buff */
    private _buffMap: Map<number, BuffData>;

    public onDamageFuns: EventFunction[];
    public onDamageAfterFuns: EventFunction[];
    public onDeadFuns: EventFunction[];

    constructor(cardId: number) {
        super(cardId);
        this.onDamageFuns = [];
        this.onDamageAfterFuns = [];
        this.onDeadFuns = [];
    }

    /**发送到客户端的状态数据 */
    get buffArr() {
        if (!this._buffMap) {
            return null;
        }
        const res: number[] = [];
        this._buffMap.forEach((value) => {
            if (!value.ignore) {
                res.push(value.buffId);
            }
        });
        return res;
    }

    /**添加指定的buff */
    public addBuff(buff: BuffData) {
        if (!this._buffMap) {
            this._buffMap = new Map<number, BuffData>();
        }
        //置入数据
        this._buffMap.set(buff.id, buff);
    }

    /**删除指定的buff */
    public deleteBuff(buff: BuffData) {
        this._buffMap?.delete(buff.id);
    }

    /**执行将指定的函数数组,当函数返回false的时候终止执行后续流程 */
    public deleteFunById(funcArr: EventFunction[], id: number) {
        for (let index = 0; index < funcArr.length; index++) {
            const funcInfo = funcArr[index];
            if (funcInfo.id === id) {
                funcArr.splice(index, 1);
            }
        }
    }

    public onUse(user: GameUser, cardIndex: number, blockX: number, blockY: number, ...params: number[]) {
        super.onUse(user, cardIndex, ...params);
        this.blockX = blockX;
        this.blockY = blockY;
        this.table.mapData.setCard(this);

        user.entityPool.push(this);

        //ADD Buff
        for (let index = 0; index < this.buffs.length; index++) {
            const buff = this.buffs[index];
            GlobalVar.buffMgr.addBuff(this, buff);
        }

        if (this.cardType === CardsPto.CardType.Building || this.cardType === CardsPto.CardType.Unit) {
            //send success card message
            const notice = new GamePto.S_USE_CARD();
            notice.isSuccess = true;
            notice.uid = this.uid;
            notice.card = this;
            notice.cardIndex = cardIndex;
            this.table.broadcast(notice);

            //通知用户费用信息
            this.table.noticeUserFeeInfo(user);
        }
    }

    public useCardCheck(blockX: number, blockY: number, ...params: number[]) {
        if (super.useCardCheck(blockX, blockY, ...params)) {
            //建筑卡
            if (blockX != undefined && blockY != undefined && this.table.mapData.getCard(blockX, blockY) == null) {
                return true;
            }
        }
        return false;
    }

    /**
     * 当受到伤害
     * @returns 实际受到的伤害
     */
    public onDamage(damage: number, damageSource: BaseCard, self = this): number {
        for (let index = 0; index < this.onDamageFuns.length; index++) {
            const funcObj = this.onDamageFuns[index];
            damage = funcObj.fun.call(this, damage, damageSource, self);
        }
        damage = Math.max(0, damage);
        this.health -= damage;
        return damage;
    }

    /**
     * 当受到伤害之后
     * 之所以要单独抽出来作为一个函数且不在onDamage中执行,是为了分离协议,延后卡牌死亡协议的下发。
     */
    public onDamageAfter(damageSource: BaseCard, self = this) {
        this.callFuns(this.onDamageAfterFuns, self);
        //死亡了
        if (this.health <= 0) {
            this.onDead(damageSource);
        }
    }

    public onDead(damageSource: BaseCard, self = this) {
        const user = this.table.getUser(this.uid);
        const index = user.entityPool.indexOf(this);
        if (index === -1) {
            return;
        }

        /**从地图上删除卡牌 */
        this.table.mapData.deleteCard(this.blockX, this.blockY);
        user.entityPool.splice(index, 1);
        user.deadPool.push(this);

        //派发死亡协议
        const msg = new GamePto.S_ENTITY_DEAD();
        msg.deadCard = this;
        this.table.broadcast(msg);

        //执行卡牌死亡事件,亡语就在此执行
        this.callFuns(this.onDeadFuns, self);

        //如果造成伤害方式对方,则对方增加一点费用
        if (damageSource.uid !== this.uid) {
            const targetUser = this.table.getOtherUser(this.uid);
            //加费用
            if (targetUser.fee < targetUser.feeMax) {
                targetUser.fee += 1;
                //通知用户费用信息
                this.table.noticeUserFeeInfo(targetUser);
            }
        }
    }
}