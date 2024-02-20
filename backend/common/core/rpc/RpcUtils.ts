import { RpcSession } from "./RpcServer";

export enum RpcMessageType {
    call,
    send,
    result
}
/**
 * 要避免json循环引用的问题,如无法避免,引入如下库
 * https://www.npmjs.com/package/json-stringify-safe
 */
export class RpcUtilsByJson {

    private static _randIndex: number = 1;

    /** 转发rpc信息 */
    static transferMessage(jsonStr: string, serverMapList: Map<string, RpcSession[]>, nodeIdMap: Map<string, RpcSession>) {
        const reqMsg = RpcUtilsByJson.decodeRpcMsg(jsonStr);
        switch (reqMsg.type) {
            case RpcMessageType.call:
            case RpcMessageType.send:
                // 转发
                const clients = RpcUtilsByJson.getRouteClient(reqMsg as RpcReqMsg, serverMapList, nodeIdMap);
                clients?.forEach((c) => {
                    c.socket.send(jsonStr);
                });
                break;
            case RpcMessageType.result:
                nodeIdMap.get(reqMsg.fromNodeId)?.socket.send(jsonStr);
                break;
        }
    }

    /** 序列化call请求 */
    static encodeCallReqest(nodeId: string, serverName: string, className: string, funcName: string, requestId: number, routeOption: RpcRouterOptions, args: any[]) {
        return JSON.stringify({
            type: RpcMessageType.call,
            requestId,
            routeOptions: routeOption,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            args
        });
    }

    /** 序列化send请求 */
    static encodeSendReqest(nodeId: string, serverName: string, className: string, funcName: string, routeOption: RpcRouterOptions, args: any[]) {
        return JSON.stringify({
            type: RpcMessageType.send,
            routeOptions: routeOption,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            args
        });
    }

    /** 反序列化rpc 信息,返回rpc请求或结果 */
    static decodeRpcMsg(jsonStr: string): RpcReqMsg | RpcTransferResult {
        return JSON.parse(jsonStr);
    }

    /** 序列化结果结构体 */
    static encodeResult(replay: RpcTransferResult): string {
        return JSON.stringify(replay);
    }

    /** 获取转发的clients */
    static getRouteClient(reqMsg: RpcReqMsg, serverMapList: Map<string, RpcSession[]>, nodeIdMap: Map<string, RpcSession>) {
        if (reqMsg.routeOptions.type === 1/* target */) {
            return [nodeIdMap.get(reqMsg.routeOptions.nodeId)];
        } else if (reqMsg.routeOptions.type === 2/* all */) {
            return serverMapList.get(reqMsg.serverName);
        } else {/* random */
            const nodeList = serverMapList.get(reqMsg.serverName);
            return [nodeList[(this._randIndex++) % nodeList.length]]
        }
    }
}

enum TypeEnum {
    String,
    Number,
    Boolean,
    Undefine,
}

/** 
 * 经过单元测试无奈地发现 自定义buffer序列化的速度并没有JSON快,优势仅为包体更小50+%,但在内网rpc下优势可以忽略
 * 反而在易用性上远远比不过JSON,需要将常见数据类型一一手动实现
 * 原因估计是因为nodejs各方法调用的开销过大,Buffer声明也费事费时,JSON反而只有一次
 * 综上,还是使用JSON来做rpc传输好了
 * 详情测试报告运行npm test查看
 **/
export class RpcUtilsByBuffer {

    private static _randIndex: number = 1;
    private static _bufferCache: Buffer[] = [];

