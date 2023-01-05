interface HallRPC {
    //登录
    login(token: string, isDebug: boolean, ip: string, nodeId: number): Promise<Buffer>
    //s2c
    //主动告知网关转发消息
    transferToGate(uid: number, buffer: Buffer): boolean
}