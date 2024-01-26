import { CardsPto } from "./CommonProto";
export class CardInterface {
    cardId: number;

    powerId: CardsPto.PowerType;

    /**卡牌类型(0英雄、1单位、2法术、3建筑、4事件) */
    cardType: CardsPto.CardType;


    /**
     * unitCard  攻击类型(0近战,1远程)
     * eventCard 事件类型(0公共,1秘密)
     * buildCard 建筑类型(0出兵建筑,1待定)
     */
    detailType: CardsPto.AtkType | CardsPto.EventType | CardsPto.BuilingType;

    /**攻击力 */
    attack: number;

    /**生命值 */
    health: number;

    /**费用 */
    fee: number;

    /**品质 */
    quality: CardsPto.QualityType;

    buffs: number[];

    /**是否衍生 */
    isDerivation: number;

    /**
     * 使用条件
     * 下标0数据表示:{0:无条件,1:友方单位,2:友方建筑,3:敌方单位,4:敌方建筑,5:所有单位,6:所有建筑,7:友方地图实体,8:敌方地图实体,9:所有地图实体,10:空格子}
     * 下标1数据表示作用者数量,有的卡可能要选择多个目标,如果是负数则说明可以选择同一单位,如果是正数则不允许选择重复的单位
     */
    useCondition: number[];

    /**
     * 移动力(负值代表飞行)
     */
    movement?: number;
}