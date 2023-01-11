import {
    Table, Column, Model, DataType, ForeignKey,
} from 'sequelize-typescript';
import { ModelAttributes, InitOptions } from 'sequelize/types';
import { UserModel } from './UserModel';

@Table({
    tableName: 'add_friend_record',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'UNIQUE',
        type: 'UNIQUE',
        fields: ['target_uid', 'from_uid'],
    }]
})
export class AddFriendRecordModel extends Model {
    @Column({ type: DataType.INTEGER, field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.INTEGER, comment: '添加者', field: 'from_uid', allowNull: false })
    fromUid: number

    @Column({ type: DataType.INTEGER, comment: '被添加者id', field: 'target_uid', allowNull: false })
    targetUid: number

    static init(attributes: ModelAttributes, options: InitOptions) {
        super.init(attributes, options);
        AddFriendRecordModel.belongsTo(UserModel, { foreignKey: 'targetUid' })
    }

    static async recordAddFreind(fromUid: number, targetUid: number): Promise<boolean> {
        try {
            const data = new AddFriendRecordModel();
            data.fromUid = fromUid;
            data.targetUid = targetUid;
            await data.save();
            return true;
        } catch (error) {
            return false;
        }
    }

    static getFriendAddInfo(uid: number): Promise<AddFriendRecordModel[]> {
        return AddFriendRecordModel.findAll({ where: { targetUid: uid } });
    }

    static deleteAddFriendReq(fromUid: number, targetUid: number) {
        AddFriendRecordModel.destroy({ where: { target_uid: targetUid, from_uid: fromUid } });
    }

    static async hasAddInfo(fromUid: number, targetUid: number) {
        const res = await AddFriendRecordModel.count({ where: { from_uid: fromUid, target_uid: targetUid } });
        return res !== 0;
    }
}