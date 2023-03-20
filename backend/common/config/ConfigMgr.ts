import * as config from './config.json';
import { CardInterface } from '../I';
export class ConfigMgr {

    private _cardConfigArr: CardInterface[];

    constructor() {
        this._cardConfigArr = [];
        for (let index = 0; index < config.cards.length; index++) {
            const cardConfig = config.cards[index];
            if (this._cardConfigArr[cardConfig.cardId]) {
                throw `重复的cardId配置:\nold:${JSON.stringify(this._cardConfigArr[cardConfig.cardId])}\nnew:${JSON.stringify(cardConfig)}`
            }
            this._cardConfigArr[cardConfig.cardId] = cardConfig;
        }
    }

    public getCardConfigById(cardId: number) {
        return this._cardConfigArr[cardId];
    }

    public getCards() {
        return this._cardConfigArr;
    }

    get common() {
        return config.common
    }
}