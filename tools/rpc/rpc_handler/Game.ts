interface GameRPC {
    //转发
    transferToGame(uid: number, buff: Buffer): Promise<Buffer>
    //s2c
    //主动告知网关转发消息
    transferToGate(uid: number, buffer: Buffer): void
    //将用户绑定到自身
    bindUserGameNode(uid: number): Promise<boolean>
    //解除绑定用户的gameNode
    unbindUserGameNode(uid: number): Promise<boolean>
}