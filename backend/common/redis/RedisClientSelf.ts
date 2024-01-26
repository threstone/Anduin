// import { getLogger } from 'log4js';
import * as Redis from 'redis';
import { getLogger } from 'log4js';
import { RedisType } from '../ConstDefine';
//默认redis请求超时时间，单位：毫秒
const DEFAULT_REDIS_TIMEOUT = 5 * 1000;
let logger = getLogger();
export class RedisClientSelf {
    private redis_client: Redis.RedisClient

    private subscribeFun: Map<string, Function>

    public onConect: Function
    public onReady: Function

    constructor(conf: IRedisOption, db: RedisType) {
        this.connectRedis(conf, db);
    }

    connectRedis(conf: IRedisOption, db: RedisType) {
        let redisConfig: any = {
            host: conf.host,
            port: conf.port,
            db: db,
            // password: conf.password,
            enable_offline_queue: (conf.enableOfflineQueue === true) ? true : false
        };
        if (conf.password && conf.password !== '') {
            redisConfig.password = conf.password;
        }
        this.redis_client = Redis.createClient(redisConfig);

        this.redis_client.on('error', (err: Error) => {
            logger.error(`redis${db} error: `, err);
        });

        this.redis_client.on('ready', (err: Error) => {
            if (this.onReady) {
                this.onReady();
            }
        });

        this.redis_client.on('connect', async () => {
            logger.info(`connect to redis${db} success!!`);
            if (this.onConect) {
                this.onConect();
            }
        });

        this.redis_client.on('close', () => {
            logger.info(`connection to redis${db} closed!`);
        });

        this.redis_client.on('end', () => {
            logger.info(`connection to redis${db} end!`);
        });

        this.redis_client.on('message', this.onSubscribeMessage.bind(this));
    }

    /**
     * 获取列表指定范围内的元素
     * @stop 如果stop index的值为-1那么将返回所有值
     */
    lRange(key: string | number, start: number, stop: number, time_out?: number): Promise<string[]> {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('lrange', [key, start, stop], time_out);
    }

    /**
     * 在列表尾部插入一个或多个元素
     */
    rPush(key: string | number, value: number[] | string[] | string | number, time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        const elements = [key];
        if (Array.isArray(value)) {
            elements.push(...value);
        } else {
            elements.push(value);
        }
        return this.sendCommand('rpush', elements, time_out);
    }

    /**
     * 获取list长度
     */
    lLen(key: string | number, time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('llen', [key], time_out);
    }

    /**
     * 向Set中添加一个或多个元素
     */
    sadd(key: string | number, value: string | number | string[] | number[], time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        const arr = [key];
        if (Array.isArray(value)) {
            arr.push(...value);
        } else {
            arr.push(value);
        }
        return this.sendCommand('sadd', arr, time_out);
    }

    /**
     * 获取Set中的所有元素
     */
    smembers(key: string | number, time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('smembers', [key], time_out);
    }

    /**
     * 判断元素是否在Set中
     */
    sismember(key: string | number, value: number | string, time_out?: number): Promise<boolean> {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return new Promise((resolve) => {
            this.sendCommand('sismember', [key, value], time_out).then((value) => {
                resolve(value === '1');
            });
        });
    }

    /**
     * 订阅消息
     */
    subscribe(channel: string, callBack: Function) {
        if (!this.subscribeFun) {
            this.subscribeFun = new Map<string, Function>();

        }
        this.subscribeFun.set(channel, callBack);
        this.redis_client.subscribe(channel);
    }

    /**
     * 取消订阅消息
     */
    unsubscribe(channel: string) {
        if (this.subscribeFun) {
            this.subscribeFun.delete(channel);
        }
        this.redis_client.unsubscribe(channel);
    }

    onSubscribeMessage(channel: string, message: string) {
        let fun = this.subscribeFun.get(channel);
        if (fun) {
            fun(message);
        }
    }

    //发布消息
    publish(channel: string, value: string, callBack?: Function) {
        this.redis_client.publish(channel, value, callBack);
    }

    incr(key: string | number, time_out?: number): Promise<number> {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('incr', [key], time_out);
    }

