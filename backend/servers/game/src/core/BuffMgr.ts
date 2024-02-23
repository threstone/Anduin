import { BuildingCard } from "../card/BuildingCard";
import { BuffData, GlobalBuffData, PositionBuffData } from "../buff/BuffDataClass";
import { BuffEffectiveDefine } from "../game/GameDefine";
import { GlobalBuff } from "../buff/GlobalBuff";
import { GameBuff } from "../buff/GameBuff";
import { PositionBuff } from "../buff/PositionBuff";
import * as path from "path";
import { CommonUtils } from "../../../../common/CommonUtils";
import { BaseCard } from "../card/BaseCard";

export class BuffMgr {

    private _buffMap: Map<number, GameBuff>;

    constructor() {
        this._buffMap = new Map<number, GameBuff>();
        this.init();
    }

    private init() {
        const makeTime = Date.now();
        logger.info(`开始buff初始化`);
        const handlerPath = path.join(__dirname, '../buff/impl/');
        const files = CommonUtils.getAllFiles(handlerPath);
        for (let index = 0; index < files.length; index++) {
            const filePath = files[index];
            if (filePath.endsWith('.js.map')) {
                continue;
            }
            const buffClass = require(filePath)
            const className = Object.keys(buffClass)[0];
            buffClass[className].prototype.buffId = buffClass[className].buffId
            const buffObject: GameBuff = new buffClass[className]();
            this._buffMap.set(buffObject.buffId, buffObject);
        }
        logger.info(`结束buff初始化,耗时:${Date.now() - makeTime}ms`);
    }

    public getBuffByBuffId(buffId: number): GameBuff {
        return this._buffMap.get(buffId);
    }

    public addBuff(card: BuildingCard, buffId: number) {
        const buffClass = this.getBuffByBuffId(buffId);
        return buffClass.addBuff(card);
    }

    public deleteBuff(card: BuildingCard, buff: BuffData) {
        const buffClass = this.getBuffByBuffId(buff.buffId);
        return buffClass.deleteBuff(card, buff);
    }

    public addPositionBuff(card: BuildingCard, buff: PositionBuffData) {
        if (buff.effectiveType === BuffEffectiveDefine.All || (card.uid === buff.uid) === (buff.effectiveType === BuffEffectiveDefine.Friend)) {
            const buffClass = this.getBuffByBuffId(buff.buffId) as PositionBuff;
            buffClass.addPositionBuff(card, buff);
        }
    }

    public deletePositionBuff(card: BuildingCard, buff: PositionBuffData) {
        if (buff.effectiveType === BuffEffectiveDefine.All || (card.uid === buff.uid) === (buff.effectiveType === BuffEffectiveDefine.Friend)) {
            const buffClass = this.getBuffByBuffId(buff.buffId) as PositionBuff;
            buffClass.deletePositionBuff(card, buff);
        }
    }

    public addGlobalBuff(card: BaseCard, buff: GlobalBuffData) {
        if (buff.effectiveType === BuffEffectiveDefine.All || (card.uid === buff.uid) === (buff.effectiveType === BuffEffectiveDefine.Friend)) {
            const buffClass = this.getBuffByBuffId(buff.buffId) as GlobalBuff;
            buffClass.addGlobalBuff(card, buff);
        }
    }

    public deleteGlobalBuff(card: BaseCard, buff: GlobalBuffData) {
        if (buff.effectiveType === BuffEffectiveDefine.All || (card.uid === buff.uid) === (buff.effectiveType === BuffEffectiveDefine.Friend)) {
            const buffClass = this.getBuffByBuffId(buff.buffId) as GlobalBuff;
            buffClass.deleteGlobalBuff(card, buff);
        }
    }
}