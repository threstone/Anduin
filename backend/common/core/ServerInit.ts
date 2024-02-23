import { launcherOption } from "../LauncherOption";
import { ServersConfigMgr } from "./ServersConfigMgr";
import * as serviceConfig from '../config/service.json';
import { RpcManager } from "./rpc/RpcManager";
import { EventEmitter } from 'events';
import { configure, getLogger } from 'log4js';
export class ServerInit {
    static init() {
        // 初始化全局事件对象
        global.eventEmitter = new EventEmitter();
        // 初始化启动参数
        global.startupParam = launcherOption;

        global.serviceConfig = serviceConfig[startupParam.env];

        // 初始化service config manager
        ServersConfigMgr.init();

        RpcManager.init();
    }

    static initLogger(loggerConfig: any) {
        configure(loggerConfig);
        global.logger = getLogger(startupParam?.nodeId);
    }
}