class ConfigMgr extends BaseClass {
    private _allConfig: any;
    constructor() {
        super();
        this._allConfig = RES.getRes('config_json');
    }

    getPowerConfig() {
        return this._allConfig['power'];
    }
}