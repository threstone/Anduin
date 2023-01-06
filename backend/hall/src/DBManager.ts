import { getLogger } from 'log4js';
import { IMysqlOption } from '../../common/I';
import { UserDao } from './dao/UserDao';

export class DBManager {
    private _userDao: UserDao

    get userDao() {
        return this._userDao;
    }

    constructor(mysqlConfig: IMysqlOption) {
        this._userDao = new UserDao(mysqlConfig);
        // 每隔5分钟select 1保持连接活性
        setInterval(this.keepAlive.bind(this), 60 * 1000 * 5);
    }

    private keepAlive() {
        this._userDao.keepAlive();
    }

}