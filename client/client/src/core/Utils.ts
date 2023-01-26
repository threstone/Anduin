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

}