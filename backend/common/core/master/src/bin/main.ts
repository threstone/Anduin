import * as loggerConfig from '../../config/log4js.json';
import { ServerInit } from "../../../server/ServerInit";
ServerInit.init();
ServerInit.initLogger(loggerConfig)
import { GlobalVar } from '../master';
GlobalVar.init();