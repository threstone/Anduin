import { Logger, getLogger } from 'log4js';
import * as ChildProcess from 'child_process';
import * as Path from 'path';
export class NodeWorker {

    protected _execPath: string;
    private _options: ChildProcess.ForkOptions;

    serverConfig: ServerConfig;
    worker: ChildProcess.ChildProcess;
    exitedAfterKill: boolean = false;

    logger: Logger

    constructor(serverName: string, serverConfig: ServerConfig) {
        this._execPath = Path.join(__dirname,`../../${serverName}/src/bin/main`);
        this.serverConfig = serverConfig;
        this.logger = getLogger(this.serverConfig.nodeId);
    }

    fork(options?: ChildProcess.ForkOptions) {
        if (!this._execPath) {
            this.logger.error('no execPath');
            return;
        }
        this._options = options
        this.initWorker();
    }

    private initWorker() {
        const args = [];
        const keys = Object.keys(this.serverConfig);
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            args.push(`${key}=${this.serverConfig[key]}`);
        }
        const worker = ChildProcess.fork(this._execPath, args, this._options);
        this.worker = worker;

        worker.on('exit', this.onExit.bind(this));
        worker.on('error', this.onError.bind(this));
        worker.on('message', this.onMessage.bind(this));
    }

    kill() {
        this.logger.info(`kill worker${this.worker.pid}`);
        this.exitedAfterKill = true;
        process.kill(this.worker.pid);
    }

    onExit(code: number, signal: string) {
        this.logger.info(`worker${this.worker.pid} exit code: ${code}, signal: ${signal}, exitedAfterKill: ${this.exitedAfterKill}`);
        this.worker.removeAllListeners();
        if (this.serverConfig.autuResume) {
            this.logger.info(`worker${this.worker.pid} was exited, resume a new ${this.serverConfig.nodeId}`)
            this.initWorker();
        }
    }

    onError(error: Error) {
        this.logger.error(`worker${this.worker.pid} got error: ${error}`);
    }

    onMessage(message: any) {
        this.logger.info(`worker${this.worker.pid} message: ${message}`);
    }
}