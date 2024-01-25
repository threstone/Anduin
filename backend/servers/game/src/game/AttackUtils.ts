import { CardsPto } from "../../../../common/CommonProto";
import { BuildingCard } from "../card/BuildingCard";
import { UnitCard } from "../card/UnitCard";
import { GameMap } from "./map/GameMap";

export class AttackUtils {

    /**判断是否可以攻击 */
    public static allowAtk(sourceCard: UnitCard, targetCard: BuildingCard) {
        const atkRange = sourceCard.detailType === CardsPto.AtkType.CloseRange ? 1 : 3;
        if (sourceCard.blockX === targetCard.blockX) {
            return atkRange >= Math.abs(sourceCard.blockY - targetCard.blockY);
        } else if (sourceCard.blockY === targetCard.blockY) {
            return atkRange >= Math.abs(sourceCard.blockX - targetCard.blockX);
        }
        return false;
    }

    /**获取真正被攻击的单位,因为远程有可能能被路径上的敌人挡住 */
    public static getBeAttackCard(sourceCard: UnitCard, targetCard: BuildingCard, mapData: GameMap) {
        if (sourceCard.detailType === CardsPto.AtkType.CloseRange) {
            return targetCard;
        } else {
            let beAttackCard: BuildingCard;

            if (sourceCard.blockX === targetCard.blockX) {
                const changeNum = sourceCard.blockY > targetCard.blockY ? -1 : 1;
                let y = sourceCard.blockY + changeNum;
                while ((beAttackCard = mapData.getCard(sourceCard.blockX, y)) == null || beAttackCard.uid === sourceCard.uid) {
                    y += changeNum;
                }
            } else if (sourceCard.blockY === targetCard.blockY) {
                const changeNum = sourceCard.blockX > targetCard.blockX ? -1 : 1;
                let x = sourceCard.blockX + changeNum;
                while ((beAttackCard = mapData.getCard(x, sourceCard.blockY)) == null || beAttackCard.uid === sourceCard.uid) {
                    x += changeNum;
                }
            }
            return beAttackCard;
        }
    }

}