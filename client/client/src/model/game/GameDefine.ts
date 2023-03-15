const UseConditionTypeIndex = 0;
const UseConditionValueIndex = 1;

enum UseConditionType {
    //无条件
    NoCondition,
    //友方单位
    FriendlyUnit,
    //友方建筑
    FriendlyBuilding,
    //敌方单位
    EnemyUnit,
    //敌方建筑
    EnemyBuilding,
    //所有单位
    AllUnit,
    //所有建筑
    AllBuilding,
    //友方地图实体
    FriendEntity,
    //敌方地图实体
    EnemyEntity,
    //所有地图实体
    AllEntity,
    //空格子
    EmptyBlock
}