const GenerateType = require("./src/ConstDefine").GenerateType;
let configs = [{
    noCreate: true,
    noConvert: true,
    targetPath: '../../../backend/hall/src/',
    targetName: 'Common',
    isJsMin: true,
    generateType: GenerateType.ProtoBuf,
    commonFiles: [
        '../../../proto/login.proto',
        '../../../proto/hall.proto',
        '../../../proto/system.proto',
        '../../../proto/chat.proto',
        '../../../proto/friend.proto',
    ]
}, {
    noCreate: true,
    noConvert: true,
    targetPath: '../../../backend/gate/src/',
    targetName: 'Common',
    isJsMin: true,
    generateType: GenerateType.ProtoBuf,
    commonFiles: [
        '../../../proto/login.proto',
    ]
}, {
    noCreate: true,
    noConvert: true,
    targetPath: '../../../backend/relation/src/',
    targetName: 'Common',
    isJsMin: true,
    generateType: GenerateType.ProtoBuf,
    commonFiles: [
        '../../../proto/friend.proto',
        '../../../proto/chat.proto',
    ]
}];

module.exports = configs;