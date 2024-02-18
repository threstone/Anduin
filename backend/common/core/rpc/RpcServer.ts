import { getLogger, configure } from "log4js";
import { ServerInit } from "../ServerInit";
import * as loggerConfig from './config/log4js.json';
import * as WS from "ws"
import { RpcMessageType, RpcUtils } from "./RpcUtils";

ServerInit.init();
configure(loggerConfig);
const logger = getLogger(startupParam.nodeId);
class RpcServer {

    private _serverMapList = new Map<string, RpcSession[]>();
    private _nodeIdMap = new Map<string, RpcSession>();
    private randIndex = 0;

    constructor(port = startupParam.port) {
        // todo 暂时先用ws把功能实现,实现后再修改传输层
        let wss = new WS.Server({ port });
        logger.info(`rpc server start, port:${port}`)
        wss.on("connection", (ws: WS, req) => {
            const session: RpcSession = { socket: ws, isInit: false }
            ws.on('message', this.handleMessage.bind(this, session));

            ws.on("error", (err: Error) => {
                logger.error("rpc client connection is error! ", err);
            });

            ws.on("close", () => {
                this._nodeIdMap.delete(session.nodeId);
                const nodeList = this._serverMapList.get(session.serverType);
                for (let index = 0; index < nodeList.length; index++) {
                    const tempSession = nodeList[index];
                    if (session.nodeId === tempSession.nodeId) {
                        nodeList.splice(index, 1);
                        break;
                    }
                }
            });
        })
    }

    private handleMessage(session: RpcSession, buffer: Buffer) {
        if (session.isInit === false) {
            const rpcMsg = RpcUtils.decodeReqMsg(buffer);
            session.isInit = true;
            session.serverType = rpcMsg.serverName;
            session.nodeId = rpcMsg.className;

            let nodeList = this._serverMapList.get(session.serverType);
            if (!nodeList) {
                nodeList = [];
                this._serverMapList.set(session.serverType, nodeList);
            }
            nodeList.push(session);
            this._nodeIdMap.set(session.nodeId, session);
            return;
        }

        switch (RpcUtils.getRpcMsgType(buffer)) {
            case RpcMessageType.call:
            case RpcMessageType.send:
                // 转发
                const clients = this.getRouteClient(buffer);
                clients?.forEach((c) => {
                    c.socket.send(buffer);
                });
                break;
            case RpcMessageType.result:
                const nodeId = RpcUtils.getResultTo(buffer);
                this._nodeIdMap.get(nodeId)?.socket.send(buffer);
                break;
        }

    }

    private getRouteClient(buffer: Buffer) {
        const routeOptions: RpcRouterOptions = {};
        const offset = RpcUtils.readRouteOptions(routeOptions, buffer);
        if (routeOptions.type === 1/* target */) {
            return [this._nodeIdMap.get(routeOptions.nodeId)];
        } else if (routeOptions.type === 2/* all */) {
            const serverName = RpcUtils.readStringFromBuffer(buffer, offset);
            return this._serverMapList.get(serverName);
        } else {/* random */
            const serverName = RpcUtils.readStringFromBuffer(buffer, offset);
            const nodeList = this._serverMapList.get(serverName);
            return [nodeList[(this.randIndex++) % nodeList.length]]
        }
    }

}

interface RpcSession {
    socket: WS;
    isInit: boolean;
    serverType?: string;
    nodeId?: string;
}

export const server = new RpcServer();