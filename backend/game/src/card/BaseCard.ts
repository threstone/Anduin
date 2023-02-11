import { CardInterface } from "../../../common/I";

export class BaseCard extends CardInterface {
    uid: number;
    
    public static create() {
        return new this;
    }
}
