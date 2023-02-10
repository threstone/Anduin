import * as fs from 'fs';
export class CommonUtils {
    static getAllFiles(dirPath: string) {
        const files = fs.readdirSync(dirPath);
        const result: string[] = [];
        for (let index = 0; index < files.length; index++) {
            const name = files[index];
            const stat = fs.statSync(dirPath + name);
            if (stat.isDirectory()) {
                result.push(...this.getAllFiles(dirPath + name + "\\"))
            } else {
                result.push(dirPath + name)
            }
        }
        return result;
    }

}