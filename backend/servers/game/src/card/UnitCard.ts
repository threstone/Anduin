import { CardsPto, GamePto } from "../../../../common/CommonProto";
import { GlobalVar } from "../GlobalVar";
import { EventData, EventType } from "../game/EventDefine";
import { EventFunction } from "../game/GameDefine";
import { GameTable } from "../game/GameTable";
import { BuildingCard } from "./BuildingCard";

export class UnitCard extends BuildingCard {

    /* ================START 临时数据开始,用于一些特殊的buff需要用到的数据 START================ */
    tempAtkAdd: number;
    /* ==================END 临时数据结束,用于一些特殊的buff需要用到的数据 END================== */

    allowAtk: boolean = false;
    allowMove: boolean = false;

    onPreMoveFuns: EventFunction[] = [];
    onMoveAfterFuns: EventFunction[] = [];

    constructor(cardId: number, uid: number, table: GameTable) {
        super(cardId, uid, table);
        this.on(EventType.RoundStart, { id: this.id, fun: this.onRoundStart, canSilent: false });
        this.on(EventType.RoundEnd, { id: this.id, fun: this.onRoundEnd, canSilent: false });
    }

    /**
     * 回合开始触发
     * @returns 操作时间
     */
    public onRoundStart(eventData: EventData, next: Function) {
        //重置攻击移动数据
        this.allowAtk = true;
        this.allowMove = true;
        next();
    }

    /**
     * 回合结束触发
     * @returns 操作时间
     */
    public onRoundEnd(eventData: EventData, next: Function) {
        //重置攻击移动数据
        this.allowAtk = false;
        this.allowMove = false;
        next();
    }

    /**获取被攻击的目标 */
    public getBeAttackCard(targetCard: BuildingCard, self: UnitCard): BuildingCard[] {
        const mapData = self.table.mapData;
        if (self.detailType === CardsPto.AtkType.CloseRange) {
            return [targetCard];
        } else {
            let beAttackCard: BuildingCard;

            if (self.blockX === targetCard.blockX) {
                const changeNum = self.blockY > targetCard.blockY ? -1 : 1;
                let y = self.blockY + changeNum;
                while ((beAttackCard = mapData.getCard(self.blockX, y)) == null || beAttackCard.uid === self.uid) {
                    y += changeNum;
                }
            } else if (self.blockY === targetCard.blockY) {
                const changeNum = self.blockX > targetCard.blockX ? -1 : 1;
                let x = self.blockX + changeNum;
                while ((beAttackCard = mapData.getCard(x, self.blockY)) == null || beAttackCard.uid === self.uid) {
                    x += changeNum;
                }
            }
            return [beAttackCard];
        }
    }

    public doAttack(atkEvent: EventData, targetCard: BuildingCard, damageCards: BuildingCard[]) {
        const user = this.table.getUser(this.uid);
        const table = this.table;
        const replay = new GamePto.S_ATTACK();

        // 执行卡牌自身攻击前事件
        this.emit(atkEvent.changeType(EventType.SelfPreAtk), this, targetCard, damageCards);
        const firstTarget = damageCards[0];
        // 受伤事件 返回实际受到的伤害
        firstTarget.emit(atkEvent.changeType(EventType.Damage), firstTarget, this);
        const damage = atkEvent.data;

        // 近战攻击会被反击
        if (this.detailType === CardsPto.AtkType.CloseRange) {
            // 受到卡牌反击的伤害, 近战远程不一样,远程的反击能力稍弱
            const damageRatio = firstTarget.detailType === CardsPto.AtkType.CloseRange ? GlobalVar.configMgr.common.closeRangeStrikeBackRatio : GlobalVar.configMgr.common.longRangeStrikeBackRatio;
            const strikeBackDamage = Math.floor(firstTarget.attack * damageRatio);
            const strikeBackEvent = new EventData(EventType.Damage);
            strikeBackEvent.data = strikeBackDamage;
            // 受伤事件
            replay.strikeBackDamage = this.emit(strikeBackEvent, this, firstTarget).data;
            // 受伤后事件
            this.emit(strikeBackEvent.changeType(EventType.DamageAfter), this, firstTarget);
        }

        //其他单位扣血
        for (let index = 1; index < damageCards.length; index++) {
            const tempCard = damageCards[index];
            tempCard.incrHp(-damage);
        }

        //广播卡牌攻击协议
        replay.uid = user.uid;
        replay.leastAtkTimes = user.atkTimes;
        replay.damage = damage;
        replay.allowAtk = this.allowAtk;
        replay.from = this;
        replay.targetList = damageCards;
        table.broadcast(replay);

        //执行卡牌受伤后事件
        atkEvent.changeType(EventType.DamageAfter);
        damageCards.forEach((damgaCard) => {
            damgaCard.emit(atkEvent, damgaCard, this);
        })

        //执行卡牌自身攻击后事件
        this.emit(atkEvent.changeType(EventType.SelfAtkAfter), this, targetCard, damageCards);
    }
}