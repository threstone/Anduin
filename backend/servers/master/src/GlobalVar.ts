import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { NodeMgr } from './NodeMgr';
const logger = getLogger(startupParam?.nodeId);
export class GlobalVar {

    public static nodeMgr: NodeMgr;

    static init() {
        // init logger configuration
        configure(loggerConfig);
        logger.info('init ...');
        this.nodeMgr = new NodeMgr();
        this.nodeMgr.startServers();
    }
}

