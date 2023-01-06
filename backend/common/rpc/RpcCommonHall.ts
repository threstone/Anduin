//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts
import * as RPC from "./RPC"
import { ILog } from "../I"

let uuid = "edd68b12-f3c3-4544-9264-fd6e86d3e8cb"

//服务器的虚函数定义
export abstract class HallRPCServer {
    private rpcServer: RPC.RPC_SERVER = new RPC.RPC_SERVER();
    private funs_: string[] = ["reqLogin", "reqRegister", "transferToHall"]
    get funs() { return this.funs_ }
    get rpc() { return this.rpcServer };

    constructor(port: number, logger: ILog) {
        this.rpcServer.startServer(port, uuid, logger);
        this.init();
    }

    init() {
        this.rpc.registerFuns(this)
        this.rpc.onClose = this.onClose.bind(this)
    }

    onClose(clientId: number) {

    }

    //登录
    abstract reqLogin(clientId: number, buff: Buffer): Promise<number>

    //注册
    abstract reqRegister(clientId: number, buff: Buffer): Promise<Buffer>

    //转发
    abstract transferToHall(clientId: number, uid: number, buff: Buffer): void

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
    async callReqLogin(buff: Buffer): Promise<number> {
        let args = [buff]
        let res: any = await this.rpc.call("reqLogin", args)
        return res
    }

    sendReqLogin(buff: Buffer) {
        let args = [buff]
        this.rpc.send("reqLogin", args)
    }

    //注册
    async callReqRegister(buff: Buffer): Promise<Buffer> {
        let args = [buff]
        let res: any = await this.rpc.call("reqRegister", args)
        return res
    }

    sendReqRegister(buff: Buffer) {
        let args = [buff]
        this.rpc.send("reqRegister", args)
    }

    //转发
    async callTransferToHall(uid: number, buff: Buffer): Promise<void> {
        let args = [uid, buff]
        let res: any = await this.rpc.call("transferToHall", args)
        return res
    }

    sendTransferToHall(uid: number, buff: Buffer) {
        let args = [uid, buff]
        this.rpc.send("transferToHall", args)
    }

    //s2c
    //主动告知网关转发消息
    abstract transferToGate(clientId: number, uid: number, buffer: Buffer): boolean

}