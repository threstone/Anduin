#!/usr/bin/env node
const servers = require('../config/servers.json');
const args = process.argv.slice(2);
if (args.length === 0) {
    showHelp();
    return;
}

// 帮助命令
if (args.indexOf('-h') !== -1 || args.indexOf('--help') !== -1) {
    showHelp();
    return;
}

// 环境命令
const envIndex = Math.max(args.indexOf('-e'), args.indexOf('--environment'));
let environment;
if (envIndex !== -1) {
    environment = args[envIndex + 1];
    args.splice(envIndex, 2);
} else {
    console.log('缺少环境参数');
    return;
}

// 是否后台启动
const isBackgroud = args.indexOf('-b') !== -1;

handleCmd();

function handleCmd() {
    // 删除不支持的所有参数
    for (let index = args.length - 1; index >= 0; index--) {
        const argv = args[index];
        if (argv.startsWith('-')) {
            args.splice(index, 1);
        }
    }

    const cmdList = ['startall', 'stopall', 'list', 'kill', 'start', 'restart']
    const argv = args.shift().toLowerCase();
    const index = cmdList.indexOf(argv);
    if (index !== -1) {
        eval(`${argv}.apply(this, args)`);
    } else {
        console.error('未知命令,请参考如下帮助:');
        showHelp();
    }
}

/** 启动服务 */
function startall() {
    const path = require('path');
    const childProcess = require('child_process');
    const scriptPath = path.join(__dirname, '../../servers/master/src/bin/main.js');
    if (isBackgroud) {
        const os = require('os');
        if (os.platform() == 'win32') {
            console.error('windows下暂时不支持后台启动');
            return;
        }
        const cmd = `nohup node ${scriptPath} env=${environment} nodeId=master &`;
        childProcess.exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`执行命令时发生错误：${error}`);
                return;
            }

            console.log(`stdout:\n${stdout}`);
            console.error(`stderr:\n${stderr}`);
        });
        setTimeout(() => {
            process.exit();
        }, 1500);
    } else {
        const worker = childProcess.fork(scriptPath, [`env=${environment}`, 'nodeId=master']);
        worker.on('exit', (code, signal) => {
            console.log(`exit code:${code}, signal:${signal}`);
        });
        worker.on('error', (error) => {
            console.error('error:', error);
        });
        worker.on('message', (message) => {
            console.log('message:', message);
        });
    }
}

/** 停止所有进程 */
function stopall() {
    sendCMD('stopAll');
}

/** 展示所有进程 */
function list() {
    sendCMD('list');
}

/** 杀死指定进程 */
function kill(nodeId) {
    sendCMD('kill', JSON.stringify({ nodeId: nodeId }));
}

/** 启动指定进程 */
function start(nodeId) {
    sendCMD('start', JSON.stringify({ nodeId: nodeId }));
}

/** 重新启动指定进程 */
function restart(nodeId) {
    sendCMD('restart', JSON.stringify({ nodeId: nodeId }));
}

/** 展示帮助 */
function showHelp() {
    console.log(
        `
参数:
-h --help                 展示所有帮助
-e --environment          指定启动环境
-b                        后台启动  

命令:
anduin startAll {environment}               启动服务
anduin stopAll  {environment}               停止所有进程
anduin list     {environment}               展示所有进程
anduin kill    -e {environment} {nodeId}    杀死指定进程
anduin start   -e {environment} {nodeId}    启动指定进程
anduin restart -e {environment} {nodeId}    重新启动指定进程
        `
    );
}

function sendCMD(cmd, dataStr) {
    return new Promise((resolve, reject) => {
        const config = servers[environment].master;
        const http = require('http');
        // 创建HTTP GET请求选项对象
        const options = {
            hostname: config.ip,
            port: config.port,
            path: `/${cmd}`,
            method: 'GET'
        };
        if (dataStr) {
            options.headers = {
                'Content-Type': 'application/json',
                //必须在请求头中设置内容的长度
                'Content-Length': Buffer.byteLength(dataStr)
            }
        }
        // 发起HTTP GET请求
        const req = http.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                console.log(`${data}`);
                resolve(data);
            });
        });

        req.on('error', (err) => {
            console.error(`Error: ${err.message}`);
            reject(err);
        });

        if (dataStr) {
            req.write(dataStr);
        }
        req.end();
    })
}