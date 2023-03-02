import { BuffData } from "../buff/BuffData";
import { BuildingCard } from "../../card/BuildingCard";
import { UnitCard } from "../../card/UnitCard";

export class MapBlock {
    private _card: (UnitCard | BuildingCard);
    get card(){
        return this._card;
    }
    positionBuff: BuffData[];

    constructor() {
        this.positionBuff = [];
    }

    setCard(card: UnitCard | BuildingCard) {
        this._card = card;
        //TODO 增加位置buff
    }

    removeCard() {
        //TODO 移除位置buff
        this._card = null;
    }
}