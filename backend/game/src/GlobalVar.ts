import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import { SocketServer } from './SocketServer';
import { RedisMgr } from '../../common/redis/RedisMgr';
import { RedisType } from '../../common/ConstDefine';
import * as allProto from '../../common/CommonProto';
import * as path from 'path';
import * as redisConfig from '../../common/config/redis.json';
import { TableMgr } from './TableMgr';
import { UserMgr } from './UserMgr';
import { LauncherOption } from '../../common/LauncherOption';
import { ConfigMgr } from '../../common/config/ConfigMgr';

const logger = getLogger();
export class GlobalVar {

    public static startupParam: LauncherOption;
    public static socketServer: SocketServer;
    public static redisMgr: RedisMgr;
    public static tableMgr: TableMgr;
    public static userMgr: UserMgr;
    public static configMgr: ConfigMgr;

    public static init() {
        this.startupParam = new LauncherOption();
        // init logger configuration
        configure(loggerConfig);
        // init config manager
        this.configMgr = new ConfigMgr();

        //initMsgHandler
        this.initMsgHandler();
        //init socket server
        this.socketServer = new SocketServer(this.startupParam.socketListenPort, logger);

        //init redisMgr
        this.redisMgr = new RedisMgr(redisConfig, [RedisType.userGate, RedisType.userInfo, RedisType.userRelation, RedisType.userGame]);

        this.tableMgr = new TableMgr();
        this.tableMgr.startLogic();

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