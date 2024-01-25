import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import { SocketServer } from './SocketServer';
import { RelationConnector } from './connector/RelationConnector';
import { ConnectorMgr } from '../../common/rpc/ConntctorMgr';
import { HallConnector } from './connector/HallConnector';
import { GameConnector } from './connector/GameConnector';
import * as servers from '../../common/config/servers.json';
import { LauncherOption } from '../../common/LauncherOption';

const logger = getLogger();

export class GlobalVar {

    public static startupParam: LauncherOption;
    public static socketServer: SocketServer;

    public static hallConnectorMgr: ConnectorMgr<HallConnector>;
    public static gameConnectorMgr: ConnectorMgr<GameConnector>;
    public static relationConnectorMgr: ConnectorMgr<RelationConnector>;

    public static init() {
        this.startupParam = new LauncherOption();
        // init logger configuration
        configure(loggerConfig);
        ProtoBufEncoder.init(logger);
        //init socket server
        this.socketServer = new SocketServer(this.startupParam.socketListenPort || 1001, this.startupParam.maxUser, logger);

        logger.info('init connector');
        this.initConnector();
    }

    private static initConnector() {
        const serversConfig = servers[this.startupParam.env];
        if (!serversConfig) {
            return;
        }

        this.hallConnectorMgr = new ConnectorMgr(logger, this.startupParam.nodeId, serversConfig.hall, HallConnector);
        this.gameConnectorMgr = new ConnectorMgr(logger, this.startupParam.nodeId, serversConfig.game, GameConnector);
        this.relationConnectorMgr = new ConnectorMgr(logger, this.startupParam.nodeId, serversConfig.relation, RelationConnector);
    }
}