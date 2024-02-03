import { BaseSequelize } from '../../../common/sequelize/BaseSequelize';
import { UserModel } from '../../../common/sequelize/model/UserModel';
import { FriendModel } from '../../../common/sequelize/model/FriendModel';
import { AddFriendRecordModel } from '../../../common/sequelize/model/AddFriendRecord';
import { getLogger } from 'log4js';

const logger = getLogger(startupParam?.nodeId);
export class SequelizeRegister extends BaseSequelize {
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
        logger.info('开启数据库连接...');
        //register all models
        this.addModels([UserModel, FriendModel, AddFriendRecordModel]);
        this.sync({ alter: true });
    }
}