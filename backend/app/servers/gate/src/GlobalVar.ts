 
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { SocketServer } from './SocketServer';

export class GlobalVar {

    public static socketServer: SocketServer;

    public static init() { 
        ProtoBufEncoder.init(logger);
        //init socket server
        this.socketServer = new SocketServer(startupParam.port || 1001, startupParam.maxUser);

        logger.info('init connector');
    }
}