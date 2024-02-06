const ImageEffect = 0;
const McEffect = 1;
// todo 考虑重构,重复代码过多
class EffectMgr extends BaseClass {

    /**
     * 加载特殊特效资源，根据特效是图片还是movieClip来加载对应的特效
     * @returns 返回的对象将以中心为锚点
     */
    public loadSpecialSource(data: EffectData): Promise<egret.Bitmap | egret.MovieClip> {
        if (data.effectType === ImageEffect) {
            return new Promise<egret.Bitmap>((resolve) => {
                RES.getResByUrl(`./resource/effect/specialEffect/${data.id}.png`, (data: egret.Texture) => {
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

    /**
     * 加载自身特效资源，根据特效是图片还是movieClip来加载对应的特效
     * @returns 返回的对象将以中心为锚点
     */
    public async loadSelfEffectById(data: EffectData): Promise<egret.Bitmap | egret.MovieClip> {
        if (data.effectType === ImageEffect) {
            return new Promise<egret.Bitmap>((resolve) => {
                RES.getResByUrl(`./resource/effect/selfEffect/${data.id}.png`, (data: egret.Texture) => {
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

    /**
     * 加载飞行特效资源，根据特效是图片还是movieClip来加载对应的特效
     * @returns 返回的对象将以中心为锚点
     */
    public async loadFlyEffectById(data: EffectData): Promise<egret.Bitmap | egret.MovieClip> {
        if (data.effectType === ImageEffect) {
            return new Promise<egret.Bitmap>((resolve) => {
                RES.getResByUrl(`./resource/effect/flyEffect/${data.id}.png`, (data: egret.Texture) => {
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