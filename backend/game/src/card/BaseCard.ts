import { CardsPto } from "../../../common/CommonProto";
import { CardInterface } from "../../../common/I";
import { GameTable } from "../game/GameTable";
import { GlobalVar } from "../GlobalVar";

export abstract class BaseCard implements CardInterface {

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
    attr: any;
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

    public abstract onUse();
}
