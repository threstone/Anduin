import { EventData, EventType } from "../game/EventDefine";
import { EventFunction } from "../game/GameDefine";
import { GameTable } from "../game/GameTable";
import { BuildingCard } from "./BuildingCard";

export class UnitCard extends BuildingCard {

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
}