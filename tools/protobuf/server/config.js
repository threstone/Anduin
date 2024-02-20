const GenerateType = require("./src/ConstDefine").GenerateType;
let configs = [
    {
        noCreate: true,
        noConvert: true,
        targetPath: '../../../backend/common/',
        targetName: 'Common',
        isJsMin: true,
        generateType: GenerateType.ProtoBuf,
        commonFiles: [
            '../../../proto/login.proto',
            '../../../proto/chat.proto',
            '../../../proto/hall.proto',
            '../../../proto/system.proto',
            '../../../proto/friend.proto',
            '../../../proto/cards.proto',
			'../../../proto/game.proto',
			'../../../proto/friendlyMatch.proto',
			'../../../proto/test.proto',
        ]
    }
];

module.exports = configs;