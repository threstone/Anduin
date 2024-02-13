import { Logger, getLogger } from "log4js";
import * as WS from "ws";
import * as path from "path";
import { RpcMessageType, RpcUtils } from "./RpcUtils";

let logger: Logger;
export class RpcClient {

    private _sessionMap = new Map<number, CallReq>();
    private _sessionId: number = 1;
    private _socket: WS;
    public isClose: boolean = true;
    private _ip: string;
    private _port: number;

    constructor(ip: string, port: number) {
        logger = getLogger(startupParam.nodeId);
        this._ip = ip;
        this._port = port;
        setInterval(this.clearTimeOutReq.bind(this), 3000);
        this.connectRpcServer();
        this.setReconnectServer();
    }

    /** 清理过期请求 */
    private clearTimeOutReq() {
        const now = Date.now();
        this._sessionMap.forEach((req, sessionId, map) => {
            if (req.sendTime + 15000 < now) {
                logger.error(`reqest time out :${req.reqInfo}`)
                req.reject();
                map.delete(sessionId);
            }
        })
    }

    /**
     * 重连RPC SERVER
     */
    private setReconnectServer() {
        setInterval(() => {
            if (this.isClose) {
                this.connectRpcServer()
            }
        }, 15000)
    }

    private connectRpcServer() {
        this._socket && this._socket.terminate();
        const url = "ws://" + this._ip + ":" + this._port;
        const socket: WS = new WS(url);
        this._socket = socket;

        socket.on("open", async () => {
            this.isClose = false;
            // 第一条消息告知客户端信息
            this.send(serverConfig.serverType, serverConfig.nodeId, 'clientInfo', {}, []);
            rpc.relation.userRemote.sendUserOffline({}, 123455);
            rpc.relation.userRemote.callUserOffline({}, 444); logger.log('111');
        })

        socket.on('message', this.handleMessage.bind(this));

        //断线重连
        socket.on("close", () => {
            logger.log("rpc server close! ", this._port);
            this.isClose = true;
        })

        //失败重连
        socket.on("error", (err) => {
            logger.error('rpc client error! ', err);
            this.isClose = true;
        })
    }

    private handleMessage(buffer: Buffer) {
        // 客户端收到 call  send  result
        const rpcMsg = RpcUtils.decodeMessage(buffer);
        switch (rpcMsg.type) {
            case RpcMessageType.call:
                return this.handleCall(rpcMsg);
            case RpcMessageType.send:
                return this.handleSend(rpcMsg);
            case RpcMessageType.result:
                this.handleResult(rpcMsg);
                break;
        }
    }

    private handleResult(rpcMsg: RpcReqMsg) {
        console.log('handleResult ', rpcMsg);

    }

    private static _classMap = new Map<string, any>();
    private static getRpcFunc(rpcMsg: RpcReqMsg): Function {
        try {
            let remoteClass = this._classMap.get(rpcMsg.className);
            if (!remoteClass) {
                remoteClass = require(path.join(__dirname, `../../../servers/${rpcMsg.serverName}/src/remote/${rpcMsg.className}`))[rpcMsg.className];
                this._classMap.set(rpcMsg.className, remoteClass);
            }
            return remoteClass.prototype[rpcMsg.funcName];
        } catch (error) {
            logger.error(`无法找到Remote,${JSON.stringify(rpcMsg)}`);
        }

    }

    private async handleCall(rpcMsg: RpcReqMsg) {
        const func = RpcClient.getRpcFunc(rpcMsg);
        const replay: RpcTransferResult = {
            fromNodeId: rpcMsg.fromNodeId,
            type: RpcMessageType.result,
            sessionId: rpcMsg.sessionId,
            result: null
        };
        replay.result = await func(...rpcMsg.args);
        this._socket.send(RpcUtils.encodeResult(replay));
    }

    private handleSend(rpcMsg: RpcReqMsg) {
        console.log('handleSend ', rpcMsg);
        const func = RpcClient.getRpcFunc(rpcMsg);
        func(...rpcMsg.args);
    }

    public call(serverName: string, className: string, funcName: string, routeOption: RpcRouterOption, args?: any): Promise<any> {
        if (this.isClose) {
            logger.warn(`rpc${this._port} is not connected`);
            return;
        }
        return new Promise((resolve, reject) => {
            const sessionId = this._sessionId++;
            const buffer = RpcUtils.encodeCallReqest(serverName, className, funcName, sessionId, routeOption, args);
            this._socket.send(buffer);
            this._sessionMap.set(sessionId, {
                sessionId,
                resolve,
                reject,
                sendTime: Date.now(),
                reqInfo: `${serverName}.${className}.${funcName}`
            });
        });
    }

    public send(serverName: string, className: string, funcName: string, routeOption: RpcRouterOption, args?: any) {
        if (this.isClose) {
            logger.warn(`rpc${this._port} is not connected`);
            return;
        }
        const buffer = RpcUtils.encodeSendReqest(serverName, className, funcName, routeOption, args);
        this._socket.send(buffer);
    }
}

interface CallReq {
    sessionId: number;
    resolve: Function;
    reject: Function;
    sendTime: number;
    reqInfo: string;
}