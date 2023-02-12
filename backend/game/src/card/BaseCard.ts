import { CardInterface } from "../../../common/I";

export abstract class BaseCard extends CardInterface {
    uid: number;

    public static create() {
        return new (this as any);
    }

    abstract onUse();
}
