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
    static encodeCallReqest(nodeId: string, serverName: string, className: string, funcName: string, requestId: number, routeOption: RpcRouterOptions, args: any[]) {
        return RpcUtils.encodeReqMsg({
            type: RpcMessageType.call,
            requestId,
            routeOption,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            args
        });
    }

    /** 序列化send请求 */
    static encodeSendReqest(nodeId: string, serverName: string, className: string, funcName: string, routeOption: RpcRouterOptions, args: any[]) {
        return RpcUtils.encodeReqMsg({
            type: RpcMessageType.send,
            routeOption,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            args
        });
    }

    /** 序列化rpc请求 */
    static encodeReqMsg(msg: RpcReqMsg): Buffer {
        const buffer = Buffer.alloc(
            20 +
            this.getByteLen(msg.serverName) +
            this.getByteLen(msg.className) +
            this.getByteLen(msg.funcName) +
            this.getByteLen(msg.routeOption.nodeId) +
            this.getByteLen(msg.fromNodeId)
        )
        // write type 
        let offset = buffer.writeUint8(msg.type);

        // write requestId 
        offset = buffer.writeDoubleLE(msg.requestId || 0, offset)
        // write route options
        offset = this.writeRouteOptions(msg.routeOption, buffer, offset);
        // write routeOption.serverName 
        offset = this.writeStrToBuffer(buffer, msg.serverName, offset);
        // write routeOption.className 
        offset = this.writeStrToBuffer(buffer, msg.className, offset);
        // write routeOption.funcName 
        offset = this.writeStrToBuffer(buffer, msg.funcName, offset);

        // write fromNodeId 
        offset = this.writeStrToBuffer(buffer, msg.fromNodeId, offset);

        // todo args to buffer
        return buffer;
    }

    /** 反序列化rpc请求 */
    static decodeReqMsg(buffer: Buffer): RpcReqMsg {
        const result: RpcReqMsg = {
            type: 0,
            routeOption: {},
            serverName: "",
            className: "",
            funcName: "",
            fromNodeId: "",
            args: []
        };
        let offset = 0;
        // read type 
        result.type = buffer.readUint8();
        offset++;

        // read requestId 
        result.requestId = buffer.readDoubleLE(offset);
        offset += 8;

        // read route options
        offset = this.readRouteOptions(result.routeOption, buffer, offset);

        // serverName read
        let len = buffer.readUint16LE(offset);
        offset += 2;
        result.serverName = buffer.toString('utf8', offset, offset + len);
        offset += len;
        // className read
        len = buffer.readUint16LE(offset);
        offset += 2;
        result.className = buffer.toString('utf8', offset, offset + len);
        offset += len;
        // funcName read
        len = buffer.readUint16LE(offset);
        offset += 2;
        result.funcName = buffer.toString('utf8', offset, offset + len);
        offset += len;

        // read fromNodeId 
        len = buffer.readUint16LE(offset);
        offset += 2;
        result.fromNodeId = buffer.toString('utf8', offset, offset + len);
        offset += len;

        // todo buffer to args
        return result;
    }

    /** 所有rpc message的首位都标识信息类型 */
    static getRpcMsgType(buffer: Buffer): RpcMessageType {
        return buffer.readUint8();
    }

    /** 写入路由信息 */
    static writeRouteOptions(routeOption: RpcRouterOptions, buffer: Buffer, offset: number) {
        // write routeOption.type
        offset = buffer.writeUint8(routeOption.type || 0, offset);
        // write routeOption.nodeId
        offset = this.writeStrToBuffer(buffer, routeOption.nodeId, offset);
        return offset;
    }

    /** 读取roter信息 */
    static readRouteOptions(routeOption: RpcRouterOptions, buffer: Buffer, offset = 9) {
        routeOption.type = buffer.readUint8(offset);
        offset++;
        let len = buffer.readUint16LE(offset);
        offset += 2;
        routeOption.nodeId = buffer.toString('utf8', offset, offset + len);
        offset += len;
        return offset;
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

    /** 获得rpc返回结果需要给到的node */
    static getResultTo(buffer: Buffer): string {
        return RpcUtils.readStringFromBuffer(buffer, 1);
    }

    /** 将string写入buffer */
    static writeStrToBuffer(buffer: Buffer, str: string = '', offset: number) {
        offset = buffer.writeUInt16LE(this.getByteLen(str), offset);
        offset += buffer.write(str, offset, 'utf8');
        return offset;
    }

    /** 从buffer中读取string */
    static readStringFromBuffer(buffer: Buffer, offset: number) {
        const len = buffer.readUint16LE(offset);
        offset += 2;
        return buffer.toString('utf8', offset, offset + len);
    }

    static getByteLen(str: string) {
        return str ? Buffer.byteLength(str) : 0;
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
    static encodeCallReqest(nodeId: string, serverName: string, className: string, funcName: string, requestId: number, routeOption: RpcRouterOptions, args: any[]) {
        return RpcUtilsByJson.encodeReqMsg({
            type: RpcMessageType.call,
            requestId,
            routeOption,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            args
        });
    }

    /** 序列化send请求 */
    static encodeSendReqest(nodeId: string, serverName: string, className: string, funcName: string, routeOption: RpcRouterOptions, args: any[]) {
        return RpcUtilsByJson.encodeReqMsg({
            type: RpcMessageType.send,
            routeOption,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            args
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
        return RpcUtilsByJson.decodeResult(buffer).fromNodeId;
    }
}

export enum RpcMessageType {
    call,
    send,
    result
}