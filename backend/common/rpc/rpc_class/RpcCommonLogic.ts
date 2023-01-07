//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts
import * as RPC from "../RPC"
import { ILog } from "../../I"

let uuid = "6f1a1181-b24b-4903-9449-004b4072d648"

//服务器的虚函数定义
export abstract class LogicRPCServer {
    private rpcServer: RPC.RPC_SERVER = new RPC.RPC_SERVER();
    private funs_: string[] = ["login", "transfer", "getUidByToken", "userLogout"]
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
    abstract login(clientId:number,token:string,isDebug:boolean,ip:string,nodeId:number):Promise<Buffer>

    //转发
    abstract transfer(clientId:number,buff:Buffer):Promise<Buffer>

    //通过token拿uid
    abstract getUidByToken(clientId:number,token:string):Promise<number>

    //玩家下线
    abstract userLogout(clientId:number,uid:number):Promise<boolean>

    //s2c
    //剔掉玩家
    async callKickUser(clientId:number,uid:number,buffer:Buffer):Promise<boolean>    {
        let args = [uid,buffer]
        let res: any = await this.rpc.call(clientId,"kickUser",args)
        return res
    }

    sendKickUser(clientId:number,uid:number,buffer:Buffer)    {
        let args = [uid,buffer]
        this.rpc.send(clientId,"kickUser",args)
    }

    // 转发来自login的消息给前端
    async callLoginTransfer(clientId:number,uid:number,buffer:Buffer):Promise<boolean>    {
        let args = [uid,buffer]
        let res: any = await this.rpc.call(clientId,"loginTransfer",args)
        return res
    }

    sendLoginTransfer(clientId:number,uid:number,buffer:Buffer)    {
        let args = [uid,buffer]
        this.rpc.send(clientId,"loginTransfer",args)
    }

    //踢掉所有在线玩家
    async callKickAllUser(clientId:number,buffer:Buffer):Promise<string>    {
        let args = [buffer]
        let res: any = await this.rpc.call(clientId,"kickAllUser",args)
        return res
    }

    sendKickAllUser(clientId:number,buffer:Buffer)    {
        let args = [buffer]
        this.rpc.send(clientId,"kickAllUser",args)
    }

    //踢掉指定在玩某些游戏的玩家
    async callKickUserByGameId(clientId:number,gameIds:string,buffer:Buffer):Promise<string>    {
        let args = [gameIds,buffer]
        let res: any = await this.rpc.call(clientId,"kickUserByGameId",args)
        return res
    }

    sendKickUserByGameId(clientId:number,gameIds:string,buffer:Buffer)    {
        let args = [gameIds,buffer]
        this.rpc.send(clientId,"kickUserByGameId",args)
    }

    //主动告知网关转发消息
    async callTransferToGate(clientId:number,uid:number,buffer:Buffer):Promise<boolean>    {
        let args = [uid,buffer]
        let res: any = await this.rpc.call(clientId,"transferToGate",args)
        return res
    }

    sendTransferToGate(clientId:number,uid:number,buffer:Buffer)    {
        let args = [uid,buffer]
        this.rpc.send(clientId,"transferToGate",args)
    }

}

//客户端的函数定义
export abstract class LogicRPCClient {

    private myRpcClient = new RPC.RPC_CLIENT()
    private funs_: string[] = ["kickUser", "loginTransfer", "kickAllUser", "kickUserByGameId", "transferToGate"]
    get funs() { return this.funs_ }
    get rpc() { return this.myRpcClient }
    get clientId() { return this.rpc.clientId }
    get port() { return this.rpc.port }
    get host() { return this.rpc.host }
    get isClose() { return this.rpc.isClose }
    constructor(host: string, port: number, serverName: string, logger: ILog) {
        this.myRpcClient.startClient(host, port, serverName, uuid, logger)
    }

    init() {
        this.rpc.registerFuns(this)
        this.rpc.onOpen = this.onOpen.bind(this)
        this.rpc.onClose = this.onClose.bind(this)
    }

    abstract onOpen();
    abstract onClose();

    //登录
    async callLogin(token:string,isDebug:boolean,ip:string,nodeId:number):Promise<Buffer>    {
        let args = [token,isDebug,ip,nodeId]
        let res: any = await this.rpc.call("login",args)
        return res
    }

    sendLogin(token:string,isDebug:boolean,ip:string,nodeId:number)    {
        let args = [token,isDebug,ip,nodeId]
        this.rpc.send("login",args)
    }

    //转发
    async callTransfer(buff:Buffer):Promise<Buffer>    {
        let args = [buff]
        let res: any = await this.rpc.call("transfer",args)
        return res
    }

    sendTransfer(buff:Buffer)    {
        let args = [buff]
        this.rpc.send("transfer",args)
    }

    //通过token拿uid
    async callGetUidByToken(token:string):Promise<number>    {
        let args = [token]
        let res: any = await this.rpc.call("getUidByToken",args)
        return res
    }

    sendGetUidByToken(token:string)    {
        let args = [token]
        this.rpc.send("getUidByToken",args)
    }

    //玩家下线
    async callUserLogout(uid:number):Promise<boolean>    {
        let args = [uid]
        let res: any = await this.rpc.call("userLogout",args)
        return res
    }

    sendUserLogout(uid:number)    {
        let args = [uid]
        this.rpc.send("userLogout",args)
    }

    //s2c
    //剔掉玩家
    abstract kickUser(clientId:number,uid:number,buffer:Buffer):Promise<boolean>

    // 转发来自login的消息给前端
    abstract loginTransfer(clientId:number,uid:number,buffer:Buffer):Promise<boolean>

    //踢掉所有在线玩家
    abstract kickAllUser(clientId:number,buffer:Buffer):Promise<string>

    //踢掉指定在玩某些游戏的玩家
    abstract kickUserByGameId(clientId:number,gameIds:string,buffer:Buffer):Promise<string>

    //主动告知网关转发消息
    abstract transferToGate(clientId:number,uid:number,buffer:Buffer):Promise<boolean>

}