import { NodeWorker } from '../../core/woker/NodeWorker';
export class NodeMgr {
    public serverMap: Map<string, NodeWorker>;

    constructor() {
        this.serverMap = new Map<string, NodeWorker>();
    }

    public getServerInfo() {
        const list: ServerConfig[] = [];
        this.serverMap.forEach((node) => {
            list.push(node.serverConfig);
        })
        return list;
    }

    public startServer(nodeId: string) {
        if (this.serverMap.has(nodeId)) {
            return;
        }
        const serverConf = serversConfigMap.get(nodeId);
        if (!serverConf) {
            return;
        }
        this.startNode(serverConf);
    }

    public startServers() {
        serversConfigMap.forEach((serverConf) => {
            if (serverConf.serverType !== 'master') {
                this.startNode(serverConf);
            }
        });
    }

    private startNode(serverConf: ServerConfig) {
        const node = new NodeWorker(serverConf.serverType, serverConf, this);
        node.fork();
    }

    public restart(nodeId: string) {
        const node = this.serverMap.get(nodeId);
        const serverConfig = serversConfigMap.get(nodeId);
        if (!node || !serverConfig) {
            return;
        }
        node.restart(serverConfig);
    }
}

