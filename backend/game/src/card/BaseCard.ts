import { CardsPto } from "../../../common/CommonProto";
import { CardInterface } from "../../../common/I";
import { GameTable } from "../game/GameTable";
import { GlobalVar } from "../GlobalVar";

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
    public onUse(...params: number[]) {
        //减去费用,删除手牌
        const user = this.table.getUser(this.uid);
        user.fee -= this.fee;
        const cardIndex = user.handCards.indexOf(this);
        user.handCards.splice(cardIndex, 1);
    }

    /**检查卡牌是否可以使用 */
    public useCardCheck(...params: number[]): boolean {
        return this.fee <= this.table.getUser(this.uid).fee;
    }
}
