import { CardsPto } from "./CommonProto";

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

export interface ISession {
    clientName: string
    uid: number
    sendMsg(message: IGameMessage): void
}

export class CardInterface {
    cardId: number;

    powerId: CardsPto.PowerType;

    /**卡牌类型(0英雄、1单位、2法术、3建筑、4事件) */
    cardType: CardsPto.CardType;

    /**攻击力 */
    attack: number;

    /**攻击类型(0近战,1远程) */
    atkType: CardsPto.AtkType;

    /**生命值 */
    health: number;

    /**费用 */
    fee: number;

    /**品质 */
    quality: CardsPto.QualityType;

    buffs: number[];

    /**是否衍生 */
    isDerivation: number;
}