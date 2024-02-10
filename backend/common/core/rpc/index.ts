declare class rpc {
    static call(functionName: string, args: any[]): Promise<any>;
    static send(functionName: string, args: any[]): void;

    static gate: typeof Gate;
}
declare class Gate {
    static commonRemote: typeof Gate_CommonRemote;
}
declare class Gate_CommonRemote {
    static callTransferToGate(uid: number, buffer: Buffer): Promise<void>;
    static sendTransferToGate(uid: number, buffer: Buffer): void;
    static callBroadcast(buffer: Buffer): Promise<void>;
    static sendBroadcast(buffer: Buffer): void;
}