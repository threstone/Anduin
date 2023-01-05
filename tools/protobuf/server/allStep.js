let process = require('child_process');
let fs = require('fs');
let path = require('path');
const configs = require('./config');


for (let index = 0; index < configs.length; index++) {
    const config = configs[index];
    genByConfig(config);
}

//     ------------------------------方法------------------------------

function genByConfig(config) {
    //检查各对应文件夹是否存在   不在则创建
    if (!fs.existsSync(config.jsTarget)) {
        fs.mkdirSync(config.jsTarget)
    }
    if (!fs.existsSync(config.tsTarget)) {
        fs.mkdirSync(config.tsTarget)
    }

    let files = config.commonFiles;
    let fileName = '';
    for (let i = 0; i < files.length; i++) {

        if (path.extname(files[i]) != ".proto") {
            continue;
        }
        fileName += ' ' + config.protoFilesRoot + files[i];
    }

    let jsRealPath = config.jsTarget + config.jsName;
    let tsRealPath = config.tsTarget + config.tsName;
    //生成common.js   common.d.ts
    createJs(jsRealPath, fileName, function () {
        createTs(tsRealPath, jsRealPath, function () {
            if (config.isJsMin) {
                createMinJs(jsRealPath, fileName, function () {
                    console.log('完成');
                }, config)
            }
        });
    }, config);
}

/**
 * 生成proto js
 * @param {*} jsTarget    生成文件的存放地址
 * @param {*} protoRealPath    要转化的proto文件
 * @param {*} callBack    回调
 */
function createJs(jsTarget, protoRealPath, callBack, config) {

    let createJsShell = 'pbjs -t static-module -w commonjs --keep-case --force-number ' + (config.noCreate ? '--no-create' : '') + ' -o '
    //生成proto js文件
    process.exec(createJsShell + jsTarget + ' ' + protoRealPath,
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                return;
            }
            if (callBack) {
                callBack();
            }
        });

}

/**
 * 生成较小的proto js  
 * @param {*} jsTarget    生成文件的存放地址
 * @param {*} protoRealPath    要转化的proto文件
 * @param {*} callBack    回调
 */
function createMinJs(jsTarget, protoRealPath, callBack, config) {

    let createMinJsShell = 'pbjs -t static-module -w commonjs --keep-case --force-number ' + (config.noCreate ? '--no-create' : '')
        + (config.noConvert ? '--no-convert' : '')
        + ' --no-verify --no-comments --no-beautify --no-delimited  -o ';

    process.exec(createMinJsShell + jsTarget + ' ' + protoRealPath,
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                return;
            }
            if (callBack) {
                callBack();
            }
        });

}


/**
 * 根据js 生成对应的.d.ts   
 * @param {*} tsTarget  .d.ts文件的存放地址
 * @param {*} jsRealPath  js文件的地址
 * @param {*} callBack  回调
 */
function createTs(tsTarget, jsRealPath, callBack) {
    process.exec('pbts -o ' + tsTarget + ' ' + jsRealPath,
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                return;
            }
            if (callBack) {
                callBack();
            }
        });
}

