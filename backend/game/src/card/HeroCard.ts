import { GamePto } from "../../../common/CommonProto";
import { EventData, EventType } from "../game/EventDefine";
import { GameTable } from "../game/GameTable";
import { BaseCard } from "./BaseCard";
import { BuildingCard } from "./BuildingCard";
import { UnitCard } from "./UnitCard";

export class HeroCard extends UnitCard {
    public onDead(eventData: EventData, next: Function, damageTarget: BuildingCard, damageSource: BaseCard) {
        const user = this.table.getUser(this.uid);
        const index = user.entityPool.indexOf(this);
        if (index === -1) {
            return;
        }

        //派发死亡协议
        const msg = new GamePto.S_ENTITY_DEAD();
        msg.deadCard = this;
        this.table.broadcast(msg);

        //执行卡牌死亡事件,亡语就在此执行
        next();

        //如果没有因为复生等buff复活,则游戏就结束了
        if (this.health <= 0) {
            this.table.doGameOver();
        }
    }
}