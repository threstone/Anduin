import { ILog } from "../I"
import * as RPC from "./RPC"
export abstract class RPCClient {
    private myRpcClient = new RPC.RPC_CLIENT()
    protected _funs: string[]
    get funs() { return this._funs }
    get rpc() { return this.myRpcClient }
    get port() { return this.rpc.port }
    get host() { return this.rpc.host }
    get isClose() { return this.rpc.isClose }
    get name() { return this.rpc.name }
    constructor(host: string, port: number, serverName: string, myName: string, uuid: string, logger: ILog) {
        this.myRpcClient.startClient(host, port, serverName, myName, uuid, logger)
    }

    init() {
        this.rpc.registerFuns(this)
        this.rpc.onOpen = this.onOpen.bind(this)
        this.rpc.onClose = this.onClose.bind(this)
    }

    abstract onOpen();
    abstract onClose();

}