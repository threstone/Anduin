import * as loggerConfig from '../config/log4js.json';
import { configure, getLogger } from 'log4js';
import { ProtoBufEncoder } from '../../common/ProtoBufEncoder';
import { CommonUtils } from '../../common/CommonUtils';
import { ILauncherOption } from '../../common/I';
import { SocketServer } from './SocketServer';
import * as allProto from './CommonProto';
import * as fs from 'fs';
import * as path from 'path';
import * as mysqlConfig from '../../common/config/mysql.json';
import * as redisConfig from '../../common/config/redis.json';
import { RedisMgr } from '../../common/redis/RedisMgr';
import { RedisType } from '../../common/ConstDefine';
import { SequelizeRegister } from './SequelizeRegister';

const logger = getLogger();
export class GlobalVar {

    public static startupParam: ILauncherOption;
    public static socketServer: SocketServer;
    public static redisMgr: RedisMgr;
    private static sequelizeRegister: SequelizeRegister


    public static init() {
        this.startupParam = CommonUtils.getStartupParam();
        // init logger configuration
        configure(loggerConfig);
        //initMsgHandler
        this.initMsgHandler();
        //init socket server
        this.socketServer = new SocketServer(this.startupParam.socketListenPort, logger);
        //init db manager
        this.sequelizeRegister = new SequelizeRegister(mysqlConfig);
        //init redisMgr
        this.redisMgr = new RedisMgr(redisConfig, [RedisType.userGate, RedisType.userInfo]);
    }

    /**
     * 初始化protobuf协议映射
     */
    static initMsgHandler() {
        ProtoBufEncoder.init(logger);
        let handlerObj = {};
        let handlerPath = path.join(__dirname, './handler');
        let files = fs.readdirSync(handlerPath);
        for (let i = 0; i < files.length; i++) {
            if (files[i].endsWith('.js')) {
                let temp = require(handlerPath + '/' + files[i]);
                for (let key in temp) {
                    if (key.endsWith('Handler')) {
                        if (handlerObj[key]) {
                            logger.error(`重复的handler文件:${key}`);
                            continue;
                        }
                        handlerObj[key] = temp[key];
                    }
                }
            }
        }

        for (const protoKey in allProto) {
            let protoClass = allProto[protoKey];
            for (const key in protoClass) {
                if (key.startsWith('C_') || key.startsWith('S_')) {
                    let temp = protoClass[key];
                    if (temp.prototype.cmd == undefined || !temp.prototype.scmd == undefined) {
                        logger.error(`${protoKey}.${key}不存在cmd scmd, 注册失败!`,);
                        continue;
                    }
                    ProtoBufEncoder.setProtoClass(temp.prototype.cmd, temp.prototype.scmd, temp);
                    if (key.startsWith('S_')) {
                        continue;
                    }
                    let isFind = false;
                    for (const handleName in handlerObj) {
                        let handler = handlerObj[handleName];
                        if (handler[key]) {
                            ProtoBufEncoder.setHandler(temp.prototype.cmd, temp.prototype.scmd, handler[key].bind(handler));
                            logger.info(`注册函数 ${key}`);
                            isFind = true;
                            break;
                        }
                    }
                    if (!isFind && ProtoBufEncoder.getHandlerFunction(temp.prototype.cmd, temp.prototype.scmd) == undefined) {
                        logger.error(`${key} 未找到注册函数`);
                    }
                }
            }
        }
    }
}