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

    /** 序列化call请求 */
    static encodeCallReqest(serverName: string, className: string, funcName: string, requestId: number, routeOption: RpcRouterOption, args: any) {
        return RpcUtils.encodeReqMsg({
            requestId,
            type: RpcMessageType.call,
            serverName,
            className,
            funcName,
            routeOption,
            args,
            fromNodeId: serverConfig.nodeId
        });
    }

    /** 序列化send请求 */
    static encodeSendReqest(serverName: string, className: string, funcName: string, routeOption: RpcRouterOption, args: any) {
        return RpcUtils.encodeReqMsg({
            type: RpcMessageType.send,
            serverName,
            className,
            funcName,
            routeOption,
            args,
            fromNodeId: serverConfig.nodeId
        });
    }

    //todo
    /** 序列化rpc请求 */
    static encodeReqMsg(msg: RpcReqMsg): Buffer {
        return Buffer.from(JSON.stringify(msg));
    }

    /** 反序列化rpc请求 */
    static decodeReqMsg(buffer: Buffer): RpcReqMsg {
        return JSON.parse(buffer.toString());//todo
    }


    //todo
    /** 所有rpc message的首位都标识信息类型 */
    static getRpcMsgType(buffer: Buffer): RpcMessageType {
        return RpcUtils.decodeReqMsg(buffer).type;
    }

    /** 获取roter信息 todo */
    static getRouteInfo(buffer: Buffer) {
        return RpcUtils.decodeReqMsg(buffer);
    }

    //todo 
    /** 序列化结果结构体 */
    static encodeResult(replay: RpcTransferResult) {
        return Buffer.from(JSON.stringify(replay));
    }

    // todo
    /** 反序列化结果结构体 */
    static decodeResult(buffer: Buffer): RpcTransferResult {
        return JSON.parse(buffer.toString());
    }

    // todo
    /** 获得rpc返回结果需要给到的node */
    static getResultTo(buffer: Buffer): string {
        return RpcUtils.decodeReqMsg(buffer).fromNodeId;
    }
}

export enum RpcMessageType {
    call,
    send,
    result
}