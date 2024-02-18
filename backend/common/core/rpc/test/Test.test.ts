import * as assert from 'assert';
import { RpcUtils, RpcUtilsByJson } from '../RpcUtils';
describe('rpc test', () => {
    it("耗时比对", async function () {
        const times = 100000;
        let lenAvg = 0;
        let now = Date.now();
        for (let index = 0; index < times; index++) {
            const buffer = RpcUtilsByJson.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', index, {}, []);
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
            const buffer = RpcUtils.encodeCallReqest('nodeId', 'serverName', 'className', 'funcName', index, {}, []);
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
});