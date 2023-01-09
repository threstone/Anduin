class FriendView extends BaseView<BaseUI.UIFriend> {

    private hallView: HallView;
    protected init() {
        this.hallView = HallView.ins();
        this.view = this.hallView.getView().friendCom;
    }

    initFriendView() {
        const friendCom = this.view;
        friendCom.addBtn.describe.text = '添加好友';
        this.AddClick(friendCom.addBtn, () => {
            friendCom.AddFriendCom.visible = true;
        });
        friendCom.AddFriendCom.findBtn.describe.text = '添加';
        this.AddClick(friendCom.AddFriendCom, () => {

        })
        this.AddClick(friendCom.ctrl, () => {
            let targetX = friendCom.x;
            if (friendCom.ctrl.describe.text === '好友') {
                friendCom.ctrl.describe.text = '关闭';
                targetX = targetX - friendCom.bg.width;
            } else {
                targetX = targetX + friendCom.bg.width;
                friendCom.ctrl.describe.text = '好友';
            }
            egret.Tween.get(friendCom).to({ x: targetX }, 400);
        })
        // this.AddClick()
    }

    public AddClick(target: egret.DisplayObject | fairygui.GObject, func: Function) {
        this.hallView.AddClick(target, func);
    }
}