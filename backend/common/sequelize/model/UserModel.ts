import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'user',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'findByHash',
        using: 'HASH',
        fields: ['account'],
    }, {
        unique: true,
        fields: ['account'],
    }],
})
export class UserModel extends Model {
    @Column({ type: DataType.INTEGER, field: 'uid', primaryKey: true, autoIncrement: true })
    uid: number

    @Column({ type: DataType.STRING(32), comment: '账号', field: 'account', allowNull: false })
    account: string

    @Column({ type: DataType.STRING(32), comment: '昵称', field: 'nick', allowNull: false })
    nick: string

    @Column({ type: DataType.STRING(32), comment: '密码', field: 'password', allowNull: false })
    password: string

    @Column({ type: DataType.TINYINT, comment: '头像索引', field: 'head_index', defaultValue: -1 })
    headIndex: number

    static async getUserInfo(account: string, password: string): Promise<UserModel> {
        return await UserModel.findOne({ where: { account: account, password: password } });
    }

    static async getUserInfoByUid(uid: number): Promise<UserModel> {
        return await UserModel.findOne({ where: { uid } });
    }

    static async isExist(account: string): Promise<boolean> {
        const res = await UserModel.sequelize.query({ query: 'select 1 from user where account = ?', values: [account] });
        return res[0].length == 1;
    }

    static async createUser(account: string, password: string, nick: string): Promise<boolean> {
        const data = new UserModel();
        data.account = account;
        data.password = password;
        data.nick = nick;
        const res = await data.save();
        return data == res;
    }
}