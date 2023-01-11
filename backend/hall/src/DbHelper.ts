import { RedisType } from '../../common/ConstDefine';
import { UserModel } from '../../common/sequelize/model/UserModel';
import { GlobalVar } from './GlobalVar';

export class DbHelper {
    async getUserInfo(uid: number, key: string): Promise<string> {
        let info = await GlobalVar.redisMgr.getClient(RedisType.userInfo).hget(uid, `${key}`);
        //如果没有找到信息,将mysql中的信息同步到redis
        if (info == null) {
            const userInfo = await UserModel.getUserInfoByUid(uid);
            GlobalVar.redisMgr.getClient(RedisType.userInfo).setObjInHash(`${userInfo.uid}`, (userInfo as any).dataValues, -1);
            return userInfo[key];
        }
        return info;
    }
}