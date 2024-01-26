import * as path from 'path';
import { CommonUtils } from "../../../../common/CommonUtils";
import { BaseCard } from "../card/BaseCard";
import { getLogger } from "log4js";
import { GlobalVar } from '../GlobalVar';
import { CardsPto } from '../../../../common/CommonProto';
import { BuildingCard } from '../card/BuildingCard';
import { UnitCard } from '../card/UnitCard';
import { EventCard } from '../card/EventCard';
import { MagicCard } from '../card/MagicCard';
import { HeroCard } from '../card/HeroCard';
import { GameTable } from '../game/GameTable';

const logger = getLogger(startupParam.nodeId);
export class CardMgr {

    private _cardClassMap: Map<number, typeof BaseCard>;

    /**各职业基础兵营建筑的cardId */
    private _baseCampCards: number[];

    constructor() {
        this._cardClassMap = new Map<number, typeof BaseCard>();
        this.init();
    }

    private init() {
        const makeTime = Date.now();
        logger.info(`开始卡片初始化`);

        //初始化实现的卡牌
        const handlerPath = path.join(__dirname, '../card/impl/');
        const files = CommonUtils.getAllFiles(handlerPath);
        for (let index = 0; index < files.length; index++) {
            const filePath = files[index];
            if (filePath.endsWith('.js.map')) {
                continue;
            }
            const cardClass = require(filePath)
            const className = Object.keys(cardClass)[0];
            const cardId = parseInt(className.substring(4));
            this._cardClassMap.set(cardId, cardClass[className])
        }

        /**
         * 进行一些卡牌初始化
         * 创建未实现的卡牌,这些卡牌可能是不需要特殊实现的
         * 基础兵营建筑
         */
        const cardConfigs = GlobalVar.configMgr.getCards();
        this._baseCampCards = [];
        cardConfigs.forEach((cardConfig) => {
            // 设置基础兵营建筑
            if (cardConfig.cardType === CardsPto.CardType.Building && cardConfig.detailType === CardsPto.BuilingType.Base) {
                this._baseCampCards[cardConfig.powerId] = cardConfig.cardId
            }

            if (!this._cardClassMap.has(cardConfig.cardId)) {
                switch (cardConfig.cardType) {
                    case CardsPto.CardType.Building:
                        this._cardClassMap.set(cardConfig.cardId, class tempBuildingClass extends BuildingCard { })
                        break;
                    case CardsPto.CardType.Unit:
                        this._cardClassMap.set(cardConfig.cardId, class tempUnitClass extends UnitCard { })
                        break;
                    case CardsPto.CardType.Event:
                        this._cardClassMap.set(cardConfig.cardId, class tempEventClass extends EventCard { })
                        break;
                    case CardsPto.CardType.Magic:
                        this._cardClassMap.set(cardConfig.cardId, class tempMagicClass extends MagicCard { })
                        break;
                    case CardsPto.CardType.Hero:
                        this._cardClassMap.set(cardConfig.cardId, class tempHeroClass extends HeroCard { })
                        break;
                }
            }
        });
        logger.info(`结束卡片初始化,耗时:${Date.now() - makeTime}ms`);
    }

    public getCardInstance(cardId: number, uid: number, table: GameTable): BaseCard {
        return this._cardClassMap.get(cardId)?.create(cardId, uid, table);
    }

    /**获取基础兵营建筑的cardId */
    public getBaseCampCardId(powerId: CardsPto.PowerType) {
        return this._baseCampCards[powerId];
    }
}