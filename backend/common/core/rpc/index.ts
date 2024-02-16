
/** rpc 请求结构 */
declare interface RpcReqMsg {
    // rpc server根据type来决定作何操作
    type: number;
    routeOption: RpcRouterOption;
    serverName: string;
    className: string;
    funcName: string;
    args: any[];
    fromNodeId: string;
    requestId?: number;
}

/** rpc 转发信息的返回结构 */
declare interface RpcTransferResult {
    // rpc server根据type来决定作何操作
    type: number;
    result: any;
    fromNodeId: string;
    requestId?: number;
}

declare interface RpcRouterOption {
    type?: 'all' | 'random' | 'target';
    nodeId?: string;
}

declare class rpc {
    static gate: typeof Gate;
    static hall: typeof Hall;
    static relation: typeof Relation;
}

declare class Gate {
    static commonRemote: typeof Gate_CommonRemote;
}

declare class Hall {
    static loginRemote: typeof Hall_LoginRemote;
}

declare class Relation {
    static userRemote: typeof Relation_UserRemote;
}

declare class Gate_CommonRemote {
    static callTransferToGate(routeOption: RpcRouterOption, uid: number, buffer: Buffer): Promise<void>;
    static sendTransferToGate(routeOption: RpcRouterOption, uid: number, buffer: Buffer): void;
    static callBroadcast(routeOption: RpcRouterOption, buffer: Buffer): Promise<void>;
    static sendBroadcast(routeOption: RpcRouterOption, buffer: Buffer): void;
}

declare class Hall_LoginRemote {
}

declare class Relation_UserRemote {
    static callUserOnline(routeOption: RpcRouterOption, nodeId: string, uid: number, nick: string): Promise<void>;
    static sendUserOnline(routeOption: RpcRouterOption, nodeId: string, uid: number, nick: string): void;
    static callUserOffline(routeOption: RpcRouterOption, uid: number): Promise<void>;
    static sendUserOffline(routeOption: RpcRouterOption, uid: number): void;
}
