class SpecialEffectMgr extends BaseClass {

    private _classMap: Map<number, typeof BaseSpecialEffect>;

    constructor() {
        super();
        this.autoMapping();
    }

    /**
    * 自动映射
    */
    private autoMapping() {
        this._classMap = new Map();
        for (const key in window) {
            if (key.startsWith('SpecialEffectImpl')) {
                const effectClass: any = window[key];
                const id = parseInt(key.substring(17));
                if (this._classMap.has(id)) {
                    console.error(`特殊特效${id}已有实现记录!`)
                }
                this._classMap.set(id, effectClass);
            }
        }
    }

    /** 执行特殊特效 */
    handleEffect(specialEffectId: number, dataArray: number[]) {
        const effectClass = this._classMap.get(specialEffectId);
        if (!effectClass) {
            console.error(`特殊特效${specialEffectId}未实现!`)
            return;
        }
        return effectClass.prototype.handleEffect(specialEffectId, dataArray);
    }
}