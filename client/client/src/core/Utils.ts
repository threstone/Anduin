class Utils {
    static getEnumMaxValues(enumObj: any) {
        let maxNum = 0;
        const keys = Object.keys(enumObj);
        for (const key of keys) {
            maxNum = Math.max(enumObj[key], maxNum);
        }
        return maxNum;
    }
}