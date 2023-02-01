//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts

import { ILog } from "../../I"
import { RPCServer } from "../RPCServer";
import { RPCClient } from "../RPCClient";

let uuid = "f80b7bc1-e3fb-4422-9b9e-41b041b70afa"

//服务器的虚函数定义
export abstract class HallRPCServer extends RPCServer {
    constructor(port: number, logger: ILog) {
        super(port, logger, uuid)
        this._funs = ["reqLogin", "reqRegister", "transferToHall"]; 
        this.init();
    }

    //登录
    abstract reqLogin(clientName: string,buff:Buffer):Promise<Buffer>

    //注册
    abstract reqRegister(clientName: string,buff:Buffer):Promise<Buffer>

    //转发
    abstract transferToHall(clientName: string,uid:number,buff:Buffer):Promise<Buffer>

    //s2c
    //主动告知网关转发消息
    async callTransferToGate(clientName:string,uid:number,buffer:Buffer): Promise < void>     {
        let args = [uid,buffer]
        let res: any = await this.rpc.call(clientName,"transferToGate", args)
        return res
    }

    sendTransferToGate(clientName:string,uid:number,buffer:Buffer)    {
        let args = [uid,buffer]
        this.rpc.send(clientName,"transferToGate",args)
    }

    //关闭对应uid的socket
    async callCloseUserSocket(clientName:string,uid:number): Promise < void>     {
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
export abstract class HallRPCClient extends RPCClient{

    constructor(host: string, port: number, serverName: string, myName: string, logger: ILog) {
        super(host, port, serverName, myName, uuid, logger);
        this._funs = ["transferToGate", "closeUserSocket"];
        this.init();
    }
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
    async callTransferToHall(uid:number,buff:Buffer):Promise<Buffer>    {
        let args = [uid,buff]
        let res: any = await this.rpc.call("transferToHall",args)
        return res
    }

    sendTransferToHall(uid:number,buff:Buffer)    {
        let args = [uid,buff]
        this.rpc.send("transferToHall",args)
    }

    //s2c
    //主动告知网关转发消息
    abstract transferToGate(uid:number,buffer:Buffer):void

    //关闭对应uid的socket
    abstract closeUserSocket(uid:number):void

}