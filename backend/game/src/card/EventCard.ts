import { BaseCard } from "./BaseCard";

export abstract class EventCard extends BaseCard {
    /**
     * 回合开始触发
     * @returns 操作时间
     */
    public onRoundStart(): number {
        return 0;
    }

     /**
     * 回合结束触发
     * @returns 操作时间
     */
    public onRoundEnd(): number {
        return 0;
    }

    /**在对方使用法术牌前触发 */
    public onTartgetUserPreMagic() {

    }

    /**在对方使用法术牌后触发 */
    public onTartgetUserMagicAfter() {

    }

    /**在对方使用单位牌前触发 */
    public onTartgetUserPreUnit() {

    }

    /**在对方使用单位牌后触发 */
    public onTartgetUserUnitAfter() {

    }

    /**当置入战场 */
    public onAddToMap() {

    }
}