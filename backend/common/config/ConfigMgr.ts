import * as config from './config.json';
import { CardInterface } from '../I';
export class ConfigMgr {

    private _cardConfigMap: Map<number, CardInterface>;

    constructor() {
        this._cardConfigMap = new Map<number, CardInterface>();

        let power = 0;
        while (config[`cards${power}`]) {
            const cards = config[`cards${power}`];
            for (let index = 0; index < cards.length; index++) {
                const cardConfig = cards[index];
                cardConfig.powerId = power;
                if (this._cardConfigMap.has(cardConfig.cardId)) {
                    throw `重复的cardId配置:\nold:${JSON.stringify(this._cardConfigMap.get(cardConfig.cardId))}\nnew:${JSON.stringify(cardConfig)}`;
                }
                this._cardConfigMap.set(cardConfig.cardId, cardConfig);
            }
            power++;
        }
    }

    public getCardConfigById(cardId: number) {
        return this._cardConfigMap.get(cardId);
    }

    public getCards() {
        return this._cardConfigMap;
    }

    get common() {
        return config.common
    }
}