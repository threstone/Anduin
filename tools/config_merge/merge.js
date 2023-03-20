const fs = require('fs');
const path = require('path');

// const dirPath = '../../configs/';
const configsPath = process.argv[2];

doMerge(configsPath + 'client/')
doMerge(configsPath + 'server/')

function doMerge(dirPath) {
    const dirInfo = fs.readdirSync(dirPath);

    const mergeConfig = {};

    for (let index = 0; index < dirInfo.length; index++) {
        const fileName = dirInfo[index];
        const filePath = dirPath + fileName;
        if (fileName === 'config.json' || path.extname(filePath) !== ".json") {
            continue;
        }

        const tempConfig = require(filePath);
        const formatName = fileName.substring(0, fileName.indexOf('.'));
        if (mergeConfig[formatName]) {
            throw `重名的配置${filePath}`
        }
        mergeConfig[formatName] = tempConfig;
    }

    fs.writeFileSync(`${dirPath}config.json`, JSON.stringify(mergeConfig), { encoding: 'utf8' })
    console.log(`write to ${dirPath}config.json successfully`);
}