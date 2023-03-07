import { BuildingCard } from "../card/BuildingCard";
import { BuffData } from "../buff/BuffData";
import { BuffEffectiveDefine } from "../game/GameDefine";
import { GlobalBuff } from "../buff/GlobalBuff";
import { GameBuff } from "../buff/GameBuff";
import { PositionBuff } from "../buff/PositionBuff";
import { getLogger } from "log4js";
import path = require("path");
import { CommonUtils } from "../../../common/CommonUtils";

const logger = getLogger();
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
            const buffObject: GameBuff = new buffClass[className]();
            this._buffMap.set(buffObject.buffId, buffObject);
        }
        logger.info(`结束buff初始化,耗时:${Date.now() - makeTime}ms`);
    }

    public getBuffByType(buffId: number): GameBuff {
        return this._buffMap.get(buffId);
    }

    public addBuff(card: BuildingCard, buffId: number) {
        const buffClass = this.getBuffByType(buffId);
        buffClass.addBuff(card);
    }

    public deleteBuff(card: BuildingCard, buff: BuffData) {
        const buffClass = this.getBuffByType(buff.buffType);
        buffClass.deleteBuff(card, buff);
    }

    public addPositionBuff(card: BuildingCard, buff: BuffData) {
        const buffClass = this.getBuffByType(buff.buffType) as PositionBuff;
        if (buff.effectiveType === BuffEffectiveDefine.All || (card.uid === buff.uid) === (buff.effectiveType === BuffEffectiveDefine.Friend)) {
            buffClass.addPositionBuff(card, buff);
        }
    }

    public deletePositionBuff(card: BuildingCard, buff: BuffData) {
        const buffClass = this.getBuffByType(buff.buffType) as PositionBuff;
        if (buff.effectiveType === BuffEffectiveDefine.All || (card.uid === buff.uid) === (buff.effectiveType === BuffEffectiveDefine.Friend)) {
            buffClass.deletePositionBuff(card, buff);
        }
    }

    public addGlobalBuff(card: BuildingCard, buff: BuffData) {
        const buffClass = this.getBuffByType(buff.buffType) as GlobalBuff;
        if (buff.effectiveType === BuffEffectiveDefine.All || (card.uid === buff.uid) === (buff.effectiveType === BuffEffectiveDefine.Friend)) {
            buffClass.addGlobalBuff(card, buff);
        }
    }

    public deleteGlobalBuff(card: BuildingCard, buff: BuffData) {
        const buffClass = this.getBuffByType(buff.buffType) as GlobalBuff;
        if (buff.effectiveType === BuffEffectiveDefine.All || (card.uid === buff.uid) === (buff.effectiveType === BuffEffectiveDefine.Friend)) {
            buffClass.deleteGlobalBuff(card, buff);
        }
    }
}