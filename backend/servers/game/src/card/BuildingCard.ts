import { CardsPto } from "../../../../common/CommonProto";
import { GamePto } from "../../../../common/CommonProto";
import { BuffData, BuffTypeEnum } from "../buff/BuffDataClass";
import { EventData, EventType } from "../game/EventDefine";
import { EventFunction } from "../game/GameDefine";
import { GameTable } from "../game/GameTable";
import { GameUser } from "../game/GameUser";
import { GlobalVar } from "../GlobalVar";
import { BaseCard } from "./BaseCard";
import { EventCard } from "./EventCard";

export class BuildingCard extends EventCard {

    /**上一次在的位置 */
    public lastX: number;
    public lastY: number;
    /**当前所在位置 */
    public blockX: number;
    public blockY: number;

    /**自身的所有buff,包括全局buff、位置buff、普通buff */
    private _buffMap: Map<number, BuffData>;

    /** 由各种buff效果改变的攻击属性值,可被沉默影响 */
    public buffModifyAtk: number = 0;
    /** 由各种buff效果改变的生命属性值,可被沉默影响 */
    public buffModifyHp: number = 0;

    /** 是否被沉默 */
    public silenced: boolean = false;

    constructor(cardId: number, uid: number, table: GameTable) {
        super(cardId, uid, table);
        this.on(EventType.Damage, { id: this.id, fun: this.onDamage, canSilent: false });
        this.on(EventType.DamageAfter, { id: this.id, fun: this.onDamageAfter, canSilent: false });
        this.on(EventType.Dead, { id: this.id, fun: this.onDead, canSilent: false });
    }

    /**发送到客户端的状态数据 */
    get buffList() {
        if (!this._buffMap) {
            return null;
        }
        const res: number[] = [];
        this._buffMap.forEach((buff) => {
            if (this.isBuffShow(buff)) {
                res.push(buff.buffId);
            }
        });
        return res;
    }

    /**是否下发到客户端以显示 */
    public isBuffShow(buff: BuffData) {
        //是全局或位置buff的情况下又不是buff源,则需要展示出Buff
        if (buff.sourceCardUid && buff.sourceCardUid !== this.id) {
            return true;
        }

        return buff.ignore !== true;
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

        user.setEntityToMap(this);

        this.initBuffs();

        if (this.cardType === CardsPto.CardType.Building || this.cardType === CardsPto.CardType.Unit) {
            //send success card message
            const notice = new GamePto.S_USE_CARD();
            notice.isSuccess = true;
            notice.uid = this.uid;
            notice.card = this;
            notice.cardIndex = cardIndex;
            this.table.broadcast(notice);
        }
    }

    /**初始化buff */
    public initBuffs() {
        //ADD Buff
        for (let index = 0; index < this.buffs.length; index++) {
            const buff = this.buffs[index];
            GlobalVar.buffMgr.addBuff(this, buff);
        }

        //自身初始的buff需要被忽略
        this._buffMap?.forEach((buff) => {
            buff.ignore = true;
        })
    }

    /** 沉默 */
    public handleSilence() {
        this.silenced = true;
        this._buffMap.forEach((buff) => {
            switch (buff.buffType) {
                case BuffTypeEnum.Normal:
                    GlobalVar.buffMgr.deleteBuff(this, buff);
                    break;
                case BuffTypeEnum.Position:
                    if (buff.sourceCardUid === this.id) {
                        GlobalVar.buffMgr.deleteBuff(this, buff);
                    }
                    break;
                case BuffTypeEnum.Global:
                    if (buff.sourceCardUid === this.id) {
                        GlobalVar.buffMgr.deleteBuff(this, buff);
                    }
                    break;
            }
        });

        this.attack -= this.buffModifyAtk;
        this.buffModifyAtk = 0;
        this.hpUpperLimit -= this.buffModifyHp;
        this.setHp(this.hp);
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
    public onDamage(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard) {
        next();
        eventData.data = Math.max(0, eventData.data);
        this.incrHp(-eventData.data)
    }

    /**
     * 当受到伤害之后
     * 之所以要单独抽出来作为一个函数且不在onDamage中执行,是为了分离协议,延后卡牌死亡协议的下发。
     */
    public onDamageAfter(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard) {
        next();
        //死亡了
        if (this.getHp() <= 0) {
            process.nextTick(() => {
                this.emit(EventType.Dead, damageTarget, damageSource);
            });
        }
    }

    public onDead(eventData: EventData, next: Function, deadEntity: BuildingCard, damageSource: BaseCard) {
        const user = this.table.getUser(this.uid);
        const index = user.entityPool.indexOf(this);
        if (index === -1) {
            logger.error("无法获取到死亡的entity");
            return;
        }

        /**从地图上删除卡牌 */
        this.table.mapData.deleteCard(this.blockX, this.blockY);
        user.entityPool.splice(index, 1);
        user.addToDeadPool(this);
        //进入墓地先把身上的buff清理掉
        if (this._buffMap) {
            this._buffMap.clear();
        }

        //派发死亡协议
        const msg = new GamePto.S_ENTITY_DEAD();
        msg.deadCard = this;
        this.table.broadcast(msg);

        //执行卡牌死亡事件,亡语就在此执行
        next();

        //如果造成伤害方式对方,则对方增加一点费用
        if (damageSource.uid !== this.uid) {
            const enemyUser = this.table.getOtherUser(damageSource.uid);
            //加费用
            if (enemyUser.fee < enemyUser.feeUpperLimit) {
                enemyUser.fee += 1;
                //通知用户费用信息
                enemyUser.broadcastFeeInfo();
            }
        }
    }

    /** 通过buff增加属性 */
    public buffModify(modifyAtk: number, modifyHp: number) {
        // 增加攻击、血量
        this.attack += modifyAtk;
        this.buffModifyAtk += modifyAtk;

        this.hpUpperLimit += modifyHp;
        this.incrHp(modifyHp);
        this.buffModifyHp += modifyHp;
    }

    /** 更新客户端卡牌实体数据 */
    public updateClientEntity(tips?: string) {
        const notice = new GamePto.S_UPDATE_ENTITYS();
        notice.entityCards.push(this);
        if (tips) {
            notice.tipsList.push(tips);
        }
        this.table.broadcast(notice);
    }
}