import { getLogger } from "log4js";
import { GamePto } from "../../../../common/CommonProto";
import { CardsPto } from "../../../../common/CommonProto";
import { CardInterface } from "../../../../common/I";
import { CardStatus } from "../game/GameDefine";
import { GameTable } from "../game/GameTable";
import { GameUser } from "../game/GameUser";
import { GlobalVar } from "../GlobalVar";

const logger = getLogger(startupParam.nodeId);
export class BaseCard implements CardInterface {

    uid: number;
    /**游戏中给卡牌设置的唯一id */
    id: number;
    table: GameTable;

    cardStatus: CardStatus;

    cardId: number;
    powerId: CardsPto.PowerType;
    cardType: CardsPto.CardType;
    detailType: CardsPto.AtkType | CardsPto.EventType | CardsPto.BuilingType;
    attack: number;
    health: number;
    healthUpperLimit: number;
    fee: number;
    /**最终使用的费用,初始时和fee相同,但是可能收到一些减费效果的影响 */
    cardFee: number;
    quality: CardsPto.QualityType;
    buffs: number[];
    isDerivation: number;
    useCondition: number[];
    movement: number;

    public static create(cardId: number, uid: number, table: GameTable) {
        return new (this as any)(cardId, uid, table);
    }

    constructor(cardId: number, uid: number, table: GameTable) {
        const cardConfig = GlobalVar.configMgr.getCardConfigById(cardId)
        for (const key in cardConfig) {
            this[key] = cardConfig[key];
        }
        this.id = table.uniqueId;
        this.uid = uid;
        this.table = table;
        this.healthUpperLimit = this.health;
        this.cardFee = this.fee;
    }

    /**使用卡牌 */
    public onUse(user: GameUser, cardIndex: number, ...params: number[]) {
        if (this.cardType !== CardsPto.CardType.Hero) {
            //减去费用,删除手牌
            user.reduceFee(this.cardFee);
            user.deleteHandCard(cardIndex, 1);
            //通知用户费用信息
            this.table.noticeUserFeeInfo(user);
        }
    }

    /**检查卡牌是否可以使用 */
    public useCardCheck(...params: number[]): boolean {
        if (this.useCondition[0] !== GamePto.UseConditionEnum.NoCondition && this.checkUseCondition(params) === false) {
            return false;
        }
        return this.cardFee <= this.table.getUser(this.uid).fee;
    }

    /**检查所选单位是否符合条件 */
    private checkUseCondition(params: number[]): boolean {
        const dupParams = [...params];
        const pointSet = new Set<number>();
        for (let index = 0; index < this.useCondition.length; index += 2) {
            const conditionType = this.useCondition[index + GamePto.UseConditionIndexEnum.UseConditionTypeIndex];
            let conditionValue = this.useCondition[index + GamePto.UseConditionIndexEnum.UseConditionValueIndex];
            const allowRepeat = conditionValue < 0;
            conditionValue = Math.abs(conditionValue);
            for (let num = 0; num < conditionValue; num++) {
                const x = dupParams.shift();
                const y = dupParams.shift();
                if (!this.checkCondition(x, y, conditionType)) {
                    return false;
                }
                //去重逻辑
                const point = x + y * this.table.mapData.width;
                if (!allowRepeat && pointSet.has(point)) {
                    return false;
                }
                pointSet.add(point);
            }
        }

        return true;
    }

    private checkCondition(x: number, y: number, conditionType: number): boolean {
        if (x == undefined || y == undefined) {
            return false;
        }
        const gameMap = this.table.mapData;
        const entity = gameMap.getCard(x, y);
        switch (conditionType) {
            //无条件
            case GamePto.UseConditionEnum.NoCondition:
                return true;
            //建筑部署限制
            case GamePto.UseConditionEnum.BuidingCondition:
                const pointSet = gameMap.getAccessPointForUseBuilding(this.uid);
                return pointSet.has(x + y * gameMap.width);
            //单位部署限制
            case GamePto.UseConditionEnum.UnitCondition:
                const buildings = gameMap.getCampBuildings(this.uid);
                for (let index = 0; index < buildings.length; index++) {
                    const building = buildings[index];
                    //距离出兵建筑1格
                    if (Math.abs(building.blockX - x) + Math.abs(building.blockY - y) === 1) {
                        return true;
                    }
                }
                return false;
            //空格子
            case GamePto.UseConditionEnum.EmptyBlock:
                return entity == null;
            //友方单位
            case GamePto.UseConditionEnum.FriendlyUnit:
                return entity != null && entity.uid === this.uid && entity.cardType === CardsPto.CardType.Unit;
            //友方建筑
            case GamePto.UseConditionEnum.FriendlyBuilding:
                return entity != null && entity.uid === this.uid && entity.cardType === CardsPto.CardType.Building;
            //敌方单位
            case GamePto.UseConditionEnum.EnemyUnit:
                return entity != null && entity.uid !== this.uid && entity.cardType === CardsPto.CardType.Unit;
            //敌方建筑
            case GamePto.UseConditionEnum.EnemyBuilding:
                return entity != null && entity.uid !== this.uid && entity.cardType === CardsPto.CardType.Building;
            //所有单位
            case GamePto.UseConditionEnum.AllUnit:
                return entity != null && entity.cardType === CardsPto.CardType.Unit;
            //所有建筑
            case GamePto.UseConditionEnum.AllBuilding:
                return entity != null && entity.cardType === CardsPto.CardType.Building;
            //友方地图实体
            case GamePto.UseConditionEnum.FriendEntity:
                return entity != null && entity.uid === this.uid;
            //敌方地图实体
            case GamePto.UseConditionEnum.EnemyEntity:
                return entity != null && entity.uid !== this.uid;
            //所有地图实体
            case GamePto.UseConditionEnum.AllEntity:
                return entity != null;
            default:
                logger.error(`BaseCard checkCondition : unkonw conditionType${conditionType}`);
                return false;
        }
    }

    /**通知双方卡牌使用 */
    public noticeUseActionRecord() {
        const notice = new GamePto.S_ACTION_RECORD();
        notice.source = this;
        this.table.broadcast(notice);
    }
}
