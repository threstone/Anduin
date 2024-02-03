import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { SocketServer } from './core/SocketServer';
import { RedisMgr } from '../../../common/redis/RedisMgr';
import { RedisType } from '../../../common/ConstDefine';
import * as allProto from '../../../common/CommonProto';
import * as path from 'path';
import * as redisConfig from '../../../common/config/redis.json';
import { TableMgr } from './core/TableMgr';
import { UserMgr } from './core/UserMgr';
import { ConfigMgr } from '../../../common/config/ConfigMgr';
import { CardMgr } from './core/CardMgr';
import { BuffMgr } from './core/BuffMgr';

const logger = getLogger(startupParam?.nodeId);
export class GlobalVar {

    public static socketServer: SocketServer;
    public static redisMgr: RedisMgr;
    public static tableMgr: TableMgr;
    public static userMgr: UserMgr;
    public static configMgr: ConfigMgr;
    public static cardMgr: CardMgr;
    public static buffMgr: BuffMgr;

    public static init() {
        // init logger configuration
        configure(loggerConfig);
        // init config manager
        this.configMgr = new ConfigMgr();

        //initMsgHandler
        this.initMsgHandler();

        //init redisMgr
        this.redisMgr = new RedisMgr(redisConfig, [RedisType.userGate, RedisType.userInfo, RedisType.userRelation, RedisType.userGame]);

        this.userMgr = new UserMgr();
        this.cardMgr = new CardMgr();
        this.buffMgr = new BuffMgr();

        this.tableMgr = new TableMgr();
        this.tableMgr.startLogic();

        //init socket server
        this.socketServer = new SocketServer(startupParam.port || 3001, logger);
    }

    /**
     * 初始化protobuf协议映射
     */
    static initMsgHandler() {
        const handlerPath = path.join(__dirname, './handler');
        ProtoBufEncoder.init(logger, allProto, handlerPath);
    }
}