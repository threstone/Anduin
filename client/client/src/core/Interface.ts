interface ProtoClass {
    /**
     * 编码
     */
    encode(message: GameProtoClass, writer?: protobuf.Writer);

    /**
     * 解码
     */
    decode(reader: (protobuf.Reader | Uint8Array), length?: number);

    verify(message: { [k: string]: any }): (string | null);
}

interface GameProtoClass {
    cmd: number
    scmd: number
}

/**
 * 势力对象
 */
interface Power {
    id: CardsPto.PowerType
    powerName: string
}

interface CommonConfig{
    maxFeeFilter:number
}
