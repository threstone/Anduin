declare var nodeId: string;
declare var env: string;
declare var startupParam: ILauncherOption
declare var serviceConfig: {
    mysql: IMysqlOption,
    redis: IRedisOption
}
declare var serversConfigMap: Map<string, ServerConfig>;
declare var eventEmitter: NodeJS.EventEmitter;
//游戏封包的结构
declare interface IGameMessage {
    cmd: number
    scmd: number
    toJSON(): { [k: string]: any };
}

declare interface IMysqlOption {
    host: string
    port: number
    user: string
    password: string
    timezone: string
}

declare interface IRedisOption {
    host: string
    port: number
    password: string
    enableOfflineQueue: boolean
}

//启动参数
declare interface ILauncherOption {
    port: number
    maxUser: number
    nodeId: string
    env: string
}

declare interface ServerConfig {
    nodeId: string
    ip: string
    port: number
    env: string
    autuResume: boolean
    serverType: string
    isTest: boolean
}

//日志记录对象
declare interface ILog {
    trace(...args: any[]): void
    debug(...args: any[]): void
    info(...args: any[]): void
    warn(...args: any[]): void
    error(...args: any[]): void
    fatal(...args: any[]): void
    log(...args: any[]): void
}

declare interface ISession {
    clientName: string
    uid: number
    sendMsg(message: IGameMessage): void
}
