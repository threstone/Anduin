
//@ts-ignore
import * as WS from "ws"
import { ILog } from "../I";
import { RpcPoolTemp } from './RpcSession'

const TypeNumber = 0;
const TypeString = 1;
const TypeBuffer = 2;
const TypeBoolean = 3;
const TypeUndefined = 4;

const MessageTypeRes = 0;
const MessageTypeCall = 1;
const MessageTypeSend = 2;

class RPC_BASE {
    protected _version: string

    protected _resPool = new Map<number, RpcPoolTemp>()

    //sessionId
    protected _sessionId = 1;

    //请求超时的时间
    private _timeout = 20 * 1000

    //最大sessionId
    private _maxSessionId = 10 * 1000 * 1000 * 1000;


    //RPC SERVER服务
    protected _handlers = new Map<string, Function>()

    constructor() {
        this.setReqClear()
    }

    //注册
    public registerService(services: any) {
        try {
            for (let i in services) {
                if (i.startsWith("RPC_")) {
                    this._handlers.set(i, services[i])
                }
            }
        } catch (e) {
            logger.error(e)
        }
        logger.log(this._handlers)
    }

    public registerFuns(serverClass: any) {
        let funs: string[] = serverClass.funs
        try {
            for (let index = 0; index < funs.length; index++) {
                let funcName = funs[index];
                if (serverClass[funcName] && typeof (serverClass[funcName]) == 'function') {
                    this._handlers.set(funcName, serverClass[funcName].bind(serverClass))
                    logger.log("注册rpc函数", funcName);
                } else {
                    logger.error('注册函数失败：' + funcName)
                }
            }
        } catch (e) {
            logger.error(e)
        }
    }

    public registerFun(service: string, fun: Function) {
        this._handlers.set(service, fun)
    }

    public baseSend(method: string, args: Array<any>, ws: WS) {
        let buffer = this.getBuffer(method, args)
        let clinetBuffer = Buffer.alloc(buffer.length + 1)
        clinetBuffer.writeUInt8(MessageTypeSend)//表明发送类型是call
        buffer.copy(clinetBuffer, 1, 0, buffer.length)
        ws.send(clinetBuffer)
    }

