import * as WS from 'ws';
import * as http from 'http';
import { ILog } from '../../../common/I';
import { GlobalVar } from './GlobalVar';
import { LoginHandler } from './handler/LoginHandler';
import { GateSocket } from './GateSocket';

export class SocketServer {

    private clientSocket_: WS.Server
    private socketMap = new Map<number, GateSocket>();
    private clientConnectedCount_: number = 0;
    private logger: ILog
    private maxSocket: number;

    constructor(listenPort: number, maxUser: number, logger: ILog) {
        this.maxSocket = maxUser;
        this.logger = logger;

        this.clientSocket_ = new WS.Server({ port: listenPort });
        this.clientSocket_.on('connection', this.onClientConnect.bind(this));
        this.logger.info('socket 启动 监听端口:' + listenPort);
    }

    bindGameNode(uid: number, clientName: string) {
        const socket = this.socketMap.get(uid);
        if (!socket) {
            this.logger.error(`bindGameNode 未找到指定user socket:${uid}`);
            return false;
        }
        socket.gameNodeId = clientName;
        return true;
    }

    unBindGameNode(uid: number) {
        const socket = this.socketMap.get(uid);
        if (!socket) {
            this.logger.error(`unBindGameNode 未找到指定user socket:${uid}`);
            return false;
        }
        delete socket.gameNodeId;
        return true;
    }

    broadcast(buffer: Buffer) {
        this.socketMap.forEach((socket) => {
            socket.send(buffer);
        });
    }

    sendBufferByUid(uid: number, buffer: Buffer) {
        const socket = this.socketMap.get(uid);
        if (socket) {
            socket.send(buffer);
        }
    }

    closeUserSocket(uid: number) {
        const socket = this.socketMap.get(uid);
        if (socket) {
            socket.close();
            socket.isAuthorized = false;
            this.socketMap.delete(uid);
        }
    }


    public addSocketToMap(uid: number, socket: GateSocket) {
        const temp = this.socketMap.get(uid);
        if (temp) {
            temp.close();
            temp.isAuthorized = false;
        }
        this.socketMap.set(uid, socket);
    }

    public close() {
        this.socketMap.forEach((session) => {
            session.close();
        });
        this.clientSocket_.close();
        this.socketMap.clear();
    }

    //当客户端连接上来了
    private onClientConnect(socket: GateSocket, request: http.IncomingMessage) {
        socket.connectionTime = Date.now();
        socket.remoteAddress = request.socket.remoteAddress;
        if (this.clientConnectedCount_ <= this.maxSocket) {
            this.clientConnectedCount_++;
            socket.on('close', this.onClientSocketClose.bind(this, socket));
            socket.on('message', this.onClientMessage.bind(this, socket));
        } else {
            socket.close();
        }
    }

    // 客户端Socket关闭
    private onClientSocketClose(socket: GateSocket) {
        socket.removeAllListeners();
        console.log(`socket close ,remoteAddress:${socket.remoteAddress}  uid:${socket.uid}`);
        this.clientConnectedCount_--;
        /**授权用户 */
        if (socket.isAuthorized) {
            this.socketMap.delete(socket.uid);
            GlobalVar.relationConnectorMgr.getAliveConnector().sendUserOffline(socket.uid);
            if (socket.gameNodeId) {
                GlobalVar.gameConnectorMgr.getConnectorByName(socket.gameNodeId).sendUserOffline(socket.uid);
            }
        }
    }

    // 客户端信息到达
    private onClientMessage(socket: GateSocket, message: WS.Data) {
        if (!Buffer.isBuffer(message)) {
            return;
        }
        const buffer = message as Buffer;
        if (buffer.length < 8) {
            return;
        }

        this.routeMsg(socket, message);
    }

    //分发路由消息
    private routeMsg(socket: GateSocket, message: WS.Data) {
        const buffer = message as Buffer;
        const cmd = buffer.readInt32BE(0);

        //只有loginProto协议(cmd == 1)可以跳过登录，其他协议都不允许
        if (cmd === 1) {
            const scmd = buffer.readInt32BE(4);
            LoginHandler.handlerLoginPto(socket, scmd, buffer);
            return;
        }

        if (socket.isAuthorized !== true) {
            return;
        }

        // TODO 改成可配置路由目标,需配置是否需要登录才路由消息(isAuthorized)
        //routing to hall server 
        if (cmd >= 0 && cmd <= 99) {
            GlobalVar.hallConnectorMgr.getAliveConnector()?.sendTransferToHall(socket.uid, buffer);
        }//routing to relation server 
        else if (cmd === 100) {
            GlobalVar.relationConnectorMgr.getAliveConnector().sendTransferToRelation(socket.uid, buffer);
        }//routing to game server 
        else if (cmd >= 200) {
            if (!socket.gameNodeId) {
                GlobalVar.gameConnectorMgr.getAliveConnector()?.sendTransferToGame(socket.uid, buffer);
            } else {
                const connector = GlobalVar.gameConnectorMgr.getConnectorByName(socket.gameNodeId);
                connector.sendTransferToGame(socket.uid, buffer);
            }
        } else {
            this.logger.error(`unknow routing cmd${cmd}`);
        }
    }
}
