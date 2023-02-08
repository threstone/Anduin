import { ILauncherOption } from "./I";

export class LauncherOption implements ILauncherOption {
    
    private _socketListenPort: number;
    get socketListenPort() { return this._socketListenPort; }
    set socketListenPort(value: number) { this._socketListenPort = parseInt(value as any); }

    private _maxUser: number;
    get maxUser() { return this._maxUser; }
    set maxUser(value: number) { this._maxUser = parseInt(value as any); }

    nodeId: string;

    constructor() {
        const args = process.argv.splice(2);
        for (let index = 0; index < args.length; index++) {
            const arg = args[index];
            const kvInfo = arg.split('=');
            const key: string = kvInfo[0];
            let value: string | number = kvInfo[1];
            this[key] = value;
        }
    }
}