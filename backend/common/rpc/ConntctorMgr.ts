import { ILog } from '../I';
import { RPCClient } from './RPCClient';

export class ConnectorMgr<T extends RPCClient>{

    private _connectorMap: Map<number, T> = new Map<number, T>()
    protected _logger: ILog;

    constructor(logger: ILog, nodeId: string, configs: { ip: string, port: number, nodeId: string }[], ConnectorClass: any) {
        this._logger = logger;
        for (let index = 0; index < configs.length; index++) {
            const config = configs[index];
            let gameConnServer = new ConnectorClass(config.ip, config.port, config.nodeId, nodeId, logger);
            gameConnServer.init();
            this._connectorMap.set(index, gameConnServer);
        }
    }

    //随机获得一个存活的login服务器
    getRandLifeLogin(): T {
        let lifes = [];
        this._connectorMap.forEach((connector: T) => {
            if (!connector.isClose) {
                lifes.push(connector);
            } else {
                this._logger.error(`${connector.name}没有存活`, connector.host, connector.port);
            }
        });
        if (lifes.length <= 0) {
            this._logger.error('没有存活的Connctor');
            return;
        }
        let rand = Math.floor(Math.random() * lifes.length);
        return lifes[rand];
    }

}