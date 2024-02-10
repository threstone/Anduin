import { getLogger } from 'log4js';
const logger = getLogger(startupParam?.nodeId);
export class GlobalVar {
    static init() {
        logger.info('init ...')
    }
}

