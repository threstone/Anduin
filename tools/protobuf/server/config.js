const GenerateType = require("./src/ConstDefine").GenerateType;
let configs = [{
    protoFilesRoot: '../../../proto/',
    noCreate: true,
    noConvert: true,
    targetPath: '../../../backend/hall/src/',
    targetName: 'Common',
    isJsMin: true,
    commonFiles: [
        'login.proto',
        'hall.proto',
        'system.proto',
    ],

    generateType: GenerateType.NormalBuf
}, {
    protoFilesRoot: '../../../proto/',
    noCreate: true,
    noConvert: true,
    targetPath: '../../../backend/gate/src/',
    targetName: 'Common',
    isJsMin: true,
    commonFiles: [
        'login.proto',
    ],
    generateType: GenerateType.All
}];

module.exports = configs;