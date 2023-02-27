class MoveUtils extends BaseClass {

    /**获取可移动坐标 */
    public getMovablePoint(cardInfo: GamePto.ICard, config: CardInterface) {
        const resultSet = new Set<number>();
        //要根据卡片配置决定是飞行还是行走
        const step = CardsModel.ins().getCardMoveStep(config);
        const isFly = step < 0;
        if (isFly) {
            this.getFlyablePoint(cardInfo.blockX, cardInfo.blockY, step, resultSet);
        } else {
            this.getWalkablePoint(cardInfo.blockX, cardInfo.blockY, step, resultSet);
        }
        return resultSet;
    }

    public checkMove(x: number, y: number) {
        if (x < 0 || x >= 7 || y < 0 || y >= 8) {
            return false;
        }
        return MapView.ins().unitPool[x][y] == null;
    }

    /**获取可以走去的位置 */
    private getWalkablePoint(baseX: number, baseY: number, step: number, resultSet: Set<number>) {
        if (step === 0) {
            return;
        }

        const checkXArr = [baseX - 1, baseX + 1, baseX, baseX];
        const checkYArr = [baseY, baseY, baseY + 1, baseY - 1];
        for (let index = 0; index < 4; index++) {
            const x = checkXArr[index];
            const y = checkYArr[index];
            if (this.checkMove(x, y)) {
                resultSet.add(y * 7 + x);
                this.getWalkablePoint(x, y, step - 1, resultSet)
            }
        }
    }

    /**获取可以飞到的位置 */
    private getFlyablePoint(baseX: number, baseY: number, step: number, resultSet: Set<number>) {
        for (let x = baseX - step; x < baseX + step; x++) {
            for (let y = baseY - step; y < baseY + step; y++) {
                if (this.checkMove(x, y)) {
                    resultSet.add(y * 7 + x);
                }
            }
        }
    }
}