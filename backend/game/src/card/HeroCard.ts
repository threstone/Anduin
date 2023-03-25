import { GamePto } from "../../../common/CommonProto";
import { BaseCard } from "./BaseCard";
import { UnitCard } from "./UnitCard";

export class HeroCard extends UnitCard {

    public onDead(damageSource: BaseCard, self = this) {
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
        this.callFuns(this.onDeadFuns, self);

        //如果没有因为复生等buff复活,则游戏就结束了
        if (this.health <= 0) {
            this.table.isGameOver = true;
            this.table.doGameOver();
        }
    }
}