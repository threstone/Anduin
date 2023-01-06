const { pseudoRandomBytes } = require('crypto');
let fs = require('fs');
var UUID = require('uuid')

const dirInfo = fs.readdirSync('./rpc_handler')
for (let index = 0; index < dirInfo.length; index++) {
    const fileName = dirInfo[index];
    let flag = fileName.substring(0, fileName.indexOf('.'));
    // flag = flag.charAt(0).toUpperCase() + flag.substring(1);
    readFile(`./rpc_handler/${fileName}`, `./rpc_class/RpcCommon${flag}.ts`);
}

function readFile(rpc_funPath, outputPath) {
    let rpc_fun = fs.readFileSync(rpc_funPath, 'utf-8');
    let lineArr = rpc_fun.split('\n');

    let uuid = UUID.v4()
    let classNameSplit = lineArr[0].split(' ');
    let className = classNameSplit[1]

    let server2clientPos

    for (let i = 1; i < lineArr.length - 1; i++) {
        let strOne = lineArr[i]
        if (strOne.match('//s2c')) {
            server2clientPos = i
            break
        }
    }
    let funs = createFunLists(1, lineArr, server2clientPos)
    let serverClass = '//此文件自动生成，请勿修改，如需修改，修改对应的rpc_interface_*.ts\nimport * as RPC from "./RPC"\n' +
        'import { ILog } from "../I"\n\n' +
        `let uuid = "${uuid}"\n\n` +
        '//服务器的虚函数定义\n' +
        'export abstract class ' + className + 'Server {\n' +
        '    private rpcServer: RPC.RPC_SERVER = new RPC.RPC_SERVER();\n' + funs + '\n' +
        '    get funs() { return this.funs_ }\n' +
        '    get rpc() { return this.rpcServer };\n\n' +
        '    constructor(port: number, logger: ILog) {\n' +
        '        this.rpcServer.startServer(port, uuid, logger);\n' +
        '        this.init();\n' +
        '    }\n\n' +
        '    init() {\n' +
        '        this.rpc.registerFuns(this)\n' +
        '         this.rpc.onClose = this.onClose.bind(this)\n' +
        '    }\n\n' +
        '    onClose(clientId: number) {\n\n' +
        '    }\n\n'


    let serverFun = abstractFuns(1, lineArr, server2clientPos, true)

    funs = createFunLists(server2clientPos, lineArr)
    //生成服务器回调客户端的函数
    let rpcS2CFuns = createAsyncRpcFun(server2clientPos, lineArr, null, true)

    //服务器虚函数生成完毕
    serverClass = serverClass + serverFun + rpcS2CFuns + '}\n\n'
    console.log('服务器转化成功');

    let clientFun = abstractFuns(server2clientPos, lineArr)

    let exportClientClass = '//客户端的函数定义\n' + 'export abstract class ' + className + 'Client {\n' +
        '\n    private myRpcClient = new RPC.RPC_CLIENT()\n' + funs +
        '\n    get funs() { return this.funs_ }' +
        '\n    get rpc() { return this.myRpcClient }' +
        '\n    get clientId() { return this.rpc.clientId }' +
        '\n    get port() { return this.rpc.port }' +
        '\n    get host() { return this.rpc.host }' +
        '\n    get isClose() { return this.rpc.isClose }' +
        '\n    constructor(host: string, port: number, name: string, logger: ILog) {' +
        '\n        this.myRpcClient.startClient(host, port, name, uuid, logger)\n    }\n' +
        '\n    init() {' +
        '\n        this.rpc.registerFuns(this)' +
        '\n        this.rpc.onOpen = this.onOpen.bind(this)' +
        '\n        this.rpc.onClose = this.onClose.bind(this)' +
        '\n    }\n' +
        '\n    abstract onOpen();' +
        '\n    abstract onClose();\n\n'


    let rpcC2SFuns = createAsyncRpcFun(1, lineArr, server2clientPos)
    console.log('客户端转化成功');
    exportClientClass = serverClass + exportClientClass + rpcC2SFuns + clientFun
    // console.log(exportClientClass);
    fs.writeFileSync(outputPath, exportClientClass + '}', 'utf-8');
    console.log('全部转化成功来自: ' + rpc_funPath + '\n生成在：' + outputPath + ' 目录中');
}

