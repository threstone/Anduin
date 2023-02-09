import { GameTable } from '../game/GameTable';
// import * as assert from 'assert';
describe('GameTable Test', () => {
    it("random", async function () {
        let table = new GameTable(1, 1);
        table.setRandSeed(123);
        let res = [0, 0, 0]
        for (let index = 0; index < 1000; index++) {
            res[table.random(2)]++;
        }
    });

    it("shuffle", async function () {
        let table = new GameTable(1, 1);
        let cards = [1, 2, 3, 4, 5];
        table.setRandSeed(123);
        table.shuffle(cards);
    });
});

