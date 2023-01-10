import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'add_friend_record',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'UNIQUE',
        type: 'UNIQUE',
        fields: ['uid', 'friend_uid'],
    }]
})
export class AddFriendRecordModel extends Model {
    @Column({ type: DataType.INTEGER, field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.INTEGER, comment: '添加者', field: 'uid', allowNull: false })
    uid: number

    @Column({ type: DataType.INTEGER, comment: '被添加者id', field: 'friend_uid', allowNull: false })
    friendUId: number

    static async recordAddFreind(uid: number, addUid: number): Promise<boolean> {
        const data = new AddFriendRecordModel();
        data.uid = uid;
        data.friendUId = addUid;
        const res = await data.save();
        return data == res;
    }

    static getFriendAddInfo(uid: number): Promise<AddFriendRecordModel[]> {
        return AddFriendRecordModel.findAll({ where: { friendUId: uid } });
    }

    static deleteAddFriendReq(uid: number, friendUid: number) {
        AddFriendRecordModel.destroy({ where: { uid, friendUid } });
    }
}