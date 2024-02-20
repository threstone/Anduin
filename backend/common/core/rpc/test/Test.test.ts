import * as assert from 'assert';
import { RpcMessageType, RpcUtilsByBuffer, RpcUtilsByJson } from '../RpcUtils';
import { TestPto } from '../../../CommonProto';
describe('rpc test', () => {

    it(`rpc request encode&decode 字段验证`, () => {
        const args = [1, 2, 3]
        const buffer = RpcUtilsByJson.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', 2, { type: 1, nodeId: 'asd' }, args);
        const msg = RpcUtilsByJson.decodeRpcMsg(buffer) as RpcReqMsg;
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
        const times = 10000;
        let lenAvg = 0;
        let now = Date.now();
        for (let index = 0; index < times; index++) {
            // 发送
            const buffer = RpcUtilsByJson.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', 2, { type: 1, nodeId: 'asd' }, [1, 2, 3]);
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
            const buffer = RpcUtilsByBuffer.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', 2, { type: 1, nodeId: 'asd' }, [1, 2, 3]);
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