    /**
     * RPC调用
     * @param serverName
     * @param method
     * @param args
     */
    public async baseCall(method: string, args: Array<any>, ws: WS): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this._sessionId >= this._maxSessionId) {
                this._sessionId = 1
            }
            let sessionId = this._sessionId++
            let buffer = this.getBuffer(method, args)
            let clinetBuffer = Buffer.alloc(buffer.length + 4 + 1)
            clinetBuffer.writeUInt8(MessageTypeCall)//表明发送类型是call
            clinetBuffer.writeUInt32LE(sessionId, 1)
            buffer.copy(clinetBuffer, 5, 0, buffer.length)
            ws.send(clinetBuffer)
            let rpc_temp: RpcPoolTemp = {
                sendTime: Date.now(),
                method: method,
                _promise: [resolve, reject]
            }
            this._resPool.set(sessionId, rpc_temp)
        }).catch(function (err) {
            logger.error(err)
        });
    }

    onMessage(clientName: string, buf: Buffer, ws: WS) {
        try {
            let msgType = buf.readUInt8()
            switch (msgType) {
                case MessageTypeCall:
                    this.handlerRequest(clientName, buf.slice(1), ws)
                    break;
                case MessageTypeRes:
                    let sessionId = buf.readUInt32LE(1)
                    if (this._resPool.has(sessionId)) {
                        let res: RpcPoolTemp = this._resPool.get(sessionId);
                        res._promise[0](this.getResByBuff(buf.slice(5)))
                        this._resPool.delete(sessionId)
                    }
                    break
                case MessageTypeSend:
                    let methodLen = buf.readUInt32LE(1)
                    let methodName = buf.slice(5, methodLen + 5).toString()
                    if (!this._handlers.has(methodName)) {
                        logger.error('service not found')
                        return
                    }
                    let func = this._handlers.get(methodName)
                    if (!func) {
                        logger.error('handlers not found')
                        return
                    }
                    let args = this.getArgs(buf.slice(5 + methodLen), clientName)
                    func(...args)
                    break;
            }
        } catch (error) {
            logger.error('onMessage error!!!')
            logger.error(error)
        }
    }

    /**
     * 定位请求的方法
     * @param data
     * @param ws
     */
    protected async handlerRequest(clientName: string, data: Buffer, ws: WS) {

        let sessionId = data.readUInt32LE(0)
        let methodLen = data.readUInt32LE(4)
        let methodName = data.slice(8, methodLen + 8).toString()

        //客户端与服务端版本握手
        if (sessionId == 1) {
            if (methodName == 'handshake') {
                let args = this.getArgs(data.slice(8 + methodLen), clientName);
                if (args[0] == this._version) {
                    let resBuf = this.getBufByResult(true);
                    let clinetBuffer = Buffer.alloc(resBuf.length + 4 + 1);
                    clinetBuffer.writeUInt8(MessageTypeRes);
                    clinetBuffer.writeUInt32LE(sessionId, 1);
                    resBuf.copy(clinetBuffer, 5, 0, resBuf.length);
                    ws.send(clinetBuffer);
                    const tempClientName = args[1];
                    (this as any as RPC_SERVER).socketMap.set(tempClientName, ws);
                    (ws as any).clientName = tempClientName;
                    return
                }
            }
            logger.error('client wrong version   , close this connected!');
            ws.close()
            return
        }
        if (!this._handlers.has(methodName)) {
            logger.error('service not found')
            return
        }
        let func = this._handlers.get(methodName)
        if (!func) {
            logger.error('handlers not found')
            return
        }
        let args = this.getArgs(data.slice(8 + methodLen), clientName)
        let res = await func(...args)
        let resBuf = this.getBufByResult(res)
        let clinetBuffer = Buffer.alloc(resBuf.length + 4 + 1)
        clinetBuffer.writeUInt8(MessageTypeRes)
        clinetBuffer.writeUInt32LE(sessionId, 1)
        resBuf.copy(clinetBuffer, 5, 0, resBuf.length)
        ws.send(clinetBuffer)

    }


    /**
    * 定时清理超时请求
    */
    private setReqClear() {
        setInterval(() => {
            let nowTime = Date.now()
            this._resPool.forEach((request: RpcPoolTemp, sessionId: number) => {
                if (nowTime - request.sendTime > this._timeout) {
                    request._promise[1]("rpc timeout " + + request.method)
                    this._resPool.delete(sessionId)
                }
            })
        }, 1000)
    }


    private getBufByResult(res: any) {
        let buf: Buffer;
        if (res == null) {
            res = undefined
        }
        switch (typeof (res)) {
            case 'string':
                let temp = Buffer.from(res)
                buf = Buffer.alloc(temp.length + 1)
                buf.writeUInt8(TypeString)
                temp.copy(buf, 1, 0, temp.length)
                break;
            case 'number':
                buf = Buffer.alloc(1 + 8)
                buf.writeUInt8(TypeNumber)
                buf.writeDoubleLE(res, 1)
                break;
            case 'object':
                if (Buffer.isBuffer(res)) {
                    buf = Buffer.alloc(res.length + 1)
                    buf.writeUInt8(TypeBuffer)
                    res.copy(buf, 1, 0, res.length)
                } else {
                    throw new Error('不支持的传递类型')
                }
                break
            case 'boolean':
                buf = Buffer.alloc(1 + 1)
                buf.writeUInt8(TypeBoolean)
                buf.writeUInt8(res == true ? 1 : 0, 1)
                break
            case 'undefined':
                buf = Buffer.alloc(1)
                buf.writeUInt8(TypeUndefined)
                break;
            default:
                throw new Error('不支持的传递类型')
        }
        return buf
    }

    protected getResByBuff(buffer: Buffer) {
        let type = buffer.readUInt8()
        let res
        switch (type) {
            case TypeNumber:
                res = buffer.readDoubleLE(1)
                break;
            case TypeString:
                res = buffer.slice(1).toString()
                break;
            case TypeBuffer:
                res = buffer.slice(1)
                break;
            case TypeBoolean:
                res = buffer.readUInt8(1) == 1
                break;
            case TypeUndefined:
                res = undefined
                break;
            default:
                throw new Error('不支持的传递类型')
        }
        return res
    }

    private getBuffer(method: string, args: Array<any>): Buffer {
        let methodLength = method.length
        let len = 4 + methodLength;
        let strBuffers: Buffer[] = []
        for (let index = 0; index < args.length; index++) {
            //typeof(null)得到的类型结果为object 导致报错    现在将null视为undefined处理
            if (args[index] == null) {
                args[index] = undefined
            }
            let element = args[index];
            //一个字节存类型
            switch (typeof (element)) {
                case 'string':
                    let strBuf = Buffer.from(element)
                    strBuffers.push(strBuf)
                    let strlen = strBuf.length
                    len += strlen + 1 + 4;//类型加长度   后面优化成一个字节存长度和type
                    break;
                case 'number':
                    len += 8 + 1
                    break;
                case 'object':
                    if (Buffer.isBuffer(element)) {
                        len += element.length + 1 + 4
                    } else {
                        throw new Error('不支持的传递类型')
                    }
                    break
                case 'boolean':
                    len += 2;
                    break;
                case 'undefined':
                    len += 1;
                    break;
                default:
                    throw new Error('不支持的传递类型')
            }
        }

        let clinetBuffer = Buffer.alloc(len)
        clinetBuffer.writeUInt32LE(methodLength, 0)
        clinetBuffer.write(method, 4)
        let offset = 4 + methodLength
        for (let index = 0; index < args.length; index++) {
            let element = args[index];
            switch (typeof (element)) {
                case 'string':
                    clinetBuffer.writeUInt8(TypeString, offset)
                    offset++
                    let strBuf = strBuffers.shift();
                    clinetBuffer.writeUInt32LE(strBuf.length, offset)
                    offset += 4
                    strBuf.copy(clinetBuffer, offset, 0, strBuf.length)
                    offset += strBuf.length
                    break;
                case 'number':
                    clinetBuffer.writeUInt8(TypeNumber, offset)
                    offset++
                    clinetBuffer.writeDoubleLE(element, offset)
                    offset += 8
                    break;
                case 'object':
                    if (Buffer.isBuffer(element)) {
                        let buf = element as Buffer;
                        clinetBuffer.writeUInt8(TypeBuffer, offset)
                        offset++
                        clinetBuffer.writeUInt32LE(buf.length, offset)
                        offset += 4
                        buf.copy(clinetBuffer, offset, 0, buf.length)
                        offset += buf.length;
                    } else {
                        throw new Error('不支持的传递类型')
                    }
                    break
                case 'boolean':
                    clinetBuffer.writeUInt8(TypeBoolean, offset)
                    offset++
                    clinetBuffer.writeUInt8(element == true ? 1 : 0, offset)
                    offset++
                    break;
                case 'undefined':
                    clinetBuffer.writeUInt8(TypeUndefined, offset)
                    offset++
                    break;
                default:
                    throw new Error('不支持的传递类型')
            }
        }
        return clinetBuffer
    }

    private getArgs(data: Buffer, clientName: string): any[] {
        let res = []
        //如果clientName为undefined 说明自己是客户端,收到的信息是服务器的消息   不需要把clientName传入参数列表中
        if (clientName != undefined) {
            res.push(clientName)
        }
        let offset = 0
        while (offset != data.length) {
            let type = data.readUInt8(offset)
            offset++
            switch (type) {
                case TypeNumber:
                    res.push(data.readDoubleLE(offset))
                    offset += 8;
                    break;
                case TypeString:
                    let strLen = data.readUInt32LE(offset);
                    offset += 4
                    res.push(data.slice(offset, offset + strLen).toString())
                    offset += strLen
                    break;
                case TypeBuffer:
                    let bufLen = data.readUInt32LE(offset);
                    offset += 4
                    let buf = data.slice(offset, offset + bufLen)
                    offset += bufLen
                    res.push(buf)
                    break;
                case TypeBoolean:
                    res.push(data.readUInt8(offset) == 1 ? true : false)
                    offset++
                    break;
                case TypeUndefined:
                    res.push(undefined)
                    break;
                default:
                    throw new Error('不支持的传递类型')
            }
        }
        return res
    }

}

