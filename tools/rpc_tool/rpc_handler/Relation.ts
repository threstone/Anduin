interface RelationRPC {
    //用户上线
    userOnline(uid: number, nick: string): void
    //用户离线
    userOffline(uid: number): void
    //转发
    transferTRelation(uid: number, buff: Buffer): Promise<Buffer>
    //s2c
    //主动告知网关转发消息
    transferToGate(uid: number, buffer: Buffer): void
    //广播消息
    broadcast(buffer: Buffer): void
}