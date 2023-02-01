import * as loginsConn from '../../../common/config/hall_node.json';
import { ILog } from '../../../common/I';
import { ConnectorMgr } from '../../../common/rpc/ConntctorMgr';
import { HallConnector } from './HallConnector';

export class HallConnectorMgr extends ConnectorMgr<HallConnector> {
    constructor(logger: ILog, nodeId: string) {
        super(logger, nodeId, loginsConn, HallConnector);
    }
}