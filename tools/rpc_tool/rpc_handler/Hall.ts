interface HallRPC {
    //登录
    reqLogin(buff: Buffer): Promise<Buffer>
    //注册
    reqRegister(buff: Buffer): Promise<Buffer>
    //转发
    transferToHall(uid: number, buff: Buffer): void
    //s2c
    //主动告知网关转发消息
    transferToGate(uid: number, buffer: Buffer): void
    //关闭对应uid的socket
    closeUserSocket(uid: number): void
}