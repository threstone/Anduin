class HallView extends BaseView<BaseUI.UIHall>{
    protected init() {
        this.view = BaseUI.UIHall.createInstance();
    }

    public open(): void {
        super.open();
        this.initView();
        
    }

    initView() {
        this.view.nickText.text = UserModel.ins().nick;
        this.view.uidText.text = `ID:${UserModel.ins().uid}`
        FriendView.ins().initFriendView();
    }
}