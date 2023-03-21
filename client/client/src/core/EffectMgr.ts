const ImageEffect = 0;
const McEffect = 1;
class EffectMgr extends BaseClass {

    /**
     * 加载特效，根据特效是图片还是movieClip来加载对应的特效
     * @returns 返回的对象将以中心为锚点
     */
    public async loadEffectById(data: EffectData): Promise<egret.Bitmap | egret.MovieClip> {
        if (data.effectType === ImageEffect) {
            return new Promise<egret.Bitmap>((resolve) => {
                RES.getResByUrl(`./resource/effect/${data.id}.png`, (data: egret.Texture) => {
                    const bitmap = new egret.Bitmap(data);
                    bitmap.anchorOffsetX = bitmap.width / 2;
                    bitmap.anchorOffsetY = bitmap.height / 2;
                    resolve(bitmap);
                });
            })
        } else if (data.effectType === McEffect) {
            //TODO
            return null;
        }
    }
}