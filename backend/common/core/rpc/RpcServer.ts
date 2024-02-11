import { getLogger, configure } from "log4js";
import { ServerInit } from "../ServerInit";
import * as loggerConfig from './config/log4js.json';
import * as WS from "ws"
import { RpcUtils } from "./RpcUtils";

ServerInit.init();
configure(loggerConfig);
const logger = getLogger(startupParam.nodeId);
class RpcServer {

    private _serverMap = new Map<string, Map<string, RpcSession>>();

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
                this._serverMap.get(session.serverType)?.delete(session.nodeId);
            });
        })
    }

    private handleMessage(session: RpcSession, buffer: Buffer) {
        const rpcMsg = RpcUtils.decodeMessage(buffer);
        if (session.isInit === false) {
            session.isInit = true;
            session.serverType = rpcMsg.serverName;
            session.nodeId = rpcMsg.className;
            let nodeMap = this._serverMap.get(session.serverType);
            if (!nodeMap) {
                nodeMap = new Map();
                this._serverMap.set(session.serverType, nodeMap);
            }
            nodeMap.set(session.nodeId, session);
            return;
        }
        const client = this._serverMap.get(rpcMsg.serverName)?.get('');

        // 转发
        console.log(rpcMsg);
    }
}

interface RpcSession {
    socket: WS;
    isInit: boolean;
    serverType?: string;
    nodeId?: string;
}

export const server = new RpcServer();