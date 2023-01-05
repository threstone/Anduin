let configs = [{
    //-----------以下为服务端共有proto文件的配置
    protoFilesRoot: '../../../proto/',                    //proto文件所在目录

    noCreate: true,
    noConvert: true,

    jsTarget: '../../../backend/hall/src/',//proto 生成的js目标地址
    tsTarget: '../../../backend/hall/src/',   //通过生成的js 生成ts的目标地址

    jsName: 'CommonProto.js',
    tsName: 'CommonProto.d.ts',

    isJsMin: true,//是否生成压缩过的js

    commonFiles: [
        'login.proto',
        'hall.proto',
        'system.proto',
    ],
}]




module.exports = configs;