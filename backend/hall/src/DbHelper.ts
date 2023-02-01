import { RedisType } from '../../common/ConstDefine';
import { UserModel } from '../../common/sequelize/model/UserModel';
import { GlobalVar } from './GlobalVar';

export class DbHelper {
    /**通过key获取用户信息 */
    async getUserInfoByKey(uid: number, key: string): Promise<string> {
        const info = await GlobalVar.redisMgr.getClient(RedisType.userInfo).hget(uid, `${key}`);
        //如果没有找到信息,将mysql中的信息同步到redis
        if (info == null) {
            const userInfo = await UserModel.findOne({ where: { uid } });
            GlobalVar.redisMgr.getClient(RedisType.userInfo).hmset(`${userInfo.uid}`, (userInfo as any).dataValues, -1);
            return userInfo[key];
        }
        return info;
    }

    /**通过keys获取用户信息对象 */
    async getUserInfoByKeys(uid: number, ...keys: string[]): Promise<UserModel> {
        const info = await GlobalVar.redisMgr.getClient(RedisType.userInfo).hmget(uid, keys);
        if (info == null) {
            const userInfo = await UserModel.findOne({ where: { uid } });
            GlobalVar.redisMgr.getClient(RedisType.userInfo).hmset(`${userInfo.uid}`, (userInfo as any).dataValues, -1);
            return userInfo;
        }
        const res = new UserModel();
        res.uid = uid;
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            res[key] = info[index];
        }
        return res;
    }

    /**
     * 同步最新的用户数据到redis
     * @param uid 用户id
     * @param keys 如果keys为空,则同步所有数据
     */
    async syncMysqlToRedis(uid: number, ...keys: string[]) {
        let userInfo: UserModel;
        if (keys.length === 0) {
            userInfo = await UserModel.findOne({ where: { uid } });
        } else {
            userInfo = await UserModel.findOne({ attributes: keys, where: { uid } });
        }
        GlobalVar.redisMgr.getClient(RedisType.userInfo).hmset(`${uid}`, (userInfo as any).dataValues, -1);
    }

    /**同步对应数据到redis */
    syncUserInfoToMysql(uid: number, user: UserModel) {
        return GlobalVar.redisMgr.getClient(RedisType.userInfo).hmset(uid, (user as any).dataValues);
    }
}