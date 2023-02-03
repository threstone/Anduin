class CreateCardGroup extends BaseView<BaseUI.UICreateCardGroup> {

    private selectPowerId: CardsPto.PowerType;

    protected init() {
        this.selectPowerId = CardsPto.PowerType.ShengTang;
        this.view = BaseUI.UICreateCardGroup.createInstance();
        this.view.selectBtn.describe.text = '选择';

        const list = this.view.powerList;
        //初始化势力channel
        const powerConfigs = ConfigMgr.ins().powerConfig;
        for (let index = 1; index < powerConfigs.length; index++) {
            const config = powerConfigs[index];
            const btn = BaseUI.UIButton1.createInstance();
            btn.describe.text = config.powerName;
            list.addChild(btn);
        }
        this.onPowerChange(CardsPto.PowerType.ShengTang);
    }

    public open(): void {
        super.open();
        this.initView();
    }

    private initView() {
        this.AddClick(this.view.close, this.close);
        this.AddClick(this.view.selectBtn, this.onSelectBtnClick);

        const list = this.view.powerList;
        for (let index = 1; index <= list.numChildren; index++) {
            const btn = list.getChildAt(index - 1);
            this.AddClick(btn, this.onPowerChange.bind(this, index));
        }
    }

    private onPowerChange(powerId: CardsPto.PowerType) {
        this.disGrayAllBtn();
        const powerConfigs = ConfigMgr.ins().powerConfig;
        this.view.powerList.getChildAt(powerId - 1).grayed = true;
        this.view.desc.text = powerConfigs[powerId].desc || "";
        this.selectPowerId = powerId;
    }

    private onSelectBtnClick() {
        this.close();
        if (this.view.groupName.text.length === 0) {
            this.view.groupName.text = CardsModel.ins().getCardGroupName(this.selectPowerId);
        }
        CardsView.ins().doCreateCardGroup(this.selectPowerId, this.view.groupName.text, null);
        this.view.groupName.text = '';
    }

    private disGrayAllBtn() {
        const list = this.view.powerList;
        for (let index = 1; index <= list.numChildren; index++) {
            const btn = list.getChildAt(index - 1);
            btn.grayed = false;
        }
    }
}