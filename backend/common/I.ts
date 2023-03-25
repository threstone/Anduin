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

    /**
     * unitCard  攻击类型(0近战,1远程)
     * eventCard 事件类型(0公共,1秘密)
     * buildCard 建筑类型(0出兵建筑,1待定)
     */
    detailType: CardsPto.AtkType | CardsPto.EventType | CardsPto.BuilingType;

    /**生命值 */
    health: number;

    /**费用 */
    fee: number;

    /**品质 */
    quality: CardsPto.QualityType;

    buffs: number[];

    /**是否衍生 */
    isDerivation: number;

    /**
     * 使用条件
     * 下标0数据表示:{0:无条件,1:友方单位,2:友方建筑,3:敌方单位,4:敌方建筑,5:所有单位,6:所有建筑,7:友方地图实体,8:敌方地图实体,9:所有地图实体,10:空格子}
     * 下标1数据表示作用者数量,有的卡可能要选择多个目标,如果是负数则说明可以选择同一单位,如果是正数则不允许选择重复的单位
     */
    useCondition: number[];
}