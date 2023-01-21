class ConfigMgr extends BaseClass {
    private _allConfig: any;
    constructor() {
        super();
        this._allConfig = RES.getRes('config_json');
    }

    get powerConfig(): Power[] {
        return this._allConfig['power'];
    }

    get allCardsInfo(): CardInterface[] {
        return this._allConfig['cards']
    }

    get common(): CommonConfig {
        return this._allConfig['common']
    }
}