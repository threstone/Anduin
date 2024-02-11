export class RpcUtils {
    /** 序列化参数 */
    static encodeArgs(args: any[]) {
        // todo 暂时实现流程,后续优化成二进制流
        return JSON.stringify(args);
    }

    /** 反序列化参数 */
    static decodeArgs(argsStr: string) {
        // todo 暂时实现流程,后续优化成二进制流
        return JSON.parse(argsStr);
    }

    static encodeCallReqest(serverName: string, className: string, funcName: string, sessionId: number, args: any[]) {
        const json = JSON.stringify({ sessionId: sessionId, type: RPCMessageType.call, serverName, className, funcName, args });
        return Buffer.from(json);
    }

    static encodeSendReqest(serverName: string, className: string, funcName: string, args: any[]) {
        const json = JSON.stringify({ type: RPCMessageType.send, serverName, className, funcName, args });
        return Buffer.from(json);
    }

    static decodeMessage(buffer: Buffer): RPCMessage {
        return JSON.parse(buffer.toString());
    }

    // static encodeResult(sessionId: number, args: any[]) {

    // }

    // static decodeResult(buffer: Buffer): RPCMessage {
    //     return
    // }
}

export enum RPCMessageType {
    call,
    send,
    result
}