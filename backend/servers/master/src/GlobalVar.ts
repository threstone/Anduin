import * as loggerConfig from '../config/log4js.json';
import { LauncherOption } from '../../../common/LauncherOption';
import { configure, getLogger } from 'log4js';
const logger = getLogger();
export class GlobalVar {
    public static startupParam: LauncherOption;
    static init() {
        this.startupParam = new LauncherOption();
        // init logger configuration
        configure(loggerConfig);

        logger.info('init ...')
    }
}

