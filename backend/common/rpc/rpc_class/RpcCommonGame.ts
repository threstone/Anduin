//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts

import { ILog } from "../../I"
import { RPCServer } from "../RPCServer";
import { RPCClient } from "../RPCClient";

let uuid = "44c676e6-b82c-4fd5-ab91-f4901a8d31eb"

//服务器的虚函数定义
export abstract class GameRPCServer extends RPCServer {
    constructor(port: number, logger: ILog) {
        super(port, logger, uuid)
        this._funs = ["transferToGame", "userOffline"];
        this.init();
    }

    //转发
    abstract transferToGame(clientName: string, uid: number, buff: Buffer): Promise<Buffer>

    //用户离线
    abstract userOffline(clientName: string, uid: number): void

    //s2c
    //主动告知网关转发消息
    callTransferToGate(clientName: string, uid: number, buffer: Buffer): Promise<void
    > {
        let args = [uid, buffer]
        return this.rpc.call(clientName, "transferToGate", args)
    }

    sendTransferToGate(clientName: string, uid: number, buffer: Buffer) {
        let args = [uid, buffer]
        this.rpc.send(clientName, "transferToGate", args)
    }

    //将用户绑定到自身
    callBindUserGameNode(clientName: string, uid: number): Promise<boolean> {
        let args = [uid]
        return this.rpc.call(clientName, "bindUserGameNode", args)
    }

    sendBindUserGameNode(clientName: string, uid: number) {
        let args = [uid]
        this.rpc.send(clientName, "bindUserGameNode", args)
    }

    //解除绑定用户的gameNode
    callUnbindUserGameNode(clientName: string, uid: number): Promise<boolean> {
        let args = [uid]
        return this.rpc.call(clientName, "unbindUserGameNode", args)
    }

    sendUnbindUserGameNode(clientName: string, uid: number) {
        let args = [uid]
        this.rpc.send(clientName, "unbindUserGameNode", args)
    }

}

//客户端的函数定义
export abstract class GameRPCClient extends RPCClient {

    constructor(host: string, port: number, serverName: string, myName: string, logger: ILog) {
        super(host, port, serverName, myName, uuid, logger);
        this._funs = ["transferToGate", "bindUserGameNode", "unbindUserGameNode"];
        this.init();
    }
    //转发
    async callTransferToGame(uid: number, buff: Buffer): Promise<Buffer> {
        let args = [uid, buff]
        let res: any = await this.rpc.call("transferToGame", args)
        return res
    }

    sendTransferToGame(uid: number, buff: Buffer) {
        let args = [uid, buff]
        this.rpc.send("transferToGame", args)
    }

    //用户离线
    async callUserOffline(uid: number): Promise<void
    > {
        let args = [uid]
        let res: any = await this.rpc.call("userOffline", args)
        return res
    }

    sendUserOffline(uid: number) {
        let args = [uid]
        this.rpc.send("userOffline", args)
    }

    //s2c
    //主动告知网关转发消息
    abstract transferToGate(uid: number, buffer: Buffer): void

    //将用户绑定到自身
    abstract bindUserGameNode(uid: number): Promise<boolean>

    //解除绑定用户的gameNode
    abstract unbindUserGameNode(uid: number): Promise<boolean>

}