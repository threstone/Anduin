export class Utils {
    static getMessageName(startIndex: number, lineArr: string[]) {
        let text = '';
        for (let index = startIndex; index < lineArr.length; index++) {
            const lineText = lineArr[index];
            let tempIndex = lineText.indexOf('{');
            if (tempIndex !== -1) {
                text += lineText.substring(0, tempIndex);
                break;
            } else {
                text += lineText;
            }
        }
        text = text.replace(/\r/g, '')
        text = text.replace(/\n/g, '')
        console.log();
    }

    static getAppendTextUtilStr(startLine: number, startIndex: number, lineArr: string[],) {

    }
}