import { BuildingCard } from "../card/BuildingCard";
import { BuffData } from "../buff/BuffData";
import { BuffTypeDefine } from "../game/GameDefine";
import { JuDun } from "../buff/JuDun";

export class BuffMgr {
    public addBuff(card: BuildingCard, buffType: BuffTypeDefine) {
        const buffClass = this.getBuffByType(buffType);
        buffClass.addBuff(card);
    }

    public deleteBuff(card: BuildingCard, buff: BuffData) {
        const buffClass = this.getBuffByType(buff.buffType);
        buffClass.deleteBuff(card, buff);
    }

    public addPositionBuff(card: BuildingCard, buff: BuffData) {
        const buffClass = this.getBuffByType(buff.buffType);
        buffClass.addPositionBuff(card, buff);
    }

    public deletePositionBuff(card: BuildingCard, buff: BuffData) {
        const buffClass = this.getBuffByType(buff.buffType);
        buffClass.deletePositionBuff(card, buff);
    }

    public getBuffByType(buffType: BuffTypeDefine) {
        //TODO
        return new JuDun
    }
}