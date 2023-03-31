import { EventData, EventType } from "../game/EventDefine";
import { EventFunction } from "../game/GameDefine";
import { BuildingCard } from "./BuildingCard";

export class UnitCard extends BuildingCard {

    allowAtk: boolean = false;
    allowMove: boolean = false;

    onPreMoveFuns: EventFunction[] = [];
    onMoveAfterFuns: EventFunction[] = [];

    constructor(cardId: number, id: number) {
        super(cardId, id);
        this.on(EventType.RoundStart, { id, fun: this.onRoundStart, canSilent: false });
        this.on(EventType.RoundEnd, { id, fun: this.onRoundEnd, canSilent: false });
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