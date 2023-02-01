//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts

import { ILog } from "../../I"
import { RPCServer } from "../RPCServer";
import { RPCClient } from "../RPCClient";

let uuid = "8c87111f-05c9-4ffe-9642-1229afedf683"

//服务器的虚函数定义
export abstract class GameRPCServer extends RPCServer {
    constructor(port: number, logger: ILog) {
        super(port, logger, uuid)
        this._funs = ["transferToGame"];
        this.init();
    }

    //转发
    abstract transferToGame(clientName: string, uid: number, buff: Buffer): Promise<Buffer>

    //s2c
    //主动告知网关转发消息
    async callTransferToGate(clientName: string, uid: number, buffer: Buffer): Promise<void
    > {
        let args = [uid, buffer]
        let res: any = await this.rpc.call(clientName, "transferToGate", args)
        return res
    }

    sendTransferToGate(clientName: string, uid: number, buffer: Buffer) {
        let args = [uid, buffer]
        this.rpc.send(clientName, "transferToGate", args)
    }

}

//客户端的函数定义
export abstract class GameRPCClient extends RPCClient {

    constructor(host: string, port: number, serverName: string, myName: string, logger: ILog) {
        super(host, port, serverName, myName, uuid, logger);
        this._funs = ["transferToGate"];
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

    //s2c
    //主动告知网关转发消息
    abstract transferToGate(uid: number, buffer: Buffer): void

}