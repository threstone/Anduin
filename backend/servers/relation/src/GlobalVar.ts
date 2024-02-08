import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { SocketServer } from './SocketServer';
import { RedisMgr } from '../../../common/redis/RedisMgr';
import { RedisType } from '../../../common/ConstDefine';
import * as allProto from '../../../common/CommonProto';
import * as path from 'path';
import { UserMgr } from './UserMgr';

const logger = getLogger(startupParam?.nodeId);
export class GlobalVar {

    public static socketServer: SocketServer;
    public static redisMgr: RedisMgr;
    public static userMgr: UserMgr

    public static init() {
        // init logger configuration
        configure(loggerConfig);
        //initMsgHandler
        this.initMsgHandler();
        //init socket server
        this.socketServer = new SocketServer(startupParam.port || 9001, logger);

        //init redisMgr
        this.redisMgr = new RedisMgr(
            serviceConfig.redis,
            [RedisType.userGate, RedisType.userRelation]
        );

        this.userMgr = new UserMgr();
    }

    /**
     * 初始化protobuf协议映射
     */
    static initMsgHandler() {
        const handlerPath = path.join(__dirname, './handler');
        ProtoBufEncoder.init(logger, allProto, handlerPath);
    }
}