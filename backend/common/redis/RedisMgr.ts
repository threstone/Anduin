import { RedisClientSelf } from './RedisClientSelf';
import { RedisType } from "../ConstDefine";

export class RedisMgr {
    private clientMap: Map<RedisType, RedisClientSelf>;

    constructor(conf: IRedisOption, dbs: RedisType[]) {
        this.clientMap = new Map<RedisType, RedisClientSelf>();
        for (let index = 0; index < dbs.length; index++) {
            const dbIndex = dbs[index];
            const redisClient = new RedisClientSelf(conf, dbIndex);
            this.clientMap.set(dbIndex, redisClient);
        }
    }

    getClient(db: RedisType) {
        return this.clientMap.get(db);
    }
}