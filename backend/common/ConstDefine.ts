export enum RedisType {
    /**
     * 用户所在网关信息
     */
    userGate,
    /**
     * 用户信息
     */
    userInfo,
    /**
     * 用户社交关系
     */
    userRelation,
    /**
     * 用户游戏数据，如不在游戏中将不存在此数据
     */
    userGame,
}