
import * as fs from 'fs';
import * as path from 'path';
import { CommonUtils } from '../../CommonUtils';
import { getLogger, Logger } from 'log4js';
let logger: Logger;
export class RpcInit {

    static init() {
        logger = getLogger(startupParam?.nodeId)
        const serverRemoteMap = this.getRemoteInfo();
        this.initRpcDeclare(serverRemoteMap);
        this.initRpcModule(serverRemoteMap);
        rpc.gate.commonRemote.callTransferToGate(123, Buffer.from([1, 2]));
        rpc.gate.commonRemote.sendTransferToGate(999, Buffer.from([3, 5]));
    }

    /** 获取服务remote信息 */
    private static getRemoteInfo() {
        // 遍历所有服务的remote目录
        const serverRemoteMap = new Map<string, Map<string, any>>();
        const serversPath = path.join(__dirname, '../../../servers');
        const dirs = fs.readdirSync(serversPath);
        for (let index = 0; index < dirs.length; index++) {
            const dirName = dirs[index];
            if (dirName === 'server_template') {
                continue;
            }
            const remotePath = path.join(serversPath, `/${dirName}/src/remote`);
            // 判断文件夹是否存在的办法
            try {
                fs.accessSync(remotePath);
            } catch (error) {
                continue;
            }

            const remoteFiles = fs.readdirSync(remotePath);
            const remoteMap = new Map();
            remoteFiles.forEach((fileName) => {
                if (!fileName.endsWith('.js')) {
                    return;
                }
                const className = fileName.substring(0, fileName.indexOf('.js'));
                const remoteClass = require(`${remotePath}/${fileName}`);
                remoteMap.set(className, remoteClass[className]);
            });
            serverRemoteMap.set(dirName, remoteMap);
        }
        return serverRemoteMap;
    }

    private static call(functionName: string, ...args: any[]) {
        console.log('call', functionName, args);
    }

    private static send(functionName: string, ...args: any[]) {
        console.log('send', functionName, args);
    }

    /** 生成调用序列 */
    private static initRpcModule(serverRemoteMap: Map<string, Map<string, any>>) {
        (global as any).rpc = {};
        const rpcAny = rpc as any;
        rpcAny.call = this.call;
        rpcAny.send = this.send;
        serverRemoteMap.forEach((remoteClassMap, serverName) => {
            rpcAny[serverName] = {};
            remoteClassMap.forEach((remoteClass, className) => {
                const name = CommonUtils.firstCharToLowerCase(className);
                rpcAny[serverName][name] = {};
                const classAny = rpcAny[serverName][name];
                const functionList = Object.getOwnPropertyNames(remoteClass.prototype);
                functionList.forEach((functionName) => {
                    if (functionName === 'constructor') {
                        return;
                    }
                    classAny[`call${CommonUtils.firstCharToUpperCase(functionName)}`] = rpc.call.bind(this, functionName);
                    classAny[`send${CommonUtils.firstCharToUpperCase(functionName)}`] = rpc.send.bind(this, functionName);
                })
            });
        })
    }

    /** 测试环境生成声明文件 */
    private static initRpcDeclare(serverRemoteMap: Map<string, Map<string, any>>) {
        if (startupParam.nodeId !== 'master' || serversConfigMap.get('master').isTest !== true) {
            return;
        }
        let rpcDeclare = 'declare class rpc {\n'
            + '    static call(functionName: string, args: any[]): Promise<any>;\n'
            + '    static send(functionName: string, args: any[]): void;\n\n';
        let serverDeclare = '';
        let remoteDeclare = '';
        serverRemoteMap.forEach((remoteClassMap, serverName) => {
            const serverType = CommonUtils.firstCharToUpperCase(serverName);
            rpcDeclare += `    static ${serverName}: typeof ${serverType};\n`

            serverDeclare += `\ndeclare class ${serverType} {\n`
            remoteClassMap.forEach((remoteClass, className) => {
                const classTypeName = `${serverType}_${className}`;
                serverDeclare += `    static ${CommonUtils.firstCharToLowerCase(className)}: typeof ${classTypeName};\n`;
                remoteDeclare += `\ndeclare class ${classTypeName} {\n`;
                const functionList = Object.getOwnPropertyNames(remoteClass.prototype);
                const funcDescList = this.getClassFunctionDesc(serverName, className, functionList)
                // 将具体方法写入
                funcDescList.forEach((funcDesc) => {
                    remoteDeclare += `    static ${funcDesc}\n`;
                });
                remoteDeclare += '}';
            });
            serverDeclare += '}';
        });
        rpcDeclare += '}';
        rpcDeclare += serverDeclare;
        rpcDeclare += remoteDeclare;

        const indexPath = path.join(__dirname, `../../../../common/core/rpc/index.ts`);
        fs.writeFileSync(indexPath, rpcDeclare);
    }


    private static getClassFunctionDesc(serverType: string, className: string, functionList: string[]) {
        const funcDescList: string[] = [];
        try {
            const filePath = path.join(__dirname, `../../../../servers/${serverType}/src/remote/${className}.ts`);
            const fileText = fs.readFileSync(filePath, { encoding: 'utf8' });
            functionList.forEach((functionName) => {
                if (functionName === 'constructor') {
                    return;
                }
                const res = this.getFunctionDesc(functionName, fileText);
                if (res) {
                    funcDescList.push(...res);
                }
            });
        } catch (error) {
            logger.error(`RPC init Error`, error)
        }
        return funcDescList;
    }

    private static getFunctionDesc(functionName: string, fileText: string) {
        const index = fileText.indexOf(functionName);
        if (index === -1) {
            return;
        }
        fileText = fileText.substring(index);
        fileText = fileText.substring(0, fileText.indexOf(' {'));

        const resultTypeIndex = fileText.indexOf('):');
        const resultType = resultTypeIndex !== -1 ? fileText.substring(resultTypeIndex + 2).trim() : '';

        let call = `call${CommonUtils.firstCharToUpperCase(fileText.substring(0, resultTypeIndex + 1))}`;
        if (resultTypeIndex !== -1) {
            call += `: Promise<${resultType}>;`
        }
        const send = `send${CommonUtils.firstCharToUpperCase(fileText.substring(0, resultTypeIndex + 1))}: void;`;
        return [call, send];
    }
}