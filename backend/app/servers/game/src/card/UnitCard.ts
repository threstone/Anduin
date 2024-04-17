import { EventData, EventType } from "../game/EventDefine";
import { EventFunction } from "../game/GameDefine";
import { GameTable } from "../game/GameTable";
import { BuildingCard } from "./BuildingCard";

export class UnitCard extends BuildingCard {

    /* ================START 临时数据开始,用于一些特殊的buff需要用到的数据 START================ */
    tempAtkAdd: number;
    /* ==================END 临时数据结束,用于一些特殊的buff需要用到的数据 END================== */

    onPreMoveFuns: EventFunction[] = [];
    onMoveAfterFuns: EventFunction[] = [];

    constructor(cardId: number, uid: number, table: GameTable) {
        super(cardId, uid, table);
        this.on(EventType.RoundStart, { id: this.id, fun: this.onRoundStart, canSilent: false });
        this.on(EventType.RoundEnd, { id: this.id, fun: this.onRoundEnd, canSilent: false });
    }

    /**
     * 回合开始触发
     */
    public onRoundStart(eventData: EventData, next: Function) {
        //重置攻击移动数据
        this.allowAtk = true;
        this.allowMove = true;
        next();
    }

    /**
     * 回合结束触发
     */
    public onRoundEnd(eventData: EventData, next: Function) {
        //重置攻击移动数据
        this.allowAtk = false;
        this.allowMove = false;
        next();
    }

    /**获取被攻击的目标 */
    public getBeAttackCard(targetCard: BuildingCard, self: UnitCard): BuildingCard[] {
        return [targetCard];
        // 以下注释为当远程攻击时可被挡住时的代码
        // 获取真正被攻击的单位, 因为远程有可能能被路径上的敌人挡住
        // const mapData = self.table.mapData;
        // if (self.detailType === CardsPto.AtkType.CloseRange) {
        //     return [targetCard];
        // } else {
        //     let beAttackCard: BuildingCard;

        //     if (self.blockX === targetCard.blockX) {
        //         const changeNum = self.blockY > targetCard.blockY ? -1 : 1;
        //         let y = self.blockY + changeNum;
        //         while ((beAttackCard = mapData.getCard(self.blockX, y)) == null || beAttackCard.uid === self.uid) {
        //             y += changeNum;
        //         }
        //     } else if (self.blockY === targetCard.blockY) {
        //         const changeNum = self.blockX > targetCard.blockX ? -1 : 1;
        //         let x = self.blockX + changeNum;
        //         while ((beAttackCard = mapData.getCard(x, self.blockY)) == null || beAttackCard.uid === self.uid) {
        //             x += changeNum;
        //         }
        //     }
        //     return [beAttackCard];
        // }
    }
}