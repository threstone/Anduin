import { UnitCard } from "../UnitCard";

/**护卫 */
export class Card4 extends UnitCard {
    public onUse() {
        //给自身和周围加举盾buff
        //给自己家的buff是normalBuff
        // this._buffMap
    }

    public onPreMove() {
        // 移除周围单位buff
        return super.onPreMove();
    }

    public onMoveAfter() {
        // 增加周围单位buff
        return super.onMoveAfter()
    }
}