function createAsyncRpcFun(start, lineArr, end, isS2C) {
    if (end) {
        if (end === 0) {
            return ''
        }
    }
    end = end || lineArr.length - 1 //这里减去1是因为最后一个是}
    let rpcS2CFuns = ''
    for (let i = start; i < end; i++) {
        let strOne = lineArr[i]
        if (strOne.match('/')) {
            rpcS2CFuns = rpcS2CFuns + strOne + '\n'
        }
        else {
            let strAll = ''
            strOne = strOne.replace(/ /g, '');
            let startStr = strOne.indexOf('(')
            let endStr = strOne.indexOf(')')
            let funName = strOne.substring(0, startStr)
            funName = funName.replace(/ /g, '');
            let args = "        let args = ["
            let rpcParam = strOne.substring(startStr + 1, endStr)
            let paramSplit = rpcParam.split(':')

            for (let j = 0; j < paramSplit.length - 1; j++) {
                let oneSp = paramSplit[j];
                if (j == 0) {
                    args += oneSp
                } else {
                    let startParam = oneSp.indexOf(',')
                    let param = oneSp.substring(startParam, oneSp.length)
                    args += param
                }
            }
            args += ']'
            if (strOne.indexOf('Promise<') === -1) {
                let resultTypeIndex = strOne.lastIndexOf(':');
                strOne = `${strOne.substring(0, resultTypeIndex + 1)}Promise<${strOne.substring(resultTypeIndex + 1)}>`
            }
            if (isS2C) {//s2c需要clientid
                //如果返回值是非Promise对象
                let param = '(clientId:number,' + strOne.substring(startStr + 1, strOne.length)
                //生成call
                let header = funName.substring(0, 1)//一个字符小写的
                let upperCase = header.toUpperCase()//转成大写
                let nFunName = upperCase + funName.substring(1, funName.length)
                strOne = 'call' + nFunName + param
                strAll = strAll + '    async ' + strOne + '    {\n'
                strAll = strAll + args +
                    '\n        let res: any = await this.rpc.call(clientId,' + '"' + funName + '",args)' +
                    '\n        return res' +
                    '\n    }\n\n'
                //生成send
                param = param.substring(param.indexOf('('), param.indexOf(')') + 1)
                strOne = 'send' + nFunName + param
                strAll = strAll + '    ' + strOne + '    {\n'
                strAll = strAll + args +
                    '\n        this.rpc.send(clientId,' + '"' + funName + '",args)' +
                    '\n    }\n\n'

            }
            else {
                //生成call
                let param = strOne.substring(startStr, strOne.length)
                let header = funName.substring(0, 1)//一个字符小写的
                let upperCase = header.toUpperCase()//转成大写
                let nFunName = upperCase + funName.substring(1, funName.length)

                strOne = 'call' + nFunName + param

                strAll = strAll + '    async ' + strOne + '    {\n'
                strAll = strAll + args +
                    '\n        let res: any = await this.rpc.call("' + funName + '",args)' +
                    '\n        return res' +
                    '\n    }\n\n'
                //生成send
                param = param.substring(param.indexOf('('), param.indexOf(')') + 1)
                strOne = 'send' + nFunName + param
                strAll = strAll + '    ' + strOne + '    {\n'
                strAll = strAll + args +
                    '\n        this.rpc.send("' + funName + '",args)' +
                    '\n    }\n\n'
            }
            rpcS2CFuns += strAll
        }
    }
    return rpcS2CFuns
}

function createFunLists(start, lineArr, end) {
    if (end) {
        if (end === 0) {
            return ''
        }
    }

    end = end || lineArr.length - 1 //这里减去1是因为最后一个是}
    let funs = ''
    for (let i = start; i < end; i++) {
        let strOne = lineArr[i]
        if (!strOne.match('/')) {
            let funsStr = strOne.split('(')
            if (i === end - 1) {
                funsStr = '"' + funsStr[0].replace(/ /g, '') + '"';
            }
            else {
                funsStr = '"' + funsStr[0].replace(/ /g, '') + '", ';

            }
            funs += funsStr
        }

    }
    funs = '    private funs_: string[] = [' + funs + ']'
    return funs
}

// 生成虚函数
function abstractFuns(start, lineArr, end, isS2C) {
    if (end) {
        if (end === 0) {
            return ''
        }
    }
    end = end || lineArr.length - 1 //这里减去1是因为最后一个是}

    let funs = ''
    for (let i = start; i < end; i++) {
        let strOne = lineArr[i]
        if (strOne.match('/')) {
            funs = funs + strOne + '\n'
        }
        else {
            //消除空格
            strOne = strOne.replace(/ /g, '');
            let startStr = strOne.indexOf('(')
            let endStr = strOne.indexOf(')')
            let oneFun = strOne
            if (isS2C) {
                let funName = strOne.substring(0, startStr)
                oneFun = funName + '(clientId:number,' + strOne.substring(startStr + 1, strOne.length)
                oneFun = '    abstract ' + oneFun + '\n'
                funs += oneFun + '\n'
            }
            else {
                //call
                let funName = strOne.substring(0, startStr)
                oneFun = funName + '(clientId:number,' + strOne.substring(startStr + 1, strOne.length)
                oneFun = '    abstract ' + oneFun + '\n'
                funs += oneFun + '\n'
            }
        }
    }
    return funs
}