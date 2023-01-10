import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

export class BaseSequelize extends Sequelize {

    constructor(options?: SequelizeOptions) {
        super(options);
        setInterval(this.keepAlive.bind(this), 60 * 1000 * 5);
    }

    keepAlive() {
        this.query('select 1');
    }
}
