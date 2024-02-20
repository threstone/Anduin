enum TypeEnum {
    String,
    Number,
    Boolean
}
export class RpcUtils {
    private static _bufferCache: Buffer[] = [];
    static AllocBuffer(size: number) {
        return Buffer.alloc(size);
        let buffer = this._bufferCache[size];
        if (!buffer) {
            buffer = Buffer.alloc(size);
            this._bufferCache[size] = buffer;
        } else {
            buffer.fill(0);
        }
        return buffer;
    }

    /** 序列化参数列表 */
    static encodeArgs(args: any[]) {
        const bufferList = [];
        for (let index = 0; index < args.length; index++) {
            const arg = args[index];
            bufferList.push(this.encodeArg(arg));
        }
        return Buffer.concat(bufferList);
    }

    /** 序列化参数 */
    static encodeArg(arg: any) {
        switch (typeof (arg)) {
            case 'string':
                {
                    const len = Buffer.byteLength(arg);
                    const buffer = this.AllocBuffer(len + 4 + 1);
                    buffer.writeUint8(TypeEnum.String);
                    buffer.writeUint32LE(len, 1);
                    buffer.write(arg, 5, 'utf8');
                    return buffer;
                }
            case 'number':
                {
                    const buffer = this.AllocBuffer(8 + 1);
                    buffer.writeUint8(TypeEnum.Number);
                    buffer.writeDoubleLE(arg, 1);
                    return buffer;
                }
            case 'boolean':
                {
                    const buffer = this.AllocBuffer(1 + 1);
                    buffer.writeUint8(TypeEnum.Boolean);
                    buffer.writeUint8(arg ? 1 : 0, 1);
                    return buffer;
                }
            default:
                throw new Error('不支持的传递类型')
        }
    }

    /** 反序列化参数列表 */
    static decodeArgs(buffer: Buffer, offset: number) {
        const args = [];
        while (true) {
            if (offset >= buffer.length) {
                break;
            }
            let [result, offsetTemp] = this.decodeArg(buffer, offset);
            args.push(result);
            offset = offsetTemp;
        }
        return args;
    }

    /** 反序列化参数 */
    static decodeArg(buffer: Buffer, offset: number = 0) {
        let result;
        const type = buffer.readUint8(offset);
        offset++;
        switch (type) {
            case TypeEnum.String:
                {
                    const len = buffer.readUint32LE(offset);
                    offset += 4;
                    result = buffer.toString('utf8', offset, offset + len);
                    offset += len;
                    break;
                }
            case TypeEnum.Number:
                {
                    result = buffer.readDoubleLE(offset);
                    offset += 8;
                    break;
                }
            case TypeEnum.Boolean:
                {
                    result = buffer.readUint8(offset) === 1;
                    offset += 1;
                    break;
                }
        }
        return [result, offset];
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
        const buffer = this.AllocBuffer(
            20 +
            this.getByteLength(msg.serverName) +
            this.getByteLength(msg.className) +
            this.getByteLength(msg.funcName) +
            this.getByteLength(msg.routeOption.nodeId) +
            this.getByteLength(msg.fromNodeId)
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
        return Buffer.concat([buffer, this.encodeArgs(msg.args)]);
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
        result.args = this.decodeArgs(buffer, offset);
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

    /** 序列化结果结构体 */
    static encodeResult(replay: RpcTransferResult) {
        const argBuffer = this.encodeArg(replay.result);

        const buffer = this.AllocBuffer(3 + argBuffer.length + this.getByteLength(replay.fromNodeId) + (replay.requestId ? 8 : 0));
        // write type 
        let offset = buffer.writeUint8(replay.type);
        // write routeOption.serverName 
        offset = this.writeStrToBuffer(buffer, replay.fromNodeId, offset);

        argBuffer.copy(buffer, offset);
        offset += argBuffer.length;
        if (replay.requestId) {
            // write requestId 
            offset = buffer.writeDoubleLE(replay.requestId || 0, offset)
        }
        return buffer;
    }

    /** 反序列化结果结构体 */
    static decodeResult(buffer: Buffer): RpcTransferResult {
        const result: RpcTransferResult = {
            type: 0,
            fromNodeId: "",
            result: undefined
        };
        let offset = 0;
        result.type = buffer.readUint8();
        offset++;

        // fromNodeId read
        let len = buffer.readUint16LE(offset);
        offset += 2;
        result.fromNodeId = buffer.toString('utf8', offset, offset + len);
        offset += len;
        // result read
        const [tempRes, temOffset] = this.decodeArg(buffer, offset);
        offset = temOffset;
        result.result = tempRes;

        // requestId read
        if (offset < buffer.length) {
            result.requestId = buffer.readDoubleLE(offset);
        }
        return result;
    }

    /** 获得rpc返回结果需要给到的node */
    static getResultTo(buffer: Buffer): string {
        return RpcUtils.readStringFromBuffer(buffer, 1);
    }

    /** 将string写入buffer */
    static writeStrToBuffer(buffer: Buffer, str: string = '', offset: number) {
        offset = buffer.writeUInt16LE(this.getByteLength(str), offset);
        offset += buffer.write(str, offset, 'utf8');
        return offset;
    }

    /** 从buffer中读取string */
    static readStringFromBuffer(buffer: Buffer, offset: number) {
        const len = buffer.readUint16LE(offset);
        offset += 2;
        return buffer.toString('utf8', offset, offset + len);
    }

    static getByteLength(str: string) {
        return str ? Buffer.byteLength(str) : 0;
        // 使用str?.length || 0在不遇到单个字符占多字节情况下性能更好
        return str?.length || 0;
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