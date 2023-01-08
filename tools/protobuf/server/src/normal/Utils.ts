import * as fs from 'fs';
export class Utils {
    //通过绝对路径获取包名
    static getPackageName(realPath: string) {
        //通过绝对路径获取包名
        let fileText = fs.readFileSync(realPath, 'utf-8');
        return '';
    }
    // static getMessageName(startIndex: number, lineArr: string[]) {
    //     let text = '';
    //     for (let index = startIndex; index < lineArr.length; index++) {
    //         const lineText = lineArr[index];
    //         let tempIndex = lineText.indexOf('{');
    //         if (tempIndex !== -1) {
    //             text += lineText.substring(0, tempIndex);
    //             break;
    //         } else {
    //             text += lineText;
    //         }
    //     }
    //     text = text.replace(/\r/g, '')
    //     text = text.replace(/\n/g, '')
    //     console.log();
    // }

    // static getAppendTextUtilStr(startLine: number, startIndex: number, lineArr: string[],) {

    // }



}