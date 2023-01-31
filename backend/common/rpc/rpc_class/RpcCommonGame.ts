//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts
import * as RPC from "../RPC"
import { ILog } from "../../I"

let uuid = "be06f208-920b-464a-9163-8707776388db"

//服务器的虚函数定义
export abstract class GameRPCServer {
    private rpcServer: RPC.RPC_SERVER = new RPC.RPC_SERVER();
    private funs_: string[] = ["transferToGame"]
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

    onClose(clientName: string) {

    }

    //转发
    abstract transferToGame(clientName: string,uid:number,buff:Buffer):Promise<Buffer>

    //s2c
    //主动告知网关转发消息
    async callTransferToGate(clientName:string,uid:number,buffer:Buffer):Promise<void>    {
        let args = [uid,buffer]
        let res: any = await this.rpc.call(clientName,"transferToGate", args)
        return res
    }

    sendTransferToGate(clientName:string,uid:number,buffer:Buffer)    {
        let args = [uid,buffer]
        this.rpc.send(clientName,"transferToGate",args)
    }

}

//客户端的函数定义
export abstract class GameRPCClient {

    private myRpcClient = new RPC.RPC_CLIENT()
    private funs_: string[] = ["transferToGate"]
    get funs() { return this.funs_ }
    get rpc() { return this.myRpcClient }
    get port() { return this.rpc.port }
    get host() { return this.rpc.host }
    get isClose() { return this.rpc.isClose }
    constructor(host: string, port: number, serverName: string, myName: string, logger: ILog) {
        this.myRpcClient.startClient(host, port, serverName, myName, uuid, logger)
    }

    init() {
        this.rpc.registerFuns(this)
        this.rpc.onOpen = this.onOpen.bind(this)
        this.rpc.onClose = this.onClose.bind(this)
    }

    abstract onOpen();
    abstract onClose();

    //转发
    async callTransferToGame(uid:number,buff:Buffer):Promise<Buffer>    {
        let args = [uid,buff]
        let res: any = await this.rpc.call("transferToGame",args)
        return res
    }

    sendTransferToGame(uid:number,buff:Buffer)    {
        let args = [uid,buff]
        this.rpc.send("transferToGame",args)
    }

    //s2c
    //主动告知网关转发消息
    abstract transferToGate(uid:number,buffer:Buffer):void

}