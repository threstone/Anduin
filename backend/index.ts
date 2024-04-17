declare var serviceConfig: {
    mysql: IMysqlOption,
    redis: IRedisOption
}
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