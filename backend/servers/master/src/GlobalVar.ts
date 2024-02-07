import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { NodeMgr } from './NodeMgr';
import { CommonServer } from './CommonServer';
const logger = getLogger(startupParam?.nodeId);
export class GlobalVar {

    public static nodeMgr: NodeMgr;
    public static commonServer: CommonServer;

    static init() {
        // init logger configuration
        configure(loggerConfig);
        logger.info('init ...');

        // 命令模块
        this.commonServer = new CommonServer();

        // 子进程模块
        this.nodeMgr = new NodeMgr();
        this.nodeMgr.startServers();
    }
}

