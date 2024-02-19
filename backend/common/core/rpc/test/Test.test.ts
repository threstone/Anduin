import * as assert from 'assert';
import { RpcMessageType, RpcUtils, RpcUtilsByJson } from '../RpcUtils';
describe('rpc test', () => {
    it("rpc request encode&decode json buffer耗时比对", () => {
        const times = 10000;
        let lenAvg = 0;
        let now = Date.now();
        for (let index = 0; index < times; index++) {
            const buffer = RpcUtilsByJson.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', index, {}, [1, 'a', 1.23, false]);
            lenAvg += buffer.length;
            const msg = RpcUtilsByJson.decodeReqMsg(buffer);
            assert.strictEqual(msg.fromNodeId, 'nodeId');
            assert.strictEqual(msg.serverName, 'serverName');
            assert.strictEqual(msg.className, 'className');
            assert.strictEqual(msg.funcName, 'funcName');
            assert.strictEqual(msg.requestId, index);
        }
        console.log(`  JSON ${times}次序列化反序列化用时 : ${Date.now() - now}ms   平均包体大小${lenAvg / times}`);

        lenAvg = 0;
        now = Date.now();
        for (let index = 0; index < times; index++) {
            const buffer = RpcUtils.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', index, {}, [1, 'a', 1.23, false]);
            lenAvg += buffer.length;
            const msg = RpcUtils.decodeReqMsg(buffer);
            assert.strictEqual(msg.fromNodeId, 'nodeId');
            assert.strictEqual(msg.serverName, 'serverName');
            assert.strictEqual(msg.className, 'className');
            assert.strictEqual(msg.funcName, 'funcName');
            assert.strictEqual(msg.requestId, index);
        }
        console.log(`  BUFFER ${times}次序列化反序列化用时 : ${Date.now() - now}ms   平均包体大小${lenAvg / times}`);
    });

    it("rpc result encode&decode json buffer耗时比对", () => {
        // const times = 10000;
        // let lenAvg = 0;
        // let now = Date.now();
        // for (let index = 0; index < times; index++) {
        //     const buffer = RpcUtilsByJson.encodeResult({
        //         type: RpcMessageType.result,
        //         fromNodeId: 'fromNodeId',
        //         result: 1
        //     });
        //     lenAvg += buffer.length;
        //     const msg = RpcUtilsByJson.decodeResult(buffer);
        //     assert.strictEqual(msg.type, RpcMessageType.result);
        //     assert.strictEqual(msg.fromNodeId, 'fromNodeId');
        //     assert.strictEqual(msg.result, 1);
        // }
        // console.log(`  JSON ${times}次序列化反序列化用时 : ${Date.now() - now}ms   平均包体大小${lenAvg / times}`);

        // lenAvg = 0;
        // now = Date.now();
        // for (let index = 0; index < times; index++) {
        //     const buffer = RpcUtils.encodeResult({
        //         type: RpcMessageType.result,
        //         fromNodeId: 'fromNodeId',
        //         result: 1
        //     });
        //     lenAvg += buffer.length;
        //     const msg = RpcUtils.decodeResult(buffer);
        //     assert.strictEqual(msg.type, RpcMessageType.result);
        //     assert.strictEqual(msg.fromNodeId, 'fromNodeId');
        //     assert.strictEqual(msg.result, 1);
        // }
        // console.log(`  BUFFER ${times}次序列化反序列化用时 : ${Date.now() - now}ms   平均包体大小${lenAvg / times}`);
    });

    it("路由信息获取", () => {
        const sourceRoute = { serverName: 'serverName', className: 'className', funcName: 'funcName', type: 11, nodeId: 'abc' }
        const buffer = RpcUtils.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', 1, sourceRoute, []);
        const routeInfo: RpcRouterOptions = {};
        RpcUtils.readRouteOptions(routeInfo, buffer);
        assert.strictEqual(routeInfo.type, sourceRoute.type);
        assert.strictEqual(routeInfo.nodeId, sourceRoute.nodeId);
    });
});