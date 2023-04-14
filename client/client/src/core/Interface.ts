interface ProtoClass {
    name: string;
    /**
     * 编码
     */
    encode(message: IMessage, writer?: protobuf.Writer);

    /**
     * 解码
     */
    decode(reader: (protobuf.Reader | Uint8Array), length?: number);

    verify(message: { [k: string]: any }): (string | null);
}

interface IMessage {
    cmd: number;
    scmd: number;
}

/**
 * 势力对象
 */
interface Power {
    id: CardsPto.PowerType;
    powerName: string;
    desc: string;
}

interface CommonConfig {
    maxFeeFilter: number;
    cardMakeFee: number[];
    cardDisassembleReturnRatio: number;
    maxGroupNum: number;
    startHandCardNum: number;
    drawCardTime: number;
    maxHandCardNum: number;
}

interface BuffData {
    id: number;
    buffName: string;
    desc: string;
    isShow: number;
}

interface EffectData {
    id: number;
    effectName: string,
    effectType: number,
    defaultRotation: number
}