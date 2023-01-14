class ChatView extends BaseView<BaseUI.UIChat>{

    private selectNomal: boolean;
    private selectUid: number = 0;

    protected init() {
        this.view = BaseUI.UIChat.createInstance();
        this.view.friendBtn.describe.text = '好友';
        this.changeChannel(true);
    }

    open(): void {
        super.open();
        this.AddClick(this.view.close, this.close);
        this.AddClick(this.view.normalInput.sendBtn, this.sendMsg)
        this.AddClick(this.view.friendInput.sendBtn, this.sendMsg)
        this.AddClick(this.view.normalBtn, this.changeChannel.bind(this, true))
        this.AddClick(this.view.friendBtn, this.changeChannel.bind(this, false))
        this.observe('S_CHAT_MESSAGE', this.onNewMsg)

        this.initChatView();
    }

    private showChatToFriendList(chatInfo: ChatMsgInfo) {
        const frinendChatList = this.view.friendChatList;
        frinendChatList.removeChildren();
        chatInfo.unreadNum = 0;
        for (let index = 0; index < chatInfo.msgArr.length; index++) {
            const msg = chatInfo.msgArr[index];
            const isSelf = UserModel.ins().uid === msg.uid;
            const item = ChatItem.getChatItem(msg.nick, msg.msg, isSelf);
            if (isSelf) {
                item.x = frinendChatList.width - item.width;
            }
            frinendChatList.addChild(item);
        }
    }

    private initChatView() {
        this.updateUnreadTips();

        const chatList = this.view.chatList;
        chatList.removeChildren();
        const normalInfo = ChatModel.ins().normalMsgInfo;
        for (let index = 0; index < normalInfo.msgArr.length; index++) {
            const msg = normalInfo.msgArr[index];
            const isSelf = UserModel.ins().uid === msg.uid;
            const item = ChatItem.getChatItem(msg.nick, msg.msg, isSelf);
            if (isSelf) {
                item.x = chatList.width - item.width;
            }
            chatList.addChild(item);
        }

        const friendListCom = this.view.friendList;
        friendListCom.removeChildren();
        //排序过后的在线列表
        const friendInfos = FriendModel.ins().serverInfo.list;
        if (!friendInfos) {
            return;
        }
        for (let index = 0; index < friendInfos.length; index++) {
            const friendInfo = friendInfos[index];
            const friendUid = friendInfo.uid;
            const chatInfo = ChatModel.ins().getFriendMsgArr(friendUid);
            //如果好友私聊选中的是这个好友,那么将聊天记录添加到list中
            const isSelect = this.selectUid === friendUid;
            if (isSelect) {
                this.showChatToFriendList(chatInfo);
            }
            const friendBox = ChatFriendBox.getBox(friendInfo.nick, friendInfo.isOnline, chatInfo.unreadNum, isSelect);
            this.AddClick(friendBox, this.onFriendBoxClick.bind(this, friendBox, chatInfo, friendUid))
            friendListCom.addChild(friendBox);
        }
    }

    private onFriendBoxClick(friendBox: BaseUI.UIChatFriendBox, chatInfo: ChatMsgInfo, friendUid: number) {
        //此颜色说明已经是选中的
        if (ChatFriendBox.isSelect(friendBox)) {
            return;
        }
        //将所有box的选中状态清空
        const friendListCom = this.view.friendList;
        for (let index = 0; index < friendListCom.numChildren; index++) {
            const box = friendListCom.getChildAt(index) as BaseUI.UIChatFriendBox;
            ChatFriendBox.selectBox(box, false)
        }
        ChatFriendBox.selectBox(friendBox, true);
        this.showChatToFriendList(chatInfo);
        this.selectUid = friendUid;
        this.view.clickTips.visible = false;
        this.view.friendInput.visible = true;
    }

    private updateUnreadTips() {
        if (this.selectNomal) {
            ChatModel.ins().clearNormalUnread();
            this.view.normalTipsGroup.visible = false;
            if (ChatModel.ins().allFriendUnreadNum !== 0) {
                this.view.friendTipsGroup.visible = true;
                this.view.friendUnRead.text = `${ChatModel.ins().allFriendUnreadNum}`;
            }
        } else {
            ChatModel.ins().clearFriendUnread();
            this.view.friendTipsGroup.visible = false;
            if (ChatModel.ins().normalMsgInfo.unreadNum !== 0) {
                this.view.normalTipsGroup.visible = true;
                this.view.normalUnRead.text = `${ChatModel.ins().normalMsgInfo.unreadNum}`;
            }
        }
    }

    private changeChannel(isNormal: boolean) {
        this.selectNomal = isNormal;
        this.updateUnreadTips();

        const selectBtn = isNormal ? this.view.normalBtn : this.view.friendBtn;
        const unSelectBtn = isNormal ? this.view.friendBtn : this.view.normalBtn;
        selectBtn.bg.color = 0x54341D;
        unSelectBtn.bg.color = 0xFFFFFF;

        this.view.normalInput.visible = isNormal;

        this.view.friendGroup.visible = !isNormal;
        this.view.chatList.visible = isNormal;
    }

    private sendMsg() {
        const text = this.selectNomal ? this.view.normalInput.inputText.text : this.view.friendInput.inputText.text;
        if (text.length > 128) {
            GlobalView.showTips(`最多输入128个字符,请减少${128 - text.length}个字符`, 5000);
            return;
        }

        //综合消息
        if (this.selectNomal) {
            ChatModel.ins().C_SEND_MESSAGE_TO_ALL(text);
        }  //私聊消息
        else if (this.selectUid) {
            //是否在线，不在线就不发
            if (!FriendModel.ins().isOnline(this.selectUid)) {
                GlobalView.showTips('好友不在线,无法发送消息哦', 5000);
                return;
            }
            ChatModel.ins().C_SEND_PRIVATE_MESSAGE(this.selectUid, text);
        }
    }

    private onNewMsg(evt: EventData) {
        const msg: ChatPto.S_CHAT_MESSAGE = evt.data;
        //私聊消息
        if (msg.isPrivateMsg) {
            if (this.selectNomal) {
                this.view.friendTipsGroup.visible = true;
            }
        }//综合消息
        else {
            if (!this.selectNomal) {
                this.view.normalTipsGroup.visible = true;
                const item = ChatItem.getChatItem(msg.nick, msg.msg, UserModel.ins().uid === msg.uid);
                this.view.chatList.addChild(item);
            }
        }
    }
}