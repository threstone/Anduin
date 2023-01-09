import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'friend',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'friend',
        using: 'BTREE',
        fields: ['friend_uid'],
    }],
})
export class FriendModel extends Model {
    @Column({ type: DataType.INTEGER, field: 'uid', primaryKey: true, autoIncrement: true })
    uid: number

    @Column({ type: DataType.INTEGER, comment: '好友id', field: 'friend_uid', allowNull: false })
    friendUId: number
}