let logger: ILog | Console = console;
export class RPC_CLIENT extends RPC_BASE {

    public isClose: boolean = true

    protected _socket: WS

    //断线重连的时间
    protected _timeReconnect = 10 * 1000

    public clientId: number

    private _host: string;
    private _port: number;
    private _serverName: string
    private _myName: string

    get name() {
        return this._serverName
    }
    get host() {
        return this._host
    }
    get port() {
        return this._port
    }
    async call(method: string, args: Array<any>) {
        if (this.isClose) {
            logger.error("call error ,do not connect to rpc server.  call method:", method)
            return
        }
        return await super.baseCall(method, args, this._socket)
    }

    send(method: string, args: Array<any>) {
        if (this.isClose) {
            logger.error("send error ,do not connect to rpc server. send method:", method)
            return
        }
        super.baseSend(method, args, this._socket)
    }

    /**
     * 连接RPC SERVER
     * @param serverInfo
     */
    private connectRpcServer() {
        this._sessionId = 1;
        let url = "ws://" + this._host + ":" + this._port
        let ws_client: WS = new WS(url)
        this._socket = ws_client;

        ws_client.on("open", async () => {
            this.isClose = false;
            logger.log("connect to rpc server success! ", this._serverName)
            let res = await this.call('handshake', [this._version, this._myName])
            this.onOpen()
        })

        ws_client.on('message', (msg: Buffer) => {
            super.onMessage(undefined, msg, ws_client)
        });

        //断线重连
        ws_client.on("close", () => {
            logger.log("rpc server close! ")
            if (this._sessionId == 2) {
                logger.error("maybe rpc version wrong , please cheack rpc version! ", this.host, this.port, this._serverName)
            }
            this.isClose = true;
            this.onClose()
        })
        //失败重连
        ws_client.on("error", (err) => {
            logger.error('rpc client error! ', err)
            this.isClose = true;
        })
    }

