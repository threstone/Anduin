//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts
import * as RPC from "../RPC"
import { ILog } from "../../I"

let uuid = "ffeaa4b5-e5d4-4cd3-ad53-72bf7bd33d4f"

//服务器的虚函数定义
export abstract class RelationRPCServer {
    private rpcServer: RPC.RPC_SERVER = new RPC.RPC_SERVER();
    private funs_: string[] = ["userOnline", "userOffline", "transferTRelation"]
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

    //用户上线
    abstract userOnline(clientName: string,uid:number,nick:string):void

    //用户离线
    abstract userOffline(clientName: string,uid:number):void

    //转发
    abstract transferTRelation(clientName: string,uid:number,buff:Buffer):Promise<Buffer>

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

    //广播消息
    async callBroadcast(clientName:string,buffer:Buffer):Promise<void>    {
        let args = [buffer]
        let res: any = await this.rpc.call(clientName,"broadcast", args)
        return res
    }

    sendBroadcast(clientName:string,buffer:Buffer)    {
        let args = [buffer]
        this.rpc.send(clientName,"broadcast",args)
    }

}

//客户端的函数定义
export abstract class RelationRPCClient {

    private myRpcClient = new RPC.RPC_CLIENT()
    private funs_: string[] = ["transferToGate", "broadcast"]
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

    //用户上线
    async callUserOnline(uid:number,nick:string):Promise<void>    {
        let args = [uid,nick]
        let res: any = await this.rpc.call("userOnline",args)
        return res
    }

    sendUserOnline(uid:number,nick:string)    {
        let args = [uid,nick]
        this.rpc.send("userOnline",args)
    }

    //用户离线
    async callUserOffline(uid:number):Promise<void>    {
        let args = [uid]
        let res: any = await this.rpc.call("userOffline",args)
        return res
    }

    sendUserOffline(uid:number)    {
        let args = [uid]
        this.rpc.send("userOffline",args)
    }

    //转发
    async callTransferTRelation(uid:number,buff:Buffer):Promise<Buffer>    {
        let args = [uid,buff]
        let res: any = await this.rpc.call("transferTRelation",args)
        return res
    }

    sendTransferTRelation(uid:number,buff:Buffer)    {
        let args = [uid,buff]
        this.rpc.send("transferTRelation",args)
    }

    //s2c
    //主动告知网关转发消息
    abstract transferToGate(uid:number,buffer:Buffer):void

    //广播消息
    abstract broadcast(buffer:Buffer):void

}