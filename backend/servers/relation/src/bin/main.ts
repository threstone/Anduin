import * as loggerConfig from '../../config/log4js.json';
import { ServerInit } from "../../../../common/core/ServerInit";
ServerInit.init();
ServerInit.initLogger(loggerConfig)
import { GlobalVar } from '../GlobalVar';
GlobalVar.init();