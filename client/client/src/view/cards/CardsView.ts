class CardsView extends BaseView<BaseUI.UICards> {
    protected init() {
        this.view = BaseUI.UICards.createInstance();
        this.view.allBtn.describe.text = '所有';
        const powerConfigs: { Id: number, KeyName: string }[] = ConfigMgr.ins().getPowerConfig();
        for (let index = 0; index < powerConfigs.length; index++) {
            const config = powerConfigs[index];
            const btn = PowerBtn.getBtn(config.KeyName, config.Id);
            this.view.powerList.addChild(btn);
        }
    }

    public open(): void {
        super.open();
        this.initView();
    }

    private initView() {
        this.initPowerList();
    }

    private initPowerList() {
        //初始化power btn的点击事件
        const powerList = this.view.powerList;
        for (let index = 0; index < powerList.numChildren; index++) {
            const btn = powerList.getChildAt(index) as BaseUI.UIPowerBtn;
            const powerId = PowerBtn.getPowerId(btn);
            this.AddClick(btn, this.changePowerChannel.bind(this, powerId))
        }
    }

    private changePowerChannel(powerId: number) {
        //将顶部的power channel按钮的样子变一下
        const powerList = this.view.powerList;
        for (let index = 0; index < powerList.numChildren; index++) {
            const btn = powerList.getChildAt(index) as BaseUI.UIPowerBtn;
            btn.grayed = powerId === PowerBtn.getPowerId(btn)
        }
    }
}