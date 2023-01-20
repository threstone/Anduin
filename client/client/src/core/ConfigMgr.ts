class ConfigMgr extends BaseClass {
    private _allConfig: any;
    constructor() {
        super();
        this._allConfig = RES.getRes('config_json');
    }

    getPowerConfig(): Power[] {
        return this._allConfig['power'];
    }

    getAllCardsInfo(): CardInterface[] {
        return this._allConfig['cards']
    }

}