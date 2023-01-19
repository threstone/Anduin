class ChatView extends BaseView<BaseUI.UIChat>{

    private curChannel: ChatPto.MsgType;
    private chatChannelArr: ChatChannel[];

    protected init() {
        this.view = BaseUI.UIChat.createInstance();
        this.chatChannelArr = [];
        const channelNameArr = ['综合', '好友'];
        const lists = [this.view.chatList, this.view.friendChatList];
        const keys = Object.keys(ChatPto.MsgType);
        for (let index = 0; index < keys.length; index++) {
            const chatChannel = new ChatChannel(channelNameArr[index], index, lists[index]);
            this.chatChannelArr.push(chatChannel)
            this.view.channelList.addChild(chatChannel.btn);
            this.view.addChild(chatChannel.inputCom);
        }

        this.changeChannel(ChatPto.MsgType.normal);
    }

    public open(): void {
        super.open();
        this.AddClick(this.view.close, this.close);
        for (let chatType = 0; chatType < this.chatChannelArr.length; chatType++) {
            const channel = this.chatChannelArr[chatType];
            this.AddClick(channel.btn, this.changeChannel.bind(this, chatType))
            this.AddClick(channel.inputCom.sendBtn, this.sendMsg.bind(this, chatType))
            this.initChatList(channel)
        }
        this.observe('S_CHAT_MESSAGE', this.onNewMsg)
        this.observe('FriendUpdate', this.initFriendBoxs)
        this.initChatView();
    }

    public openInFriendChannel(uid: number) {
        ChatModel.ins().selectUid = uid;
        this.changeChannel(ChatPto.MsgType.private);
        ChatModel.ins().getFriendMsg(uid).unreadNum = 0;
        this.view.clickTips.visible = false;
        this.open();
    }

    public close(): void {
        super.close();
        HallView.ins().clearMiniChatTips();
    }

    private showChatToFriendList(chatInfo: ChatMsgInfo) {
        const channel = this.chatChannelArr[ChatPto.MsgType.private];
        channel.chatList.removeChildren();
        chatInfo.unreadNum = 0;
        for (let index = 0; index < chatInfo.msgArr.length; index++) {
            const msg = chatInfo.msgArr[index];
            const isSelf = UserModel.ins().uid === msg.uid;
            ChatItem.addItemToList(channel.chatList, msg.nick, msg.msg, isSelf);
        }
    }

    private initChatView() {
        this.updateUnreadTips();

        //chat list item init
        for (let chatType = 0; chatType < this.chatChannelArr.length; chatType++) {
            const channel = this.chatChannelArr[chatType];
            channel.chatList.removeChildren();
            const msgArr = ChatModel.ins().getMsgArrByType(chatType);
            for (let index = 0; index < msgArr.length; index++) {
                const msg = msgArr[index];
                const isSelf = UserModel.ins().uid === msg.uid;
                ChatItem.addItemToList(channel.chatList, msg.nick, msg.msg, isSelf);
            }
        }

        this.initFriendBoxs()
    }
    /**
     * 初始化好友界面左侧的好友框
     */
    private initFriendBoxs() {
        //好友列表初始化
        const friendListCom = this.view.friendList;
        friendListCom.removeChildren();
        //排序过后的在线列表
        const friendInfos = FriendModel.ins().friendList;
        if (!friendInfos) {
            return;
        }

        const len = friendInfos.length;
        for (let index = 0; index < len; index++) {
            const friendInfo = friendInfos[index];
            const friendUid = friendInfo.uid;
            const chatInfo = ChatModel.ins().getFriendMsg(friendUid);
            const isSelect = ChatModel.ins().selectUid === friendUid;
            const friendBox = ChatFriendBox.getBox(friendInfo.nick, friendInfo.isOnline, chatInfo.unreadNum, isSelect);
            this.observe('S_CHAT_MESSAGE', (evt: EventData) => {
                const msg: ChatPto.S_CHAT_MESSAGE = evt.data;
                if (msg.msgType === ChatPto.MsgType.private && msg.uid === friendUid && friendUid !== ChatModel.ins().selectUid) {
                    ChatFriendBox.addUnreadNum(friendBox, 1);
                }
            });
            this.AddClick(friendBox, this.onFriendBoxClick.bind(this, friendBox, chatInfo, friendUid));
            friendListCom.addChildAt(friendBox, chatInfo.unreadNum !== 0 ? 0 : friendListCom.numChildren);
        }
    }

    private onFriendBoxClick(friendBox: BaseUI.UIChatFriendBox, chatInfo: ChatMsgInfo, friendUid: number) {
        if (ChatFriendBox.isSelect(friendBox)) {
            return;
        }
        //将所有box的选中状态清空
        const friendListCom = this.view.friendList;
        for (let index = 0; index < friendListCom.numChildren; index++) {
            const box = friendListCom.getChildAt(index) as BaseUI.UIChatFriendBox;
            ChatFriendBox.selectBox(box, false);
        }
        ChatFriendBox.selectBox(friendBox, true);
        ChatFriendBox.clearUnreadNum(friendBox);
        this.showChatToFriendList(chatInfo);
        ChatModel.ins().selectUid = friendUid;
        this.view.clickTips.visible = false;
    }

    //每当收到消息或者改变channel的时候要更新未读提示
    private updateUnreadTips() {
        for (let chatType = 0; chatType < this.chatChannelArr.length; chatType++) {
            const channel = this.chatChannelArr[chatType];
            channel.btn.tipsGroup.visible = false;
            //清除未读提示
            if (chatType === this.curChannel) {
                ChatModel.ins().clearUnreadByType(chatType);
                continue;
            }
            const unreadNum = ChatModel.ins().getUnreadNumByType(chatType);
            if (unreadNum) {
                channel.btn.tipsGroup.visible = true;
                channel.btn.unReadNum.text = `${unreadNum}`;
            }
        }
    }

    private changeChannel(type: ChatPto.MsgType) {
        this.curChannel = type;
        this.updateUnreadTips();
        this.view.friendGroup.visible = type === ChatPto.MsgType.private;

        for (let chatType = 0; chatType < this.chatChannelArr.length; chatType++) {
            const channel = this.chatChannelArr[chatType];
            if (chatType !== type) {
                channel.btn.tipsGroup.visible = false;
                channel.btn.grayed = false;
                channel.inputCom.visible = false;
                channel.chatList.visible = false;
            } else {
                channel.btn.grayed = true;
                channel.inputCom.visible = true;
                channel.chatList.visible = true;
            }
        }
    }

    private sendMsg(chatType: ChatPto.MsgType) {
        const channel = this.chatChannelArr[chatType];
        const text = channel.inputCom.inputText.text;
        if (text.length === 0) {
            GlobalView.showTips(`不能发送空的字符`, 5000);
            return;
        }
        if (text.length > 128) {
            GlobalView.showTips(`最多输入128个字符,请减少${128 - text.length}个字符`, 5000);
            return;
        }
        const wrap = text.match(/\n/g);
        if (wrap && wrap.length > 15) {
            GlobalView.showTips(`换行数量太多`, 5000);
            return;
        }

        //私聊
        if (chatType === ChatPto.MsgType.private) {
            //是否在线，不在线就不发
            if (!FriendModel.ins().isOnline(ChatModel.ins().selectUid)) {
                GlobalView.showTips('好友不在线,无法发送消息哦', 5000);
                return;
            }
            ChatItem.addItemToList(channel.chatList, UserModel.ins().nick, text, true);
        }

        ChatModel.ins().C_SEND_MESSAGE(text, chatType);
        this.scrollToUnder(channel.chatList);
        channel.inputCom.inputText.text = '';
    }

    /**
     * 将list滑动到底部
     */
    private scrollToUnder(chatList: fairygui.GList) {
        if (chatList.numChildren === 0) {
            return;
        }
        chatList.scrollToView(chatList.numChildren - 1);
    }

    private onNewMsg(evt: EventData) {
        const msg: ChatPto.S_CHAT_MESSAGE = evt.data;

        const channel = this.chatChannelArr[msg.msgType];
        const isSelf = UserModel.ins().uid === msg.uid;
        if (msg.msgType !== ChatPto.MsgType.private || msg.uid === ChatModel.ins().selectUid) {
            ChatItem.addItemToList(channel.chatList, msg.nick, msg.msg, isSelf);
        }
        //收到信息的时候如果用户没有滑动list那么scroll到底部
        if (channel.scrollTimerId !== -1) {
            this.scrollToUnder(channel.chatList);
        }
        this.updateUnreadTips();
    }

    /**
     * 添加list的时间
     */
    private initChatList(channel: ChatChannel) {
        this.addEvent(channel.chatList.scrollPane, fairygui.ScrollPane.SCROLL_END, this.onListScrollEnd.bind(this, channel), this);
        this.addEvent(channel.chatList.scrollPane, fairygui.ScrollPane.SCROLL, this.onScrool.bind(this, channel), this);
    }

    private onScrool(channel: ChatChannel) {
        if (channel.scrollTimerId !== -1) {
            clearTimeout(channel.scrollTimerId);
            channel.scrollTimerId = -1;
        }
    }

    //15秒后自动到最下面
    private onListScrollEnd(channel: ChatChannel) {
        channel.scrollTimerId = setTimeout(() => {
            this.scrollToUnder(channel.chatList)
        }, 15000);
    }
}