//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts
import * as RPC from "../RPC"
import { ILog } from "../../I"

let uuid = "ce5ae5c7-c2f9-4bde-a14d-b4dc71ff4200"

//服务器的虚函数定义
export abstract class HallRPCServer {
    private rpcServer: RPC.RPC_SERVER = new RPC.RPC_SERVER();
    private funs_: string[] = ["reqLogin", "reqRegister", "transferToHall", "userSocketClose"]
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

    //登录
    abstract reqLogin(clientName: string,buff:Buffer):Promise<Buffer>

    //注册
    abstract reqRegister(clientName: string,buff:Buffer):Promise<Buffer>

    //转发
    abstract transferToHall(clientName: string,uid:number,buff:Buffer):void

    //通知大厅玩家离线
    abstract userSocketClose(clientName: string,uid:number):void

    //s2c
    //主动告知网关转发消息
    async callTransferToGate(clientName:string,uid:number,buffer:Buffer):Promise<void>    {
        let args = [uid,buffer]
        let res: any = await this.rpc.call(clientName,"transferToGate", args)
        return res
    }

    sendTransferToGate(clientName:string,uid:number,buffer:Buffer)    {
        let args = [uid,buffer]
        this.rpc.send(clientName,"transferToGate",args)
    }

    //关闭对应uid的socket
    async callCloseUserSocket(clientName:string,uid:number):Promise<void>    {
        let args = [uid]
        let res: any = await this.rpc.call(clientName,"closeUserSocket", args)
        return res
    }

    sendCloseUserSocket(clientName:string,uid:number)    {
        let args = [uid]
        this.rpc.send(clientName,"closeUserSocket",args)
    }

}

//客户端的函数定义
export abstract class HallRPCClient {

    private myRpcClient = new RPC.RPC_CLIENT()
    private funs_: string[] = ["transferToGate", "closeUserSocket"]
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

    //登录
    async callReqLogin(buff:Buffer):Promise<Buffer>    {
        let args = [buff]
        let res: any = await this.rpc.call("reqLogin",args)
        return res
    }

    sendReqLogin(buff:Buffer)    {
        let args = [buff]
        this.rpc.send("reqLogin",args)
    }

    //注册
    async callReqRegister(buff:Buffer):Promise<Buffer>    {
        let args = [buff]
        let res: any = await this.rpc.call("reqRegister",args)
        return res
    }

    sendReqRegister(buff:Buffer)    {
        let args = [buff]
        this.rpc.send("reqRegister",args)
    }

    //转发
    async callTransferToHall(uid:number,buff:Buffer):Promise<void>    {
        let args = [uid,buff]
        let res: any = await this.rpc.call("transferToHall",args)
        return res
    }

    sendTransferToHall(uid:number,buff:Buffer)    {
        let args = [uid,buff]
        this.rpc.send("transferToHall",args)
    }

    //通知大厅玩家离线
    async callUserSocketClose(uid:number):Promise<void>    {
        let args = [uid]
        let res: any = await this.rpc.call("userSocketClose",args)
        return res
    }

    sendUserSocketClose(uid:number)    {
        let args = [uid]
        this.rpc.send("userSocketClose",args)
    }

    //s2c
    //主动告知网关转发消息
    abstract transferToGate(uid:number,buffer:Buffer):void

    //关闭对应uid的socket
    abstract closeUserSocket(uid:number):void

}