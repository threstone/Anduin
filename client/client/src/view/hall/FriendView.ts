class FriendView extends BaseView<BaseUI.UIFriend> {

    private hallView: HallView;
    protected init() {
        this.hallView = HallView.ins();
        this.view = this.hallView.getView().friendCom;
        this.initFriendView();
    }

    initFriendView() {
        GameDispatcher.getInstance().addEventListener('S_FRIEND_INFO', this.updateFriendInfo, this);

        const friendCom = this.view;
        friendCom.showAddFriendBtn.describe.text = '添加好友';
        friendCom.showAddFriendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            friendCom.AddFriendCom.visible = true;
        }, this);

        friendCom.showFriendReqBtn.describe.text = '好友请求';
        friendCom.showFriendReqBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            friendCom.showReqCom.visible = true;
        }, this);

        friendCom.showReqCom.closeBtn.describe.text = '关闭'
        friendCom.showReqCom.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            friendCom.showReqCom.visible = false;
        }, this);

        //添加按钮的点击事件
        friendCom.AddFriendCom.addBtn.describe.text = '添加';
        friendCom.AddFriendCom.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let uid = friendCom.AddFriendCom.uidInput.text;
            //去掉空格
            uid = uid.replace(/ /g, '');
            const numUid = parseInt(uid);
            if (Number.isNaN(numUid)) {
                GlobalView.showTips('id格式错误,请确保id格式是否正常', 5000);
                return;
            }
            FriendModel.ins().C_ADD_FRIEND(numUid);
        }, this);

        //关闭添加好友界面
        friendCom.AddFriendCom.closeBtn.describe.text = '关闭';
        friendCom.AddFriendCom.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            friendCom.AddFriendCom.visible = false;
        }, this);

        //弹出按钮的点击事件
        friendCom.ctrl.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let targetX = friendCom.x;
            if (friendCom.ctrl.describe.text === '好友') {
                friendCom.ctrl.describe.text = '关闭';
                targetX = targetX - friendCom.bg.width;
            } else {
                targetX = targetX + friendCom.bg.width;
                friendCom.ctrl.describe.text = '好友';
            }
            egret.Tween.get(friendCom).to({ x: targetX }, 400);
        }, this);
    }

    updateFriendInfo(evt: EventData) {
        const info: FriendPto.S_FRIEND_INFO = evt.data;
        this.view.list.removeChildren();
        for (let index = 0; index < info.list.length; index++) {
            const friendInfo = info.list[index];
            const friendItem = new BaseUI.UIFriendItem();
            friendItem.nickText.text = friendInfo.nick;
            friendItem.onlineImg.visible = friendInfo.isOnline;
            this.view.list.addChild(friendItem);
        }

        this.view.showReqCom.list.removeChildren();
        for (let index = 0; index < info.reqAddList.length; index++) {
            const reqInfo = info.reqAddList[index];
            const addItem = new BaseUI.UIFriendReqItem();
            const targetUid = reqInfo.uid;
            addItem.nickText.text = reqInfo.nick;
            this.view.showReqCom.list.addChild(addItem);
            addItem.approve.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                FriendModel.ins().C_ADD_FRIEND_REQ_RESULT(true, targetUid);
            }, this);
            addItem.refuse.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                FriendModel.ins().C_ADD_FRIEND_REQ_RESULT(false, targetUid);
            }, this);
        }
    }
}