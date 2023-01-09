import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'add_friend_record',
    createdAt: false,
    updatedAt: false,
})
export class AddFriendRecord extends Model {
    @Column({ type: DataType.INTEGER, field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.INTEGER, field: 'uid', allowNull: false })
    uid: number

    @Column({ type: DataType.INTEGER, comment: '好友id', field: 'friend_uid', allowNull: false })
    friendUId: number
}