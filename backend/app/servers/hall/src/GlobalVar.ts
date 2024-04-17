
import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { RedisMgr } from '../../../common/redis/RedisMgr';
import { RedisType } from '../../../common/ConstDefine';
import { SequelizeRegister } from './SequelizeRegister';
import { DbHelper } from './DbHelper';
import * as allProto from '../../../common/CommonProto';
import * as path from 'path';
import { ConfigMgr } from '../../../common/config/ConfigMgr';

export class GlobalVar {

    public static redisMgr: RedisMgr;
    private static sequelizeRegister: SequelizeRegister;
    public static dbHelper: DbHelper;
    public static configMgr: ConfigMgr;

    public static init() {
        // init config manager
        this.configMgr = new ConfigMgr();

        //initMsgHandler
        this.initMsgHandler();
        //init db register
        this.sequelizeRegister = new SequelizeRegister(serviceConfig.mysql);
        //init redisMgr
        this.redisMgr = new RedisMgr(
            serviceConfig.redis,
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