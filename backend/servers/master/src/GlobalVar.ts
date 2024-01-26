import * as loggerConfig from '../config/log4js.json';
import { LauncherOption } from '../../../common/LauncherOption';
import { configure, getLogger } from 'log4js';
import { NodeMgr } from './NodeMgr';
const logger = getLogger('master');
export class GlobalVar {

    public static startupParam: LauncherOption;
    public static nodeMgr: NodeMgr;

    static init() {
        this.startupParam = new LauncherOption();
        // init logger configuration
        configure(loggerConfig);
        logger.info('init ...');
        this.nodeMgr = new NodeMgr();
        this.nodeMgr.startServers(this.startupParam);
    }
}

