import { GamePto } from "../../../../../common/CommonProto";
import { BuildingCard } from "../../card/BuildingCard";
import { EventData, EventType } from "../../game/EventDefine";
import { BuffEffectiveDefine } from "../../game/GameDefine";
import { BuffData } from "../BuffDataClass";
import { GameBuff } from "../GameBuff";

/**
 * 务农：回合开始阶段获得一点费用
 */
export class WuNong extends GameBuff {

    public static buffId: number = 0;

    public addBuff(card: BuildingCard): void {
        const buff = new BuffData(card.table.uniqueId, card.uid, -1, this.buffId, BuffEffectiveDefine.Friend);
        card.addBuff(buff);
        card.on(EventType.RoundStart, { id: buff.id, fun: this.onRoundStart })
    }

    public deleteBuff(card: BuildingCard, buff: BuffData): void {
        card.deleteBuff(buff);
        card.off(EventType.RoundStart, buff.id);
    }

    /**回合开始时费用加1 */
    public onRoundStart(eventData: EventData, next: Function, card: BuildingCard) {
        const user = card.table.getUser(card.uid);
        //加费用
        if (user.fee < user.feeUpperLimit) {
            user.fee++;
            //派发效果协议
            const effectMsg = new GamePto.S_SELF_EFFECT();
            effectMsg.x = card.blockX;
            effectMsg.y = card.blockY;
            effectMsg.card = card;
            card.table.broadcast(effectMsg);

            //派发费用协议
            user.broadcastFeeInfo();
        }
        next();
    }
}