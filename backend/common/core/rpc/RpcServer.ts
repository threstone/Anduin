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
    private randIndex = 0;

    constructor(port = startupParam.port) {
        // todo 暂时先用ws把功能实现,实现后再修改传输层
        let wss = new WS.Server({ port });
        wss.on("connection", (ws: WS, req) => {
            const session: RpcSession = { socket: ws, isInit: false }
            ws.on('message', this.handleMessage.bind(this, session));

            ws.on("error", (err: Error) => {
                logger.error("rpc client connection is error! ", err);
            });

            ws.on("close", () => {
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
            const rpcMsg = RpcUtils.decodeMessage(buffer);
            session.isInit = true;
            session.serverType = rpcMsg.serverName;
            session.nodeId = rpcMsg.className;

            let nodeList = this._serverMapList.get(session.serverType);
            if (!nodeList) {
                nodeList = [];
                this._serverMapList.set(session.serverType, nodeList);
            }
            nodeList.push(session);
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
                // todo
        }

    }

    private getRouteClient(buffer: Buffer) {
        const rpcMsg = RpcUtils.getRouteInfo(buffer);
        if (rpcMsg.routeOption.type === 'all') {
            return this._serverMapList.get(rpcMsg.serverName);
        } else if (rpcMsg.routeOption.type === 'target') {
            const nodeList = this._serverMapList.get(rpcMsg.serverName);
            for (let index = 0; index < nodeList?.length; index++) {
                const session = nodeList[index];
                if (session.nodeId === rpcMsg.routeOption.nodeId) {
                    return [session];
                }
            }
        } else {
            const nodeList = this._serverMapList.get(rpcMsg.serverName);
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