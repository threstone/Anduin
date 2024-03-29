import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";

export class AttackUtils {

    /**判断是否可以攻击 */
    public static allowAtk(sourceCard: UnitCard, targetCard: BuildingCard) {
        // 如果可以攻击不同行不同列的元素将使用以下代码，但是就会导致远程攻击无法被中途单元挡住
        const atkRange = sourceCard.atkRange;
        return atkRange >= Math.abs(sourceCard.blockY - targetCard.blockY) + Math.abs(sourceCard.blockX - targetCard.blockX);

        // 以下注释为只能攻击同行同列单位时的获取代码
        // const atkRange = sourceCard.detailType === CardsPto.AtkType.CloseRange ? 1 : sourceCard.atkRange;
        // if (sourceCard.blockX === targetCard.blockX) {
        //     return atkRange >= Math.abs(sourceCard.blockY - targetCard.blockY);
        // } else if (sourceCard.blockY === targetCard.blockY) {
        //     return atkRange >= Math.abs(sourceCard.blockX - targetCard.blockX);
        // }
        // return false;
    }
}