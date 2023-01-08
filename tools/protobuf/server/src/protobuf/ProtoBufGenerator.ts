import * as process from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { GenerateType, ToolsConfig } from '../ConstDefine';

export class ProtoBufGenerator {
    startGen(configs: ToolsConfig[]) {
        const promiseArr = [];
        for (let index = 0; index < configs.length; index++) {
            const config = configs[index];
            if (config.generateType === GenerateType.All || GenerateType.ProtoBuf) {
                promiseArr.push(this.genByConfig(config));
            }
        }
        return Promise.all(promiseArr);
    }

    private async genByConfig(config: ToolsConfig) {
        //检查对应文件夹是否存在   不在则创建
        if (!fs.existsSync(config.targetPath)) {
            fs.mkdirSync(config.targetPath)
        }

        let fileName = '';
        for (let i = 0; i < config.commonFiles.length; i++) {
            let filePath = config.commonFiles[i];
            if (path.extname(filePath) != ".proto") {
                continue;
            }
            fileName += ` ${filePath}`;
        }

        const jsRealPath = config.targetPath + config.targetName + 'Proto.js';
        const tsRealPath = config.targetPath + config.targetName + 'Proto.d.ts';

        await this.createJs(jsRealPath, fileName, config)

        await this.createTs(tsRealPath, jsRealPath)

        if (config.isJsMin) {
            await this.createMinJs(jsRealPath, fileName, config)
        }
        console.log(`完成protobuf文件生成:${jsRealPath}`);
        console.log(`完成protobuf文件生成:${tsRealPath}`);
    }

    /**
     * 生成proto js
     * @param {string} jsTarget    生成文件的存放地址
     * @param {string} protoRealPath    要转化的proto文件
     * @param {ToolsConfig} callBack    回调
     */
    private createJs(jsTarget: string, protoRealPath: string, config: ToolsConfig) {
        return new Promise<void>((resolve) => {
            let createJsShell = 'pbjs -t static-module -w commonjs --keep-case --force-number ' + (config.noCreate ? '--no-create' : '') + ' -o '
            //生成proto js文件
            process.exec(createJsShell + jsTarget + ' ' + protoRealPath,
                function (error, stdout, stderr) {
                    if (error !== null) {
                        throw 'exec error: ' + error;
                    }
                    resolve();
                });
        })
    }

    /**
     * 生成较小的proto js  
     * @param {string} jsTarget    生成文件的存放地址
     * @param {string} protoRealPath    要转化的proto文件
     * @param {Function} callBack    回调
     */
    private createMinJs(jsTarget: string, protoRealPath: string, config: ToolsConfig) {
        return new Promise<void>((resolve) => {
            let createMinJsShell = 'pbjs -t static-module -w commonjs --keep-case --force-number ' + (config.noCreate ? '--no-create' : '')
                + (config.noConvert ? '--no-convert' : '')
                + ' --no-verify --no-comments --no-beautify --no-delimited  -o ';

            process.exec(createMinJsShell + jsTarget + ' ' + protoRealPath,
                function (error, stdout, stderr) {
                    if (error !== null) {
                        throw 'exec error: ' + error;
                    }
                    resolve();
                });
        })
    }

    /**
     * 根据js 生成对应的.d.ts   
     * @param {string} tsTarget  .d.ts文件的存放地址
     * @param {string} jsRealPath  js文件的地址
     * @param {Function} callBack  回调
     */
    private createTs(tsTarget: string, jsRealPath: string) {
        return new Promise<void>((resolve) => {
            process.exec('pbts -o ' + tsTarget + ' ' + jsRealPath,
                function (error, stdout, stderr) {
                    if (error !== null) {
                        throw 'exec error: ' + error;
                    }
                    resolve();
                });
        })
    }
}