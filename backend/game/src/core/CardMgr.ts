import { GlobalVar } from "../GlobalVar";
import * as path from 'path';
import { CommonUtils } from "../../../common/CommonUtils";
import { BaseCard } from "../card/BaseCard";
import { getLogger } from "log4js";

const logger = getLogger();
export class CardMgr {

    private _cardClassMap: Map<number, typeof BaseCard>;

    constructor() {
        this._cardClassMap = new Map<number, typeof BaseCard>();
        this.init();
    }

    private init() {
        const makeTime = Date.now();
        logger.info(`开始卡片初始化`);
        const handlerPath = path.join(__dirname, '../card/');
        const files = CommonUtils.getAllFiles(handlerPath);
        for (let index = 0; index < files.length; index++) {
            const filePath = files[index];
            if (filePath.endsWith('.js.map')) {
                continue;
            }
            if (filePath.indexOf('BaseCard') !== -1) {
                continue;
            }
            let cardClass = require(filePath)
            const className = Object.keys(cardClass)[0];
            const cardId = parseInt(className.substring(4));
            // const cardConfig = GlobalVar.configMgr.getCardConfigById(cardId)
            // const protoType = cardClass[className].prototype;
            // for (const key in cardConfig) {
            //     protoType[key] = cardConfig[key];
            // }
            this._cardClassMap.set(cardId, cardClass[className])

        }
        logger.info(`结束卡片初始化,耗时:${Date.now() - makeTime}ms`);
    }

    public getCardInstance(cardId: number): BaseCard {
        return this._cardClassMap.get(0/**TODO cardId */)?.create(0/**TODO cardId */);
    }
}