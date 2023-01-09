import { BaseDao } from './BaseDao';
import { UserModel } from '../../../db_model/UserModel';
import { FriendModel } from '../../../db_model/FriendModel';
import { AddFriendRecord } from '../../../db_model/AddFriendRecord';
import { IMysqlOption } from '../../../common/I';
import { getLogger } from 'log4js';

const logger = getLogger();
export class UserDao extends BaseDao {
    constructor(config: IMysqlOption) {
        super({
            dialect: 'mysql',
            username: config.user,
            password: config.password,
            host: config.host,
            port: config.port,
            logQueryParameters: true,
            timezone: config.timezone,
            database: 'anduin',
            logging: false,
        });
        logger.info('user开启数据库连接');
        this.sequelize_.addModels([UserModel, FriendModel, AddFriendRecord]);
        this.sequelize_.sync();
    }

    async getUserInfo(account: string, password: string): Promise<UserModel> {
        return await UserModel.findOne({ where: { account: account, password: password } });
    }

    async isExist(account: string): Promise<boolean> {
        let res = await this.sequelize_.query({ query: 'select 1 from user where account = ?', values: [account] });
        return res[0].length == 1;
    }

    async createUser(account: string, password: string, nick: string): Promise<boolean> {
        let data = new UserModel();
        data.account = account;
        data.password = password;
        data.nick = nick;
        let res = await data.save();
        return data == res;
    }

}