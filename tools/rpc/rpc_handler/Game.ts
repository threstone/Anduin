interface GameRPC {
    //转发
    transferToGame(uid: number, buff: Buffer): Promise<Buffer>
    //s2c
    //主动告知网关转发消息
    transferToGate(uid: number, buffer: Buffer): void
}