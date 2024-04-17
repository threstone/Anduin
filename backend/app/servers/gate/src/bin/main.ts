import { GlobalVar } from '../GlobalVar';
import * as service from '../../../../../config/service.json';
global.serviceConfig = service[env];
GlobalVar.init();