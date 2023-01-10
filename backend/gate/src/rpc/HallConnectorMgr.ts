import * as loginsConn from '../../../common/config/hall_node.json';
import { ILog } from '../../../common/I';
import { HallConnector } from './HallConnector';

export class HallConnectorMgr {

    private logins_: Map<number, HallConnector> = new Map<number, HallConnector>()

    private logger: ILog;

    constructor(logger: ILog, nodeId: string) {
        this.logger = logger;
        for (let index = 0; index < loginsConn.length; index++) {
            const login = loginsConn[index];
            let loginConnServer = new HallConnector(login.ip, login.port, login.nodeId, nodeId, logger);
            loginConnServer.init();
            this.logins_.set(index, loginConnServer);
        }
    }

    //随机获得一个存活的login服务器
    getRandLifeLogin(): HallConnector {
        let lifes = [];
        this.logins_.forEach((login: HallConnector, index: number) => {
            if (!login.isClose) {
                lifes.push(login);
            } else {
                this.logger.error('有Hall没有存活', login.host, login.port);
            }
        });
        if (lifes.length <= 0) {
            this.logger.error('没有存活的Hall');
            return;
        }
        let rand = Math.floor(Math.random() * lifes.length);
        return lifes[rand];
    }
}