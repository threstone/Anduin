import * as servers from '../../../common/config/servers.json';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as BodyParser from 'koa-bodyparser';
import { getLogger } from 'log4js';
import { GlobalVar } from './GlobalVar';

const logger = getLogger(startupParam?.nodeId);
export class CommonServer {
    constructor() {
        const serversConfigs = servers[startupParam.env];
        const port = serversConfigs.master?.port || 1000;
        const app = new Koa();
        app.use(BodyParser());

        this.addRouter(app);

        app.listen(port, () => {
            logger.info(`start common server successfully, port:${port}`);
        });
    }

    private addRouter(app: Koa<Koa.DefaultState, Koa.DefaultContext>) {
        const router = new Router();
        app.use(router.routes());

        router.get('/list', this.list.bind(this));
        router.get('/kill', this.kill.bind(this));
        router.get('/start', this.start.bind(this));
        router.get('/restart', this.restart.bind(this));
        router.get('/stopAll', this.stopAll.bind(this));
    }

    private async list(ctx: Koa.Context, next: Koa.Next) {
        ctx.response.body = GlobalVar.nodeMgr.getServerInfo();
        await next();
    }

    private async kill(ctx: Koa.Context, next: Koa.Next) {
        const body = ctx.request.body as any;
        GlobalVar.nodeMgr.serverMap.get(body.nodeId)?.kill();
        ctx.response.status = 200;
        await next();
    }

    private async start(ctx: Koa.Context, next: Koa.Next) {
        const body = ctx.request.body as any;
        GlobalVar.nodeMgr.startServer(body.nodeId);
        ctx.response.status = 200;
        await next();
    }

    private async restart(ctx: Koa.Context, next: Koa.Next) {
        const body = ctx.request.body as any;
        GlobalVar.nodeMgr.restart(body.nodeId);
        ctx.response.status = 200;
        await next();
    }

    private async stopAll(ctx: Koa.Context, next: Koa.Next) {
        ctx.response.status = 200;
        logger.info('process exit')
        setTimeout(() => {
            process.exit();
        }, 500);
        await next();
    }
}