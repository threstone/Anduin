import * as assert from 'assert';
import { RpcMessageType, RpcUtils, RpcUtilsByBuffer, RpcUtilsByJson } from '../RpcUtils';
import { TestPto } from '../../../CommonProto';
describe('rpc test', () => {

    it(`rpc request encode&decode 字段验证`, () => {
        const args = [1, 2.22, 3.1415926535, 'asdffff', '汉字测试']
        const buffer = RpcUtils.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', 2, { type: 1, nodeId: 'asd' }, args);
        const msg = RpcUtils.decodeRpcMsg(buffer) as RpcReqMsg;
        assert.strictEqual(msg.fromNodeId, 'nodeId');
        assert.strictEqual(msg.requestId, 2);
        assert.strictEqual(msg.serverName, 'serverName');
        assert.strictEqual(msg.className, 'className');
        assert.strictEqual(msg.funcName, 'funcName');
        assert.strictEqual(msg.routeOptions.type, 1);
        assert.strictEqual(msg.routeOptions.nodeId, 'asd');
        for (let index = 0; index < msg.args.length; index++) {
            const element = msg.args[index];
            assert.strictEqual(element, args[index]);
        }
    })

    it("rpc result encode&decode json buffer字段验证", () => {
        const jsonBuffer = RpcUtilsByJson.encodeResult({
            type: RpcMessageType.result,
            fromNodeId: 'fromNodeId',
            result: 1
        });
        const jsonMsg = RpcUtilsByJson.decodeRpcMsg(jsonBuffer) as RpcTransferResult;
        assert.strictEqual(jsonMsg.type, RpcMessageType.result);
        assert.strictEqual(jsonMsg.fromNodeId, 'fromNodeId');
        assert.strictEqual(jsonMsg.result, 1);

        const buffer = RpcUtilsByBuffer.encodeResult({
            type: RpcMessageType.result,
            fromNodeId: 'fromNodeId',
            result: 1
        });
        const msg = RpcUtilsByBuffer.decodeRpcMsg(buffer) as RpcTransferResult;
        assert.strictEqual(msg.type, RpcMessageType.result);
        assert.strictEqual(msg.fromNodeId, 'fromNodeId');
        assert.strictEqual(msg.result, 1);
    });

    it("rpc request encode&decode json buffer耗时比对", () => {
        const times = 10000;
        let lenAvg = 0;
        let now = Date.now();
        let encodeTime = 0;
        let decodeTime = 0;
        for (let index = 0; index < times; index++) {
            const encodeStart = Date.now();
            const buffer = RpcUtilsByJson.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', 2, { type: 1, nodeId: 'asd' }, [1, 2, 3]);
            encodeTime += (Date.now() - encodeStart);
            const decodeStart = Date.now();
            const msg = RpcUtilsByJson.decodeRpcMsg(buffer);
            decodeTime += (Date.now() - decodeStart);
            lenAvg += buffer.length;
        }
        console.log(`\n   JSON  ${times}次序列化反序列化用时 : ${Date.now() - now}ms 序列化用时 : ${encodeTime} 反序列化用时:${decodeTime} 平均包体大小 : ${lenAvg / times}`);

        lenAvg = 0;
        encodeTime = 0;
        decodeTime = 0;
        now = Date.now();
        for (let index = 0; index < times; index++) {
            const encodeStart = Date.now();
            const buffer = RpcUtilsByBuffer.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', 2, { type: 1, nodeId: 'asd' }, [1, 2, 3]);
            encodeTime += (Date.now() - encodeStart);
            const decodeStart = Date.now();
            const msg = RpcUtilsByBuffer.decodeRpcMsg(buffer);
            decodeTime += (Date.now() - decodeStart);
            lenAvg += buffer.length;
        }
        console.log(`  BUFFER ${times}次序列化反序列化用时 : ${Date.now() - now}ms 序列化用时 : ${encodeTime} 反序列化用时:${decodeTime} 平均包体大小 : ${lenAvg / times}`);
        console.log();
    });

    it("protobuf json对比", () => {
        let req = {
            type: 2,
            requestId: 2,
            routeOption: { type: 1, nodeId: 'asd' },
            serverName: 'serverName',
            className: 'className',
            funcName: 'funcName',
            fromNodeId: "nodeId",
            args: [1, 2, 3]
        }
        const times = 10000;

        let lenAvg = 0;
        let encodeTime = 0;
        let decodeTime = 0;
        let now = Date.now();
        for (let index = 0; index < times; index++) {
            const encodeStart = Date.now();
            const buffer = Buffer.from(JSON.stringify(req));
            encodeTime += (Date.now() - encodeStart);
            const decodeStart = Date.now();
            const msg = JSON.parse(buffer.toString());
            decodeTime += (Date.now() - decodeStart);
            lenAvg += buffer.length;
        }
        console.log(`\n   JSON    ${times}次序列化反序列化用时 : ${Date.now() - now}ms 序列化用时 : ${encodeTime} 反序列化用时:${decodeTime} 平均包体大小 : ${lenAvg / times}`);

        lenAvg = 0;
        encodeTime = 0;
        decodeTime = 0;
        now = Date.now();
        for (let index = 0; index < times; index++) {
            const encodeStart = Date.now();
            const buffer = TestPto.RpcTest.encode(req);
            encodeTime += (Date.now() - encodeStart);
            const decodeStart = Date.now();
            const msg = TestPto.RpcTest.decode(buffer.finish());
            decodeTime += (Date.now() - decodeStart);
            lenAvg += buffer.len;
        }
        console.log(`  protobuf ${times}次序列化反序列化用时 : ${Date.now() - now}ms 序列化用时 : ${encodeTime} 反序列化用时:${decodeTime} 平均包体大小 : ${lenAvg / times}`);
        console.log();
    });

    it("rpc result encode&decode json buffer耗时比对", () => {
        const times = 10000;
        let lenAvg = 0;
        let now = Date.now();
        for (let index = 0; index < times; index++) {
            const buffer = RpcUtilsByJson.encodeResult({
                type: RpcMessageType.result,
                fromNodeId: 'fromNodeId',
                result: 1
            });
            lenAvg += buffer.length;
            const msg = RpcUtilsByJson.decodeRpcMsg(buffer);
        }
        console.log(`\n  JSON   结果${times}次序列化反序列化用时 : ${Date.now() - now}ms   平均包体大小${lenAvg / times}`);

        lenAvg = 0;
        now = Date.now();
        for (let index = 0; index < times; index++) {
            const buffer = RpcUtilsByBuffer.encodeResult({
                type: RpcMessageType.result,
                fromNodeId: 'fromNodeId',
                result: 1
            });
            lenAvg += buffer.length;
            const msg = RpcUtilsByBuffer.decodeRpcMsg(buffer);
        }
        console.log(`  BUFFER 结果${times}次序列化反序列化用时 : ${Date.now() - now}ms   平均包体大小${lenAvg / times}`);
        console.log();
    });

    it("全流程时间测试", () => {
        const args = [1, 2.22, 3.1415926535, '测试字符', 'longgggggggggggggggggggggggggggggggggggggggggg',
            'smmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
            'asdadasdasdasdasdasd', false, 'ddddddddddddddddddddddddddddd', '{"version":20,"userId":"107495x","token":"e7cc0fa48078249e9044422aea1de513","icon":"1001","nickname":"让以利亚","power":1103547,"power2":1103547,"towerId":2000,"towerTime":1708237075070,"towerId1":0,"towerTime1":1708227562426,"towerId2":0,"towerTime2":1708227562427,"maxLayer":0,"bloodTime":1708185600929,"stageId":2064,"passTime":1707286675660,"score":0,"ballTime":1708025723685,"levelTime":1708243221923,"lineState":0,"serverName":"策划服","roleMap":{"22938":{"id":22938,"roleId":1001,"upHp":1056,"upAttack":1,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"level":2000,"step":1,"projectileNum":2160,"scale":100,"star":0,"blueId":0,"colors":[0,0,0,0],"weapon":{"id":22937,"weaponId":20207,"level":18,"star":0,"upAttack":7,"affixes":[{"id":53,"isLock":0}]},"exclusiveEquipLevel":-1},"22941":{"id":22941,"roleId":2001,"upHp":1286,"upAttack":100,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":8,"natureIds":[10,8,6],"level":2000,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":100},"22942":{"id":22942,"roleId":2002,"upHp":1271,"upAttack":121,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":17,"natureIds":[10,6,6],"level":2000,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":50},"22943":{"id":22943,"roleId":2003,"upHp":1029,"upAttack":96,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[8,7,7],"level":2000,"step":2,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"22944":{"id":22944,"roleId":2004,"upHp":1608,"upAttack":64,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[6,5,10],"level":2000,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"22945":{"id":22945,"roleId":2005,"upHp":1840,"upAttack":45,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[2,6,7],"level":2000,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"22946":{"id":22946,"roleId":2006,"upHp":1056,"upAttack":93,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[7,8,5],"level":2000,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"22947":{"id":22947,"roleId":2007,"upHp":1279,"upAttack":70,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[7,5,10],"level":2000,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"23499":{"id":23499,"roleId":2021,"upHp":7004,"upAttack":63,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[10,10,5],"level":1,"step":1,"vId":2,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"23501":{"id":23501,"roleId":2019,"upHp":972,"upAttack":62,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[2,2,8],"level":1,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"23503":{"id":23503,"roleId":2020,"upHp":889,"upAttack":66,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[10,6,6],"level":1,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"23504":{"id":23504,"roleId":2011,"upHp":4227,"upAttack":99,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[6,5,10],"level":1,"step":1,"vId":2,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"23561":{"id":23561,"roleId":2008,"upHp":1426,"upAttack":50,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[7,6,7],"level":1,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"23690":{"id":23690,"roleId":2022,"upHp":938,"upAttack":62,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[6,10,7],"level":1,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"23692":{"id":23692,"roleId":2017,"upHp":1394,"upAttack":52,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[10,5,10],"level":1,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1},"23695":{"id":23695,"roleId":2015,"upHp":1158,"upAttack":88,"upCritPer":0,"upCritRatio":0,"upResitCrit":0,"upHitRatio":0,"upMissRatio":0,"upCtrlRatio":0,"upResitCtrl":0,"star":0,"natureIds":[2,5,5],"level":1,"step":1,"vId":0,"blueId":0,"colors":[0,0,0,0],"scale":100,"exclusiveEquipLevel":-1}},"fightList":[22938,22942,22941,22943,22944],"guildId":100054,"guildRole":2,"lastLeaveGuildTime":0,"guildDayActive":1100,"guildWeekActive":1100,"guildActives":[{"active":0,"guildId":100054,"day":20240212},{"active":0,"guildId":100054,"day":20240213},{"active":0,"guildId":100054,"day":20240214},{"active":0,"guildId":100054,"day":20240215},{"active":0,"guildId":100054,"day":20240216},{"active":0,"guildId":100054,"day":20240217},{"active":1100,"guildId":100054,"day":20240218}],"bossUid":"","captives":[],"deliver":0,"guildWarFightInfo":{"configId":-1}}'
        ]
        const times = 10000;
        let lenAvg = 0;
        let now = Date.now();
        for (let index = 0; index < times; index++) {
            // 发送
            const buffer = RpcUtilsByJson.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', 2,
                { type: 1, nodeId: 'asd' }
                , args
            );
            // 路由信息
            const msg4RpcServer = RpcUtilsByJson.decodeRpcMsg(buffer);
            // 请求解析
            const msg = RpcUtilsByJson.decodeRpcMsg(buffer);
            // 结果序列化
            const resultBuffer = RpcUtilsByJson.encodeResult({
                type: 0,
                fromNodeId: 'fromNodeId',
                result: 'test',
                requestId: 111111
            })
            // 结果返回node
            const nodeId = RpcUtilsByJson.decodeRpcMsg(resultBuffer).fromNodeId;
            // 结果反序列化
            const result = RpcUtilsByJson.decodeRpcMsg(resultBuffer);
            lenAvg += resultBuffer.length;
            lenAvg += buffer.length;
        }
        console.log(`\n   JSON  ${times}次全流程时间测试用时 : ${Date.now() - now}ms 平均包体大小 : ${lenAvg / times}`);

        lenAvg = 0;
        now = Date.now();
        for (let index = 0; index < times; index++) {
            // 发送
            const buffer = RpcUtilsByBuffer.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', 2,
                { type: 1, nodeId: 'asd' }
                , args
            );
            // 获取类型
            const type = RpcUtilsByBuffer.getRpcMsgType(buffer);
            // 路由信息
            const routeOptions: RpcRouterOptions = {};
            const offset = RpcUtilsByBuffer.readRouteOptions(routeOptions, buffer);
            const serverName = RpcUtilsByBuffer.readStringFromBuffer(buffer, offset);
            // 请求解析
            const reqMsg = RpcUtilsByBuffer.decodeRpcMsg(buffer)
            // 结果序列化
            const resultBuffer = RpcUtilsByBuffer.encodeResult({
                type: 0,
                fromNodeId: 'fromNodeId',
                result: 'test',
                requestId: 111111
            })
            // 结果返回到指定node
            const nodeId = RpcUtilsByBuffer.getResultTo(buffer);
            // 结果反序列化
            const result = RpcUtilsByBuffer.decodeResult(resultBuffer);
            lenAvg += buffer.length;
            lenAvg += resultBuffer.length;
        }
        console.log(`  BUFFER ${times}次全流程时间测试用时 : ${Date.now() - now}ms 平均包体大小 : ${lenAvg / times}`);
        console.log();
    })
});