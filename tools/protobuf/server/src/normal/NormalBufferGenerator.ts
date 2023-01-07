import { GenerateType, ToolsConfig } from "../ConstDefine";
import * as fs from 'fs';
import * as path from 'path';
import { ProtoFile, ProtoMessage } from "./ProtoDefine";
import { Utils } from "./Utils";

export class NormalBufferGenerator {
    startGen(configs: ToolsConfig[]) {
        for (let index = 0; index < configs.length; index++) {
            const config = configs[index];
            if (config.generateType === GenerateType.All || GenerateType.NormalBuf) {
                this.genByConfig(config);
            }
        }
    }

    private genByConfig(config: ToolsConfig) {
        //检查对应文件夹是否存在   不在则创建
        if (!fs.existsSync(config.targetPath)) {
            fs.mkdirSync(config.targetPath)
        }

        let files = config.commonFiles;
        for (let i = 0; i < files.length; i++) {
            let fileName = files[i];
            if (path.extname(fileName) != ".proto") {
                continue;
            }
            let fileText = fs.readFileSync(config.protoFilesRoot + fileName, 'utf-8');
            this.procProtoFile(fileText);
        }
    }

    private procProtoFile(fileText: string) {
        let protoFileObj = new ProtoFile();
        let lineArr = fileText.split('\n');
        for (let index = 0; index < lineArr.length; index++) {
            let lineText = lineArr[index];
            //要防止各种proto格式写的不好的情况
            if (lineText.indexOf('message') !== -1) {
                let message = this.procMessage(index, lineArr);
                protoFileObj.setMessage(message);
                //处理完成,跳到最后一条信息的下标处
                index = message.endIndex;
            }
            //获取到packege名称 
            else if (lineText.indexOf('package') !== -1) {
                lineText = lineText.replace('package', '');
                lineText = lineText.replace(';', '');
                lineText = lineText.replace(/ /g, '');
                lineText = lineText.replace('\r', '');
                protoFileObj.packageName = lineText;
            }
        }
    }

    private procMessage(startIndex: number, lineArr: string[]): ProtoMessage {
        let message = new ProtoMessage();
        //get common
        if (startIndex > 0) {
            let lastLine = lineArr[startIndex - 1];
            if (lastLine.indexOf('//') !== -1) {
                message.common = lastLine;
            }
        }

        Utils.getMessageName(startIndex, lineArr);
        // let startLine = lineArr[startIndex];


        return message;
    }

}
