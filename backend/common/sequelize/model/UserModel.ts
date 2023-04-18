import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';
import { CardsPto } from '../../CommonProto';

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

    @Column({ type: DataType.INTEGER, comment: '用于购买卡牌', field: 'gold', allowNull: false })
    gold: number

    @Column({
        type: DataType.TEXT, comment: '卡牌信息', field: 'cards_info',
        get() {
            return JSON.parse(this.getDataValue('cardsInfo'))
        },
        set(obj: any) {
            if (typeof (obj) === 'string') {
                this.setDataValue('cardsInfo', obj);
            } else {
                this.setDataValue('cardsInfo', JSON.stringify(obj));
            }
        }
        , defaultValue: '[{"id":1,"count":3}]'
    })
    cardsInfo: CardsPto.ICard[]

    @Column({
        type: DataType.TEXT, comment: '卡组信息', field: 'decks',
        get() {
            return JSON.parse(this.getDataValue('decks'))
        },
        set(obj: any) {
            if (typeof (obj) === 'string') {
                this.setDataValue('decks', obj);
            } else {
                this.setDataValue('decks', JSON.stringify(obj));
            }
        }
        , defaultValue: '[]'
    })
    decks: CardsPto.IDeck[]

    static async isExist(account: string): Promise<boolean> {
        const count = await UserModel.count({ where: { account } });
        return count === 1;
    }

    static async createUser(account: string, password: string, nick: string): Promise<boolean> {
        const data = new UserModel();
        data.account = account;
        data.password = password;
        data.nick = nick;
        data.gold = 9999999;
        const res = await data.save();
        return data == res;
    }
}