import { CardInterface } from "../../../common/I";

export class BaseCard extends CardInterface {
    static create(){
        return new this;
    }
    // health: number;
    // attack: number;
    // fee: number;

    // cardInfo: CardInterface;

}
