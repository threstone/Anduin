import { launcherOption } from "../LauncherOption";
import * as serviceConfig from '../config/service.json';

export class ServerInit {
    static init() {
        // 初始化启动参数
        global.startupParam = launcherOption;

        // 初始化service config
        global.serviceConfig = serviceConfig[launcherOption.env];
    }
}