import { ILauncherOption } from "./I"
export class CommonUtils {
    public static getStartupParam(): ILauncherOption {
        const result: any = {};
        const args = process.argv.splice(2);
        for (let index = 0; index < args.length; index++) {
            const arg = args[index];
            const kvInfo = arg.split('=');
            const key: string = kvInfo[0];
            let value: string | number = kvInfo[1];
            if (value.startsWith('Num(') && value.endsWith(')')) {
                const temp = parseInt(value.substring(4, value.length - 1));
                if (!Number.isNaN(temp)) {
                    value = temp;
                }
            }
            result[key] = value;
        }
        return result;
    }
}