    /**
     * @param key 要上锁的key
     * @param expire 锁持续时间  单位秒
     */
    lock(key: string | number, expire: number, time_out?: number): Promise<boolean> {
        return new Promise((resolve) => {
            this.incr(key, time_out).then((incrNum) => {
                resolve(incrNum === 1);
            });
            this.setExpire(key, expire);
        });
    }

    /**解锁 */
    unlock(key: string | number) {
        this.delete(key);
    }

    /**
     * 设置Redis数据
     * @param key 
     * @param value 
     * @param sec  设置存在时间   如果sec为-1则有效时间为永久
     * @param time_out 请求超时时间
     */
    setData(key: string | number, value: any, sec: number, time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        if (typeof value == 'object') {
            value = JSON.stringify(value);
        }
        if (sec == -1) {
            this.sendCommand('set', [key, value], time_out);
        } else {
            this.sendCommand('setex', [key, sec, value], time_out);
        }
    }

    /**
     * 将对象以hash的方式储存到redis
     * @param sec  设置存在时间   
     * 如果sec为-1则如果是新key则永久,如果是已有的key则按原有的销毁时间
     */
    hmset(key: string | number, obj: {}, sec: number = -1, time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        let keys = Object.keys(obj);
        let data = [key];
        for (let index = 0; index < keys.length; index++) {
            let key = keys[index];
            let value = obj[key];
            data.push(key);
            data.push(value);
        }
        this.sendCommand('hmset', data, time_out);
        if (sec !== -1) {
            this.setExpire(key, sec);
        }
    }

    /**
     * 获取Redis数据
     * @param db 
     * @param key 
     * @param time_out 请求超时时间
     */
    getData(key: string | number, time_out?: number): Promise<any> {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('get', [key], time_out);
    }

    /**
     * 返回哈希表中，所有的字段和值 
     * @param key 
     * @param time_out 请求超时时间
     */
    hgetall(key: string | number, time_out?: number): Promise<any> {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('hgetall', [key], time_out);
    }

    /**
     * 返回哈希表中，一个或多个给定字段的值 
     * @param key 
     * @param field  一个或多个给定字段
     * @param time_out 请求超时时间
     */
    hmget(key: string | number, field: any[], time_out?: number): Promise<string[]> {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('hmget', [key, ...field], time_out);
    }

    /**
    * 返回哈希表中给定字段的值 
    * @param key 
    * @param field 给定字段
    * @param time_out 请求超时时间
    */
    hget(key: string | number, field: string, time_out?: number): Promise<any> {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('hget', [key, field], time_out);
    }

    /**
     * 为哈希表中的字段赋值
     * @param key 
     * @param field  给定字段
     * @param value 
     * @param time_out 请求超时时间
     */
    hset(key: string | number, field: string, value: any, time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        if (typeof value == 'object') {
            value = JSON.stringify(value);
        }
        return this.sendCommand('hset', [key, field, value], time_out);
    }

    /**
     * 删除哈希表中的指定字段
     * @param key 
     * @param field  指定字段
     * @param time_out 请求超时时间
     */
    hdel(key: string | number, field: string, time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('hdel', [key, field], time_out);
    }

    /**
     * 删除redis数据
     * @param key 
     * @param time_out 
     */
    delete(key: string | number, time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('del', [key], time_out);
    }

    /**
     * 设置key的有效时间
     * @param db 
     * @param key 
     * @param expireTime 锁持续时间  单位秒
     * @param time_out 请求超时时间
     */
    setExpire(key: string | number, expireTime: number, time_out?: number) {
        time_out = time_out > 0 ? time_out : DEFAULT_REDIS_TIMEOUT;
        return this.sendCommand('expire', [key, expireTime], time_out);
    }

    /**
     * 直接发送命令
     * @param command 
     * @param args 
     * @param timeOut 请求超时时间
     */
    async sendCommand(command: string | number, args?: Array<any>, timeOut?: number): Promise<any> {
        timeOut = timeOut > 0 ? timeOut : DEFAULT_REDIS_TIMEOUT;
        let self = this;
        return new Promise((resolve, reject) => {
            const timerId = setTimeout(reject, timeOut);

            self.redis_client.send_command(command, args, (err, res) => {
                clearTimeout(timerId);
                if (err) {
                    logger.error('redis send command failed! ', err);
                    reject(err);
                    return;
                }
                resolve(res);
            });
        }).catch(function (err) {
            logger.error('redis timeout!!');
        });
    }
}
