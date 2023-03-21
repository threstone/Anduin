/**一秒的毫秒数 */
const MS_PER_SECOND = 1000;
/**一分钟的毫秒数 */
const MS_PER_MINUTE = 60 * 1000;
/**一小时的毫秒数 */
const MS_PER_HOUR = 60 * 60 * 1000;
class Utils {
    /**
     * 用于获得枚举类中的最大value
     */
    static getEnumMaxValues(enumObj: any) {
        let maxNum = 0;
        const keys = Object.keys(enumObj);
        for (const key of keys) {
            maxNum = Math.max(enumObj[key], maxNum);
        }
        return maxNum;
    }

    /**通过颜色获取颜色矩阵 */
    static getFilterByColor(color: number) {
        const colorResult = { r: -1, g: -1, b: -1 };
        colorResult.b = color % 256;
        colorResult.g = Math.floor((color / 256)) % 256;
        colorResult.r = Math.floor((color / 256)) / 256;

        const colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0,
        ];
        colorMatrix[0] = colorResult.r / 255;
        colorMatrix[6] = colorResult.g / 255;
        colorMatrix[12] = colorResult.b / 255;
        return [new egret.ColorMatrixFilter(colorMatrix)]
    }

    /**
     * 格式1  00:00:00
     * @param  {number} sec 毫秒数
     * @returns string
     */
    public static formatTime(ms: number) {
        ms = Math.max(ms, 0);
        let n = 0;
        let result = "##:##:##";
        n = Math.floor(ms / MS_PER_HOUR);
        result = result.replace("##", this.formatTimeNum(n));
        if (n)
            ms -= n * MS_PER_HOUR;
        n = Math.floor(ms / MS_PER_MINUTE);
        result = result.replace("##", this.formatTimeNum(n));
        if (n)
            ms -= n * MS_PER_MINUTE;
        n = Math.floor(ms / 1000);
        result = result.replace("##", this.formatTimeNum(n));
        return result;
    }

    /**
    * 格式化时间数为两位数
    * @param  {number} t 时间数
    * @returns String
    */
    public static formatTimeNum(t: number) {
        return t >= 10 ? t.toString() : "0" + t;
    }

    /**
     * 当值被改变时变色
     * @param textField 
     * @param baseValue 
     */
    public static defineTextFieldSet(textField: fairygui.GTextField, baseValue: number, moreColor = 0x00FF00, lessColor = 0xFF0000) {
        Object.defineProperty(textField, 'text', {
            set: function (value) {
                this._text = value;
                textField.color = 0xFFFFFF;
                const intValue = parseInt(value);
                if (!Number.isNaN(intValue)) {
                    if (intValue > baseValue) {
                        textField.color = moreColor;
                    } else if (intValue < baseValue) {
                        textField.color = lessColor;
                    }
                }
                if (this._text == null)
                    this._text = "";
                this.updateGear(6);
                if (this.parent && this.parent._underConstruct)
                    this.renderNow();
                else
                    this.render();
            },
        });
    }

}