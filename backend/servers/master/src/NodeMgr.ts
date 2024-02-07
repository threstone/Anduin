import * as servers from '../../../common/config/servers.json';
import { getLogger } from 'log4js';
import { NodeWorker } from './NodeWorker';
import * as fs from 'fs';
import * as path from 'path';
const logger = getLogger(startupParam?.nodeId);
export class NodeMgr {

    public serverMap: Map<string, NodeWorker>;
    private _configMap: Map<string, ServerConfig>;
    watcher: fs.FSWatcher;
    private _configFilePath: string;

    constructor() {
        this.serverMap = new Map<string, NodeWorker>();
        this.ininConfigMap(servers);
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
        const serverConf = this._configMap.get(nodeId);
        if (!serverConf) {
            return;
        }
        this.startNode(serverConf);
    }

    public startServers() {
        this._configMap.forEach((serverConf) => {
            this.startNode(serverConf);
        });
    }

    private startNode(serverConf: ServerConfig) {
        const node = new NodeWorker(serverConf.serverType, serverConf, this);
        node.fork();
    }

    public restart(nodeId: string) {
        const node = this.serverMap.get(nodeId);
        const serverConfig = this._configMap.get(nodeId);
        if (!node || !serverConfig) {
            return;
        }
        node.restart(serverConfig);
    }

    private ininConfigMap(configs: any) {
        if (!this.watcher) {
            this._configFilePath = path.join(__dirname, '../../../common/config/servers.json');
            this.watcher = fs.watch(this._configFilePath, () => {
                logger.info('update servers.json');
                delete require.cache[this._configFilePath];
                this.ininConfigMap(require(this._configFilePath));
            })
        }

        this._configMap = new Map<string, ServerConfig>();
        const env = startupParam.env;
        const serversConfigs = configs[env];
        if (!serversConfigs) {
            logger.error(`缺少启动配置 env:${env}`);
            return;
        }

        const keys = Object.keys(serversConfigs);
        for (let index = 0; index < keys.length; index++) {
            const serverName = keys[index];
            const serverConfig = serversConfigs[serverName];
            if (!Array.isArray(serverConfig)) {
                continue;
            }

            for (let i = 0; i < serverConfig.length; i++) {
                const serverConf: ServerConfig = serverConfig[i];
                serverConf.env = env;
                serverConf.serverType = serverName;
                this._configMap.set(serverConf.nodeId, serverConf);
            }
        }
    }
}

