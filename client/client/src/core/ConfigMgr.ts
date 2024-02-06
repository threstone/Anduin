class ConfigMgr extends BaseClass {
    private _allConfig: any;
    private _cardConfigMap: Map<number, CardInterface>;
    constructor() {
        super();
        this._allConfig = RES.getRes('config_json');

        this._cardConfigMap = new Map<number, CardInterface>();
        let power = 0;
        while (this._allConfig[`cards${power}`]) {
            const cards = this._allConfig[`cards${power}`];
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

    /**powerId对应了势力下标 */
    get powerConfig(): Power[] {
        return this._allConfig['power'];
    }

    get allCardsMap(): Map<number, CardInterface> {
        return this._cardConfigMap;
    }

    get common(): CommonConfig {
        return this._allConfig['common'];
    }

    public getBuffDataByBuffId(id: number): BuffData {
        return this._allConfig['buff'][id];
    }

    public getFlyEffectDataById(id: number): EffectData {
        return this._allConfig['flyEffect'][id];
    }

    public getSelfEffectDataById(id: number): EffectData {
        return this._allConfig['selfEffect'][id];
    }

    public getSpecialEffectDataById(id: number): EffectData {
        return this._allConfig['specialEffect'][id];
    }
}