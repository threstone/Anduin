class RightCtrlView extends BaseView<BaseUI.UIRightCtrlCom> {

    private intervalId: number;
    private reqEndTime: number;
    private tipsStart: string

    protected init() {
        this.view = GameSceneView.ins().getView().rightCtrl;
        this.view.endRound.describe.text = '结束回合';
    }

    public open(): void {
        super.open();
        this.view.endRound.visible = false;

        this.addEffectListener('S_ROUND_START_EVENT', this.onRoundStart);
        this.addEffectListener('S_RECONNECT', this.reconnect);
        this.observe('S_ROUND_END_EVENT', this.onRoundEnd);
        this.observe('S_ROUND_END_TIME', this.roundEndTime);

        this.AddClick(this.view.endRound, this.endRoundBtnClick);
    }

    private reconnect(msg: GamePto.S_RECONNECT) {
        const event = new GamePto.S_ROUND_END_TIME();
        event.roundEndTime = msg.roundEndTime;
        event.uid = msg.isSelfRound ? UserModel.ins().uid : -1;

        this.emit('S_ROUND_START_EVENT', event);
        this.emit('S_ROUND_END_TIME', event);
    }

    public close(): void {
        super.close();
        this.reqEndTime = 0;
        this.tipsStart = '等待游戏开始'
        this.updateDesc();
        clearInterval(this.intervalId);
    }

    private endRoundBtnClick() {
        GameModel.ins().C_END_ROUND();
    }

    private onRoundStart(msg: GamePto.S_ROUND_START_EVENT) {
        if (msg.uid === UserModel.ins().uid) {
            this.view.endRound.visible = true;
        }
    }

    private onRoundEnd(evt: EventData) {
        const msg: GamePto.S_ROUND_END_EVENT = evt.data;
        if (msg.uid === UserModel.ins().uid) {
            this.view.endRound.visible = false;
        }
    }

    private roundEndTime(evt: EventData) {
        const msg: GamePto.S_ROUND_END_TIME = evt.data;

        //倒计时
        clearInterval(this.intervalId);
        this.reqEndTime = msg.roundEndTime as number;
        this.tipsStart = msg.uid === UserModel.ins().uid ? '你的回合' : '等待对方';
        this.updateDesc();
        this.intervalId = setInterval(this.updateDesc.bind(this), 1000);
    }

    private updateDesc() {
        this.view.tips.text = `${this.tipsStart}\n${Utils.formatTime(this.reqEndTime - Date.now())}`;
    }

    public showDices(dices: number[]) {
        if (dices.length === 0) {
            return;
        }
        return new Promise<void>((resolve) => {
            this.view.diceList.removeChildren();
            for (let index = 0; index < dices.length; index++) {
                const dice = dices[index];
                const diceMC = fairygui.UIPackage.createObject("BaseUI", "DiceMovie").asMovieClip;
                this.view.diceList.addChild(diceMC);
                diceMC.setPlaySettings(dices.length - 1 - index, 0, 1, dice, () => {
                    if (index === dices.length - 1) {
                        resolve();
                    }
                });
            }
        });
    }
}