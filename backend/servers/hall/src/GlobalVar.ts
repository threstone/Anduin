import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { SocketServer } from './SocketServer';
import { RedisMgr } from '../../../common/redis/RedisMgr';
import { RedisType } from '../../../common/ConstDefine';
import { SequelizeRegister } from './SequelizeRegister';
import { DbHelper } from './DbHelper';
import * as allProto from '../../../common/CommonProto';
import * as path from 'path';
import * as serviceConfig from '../../../common/config/service.json';
import { ConfigMgr } from '../../../common/config/ConfigMgr';

const logger = getLogger(startupParam?.nodeId);
export class GlobalVar {

    public static socketServer: SocketServer;
    public static redisMgr: RedisMgr;
    private static sequelizeRegister: SequelizeRegister;
    public static dbHelper: DbHelper;
    public static configMgr: ConfigMgr;

    public static init() {
        // init logger configuration
        configure(loggerConfig);
        // init config manager
        this.configMgr = new ConfigMgr();

        //initMsgHandler
        this.initMsgHandler();
        //init socket server
        this.socketServer = new SocketServer(startupParam.port || 2001, logger);
        //init db register
        this.sequelizeRegister = new SequelizeRegister(serviceConfig[startupParam.env].mysql);
        //init redisMgr
        this.redisMgr = new RedisMgr(
            serviceConfig[startupParam.env].redis,
            [RedisType.userGate, RedisType.userInfo, RedisType.userRelation, RedisType.userGame]
        );

        this.dbHelper = new DbHelper();
    }

    /**
     * 初始化protobuf协议映射
     */
    static initMsgHandler() {
        const handlerPath = path.join(__dirname, './handler');
        ProtoBufEncoder.init(logger, allProto, handlerPath);
    }
}