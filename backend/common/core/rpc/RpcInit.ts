
export class RpcInit {
    static init() {
        this.initRpcDeclare();
        this.initRpcModule();
    }

    /** 测试环境生成声明文件 */
    private static initRpcDeclare() {
        if (startupParam.nodeId !== 'master' || serversConfigMap.get('master').isTest !== true) {
            return;
        }
    }

    private static initRpcModule() {

    }
}