import * as RPC from "./RPC"
export abstract class RPCServer {
    private rpcServer: RPC.RPC_SERVER = new RPC.RPC_SERVER();
    protected _funs: string[]
    get funs() { return this._funs }
    get rpc() { return this.rpcServer };

    constructor(port: number, logger: ILog, uuid: string) {
        this.rpcServer.startServer(port, uuid, logger);
    }

    init() {
        this.rpc.registerFuns(this)
        this.rpc.onClose = this.onClose.bind(this)
    }

    onClose(clientName: string) {

    }
}