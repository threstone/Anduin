import { getLogger } from "log4js";
import { GamePto } from "../../../common/CommonProto";
import { CardsPto } from "../../../common/CommonProto";
import { CardInterface } from "../../../common/I";
import { GameTable } from "../game/GameTable";
import { GameUser } from "../game/GameUser";
import { GlobalVar } from "../GlobalVar";

const logger = getLogger();
export class BaseCard implements CardInterface {

    uid: number;
    /**游戏中给卡牌设置的唯一id */
    id: number;
    table: GameTable;

    cardId: number;
    powerId: CardsPto.PowerType;
    cardType: CardsPto.CardType;
    attack: number;
    atkType: CardsPto.AtkType;
    health: number;
    healthUpperLimit: number;
    fee: number;
    quality: CardsPto.QualityType;
    buffs: number[];
    isDerivation: number;
    useCondition: number[];

    public static create(cardId: number) {
        return new (this as any)(cardId);
    }

    constructor(cardId: number) {
        const cardConfig = GlobalVar.configMgr.getCardConfigById(cardId)
        for (const key in cardConfig) {
            this[key] = cardConfig[key];
        }
        this.healthUpperLimit = this.health;
    }

    /**使用卡牌 */
    public onUse(user: GameUser, cardIndex: number, ...params: number[]) {
        //减去费用,删除手牌
        user.fee -= this.fee;
        user.handCards.splice(cardIndex, 1);
    }

    /**检查卡牌是否可以使用 */
    public useCardCheck(...params: number[]): boolean {
        if (this.useCondition[0] !== 0 && this.checkUseCondition(params) === false) {
            return false;
        }
        return this.fee <= this.table.getUser(this.uid).fee;
    }

    /**检查所选单位是否符合条件 */
    private checkUseCondition(params: number[]): boolean {
        const useType = this.useCondition[GamePto.UseConditionIndexEnum.UseConditionTypeIndex];
        for (let index = 0; index < params.length; index += 2) {
            const entity = this.table.mapData.getCard(params[index], params[index + 1]);
            let isMatch = false;
            switch (useType) {
                //友方单位
                case GamePto.UseConditionEnum.FriendlyUnit:
                    isMatch = entity.uid === this.uid && entity.cardType === CardsPto.CardType.Unit;
                    break;
                //友方建筑
                case GamePto.UseConditionEnum.FriendlyBuilding:
                    isMatch = entity.uid === this.uid && entity.cardType === CardsPto.CardType.Building;
                    break;
                //敌方单位
                case GamePto.UseConditionEnum.EnemyUnit:
                    isMatch = entity.uid !== this.uid && entity.cardType === CardsPto.CardType.Unit;
                    break;
                //敌方建筑
                case GamePto.UseConditionEnum.EnemyBuilding:
                    isMatch = entity.uid !== this.uid && entity.cardType === CardsPto.CardType.Building;
                    break;
                //所有单位
                case GamePto.UseConditionEnum.AllUnit:
                    isMatch = entity.cardType === CardsPto.CardType.Unit;
                    break;
                //所有建筑
                case GamePto.UseConditionEnum.AllBuilding:
                    isMatch = entity.cardType === CardsPto.CardType.Building;
                    break;
                //友方地图实体
                case GamePto.UseConditionEnum.FriendEntity:
                    isMatch = entity.uid === this.uid;
                    break;
                //敌方地图实体
                case GamePto.UseConditionEnum.EnemyEntity:
                    isMatch = entity.uid !== this.uid;
                    break;
                //所有地图实体
                case GamePto.UseConditionEnum.AllEntity:
                    if (!entity) {
                        return false;
                    }
                    break;
                //空格子
                case GamePto.UseConditionEnum.EmptyBlock:
                    if (entity) {
                        return false;
                    }
                    break;
                default:
                    logger.error(`位置的条件定义:${useType}`);
                    return;
            }
            if (!isMatch) {
                return false;
            }
        }

        return true;
    }
}
