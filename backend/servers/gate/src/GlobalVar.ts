import * as loggerConfig from '../config/log4js.json';
import * as servers from '../../../common/config/servers.json';
import { configure, getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { SocketServer } from './SocketServer';
import { RelationConnector } from './connector/RelationConnector';
import { ConnectorMgr } from '../../../common/rpc/ConntctorMgr';
import { HallConnector } from './connector/HallConnector';
import { GameConnector } from './connector/GameConnector';

const logger = getLogger(startupParam.nodeId);

export class GlobalVar {

    public static socketServer: SocketServer;

    public static hallConnectorMgr: ConnectorMgr<HallConnector>;
    public static gameConnectorMgr: ConnectorMgr<GameConnector>;
    public static relationConnectorMgr: ConnectorMgr<RelationConnector>;

    public static init() {
        // init logger configuration
        configure(loggerConfig);
        ProtoBufEncoder.init(logger);
        //init socket server
        this.socketServer = new SocketServer(startupParam.port || 1001, startupParam.maxUser, logger);

        logger.info('init connector');
        this.initConnector();
    }

    private static initConnector() {
        const serversConfig = servers[startupParam.env];
        if (!serversConfig) {
            return;
        }

        this.hallConnectorMgr = new ConnectorMgr(logger, startupParam.nodeId, serversConfig.hall, HallConnector);
        this.gameConnectorMgr = new ConnectorMgr(logger, startupParam.nodeId, serversConfig.game, GameConnector);
        this.relationConnectorMgr = new ConnectorMgr(logger, startupParam.nodeId, serversConfig.relation, RelationConnector);
    }
}