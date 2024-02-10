import * as loggerConfig from '../../config/log4js.json';
import { configure } from 'log4js';
configure(loggerConfig);
import { ServerInit } from "../../../../common/core/ServerInit";
ServerInit.init();
import { GlobalVar } from '../GlobalVar';
GlobalVar.init();