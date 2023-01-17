import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import { CommonUtils } from '../../common/CommonUtils';
import { ILauncherOption } from '../../common/I';
import { SocketServer } from './SocketServer';
import { RedisMgr } from '../../common/redis/RedisMgr';
import { RedisType } from '../../common/ConstDefine';
import { SequelizeRegister } from './SequelizeRegister';
import { DbHelper } from './DbHelper';
import * as allProto from './CommonProto';
import * as path from 'path';
import * as mysqlConfig from '../../common/config/mysql.json';
import * as redisConfig from '../../common/config/redis.json';

const logger = getLogger();
export class GlobalVar {

    public static startupParam: ILauncherOption;
    public static socketServer: SocketServer;
    public static redisMgr: RedisMgr;
    private static sequelizeRegister: SequelizeRegister;
    public static dbHelper: DbHelper;

    public static init() {
        this.startupParam = CommonUtils.getStartupParam();
        // init logger configuration
        configure(loggerConfig);
        //initMsgHandler
        this.initMsgHandler();
        //init socket server
        this.socketServer = new SocketServer(this.startupParam.socketListenPort, logger);
        //init db register
        this.sequelizeRegister = new SequelizeRegister(mysqlConfig);
        //init redisMgr
        this.redisMgr = new RedisMgr(redisConfig, [RedisType.userGate, RedisType.userInfo, RedisType.userRelation]);

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