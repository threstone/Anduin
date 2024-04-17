import { ProtoBufEncoder } from '../../../common/ProtoBufEncoder';
import { RedisMgr } from '../../../common/redis/RedisMgr';
import { RedisType } from '../../../common/ConstDefine';
import * as allProto from '../../../common/CommonProto';
import * as path from 'path';
import { UserMgr } from './UserMgr';

export class GlobalVar {

    public static redisMgr: RedisMgr;
    public static userMgr: UserMgr

    public static init() {
        //initMsgHandler
        this.initMsgHandler();

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