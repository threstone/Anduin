import { GamePto } from "../../../../common/CommonProto";
import { BuffData } from "../../buff/BuffData";
import { BuildingCard } from "../../card/BuildingCard";
import { UnitCard } from "../../card/UnitCard";
import { GlobalVar } from "../../GlobalVar";

export class MapBlock {
    private _card: (UnitCard | BuildingCard);
    get card() {
        return this._card;
    }

    private _positionBuff: BuffData[];

    constructor() {
        this._positionBuff = [];
    }

    public setCard(card: UnitCard | BuildingCard) {
        this._card = card;
        //增加位置buff
        for (let index = 0; index < this._positionBuff.length; index++) {
            const buff = this._positionBuff[index];
            GlobalVar.buffMgr.addPositionBuff(this._card, buff);
        }
    }

    public removeCard() {
        //移除位置buff
        for (let index = 0; index < this._positionBuff.length; index++) {
            const buff = this._positionBuff[index];
            GlobalVar.buffMgr.deletePositionBuff(this._card, buff);
        }
        this._card = null;
    }

    /**向位置添加buff */
    public addBuff(buff: BuffData) {
        this._positionBuff.push(buff);
        if (this._card) {
            GlobalVar.buffMgr.addPositionBuff(this._card, buff);
        }
    }

    /**移除指定buff */
    public deleteBuff(buff: BuffData) {
        const index = this._positionBuff.indexOf(buff);
        if (index !== -1) {
            this._positionBuff.splice(index, 1);
            if (this._card) {
                GlobalVar.buffMgr.deletePositionBuff(this._card, buff);
            }
        }
    }

    /**移除指定buff */
    public deleteBuffById(id: number) {
        for (let index = 0; index < this._positionBuff.length; index++) {
            const buff = this._positionBuff[index];
            if (buff.id === id) {
                this._positionBuff.splice(index, 1);
                if (this._card) {
                    GlobalVar.buffMgr.deletePositionBuff(this._card, buff);
                }
                return;
            }
        }
    }
}