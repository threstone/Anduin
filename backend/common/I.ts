
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

//启动参数
export interface ILauncherOption {
    socketListenPort: number
    redisServer: string
    redisPass: string
    saveRecordHost: String
    maxUser: number
    processName: string //进程名称 影响日志命名
}

//socket server
export interface ISocketServer {
    sendMessage(fd: number, message: IGameMessage): void
    addProtoModule(protobufs: any, handler: any): void
}

//新建日志对象参数
export interface ILogOption {
    logName: string
    //日志类型 普通日志 或者是牌局记录 普通的日志类型一天一个文件 牌局记录 不根据天进行分类 普通日志 存储在logs下 牌局记录存储在 records
    logType: "log" | "record"
    //是否输出到 console
    toConsole: boolean
    //分类标志
    cat?: string
}


export type logLevel = "debug" | "trace" | "info" | "warn" | "error" | "fatal" | "all"

//日志记录对象
export interface ILog {
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    fatal(...args: any[]): void;
    log(...args: any[]): void;
}


//游戏桌局对象
export interface IGameTable {
    gameId: number
    gameLv: number
    gameType: number
    createTime: number
    isDestory: boolean
    destroyReason: string
    setGameLv(gameLv: number): void
    setTableId(gameLv: number): void
    init_config(gameLv: number, conf: Object): void
    setTableSeq(seq: string): void
    onRun(now: number): void
    isCanJoinNewUser(): boolean
    destoryTable(reason: string): void
    isBaiRenGame(): boolean
    initBaiRenGame(): boolean
    closeLogFile(): void
    getSeats(): IGameSeat[]
}

//游戏玩家座位对象
export interface IGameSeat {
    isRobot: boolean
    session: any
}

export interface TeaPet {
    getSockerServer(): ISocketServer
}