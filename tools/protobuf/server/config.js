const GenerateType = require("./src/ConstDefine").GenerateType;
let configs = [{
    noCreate: true,
    noConvert: true,
    targetPath: '../../../backend/hall/src/',
    targetName: 'Common',
    isJsMin: true,
    commonFiles: [
        '../../../proto/login.proto',
        '../../../proto/hall.proto',
        '../../../proto/system.proto',
        '../../../proto/chat.proto',
        '../../../proto/friend.proto',
    ],

    generateType: GenerateType.ProtoBuf
}, {
    noCreate: true,
    noConvert: true,
    targetPath: '../../../backend/gate/src/',
    targetName: 'Common',
    isJsMin: true,
    commonFiles: [
        '../../../proto/login.proto',
    ],
    generateType: GenerateType.All
}];

module.exports = configs;