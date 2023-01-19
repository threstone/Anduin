interface LogicRPC {
    //登录
    login(token: string, isDebug: boolean, ip: string, nodeId: number): Promise<Buffer>
    //转发
    transfer(buff: Buffer): Promise<Buffer>
    //通过token拿uid
    getUidByToken(token: string): Promise<number>
    //玩家下线
    userLogout(uid: number): Promise<boolean>
    //s2c
    //剔掉玩家
    kickUser(uid: number, buffer: Buffer): Promise<boolean>
    // 转发来自login的消息给前端
    loginTransfer(uid: number, buffer: Buffer): Promise<boolean>
    //踢掉所有在线玩家
    kickAllUser(buffer: Buffer): Promise<string>
    //踢掉指定在玩某些游戏的玩家
    kickUserByGameId(gameIds: string, buffer: Buffer): Promise<string>
    //主动告知网关转发消息
    transferToGate(uid: number, buffer: Buffer): Promise<boolean>
}