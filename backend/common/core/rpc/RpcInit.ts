
export class RpcInit {
    static init() {
        if (startupParam.env === 'dev' && startupParam.nodeId === 'master') {
            this.initRpcDeclare();
        }

        this.initRpcModule();
    }

    private static initRpcDeclare() {
        throw new Error("Method not implemented.");
    }

    private static initRpcModule() {

    }
}