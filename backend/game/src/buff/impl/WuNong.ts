import { GamePto } from "../../../../common/CommonProto";
import { BuildingCard } from "../../card/BuildingCard";
import { EventData, EventType } from "../../game/EventDefine";
import { BuffEffectiveDefine } from "../../game/GameDefine";
import { BuffData } from "../BuffData";
import { GameBuff } from "../GameBuff";

/**
 * 务农：回合开始阶段获得一点费用
 */
export class WuNong extends GameBuff {

    public buffId: number = 0;

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
        if (user.fee < user.feeMax) {
            user.fee++;
            //派发效果协议
            const effectMsg = new GamePto.S_SELF_EFFECT();
            effectMsg.x = card.blockX;
            effectMsg.y = card.blockY;
            card.table.broadcast(effectMsg);

            //派发费用协议
            const msg = new GamePto.S_FEE_INFO();
            msg.fee = user.fee;
            msg.maxFee = user.feeMax;
            msg.uid = user.uid;
            card.table.broadcast(msg);
        }
        next();
    }
}