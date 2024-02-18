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
    static encodeCallReqest(nodeId: string, serverName: string, className: string, funcName: string, requestId: number, routeOption: RpcRouterOption, args: any[]) {
        return RpcUtils.encodeReqMsg({
            type: RpcMessageType.call,
            requestId,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            routeOption,
            args
        });
    }

    /** 序列化send请求 */
    static encodeSendReqest(nodeId: string, serverName: string, className: string, funcName: string, routeOption: RpcRouterOption, args: any[]) {
        return RpcUtils.encodeReqMsg({
            type: RpcMessageType.send,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            routeOption,
            args
        });
    }

    //todo
    /** 序列化rpc请求 */
    static encodeReqMsg(msg: RpcReqMsg): Buffer {
        const buffer = Buffer.alloc(
            20 +// type1+serverNameLen2+classNamelen2+funcNameLen2+fromNodeIdLen2+msg.routeOption.type1+msg.routeOption.nodeIdLen2=1+2+2+2+2+1+2=20
            msg.serverName.length +
            msg.className.length +
            msg.funcName.length +
            msg.fromNodeId.length +
            (msg.routeOption.nodeId?.length || 0)
        )
        let offset = 0;
        // write type 
        buffer.writeUint8(msg.type, offset);
        offset++;
        // write requestId 
        buffer.writeDoubleLE(msg.requestId || 0, offset);
        offset += 8;
        // write serverName 
        this.writeStrToBuffer(buffer, msg.serverName, offset);
        offset += (msg.serverName.length + 2);
        // write className 
        this.writeStrToBuffer(buffer, msg.className, offset);
        offset += (msg.className.length + 2);
        // write funcName 
        this.writeStrToBuffer(buffer, msg.funcName, offset);
        offset += (msg.funcName.length + 2);
        // write fromNodeId 
        this.writeStrToBuffer(buffer, msg.fromNodeId, offset);
        offset += (msg.fromNodeId.length + 2);
        // write routeOption
        buffer.writeUint8(msg.routeOption.type || 0, offset);
        offset++;
        this.writeStrToBuffer(buffer, msg.routeOption.nodeId, offset);
        offset += ((msg.routeOption.nodeId?.length || 0) + 2);

        // todo args to buffer
        return buffer;
    }

    /** 反序列化rpc请求 */
    static decodeReqMsg(buffer: Buffer): RpcReqMsg {
        const result: RpcReqMsg = {
            type: 0,
            serverName: "",
            className: "",
            funcName: "",
            fromNodeId: "",
            routeOption: {},
            args: []
        };
        let offset = 0;
        result.type = buffer.readUint8();
        offset++;
        result.requestId = buffer.readDoubleLE(offset);
        offset += 8;
        // serverName read
        let len = buffer.readUint16LE(offset);
        offset += 2;
        result.serverName = buffer.slice(offset, offset + len).toString();
        offset += len;
        // className read
        len = buffer.readUint16LE(offset);
        offset += 2;
        result.className = buffer.slice(offset, offset + len).toString();
        offset += len;
        // funcName read
        len = buffer.readUint16LE(offset);
        offset += 2;
        result.funcName = buffer.slice(offset, offset + len).toString();
        offset += len;
        // fromNodeId read
        len = buffer.readUint16LE(offset);
        offset += 2;
        result.fromNodeId = buffer.slice(offset, offset + len).toString();
        offset += len;
        // routeOption read
        result.routeOption.type = buffer.readUint8(offset);
        offset++;
        len = buffer.readUint16LE(offset);
        offset += 2;
        result.routeOption.nodeId = buffer.slice(offset, offset + len).toString();
        offset += len;
        // todo buffer to args
        return result;
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

    /** 将string写入buffer */
    static writeStrToBuffer(buffer: Buffer, str: string = '', offset: number) {
        buffer.writeUInt16LE(str.length, offset);
        buffer.write(str, offset + 2);
    }

    /** 将string读出 */
    static readStrFromBuffer(buffer: Buffer, offset: number, len: number) {
        return buffer.slice(offset, offset + len).toString();
    }
}

export class RpcUtilsByJson {
    /** 序列化参数 */
    static encodeArgs(args: any[]) {
        // 暂时实现流程,后续优化成二进制流
        return JSON.stringify(args);
    }

    /** 反序列化参数 */
    static decodeArgs(argsStr: string) {
        // 暂时实现流程,后续优化成二进制流
        return JSON.parse(argsStr);
    }

    /** 序列化call请求 */
    static encodeCallReqest(nodeId: string, serverName: string, className: string, funcName: string, requestId: number, routeOption: RpcRouterOption, args: any[]) {
        return RpcUtilsByJson.encodeReqMsg({
            type: RpcMessageType.call,
            requestId,
            serverName,
            className,
            funcName,
            routeOption,
            args,
            fromNodeId: nodeId
        });
    }

    /** 序列化send请求 */
    static encodeSendReqest(nodeId: string, serverName: string, className: string, funcName: string, routeOption: RpcRouterOption, args: any[]) {
        return RpcUtilsByJson.encodeReqMsg({
            type: RpcMessageType.send,
            serverName,
            className,
            funcName,
            routeOption,
            args,
            fromNodeId: nodeId
        });
    }

    /** 序列化rpc请求 */
    static encodeReqMsg(msg: RpcReqMsg): Buffer {
        return Buffer.from(JSON.stringify(msg));
    }

    /** 反序列化rpc请求 */
    static decodeReqMsg(buffer: Buffer): RpcReqMsg {
        return JSON.parse(buffer.toString());
    }

    /** 所有rpc message的首位都标识信息类型 */
    static getRpcMsgType(buffer: Buffer): RpcMessageType {
        return RpcUtilsByJson.decodeReqMsg(buffer).type;
    }

    /** 获取roter信息 */
    static getRouteInfo(buffer: Buffer) {
        return RpcUtilsByJson.decodeReqMsg(buffer);
    }

    /** 序列化结果结构体 */
    static encodeResult(replay: RpcTransferResult) {
        return Buffer.from(JSON.stringify(replay));
    }

    /** 反序列化结果结构体 */
    static decodeResult(buffer: Buffer): RpcTransferResult {
        return JSON.parse(buffer.toString());
    }

    /** 获得rpc返回结果需要给到的node */
    static getResultTo(buffer: Buffer): string {
        return RpcUtilsByJson.decodeReqMsg(buffer).fromNodeId;
    }
}

export enum RpcMessageType {
    call,
    send,
    result
}