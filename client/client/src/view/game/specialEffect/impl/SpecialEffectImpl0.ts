class SpecialEffectImpl0 extends BaseClass implements SpecialEffectImpl {
    async handleEffect(specialEffectId: number, dataArray: number[]) {
        const effectData = ConfigMgr.ins().getSpecialEffectDataById(specialEffectId);
        const effect = await EffectMgr.ins().loadSpecialSource(effectData);
        const container = MapView.ins().getView().displayListContainer
        container.addChild(effect);
        const blockX = dataArray[0];
        const blockY = dataArray[1];
        const point = MapView.ins().getMapPoint(blockX, blockY);
        effect.x = point.x;
        effect.y = point.y;
        effect.scaleX = 0.3;
        effect.scaleY = 0.3;
        return new Promise<void>((resolve) => {
            //如果是bitmap那么执行一个放大变小的效果
            if (effect instanceof egret.Bitmap) {
                egret.Tween.get(effect).to({ scaleX: 1, scaleY: 1 }, 400).call(() => {
                    container.removeChild(effect);
                    resolve();
                });
            } else {
                //movieClip的话直接执行就好
                effect.once(egret.Event.COMPLETE, () => {
                    container.removeChild(effect);
                    resolve();
                }, this)
                effect.play(1);
            }
        });
    }
}