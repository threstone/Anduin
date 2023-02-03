//游戏封包的结构
export interface IGameMessage {
    cmd: number
    scmd: number
    toJSON(): { [k: string]: any };
}

export interface IMysqlOption {
    host: string
    port: number
    user: string
    password: string
    timezone: string
}

export interface IRedisOption {
    host: string
    port: number
    password: string
    enableOfflineQueue: boolean
}

//启动参数
export interface ILauncherOption {
    socketListenPort: number
    maxUser: number
    nodeId: string
    // redisServer: string
    // redisPass: string
    // saveRecordHost: String
    // processName: string //进程名称 影响日志命名
}

//日志记录对象
export interface ILog {
    trace(...args: any[]): void
    debug(...args: any[]): void
    info(...args: any[]): void
    warn(...args: any[]): void
    error(...args: any[]): void
    fatal(...args: any[]): void
    log(...args: any[]): void
}

export interface CardInterface {
    cardId: number
    powerId: number
    cardType: number
    type2: number
    attack: number
    atkType: number
    health: number
    fee: number
    quality: number
}

export interface ISession {
    clientName: string
    uid: number
    sendMsg(message: IGameMessage): void
}