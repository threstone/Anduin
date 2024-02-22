 
import {  getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { SocketServer } from './SocketServer';
import { ConnectorMgr } from '../../../common/rpc/ConntctorMgr';
import { ServersConfigMgr } from '../../../common/core/ServersConfigMgr';

const logger = getLogger(startupParam?.nodeId);

export class GlobalVar {

    public static socketServer: SocketServer;

    public static init() { 
        ProtoBufEncoder.init(logger);
        //init socket server
        this.socketServer = new SocketServer(startupParam.port || 1001, startupParam.maxUser, logger);

        logger.info('init connector');
    }
}