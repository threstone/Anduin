import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import { CommonUtils } from '../../common/CommonUtils';
import { ILauncherOption } from '../../common/I';
import { SocketServer } from './SocketServer';
import { HallConnectorMgr } from './connector/HallConnectorMgr';
import { RelationConnector } from './connector/RelationConnector';
import * as relationConn from '../../common/config/relation_node.json';

const logger = getLogger();

export class GlobalVar {

    public static startupParam: ILauncherOption;
    public static socketServer: SocketServer;
    public static hallConnectorMgr: HallConnectorMgr
    public static loginConnServer: RelationConnector

    public static init() {
        this.startupParam = CommonUtils.getStartupParam();
        // init logger configuration
        configure(loggerConfig);
        ProtoBufEncoder.init(logger);
        //init socket server
        this.socketServer = new SocketServer(this.startupParam.socketListenPort, this.startupParam.maxUser, logger);

        logger.info('init connector');
        this.initConnector();
    }

    private static initConnector() {
        //init hallConectorMgr
        this.hallConnectorMgr = new HallConnectorMgr(logger, this.startupParam.nodeId);
        this.loginConnServer = new RelationConnector(relationConn.ip, relationConn.port, relationConn.nodeId, this.startupParam.nodeId, logger);
        this.loginConnServer.init();
    }
}