import { LauncherOption } from '../../../common/LauncherOption';
import * as servers from '../../../common/config/servers.json';
import { getLogger } from 'log4js';
import { NodeWorker } from './NodeWorker';
const logger = getLogger('master');
export class NodeMgr {

    serverMap: Map<string, NodeWorker>;

    constructor() {
        this.serverMap = new Map<string, NodeWorker>();
    }

    startServers(startupParam: LauncherOption) {
        const env = startupParam.env;
        const serversConfigs = servers[startupParam.env];
        if (!serversConfigs) {
            logger.error(`缺少启动配置 env:${env}`);
            return;
        }

        const keys = Object.keys(serversConfigs);
        for (let index = 0; index < keys.length; index++) {
            const serverName = keys[index];
            if (serverName!=='gate') {
                // continue
            }
            const serverList = serversConfigs[serverName];
            for (let i = 0; i < serverList.length; i++) {
                const serverConf: ServerConfig = serverList[i];
                serverConf.env = env;
                const node = new NodeWorker(serverName, serverConf);
                this.serverMap.set(serverConf.nodeId, node);
                node.fork();
            }
        }
    }
}

