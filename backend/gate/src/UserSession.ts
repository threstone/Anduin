
import * as WS from 'ws';
export class UserSession {
    socket: WS
    connectionTime: number // 连接时间用于做验证
    remoteAddress: string
    socketIndex: number //在 SocketServer 的下标
    
    close() {
        this.socket.close();
    }

    sendMessage(message: Buffer) {
        if (this.socket) {
            this.socket.send(message);
        }
    }
}