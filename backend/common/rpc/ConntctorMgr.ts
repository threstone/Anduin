import { RPCClient } from './RPCClient';

export class ConnectorMgr<T extends RPCClient>{

    protected logger: ILog;
    private _connectorArr: T[];
    private _hashMap: Map<string, number>;
    private _curIndex = -1;

    constructor(logger: ILog, nodeId: string, configs: { ip: string, port: number, nodeId: string }[], ConnectorClass: any) {
        this.logger = logger;
        this._connectorArr = [];
        this._hashMap = new Map<string, number>();
        for (let index = 0; index < configs.length; index++) {
            const config = configs[index];
            let gameConnServer = new ConnectorClass(config.ip, config.port, config.nodeId, nodeId, logger);
            gameConnServer.init();
            this._connectorArr.push(gameConnServer);
            this._hashMap.set(config.nodeId, index);
        }
    }

    /**
     * 获得一个存活的connecotr服务器
     * 负载均衡
     */
    getAliveConnector(): T {
        let searchNum = 0;
        const len = this._connectorArr.length
        while (searchNum < len) {
            this._curIndex++;
            this._curIndex = this._curIndex % len;
            const connector = this._connectorArr[this._curIndex];
            if (!connector.isClose) {
                return connector;
            }
            searchNum++;
        }
        this.logger.error('未找到存货的connector');
    }

    /**获得指定的connecotr */
    getConnectorByName(name: string) {
        return this._connectorArr[this._hashMap.get(name)]
    }
}