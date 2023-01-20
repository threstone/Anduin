class FriendView extends BaseView<BaseUI.UIFriendCom> {

    private hallView: HallView;
    private curSelectUid = -1;

    protected init() {
        this.hallView = HallView.ins();
        this.view = this.hallView.getView().friendCom;
        this.initFriendView();
    }

    private initFriendView() {
        GameDispatcher.getInstance().addEventListener('FriendRedShow', this.updateFriendAddInfo, this);
        GameDispatcher.getInstance().addEventListener('FriendUpdate', this.updateFriendInfo, this);
        this.updateFriendAddInfo();
        this.updateFriendInfo();

        const friendCom = this.view;
        friendCom.showAddFriendBtn.describe.text = '添加好友';
        friendCom.showAddFriendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            friendCom.AddFriendCom.visible = true;
        }, this);

        friendCom.showFriendReqBtn.describe.text = '好友请求';
        friendCom.showFriendReqBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            friendCom.showReqCom.visible = true;
            this.view.redTips1.visible = false;
            this.view.redTips2.visible = false;
        }, this);

        friendCom.showReqCom.closeBtn.describe.text = '关闭'
        friendCom.showReqCom.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            friendCom.showReqCom.visible = false;
        }, this);

        this.initAddcom();
        this.initOpCom();
    }

    //点击好友时弹出的操作列表的初始化
    private initOpCom() {
        this.view.friendOpCom.close.addClickListener(() => {
            this.view.friendOpCom.visible = false;
        }, this);

        const list = this.view.friendOpCom.opList;
        //add private chat btn
        const chatBtn = BaseUI.UIButton3.createInstance();
        chatBtn.addClickListener(() => {
            if (this.curSelectUid === -1) {
                return;
            }
            ChatView.ins().openInFriendChannel(this.curSelectUid);
            this.view.friendOpCom.visible = false;
        }, this)
        chatBtn.describe.text = '私聊';
        list.addChild(chatBtn);

        const fightBtn = BaseUI.UIButton3.createInstance();
        fightBtn.describe.text = '友谊赛';
        fightBtn.touchable = false;
        fightBtn.grayed = true;
        list.addChild(fightBtn);

        //计算list大小
        list.height = chatBtn.height * list.numChildren;
    }

    /**
     * 初始化好友添加控件
     */
    private initAddcom() {
        const friendCom = this.view;
        //添加按钮的点击事件
        friendCom.AddFriendCom.addBtn.describe.text = '添加';
        friendCom.AddFriendCom.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let uid = friendCom.AddFriendCom.uidInput.text;
            if (uid.length > 10) {
                GlobalView.showTips('uid异常', 5000)
                return;
            }
            friendCom.AddFriendCom.uidInput.text = '';
            //去掉空格
            uid = uid.replace(/ /g, '');
            const numUid = parseInt(uid);
            if (Number.isNaN(numUid)) {
                GlobalView.showTips('id格式错误,请确保id格式是否正常', 5000);
                return;
            }
            if (numUid === UserModel.ins().uid) {
                GlobalView.showTips('不能添加自己', 5000);
                return;
            }

            if (!this.checkReqInfo(numUid)) {
                FriendModel.ins().C_ADD_FRIEND(numUid);
            }
            friendCom.AddFriendCom.visible = false;
        }, this);

        //关闭添加好友界面
        friendCom.AddFriendCom.closeBtn.describe.text = '关闭';
        friendCom.AddFriendCom.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            friendCom.AddFriendCom.visible = false;
        }, this);
        friendCom.AddFriendCom.close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
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

    private updateFriendAddInfo() {
        const reqAddList = FriendModel.ins().reqAddList;
        if (!reqAddList) {
            return;
        }
        const list = this.view.showReqCom.list;
        list.removeChildren();
        for (let index = 0; index < reqAddList.length; index++) {
            const reqInfo = reqAddList[index];
            if (reqInfo === null) {
                continue;
            }
            const addItem = BaseUI.UIFriendReqItem.createInstance();;
            const targetUid = reqInfo.uid;
            addItem.nickText.text = reqInfo.nick;
            addItem.approve.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                FriendModel.ins().C_ADD_FRIEND_REQ_RESULT(true, targetUid);
                list.removeChild(addItem);
                reqAddList[index] = null;
            }, this);
            addItem.refuse.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                FriendModel.ins().C_ADD_FRIEND_REQ_RESULT(false, targetUid);
                list.removeChild(addItem);
                reqAddList[index] = null;
            }, this);
            list.addChild(addItem);
        }

        //红点
        if (list.numChildren !== 0) {
            this.view.redTips1.visible = true;
            this.view.redTips2.visible = true;
        }
    }

    private updateFriendInfo() {
        const list = FriendModel.ins().friendList;
        if (!list) {
            return;
        }
        this.view.list.removeChildren();
        for (let index = 0; index < list.length; index++) {
            const friendInfo = list[index];
            const friendItem = BaseUI.UIFriendItem.createInstance();
            friendItem.nickText.text = friendInfo.nick;
            friendItem.onlineImg.color = friendInfo.isOnline ? 0xFFFFFF : 0xFF0000;
            friendItem.addClickListener((data: egret.TouchEvent) => {
                this.view.friendOpCom.visible = true;
                let point = this.view.friendOpCom.globalToLocal(data.stageX, data.stageY);
                this.view.friendOpCom.opList.y = point.y;
                this.curSelectUid = friendInfo.uid;
            }, this)
            this.view.list.addChild(friendItem);
        }

        this.updateFriendAddInfo();
    }

    //检查要添加的好友是否在请求列表中
    private checkReqInfo(targetUid: number) {
        const reqAddList = FriendModel.ins().reqAddList;
        if (!reqAddList) {
            return;
        }
        for (let index = 0; index < reqAddList.length; index++) {
            const reqAdd = reqAddList[index];
            if (reqAdd && reqAdd.uid === targetUid) {
                reqAddList[index] = null;
                FriendModel.ins().C_ADD_FRIEND_REQ_RESULT(true, targetUid);
                this.updateFriendAddInfo();
                return true;
            }
        }
        return false;
    }
}