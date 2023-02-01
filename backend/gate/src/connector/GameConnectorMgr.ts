import * as gamesConn from '../../../common/config/game_node.json';
import { ILog } from '../../../common/I';
import { ConnectorMgr } from '../../../common/rpc/ConntctorMgr';
import { GameConnector } from './GameConnector';

export class GameConnectorMgr extends ConnectorMgr<GameConnector> {
    constructor(logger: ILog, nodeId: string) {
        super(logger, nodeId, gamesConn, GameConnector);
    }
}