import { CardInterface } from "../../../common/I";

export class BaseCard extends CardInterface {
    public static create() {
        return new this;
    }
}