    private static allocBuffer(size: number) {
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
    private static encodeArgs(args: any[]) {
        const bufferList = [];
        for (let index = 0; index < args.length; index++) {
            const arg = args[index];
            bufferList.push(this.encodeArg(arg));
        }
        return Buffer.concat(bufferList);
    }

    /** 序列化参数 */
    private static encodeArg(arg: any) {
        switch (typeof (arg)) {
            case 'string':
                {
                    const len = Buffer.byteLength(arg);
                    const buffer = this.allocBuffer(len + 4 + 1);
                    buffer.writeUint8(TypeEnum.String);
                    buffer.writeUint32LE(len, 1);
                    buffer.write(arg, 5, 'utf8');
                    return buffer;
                }
            case 'number':
                {
                    const buffer = this.allocBuffer(8 + 1);
                    buffer.writeUint8(TypeEnum.Number);
                    buffer.writeDoubleLE(arg, 1);
                    return buffer;
                }
            case 'boolean':
                {
                    const buffer = this.allocBuffer(1 + 1);
                    buffer.writeUint8(TypeEnum.Boolean);
                    buffer.writeUint8(arg ? 1 : 0, 1);
                    return buffer;
                }
            case 'undefined':
                {
                    const buffer = this.allocBuffer(1);
                    buffer.writeUint8(TypeEnum.Undefine);
                    return buffer;
                }
            default:
                throw new Error('不支持的传递类型')
        }
    }

    /** 反序列化参数列表 */
    private static decodeArgs(buffer: Buffer, offset: number) {
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
    private static decodeArg(buffer: Buffer, offset: number = 0) {
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
            case TypeEnum.Undefine:
                {
                    result = undefined;
                }
        }
        return [result, offset];
    }

    /** 序列化call请求 */
    static encodeCallReqest(nodeId: string, serverName: string, className: string, funcName: string, requestId: number, routeOptions: RpcRouterOptions, args: any[]) {
        return RpcUtilsByBuffer.encodeReqMsg({
            type: RpcMessageType.call,
            requestId,
            routeOptions,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            args
        });
    }

    /** 序列化send请求 */
    static encodeSendReqest(nodeId: string, serverName: string, className: string, funcName: string, routeOptions: RpcRouterOptions, args: any[]) {
        return RpcUtilsByBuffer.encodeReqMsg({
            type: RpcMessageType.send,
            routeOptions,
            serverName,
            className,
            funcName,
            fromNodeId: nodeId,
            args
        });
    }

    /** 序列化rpc请求 */
    private static encodeReqMsg(msg: RpcReqMsg): Buffer {
        const buffer = this.allocBuffer(
            20 +
            this.getByteLength(msg.serverName) +
            this.getByteLength(msg.className) +
            this.getByteLength(msg.funcName) +
            this.getByteLength(msg.routeOptions.nodeId) +
            this.getByteLength(msg.fromNodeId)
        )
        // write type 
        let offset = buffer.writeUint8(msg.type);

        // write requestId 
        offset = buffer.writeDoubleLE(msg.requestId || 0, offset)
        // write route options
        offset = this.writeRouteOptions(msg.routeOptions, buffer, offset);
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
    private static decodeReqMsg(buffer: Buffer): RpcReqMsg {
        const result: RpcReqMsg = {
            type: 0,
            routeOptions: {},
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
        offset = this.readRouteOptions(result.routeOptions, buffer, offset);

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
    private static writeRouteOptions(routeOption: RpcRouterOptions, buffer: Buffer, offset: number) {
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

        const buffer = this.allocBuffer(3 + argBuffer.length + this.getByteLength(replay.fromNodeId) + (replay.requestId ? 8 : 0));
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
        return RpcUtilsByBuffer.readStringFromBuffer(buffer, 1);
    }

    /** 将string写入buffer */
    private static writeStrToBuffer(buffer: Buffer, str: string = '', offset: number) {
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

    private static getByteLength(str: string) {
        return str ? Buffer.byteLength(str) : 0;
        // 使用str?.length || 0在不遇到单个字符占多字节情况下性能更好
        return str?.length || 0;
    }

    /** 获取转发的clients */
    static getRouteClient(buffer: Buffer, serverMapList: Map<string, RpcSession[]>, nodeIdMap: Map<string, RpcSession>) {
        const routeOptions: RpcRouterOptions = {};
        const offset = RpcUtilsByBuffer.readRouteOptions(routeOptions, buffer);
        if (routeOptions.type === 1/* target */) {
            return [nodeIdMap.get(routeOptions.nodeId)];
        } else if (routeOptions.type === 2/* all */) {
            const serverName = RpcUtilsByBuffer.readStringFromBuffer(buffer, offset);
            return serverMapList.get(serverName);
        } else {/* random */
            const serverName = RpcUtilsByBuffer.readStringFromBuffer(buffer, offset);
            const nodeList = serverMapList.get(serverName);
            return [nodeList[(this._randIndex++) % nodeList.length]]
        }
    }

    /** 转发rpc信息 */
    static transferMessage(buffer: Buffer, serverMapList: Map<string, RpcSession[]>, nodeIdMap: Map<string, RpcSession>) {
        const type = RpcUtilsByBuffer.getRpcMsgType(buffer);
        switch (type) {
            case RpcMessageType.call:
            case RpcMessageType.send:
                // 转发
                const clients = RpcUtilsByBuffer.getRouteClient(buffer, serverMapList, nodeIdMap);
                clients?.forEach((c) => {
                    c.socket.send(buffer);
                });
                break;
            case RpcMessageType.result:
                const nodeId = RpcUtilsByBuffer.getResultTo(buffer);
                nodeIdMap.get(nodeId)?.socket.send(buffer);
                break;
        }
    }

    /** 反序列化rpc 信息,返回rpc请求或结果 */
    static decodeRpcMsg(buffer: Buffer): RpcReqMsg | RpcTransferResult {
        const type: RpcMessageType = buffer.readUint8();
        if (type === RpcMessageType.result) {
            return this.decodeResult(buffer);
        } else {
            return this.decodeReqMsg(buffer);
        }
    }
}

// export const RpcUtils = RpcUtilsByBuffer;
export const RpcUtils = RpcUtilsByJson;
