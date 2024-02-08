class SpecialEffectMgr extends BaseClass {
    /** 执行特殊特效 */
    handleEffect(specialEffectId: number, dataArray: number[]) {
        const effectClass: typeof BaseSpecialEffect = window[`SpecialEffectImpl${specialEffectId}`];
        if (!effectClass) {
            console.error(`特殊特效${specialEffectId}未实现!`)
            return;
        }
        return effectClass.prototype.handleEffect(specialEffectId, dataArray);
    }
}