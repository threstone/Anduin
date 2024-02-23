import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { RedisMgr } from '../../../common/redis/RedisMgr';
import { RedisType } from '../../../common/ConstDefine';
import * as allProto from '../../../common/CommonProto';
import * as path from 'path';
import { TableMgr } from './core/TableMgr';
import { UserMgr } from './core/UserMgr';
import { ConfigMgr } from '../../../common/config/ConfigMgr';
import { CardMgr } from './core/CardMgr';
import { BuffMgr } from './core/BuffMgr';

export class GlobalVar {

    public static redisMgr: RedisMgr;
    public static tableMgr: TableMgr;
    public static userMgr: UserMgr;
    public static configMgr: ConfigMgr;
    public static cardMgr: CardMgr;
    public static buffMgr: BuffMgr;

    public static init() {
        // init config manager
        this.configMgr = new ConfigMgr();

        //initMsgHandler
        this.initMsgHandler();

        //init redisMgr
        this.redisMgr = new RedisMgr(
            serviceConfig.redis,
            [RedisType.userGate, RedisType.userInfo, RedisType.userRelation, RedisType.userGame]
        );

        this.userMgr = new UserMgr();
        this.cardMgr = new CardMgr();
        this.buffMgr = new BuffMgr();

        this.tableMgr = new TableMgr();
        this.tableMgr.startLogic();
    }

    /**
     * 初始化protobuf协议映射
     */
    static initMsgHandler() {
        const handlerPath = path.join(__dirname, './handler');
        ProtoBufEncoder.init(logger, allProto, handlerPath);
    }
}