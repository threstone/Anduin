//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts
import * as RPC from "./RPC"
import { ILog } from "../I"

let uuid = "6ef03629-a2f2-465e-854d-dd6c17ba333d"

//服务器的虚函数定义
export abstract class HallRPCServer {
    private rpcServer: RPC.RPC_SERVER = new RPC.RPC_SERVER();
    private funs_: string[] = ["login"]
    get funs() { return this.funs_ }
    get rpc() { return this.rpcServer };

    constructor(port: number, logger: ILog) {
        this.rpcServer.startServer(port, uuid, logger);
    }

    init() {
        this.rpc.registerFuns(this)
        this.rpc.onClose = this.onClose.bind(this)
    }

    onClose(clientId: number) {

    }

    //登录
    abstract login(clientId: number, token: string, isDebug: boolean, ip: string, nodeId: number): Promise<Buffer>

    //s2c
    //主动告知网关转发消息
    async callTransferToGate(clientId: number, uid: number, buffer: Buffer): Promise<boolean> {
        let args = [uid, buffer]
        let res: any = await this.rpc.call(clientId, "transferToGate", args)
        return res
    }

    sendTransferToGate(clientId: number, uid: number, buffer: Buffer) {
        let args = [uid, buffer]
        this.rpc.send(clientId, "transferToGate", args)
    }

}

//客户端的函数定义
export abstract class HallRPCClient {

    private myRpcClient = new RPC.RPC_CLIENT()
    private funs_: string[] = ["transferToGate"]
    get funs() { return this.funs_ }
    get rpc() { return this.myRpcClient }
    get clientId() { return this.rpc.clientId }
    get port() { return this.rpc.port }
    get host() { return this.rpc.host }
    get isClose() { return this.rpc.isClose }
    constructor(host: string, port: number, name: string, logger: ILog) {
        this.myRpcClient.startClient(host, port, name, uuid, logger)
    }

    init() {
        this.rpc.registerFuns(this)
        this.rpc.onOpen = this.onOpen.bind(this)
        this.rpc.onClose = this.onClose.bind(this)
    }

    abstract onOpen();
    abstract onClose();

    //登录
    async callLogin(token: string, isDebug: boolean, ip: string, nodeId: number): Promise<Buffer> {
        let args = [token, isDebug, ip, nodeId]
        let res: any = await this.rpc.call("login", args)
        return res
    }

    sendLogin(token: string, isDebug: boolean, ip: string, nodeId: number) {
        let args = [token, isDebug, ip, nodeId]
        this.rpc.send("login", args)
    }

    //s2c
    //主动告知网关转发消息
    abstract transferToGate(clientId: number, uid: number, buffer: Buffer): boolean

}