    onOpen() {

    }

    onClose() {

    }

    /**
     * 重连RPC SERVER
     */
    private setReconnectServer() {
        setInterval(() => {
            if (this.isClose) {
                this.connectRpcServer()
            }
        }, this._timeReconnect)
    }

    /**
     * 初始化RPC CLIENT
     */
    public startClient(host: string, port: number, serverName: string, myName: string, version: string, iLog: ILog) {
        logger = iLog;
        this._host = host;
        this._port = port;
        this._version = version;
        this._serverName = serverName;
        this._myName = myName;
        this.setReconnectServer()
        this.connectRpcServer();
    }
}

export class RPC_SERVER extends RPC_BASE {
    //默认监听端口
    private _defaultListenPort = 8033

    private _socketMap = new Map<string, WS>();
    get socketMap() { return this._socketMap; }

    /**
     * 初始化RPC SERVER
     * @param listenPort
     */
    public startServer(listenPort: number = this._defaultListenPort, version: string, iLog: ILog) {
        logger = iLog;
        this._version = version;
        this._sessionId = 2;
        let wss = new WS.Server({ port: listenPort });
        wss.on("connection", (ws: any, req) => {
            logger.log('rpc client connected ', req.connection.remoteAddress + ":" + req.connection.remotePort)
            ws.on('message', (msg: Buffer) => {
                super.onMessage(ws.clientName, msg, ws)
            });

            ws.on("error", (err: Error) => {
                logger.error("rpc client connection is error! ", err);
            });

            ws.on("close", () => {
                logger.log("rpc client disconnected! ", req.connection.remoteAddress + ":" + req.connection.remotePort)
                this._socketMap.delete(ws.clientName);
                this.onClose(ws.clientName);
            });
        })
    }

    onClose(clientName: string) {

    }

    async call(clientName: string, method: string, args: any[]) {
        const ws = this._socketMap.get(clientName);
        if (!ws) {
            logger.error(`call error ! client is undefine funcName:${method} args:${args}`)
            return
        }
        return await super.baseCall(method, args, ws)
    }

    send(clientName: string, method: string, args: any[]) {
        const ws = this._socketMap.get(clientName);
        if (!ws) {
            logger.error(`send error ! client is undefine funcName:${method} args:${args}`)
            return
        }
        super.baseSend(method, args, ws)
    }

}

