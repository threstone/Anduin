import * as WS from 'ws';
import * as http from 'http';
import { UserSession } from './UserSession';
import { ILog } from '../../common/I';
export class SocketServer {
    private clientSocket_: WS.Server
    private clients: UserSession[] = []
    private clientConnectedCount_: number
    private logger: ILog

    constructor(listenPort: number, max_user: number, logger: ILog) {
        this.logger = logger;
        for (let i = 0; i < max_user; i++) {
            this.clients.push(null);
        }
        this.clientSocket_ = new WS.Server({ port: listenPort });
        this.clientSocket_.on('connection', this.onClientConnect.bind(this));
        this.logger.info('socket 启动 监听端口:' + listenPort);
    }

    // public addProtoModule(protoModule: any, handle: any) {
    //     ProtoBufEncoder.addProtoModule(protoModule, handle)
    // }

    public close() {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i]) {
                this.clients[i].close();
            }
        }

        this.clientSocket_.close();
        this.clients = [];
    }

    //当客户端连接上来了
    private onClientConnect(socket: WS, request: http.IncomingMessage) {
        const userSession = new UserSession();
        userSession.connectionTime = Date.now();
        userSession.socket = socket;
        userSession.remoteAddress = request.socket.remoteAddress;
        let index = this.clients.indexOf(null);
        if (index >= 0) {
            this.clientConnectedCount_++;
            this.clients[index] = userSession;
            userSession.socketIndex = index;
            socket.on('close', this.onClientSocketClose.bind(this, socket));
            socket.on('message', this.onClientMessage.bind(this, userSession));
        } else {
            socket.close();
        }
    }


    //根据索引获取用户的Session
    public getUserSession(index: number): UserSession {
        return this.clients[index];
    }

    // 客户端Socket关闭
    private onClientSocketClose(socket: WS) {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i] && this.clients[i].socket === socket) {
                console.log('socket close : ' + this.clients[i].remoteAddress);
                this.clients[i] = null;
                this.clientConnectedCount_--;
                break;
            }
        }
    }

    // 客户端信息到达
    private onClientMessage(userSession: UserSession, message: WS.Data) {
        if (!Buffer.isBuffer(message)) {
            return;
        }
        const buffer = message as Buffer;
        if (buffer.length < 8) {
            return;
        }

        // this.routeMsg(userSession, message)
        // const buffer = message as Buffer;
        // const cmd = buffer.readInt32LE(0);
        // const scmd = buffer.readInt32LE(4);
    }
}
