import { RedisClientSelf } from './redis';
import * as CommonLog from "../../framework/logger"
import * as I from "../../framework/i"
import { TimerObjMgr } from '../../framework/timer_obj_mgr';

const ilo: I.ILogOption = { logName: 'redis', logType: 'log', toConsole: true }
const loggerBase = new CommonLog.Logger(ilo)
export const logger = loggerBase.getCatLogger('')
loggerBase.setShowCallLine(false)

export class RedisManager {
    /**
     * redis_for_token_1
     */
    redis1: RedisClientSelf
    /**
     * redis_for_user_info_2
     */
    redis2: RedisClientSelf
    /**
     * redis_for_record_3
     */
    redis3: RedisClientSelf
    /**
     * redis_for_reconnect_4
     */
    redis4: RedisClientSelf
    /**
     * redis_for_login_5 
     */
    redis5: RedisClientSelf
    /**
     * redis_for_check_logic_money_6
     */
    redis6: RedisClientSelf
    /**
     * redis_for_allow_login
     */
    redis7: RedisClientSelf
    /**
    * redis_for_base_chip
    */
    redis8: RedisClientSelf
    /**
     * redis_for_lock_9
     */
    redis9: RedisClientSelf
    /**
     * redis_for_user_online_random
     */
    redis10: RedisClientSelf
    /**
     * redis_for_user_task
     */
    redis11: RedisClientSelf

    public async init(connectDbs: number[], config: any) {
        let timerObjMgr_ = new TimerObjMgr(loggerBase);
        timerObjMgr_.startLogic()
        RedisClientSelf.prototype.reg_timer = timerObjMgr_.reg_timer.bind(timerObjMgr_)
        RedisClientSelf.prototype.stop_timer = timerObjMgr_.stop_timer.bind(timerObjMgr_)
        let arr = []
        for (let i = 0; i < connectDbs.length; i++) {
            let db = connectDbs[i]
            config.db = db
            let redisObj = new RedisClientSelf(config)
            this["redis" + db] = redisObj
            let promise: Promise<void> = new Promise((resolve, reject) => {
                redisObj.onReady = () => {
                    resolve()
                }
            })
            arr.push(promise)
        }
        return Promise.all(arr)
    }
}
