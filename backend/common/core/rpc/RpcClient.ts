import { Logger, getLogger } from "log4js";
import * as WS from "ws"
import { RpcUtils } from "./RpcUtils";

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
            if (req.sendTime + 15000 > now) {
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
            this.send(serverConfig.serverType, serverConfig.nodeId, 'clientInfo');
            this.send(serverConfig.serverType, serverConfig.nodeId, 'broadcast');
        })

        socket.on('message', this.handleMessage);

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
        const message = RpcUtils.decodeMessage(buffer);
    }


    public call(serverName: string, className: string, funcName: string, ...args: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            const sessionId = this._sessionId++;
            const buffer = RpcUtils.encodeCallReqest(serverName, className, funcName, sessionId, args);
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

    public send(serverName: string, className: string, funcName: string, ...args: any[]) {
        const buffer = RpcUtils.encodeSendReqest(serverName, className, funcName, args);
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