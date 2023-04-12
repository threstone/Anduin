//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts

import { ILog } from "../../I"
import { RPCServer } from "../RPCServer";
import { RPCClient } from "../RPCClient";

let uuid = "050b4b27-9af2-4264-a59a-d8422c70ce5f"

//服务器的虚函数定义
export abstract class RelationRPCServer extends RPCServer {
    constructor(port: number, logger: ILog) {
        super(port, logger, uuid)
        this._funs = ["userOnline", "userOffline", "transferToRelation"]; 
        this.init();
    }

    //用户上线
    abstract userOnline(clientName: string,uid:number,nick:string):void

    //用户离线
    abstract userOffline(clientName: string,uid:number):void

    //转发
    abstract transferToRelation(clientName: string,uid:number,buff:Buffer):Promise<Buffer>

    //s2c
    //主动告知网关转发消息
    callTransferToGate(clientName:string,uid:number,buffer:Buffer): Promise<void>    {
        let args = [uid,buffer]
        return this.rpc.call(clientName,"transferToGate", args)
    }

    sendTransferToGate(clientName:string,uid:number,buffer:Buffer){
        let args = [uid,buffer]
        this.rpc.send(clientName,"transferToGate",args)
    }

    //广播消息
    callBroadcast(clientName:string,buffer:Buffer): Promise<void>    {
        let args = [buffer]
        return this.rpc.call(clientName,"broadcast", args)
    }

    sendBroadcast(clientName:string,buffer:Buffer){
        let args = [buffer]
        this.rpc.send(clientName,"broadcast",args)
    }

}

//客户端的函数定义
export abstract class RelationRPCClient extends RPCClient{

    constructor(host: string, port: number, serverName: string, myName: string, logger: ILog) {
        super(host, port, serverName, myName, uuid, logger);
        this._funs = ["transferToGate", "broadcast"];
        this.init();
    }
    //用户上线
    async callUserOnline(uid:number,nick:string): Promise<void>    {
        let args = [uid,nick]
        let res: any = await this.rpc.call("userOnline",args)
        return res
    }

    sendUserOnline(uid:number,nick:string)    {
        let args = [uid,nick]
        this.rpc.send("userOnline",args)
    }

    //用户离线
    async callUserOffline(uid:number): Promise<void>    {
        let args = [uid]
        let res: any = await this.rpc.call("userOffline",args)
        return res
    }

    sendUserOffline(uid:number)    {
        let args = [uid]
        this.rpc.send("userOffline",args)
    }

    //转发
    async callTransferToRelation(uid:number,buff:Buffer):Promise<Buffer>    {
        let args = [uid,buff]
        let res: any = await this.rpc.call("transferToRelation",args)
        return res
    }

    sendTransferToRelation(uid:number,buff:Buffer)    {
        let args = [uid,buff]
        this.rpc.send("transferToRelation",args)
    }

    //s2c
    //主动告知网关转发消息
    abstract transferToGate(uid:number,buffer:Buffer):void

    //广播消息
    abstract broadcast(buffer:Buffer):void

}