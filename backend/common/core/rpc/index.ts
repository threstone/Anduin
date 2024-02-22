
/** rpc 请求结构 */
declare interface RpcReqMsg {
    // rpc server根据type来决定作何操作
    type: number;
    requestId?: number;
    routeOptions: RpcRouterOptions;
    serverName: string;
    className: string;
    funcName: string;
    fromNodeId: string;
    args: any[];
}

/** rpc 转发信息的返回结构 */
declare interface RpcTransferResult {
    // rpc server根据type来决定作何操作
    type: number;
    fromNodeId: string;
    result: any;
    requestId?: number;
}

declare interface RpcRouterOptions {
    type?: number | 0/* random */ | 1/* target */ | 2/* all */;
    nodeId?: string;
}
        

declare class rpc {
    static game: typeof Game;
    static gate: typeof Gate;
    static hall: typeof Hall;
    static relation: typeof Relation;
}

declare class Game {
    static gameRemote: typeof Game_GameRemote;
}

declare class Gate {
    static commonRemote: typeof Gate_CommonRemote;
    static gameRemote: typeof Gate_GameRemote;
}

declare class Hall {
    static hallRemote: typeof Hall_HallRemote;
}

declare class Relation {
    static userRemote: typeof Relation_UserRemote;
}

declare class Game_GameRemote {
    static callUserOffline(routeOption: RpcRouterOptions, uid: number): Promise<void>;
    static sendUserOffline(routeOption: RpcRouterOptions, uid: number): void;
    static callTransferToGame(routeOption: RpcRouterOptions, clientName: string, uid: number, buff: Buffer): Promise<Buffer>;
    static sendTransferToGame(routeOption: RpcRouterOptions, clientName: string, uid: number, buff: Buffer): void;
}

declare class Gate_CommonRemote {
    static callTransferToGate(routeOption: RpcRouterOptions, uid: number, buffer: Buffer): Promise<void>;
    static sendTransferToGate(routeOption: RpcRouterOptions, uid: number, buffer: Buffer): void;
    static callBroadcast(routeOption: RpcRouterOptions, buffer: Buffer): Promise<void>;
    static sendBroadcast(routeOption: RpcRouterOptions, buffer: Buffer): void;
    static callCloseUserSocket(routeOption: RpcRouterOptions, uid: number): Promise<void>;
    static sendCloseUserSocket(routeOption: RpcRouterOptions, uid: number): void;
}

declare class Gate_GameRemote {
    static callBindUserGameNode(routeOption: RpcRouterOptions, uid: number, nodeId: string): Promise<boolean>;
    static sendBindUserGameNode(routeOption: RpcRouterOptions, uid: number, nodeId: string): void;
    static callUnbindUserGameNode(routeOption: RpcRouterOptions, uid: number): Promise<boolean>;
    static sendUnbindUserGameNode(routeOption: RpcRouterOptions, uid: number): void;
}

declare class Hall_HallRemote {
    static callReqRegister(routeOption: RpcRouterOptions, clientName: string, buff: Buffer): Promise<Buffer>;
    static sendReqRegister(routeOption: RpcRouterOptions, clientName: string, buff: Buffer): void;
    static callReqLogin(routeOption: RpcRouterOptions, clientName: string, buff: Buffer): Promise<Buffer>;
    static sendReqLogin(routeOption: RpcRouterOptions, clientName: string, buff: Buffer): void;
    static callTransferToHall(routeOption: RpcRouterOptions, clientName: string, uid: number, buff: Buffer): Promise<Buffer>;
    static sendTransferToHall(routeOption: RpcRouterOptions, clientName: string, uid: number, buff: Buffer): void;
}

declare class Relation_UserRemote {
    static callUserOnline(routeOption: RpcRouterOptions, nodeId: string, uid: number, nick: string): Promise<void>;
    static sendUserOnline(routeOption: RpcRouterOptions, nodeId: string, uid: number, nick: string): void;
    static callUserOffline(routeOption: RpcRouterOptions, uid: number): Promise<void>;
    static sendUserOffline(routeOption: RpcRouterOptions, uid: number): void;
    static callTransferToRelation(routeOption: RpcRouterOptions, clientName: string, uid: number, buff: Buffer): Promise<Buffer>;
    static sendTransferToRelation(routeOption: RpcRouterOptions, clientName: string, uid: number, buff: Buffer): void;
}
