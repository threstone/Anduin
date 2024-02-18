/** rpc 请求结构 */
declare interface RpcReqMsg {
    // rpc server根据type来决定作何操作
    type: number;
    requestId?: number;
    routeOption: RpcRouterOptions;
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
    result: any;
    fromNodeId: string;
    requestId?: number;
}

declare interface RpcRouterOptions {
    type?: number | 0/* random */ | 1/* target */ | 2/* all */;
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
    static callTransferToGate(routeOption: RpcRouterOptions, uid: number, buffer: Buffer): Promise<void>;
    static sendTransferToGate(routeOption: RpcRouterOptions, uid: number, buffer: Buffer): void;
    static callBroadcast(routeOption: RpcRouterOptions, buffer: Buffer): Promise<void>;
    static sendBroadcast(routeOption: RpcRouterOptions, buffer: Buffer): void;
}

declare class Hall_LoginRemote {
}

declare class Relation_UserRemote {
    static callUserOnline(routeOption: RpcRouterOptions, nodeId: string, uid: number, nick: string): Promise<void>;
    static sendUserOnline(routeOption: RpcRouterOptions, nodeId: string, uid: number, nick: string): void;
    static callUserOffline(routeOption: RpcRouterOptions, uid: number): Promise<void>;
    static sendUserOffline(routeOption: RpcRouterOptions, uid: number): void;
}
