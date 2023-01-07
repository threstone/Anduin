import * as WS from 'ws';
export interface GateSocket extends WS {
    connectionTime: number;// 连接时间用于做验证
    remoteAddress: string;
    uid: number;
    isAuthorized: boolean;
}