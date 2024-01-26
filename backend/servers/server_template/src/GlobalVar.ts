import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
const logger = getLogger(startupParam.nodeId);
export class GlobalVar {
    static init() {
        // init logger configuration
        configure(loggerConfig);

        logger.info('init ...')
    }
}

