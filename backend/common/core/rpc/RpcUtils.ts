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

    //todo
    static encodeCallReqest(serverName: string, className: string, funcName: string, sessionId: number, routeOption: RpcRouterOption, args: any) {
        const json = JSON.stringify({
            sessionId: sessionId,
            type: RpcMessageType.call,
            serverName,
            className,
            funcName,
            routeOption,
            args,
            fromNodeId: serverConfig.nodeId
        });
        return Buffer.from(json);
    }

    //todo
    static encodeSendReqest(serverName: string, className: string, funcName: string, routeOption: RpcRouterOption, args: any) {
        const json = JSON.stringify({
            type: RpcMessageType.send,
            serverName,
            className,
            funcName,
            routeOption,
            args,
            fromNodeId: serverConfig.nodeId
        });
        return Buffer.from(json);
    }

    static decodeMessage(buffer: Buffer): RpcReqMsg {
        return JSON.parse(buffer.toString());//todo
    }


    //todo
    static getRpcMsgType(buffer: Buffer): RpcMessageType {
        return RpcUtils.decodeMessage(buffer).type;
    }

    /** 获取roter信息 todo */
    static getRouteInfo(buffer: Buffer) {
        return RpcUtils.decodeMessage(buffer);
    }

    //todo 
    static encodeResult(replay: RpcTransferResult) {
        return Buffer.from(JSON.stringify(replay));
    }

    // static decodeResult(buffer: Buffer): RPCMessage {
    //     return
    // }
}

export enum RpcMessageType {
    call,
    send,
    result
}