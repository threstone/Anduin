class ChatView extends BaseView<BaseUI.UIChat>{

    private selectNomal: boolean;
    private selectUid: number = 0;

    private normalScrollTimerId: number;
    private friendScrollTimerId: number;

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

        //list scroll even
        this.addEvent(this.view.chatList.scrollPane, fairygui.ScrollPane.SCROLL_END, this.onListScrollEnd.bind(this, this.view.chatList, true), this);
        this.addEvent(this.view.friendChatList.scrollPane, fairygui.ScrollPane.SCROLL_END, this.onListScrollEnd.bind(this, this.view.friendChatList, false), this);
        this.addEvent(this.view.chatList.scrollPane, fairygui.ScrollPane.SCROLL, this.onScrool.bind(this, true), this);
        this.addEvent(this.view.friendChatList.scrollPane, fairygui.ScrollPane.SCROLL, this.onScrool.bind(this, false), this);

        this.initChatView();
    }

    onScrool(isNormal: boolean) {
        if (isNormal && this.normalScrollTimerId !== -1) {
            clearTimeout(this.normalScrollTimerId);
            this.normalScrollTimerId = -1;
        } else if (!isNormal && this.friendScrollTimerId !== -1) {
            clearTimeout(this.friendScrollTimerId);
            this.friendScrollTimerId = -1;
        }
    }

    //15秒后自动到最下面
    private onListScrollEnd(chatList: fairygui.GList, isNormal: boolean) {
        const timerId = setTimeout(() => {
            this.scrollToUnder(chatList)
        }, 1500);
        if (isNormal) {
            this.normalScrollTimerId = timerId;
        } else {
            this.friendScrollTimerId = timerId;
        }
    }

    public close(): void {
        super.close();
        HallView.ins().clearMiniChatTips();
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

        const len = friendInfos.length;
        for (let index = 0; index < len; index++) {
            const friendInfo = friendInfos[index];
            const friendUid = friendInfo.uid;
            const chatInfo = ChatModel.ins().getFriendMsgArr(friendUid);
            //如果好友私聊选中的是这个好友,那么将聊天记录添加到list中
            const isSelect = this.selectUid === friendUid;
            if (isSelect) {
                this.showChatToFriendList(chatInfo);
            }
            const friendBox = ChatFriendBox.getBox(friendInfo.nick, friendInfo.isOnline, chatInfo.unreadNum, isSelect);
            this.observe('S_CHAT_MESSAGE', (evt: EventData) => {
                const msg: ChatPto.S_CHAT_MESSAGE = evt.data;
                if (msg.isPrivateMsg && msg.uid === friendUid && friendUid !== this.selectUid) {
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
        const textInput = this.selectNomal ? this.view.normalInput.inputText : this.view.friendInput.inputText;
        const text = textInput.text;
        const wrap = text.match(/\n/g);
        if (wrap && wrap.length > 15) {
            GlobalView.showTips(`换行数量太多`, 5000);
            return;
        }
        if (text.length === 0) {
            GlobalView.showTips(`不能发送空的字符`, 5000);
            return;
        }
        if (text.length > 128) {
            GlobalView.showTips(`最多输入128个字符,请减少${128 - text.length}个字符`, 5000);
            return;
        }

        //综合消息
        if (this.selectNomal) {
            ChatModel.ins().C_SEND_MESSAGE_TO_ALL(text);
            this.scrollToUnder(this.view.chatList);
        } else if (this.selectUid) {//私聊消息
            //是否在线，不在线就不发
            if (!FriendModel.ins().isOnline(this.selectUid)) {
                GlobalView.showTips('好友不在线,无法发送消息哦', 5000);
                return;
            }
            ChatModel.ins().C_SEND_PRIVATE_MESSAGE(this.selectUid, text);
            const frinendChatList = this.view.friendChatList;
            const item = ChatItem.getChatItem(UserModel.ins().nick, text, true);
            frinendChatList.addChild(item);
            this.scrollToUnder(frinendChatList);
        }
        textInput.text = '';
    }

    private scrollToUnder(chatList: fairygui.GList) {
        chatList.scrollToView(chatList.numChildren - 1);
    }

    private onNewMsg(evt: EventData) {
        const msg: ChatPto.S_CHAT_MESSAGE = evt.data;
        if (this.selectNomal) {
            ChatModel.ins().clearNormalUnread();
        } else {
            ChatModel.ins().clearFriendUnread();
        }

        //私聊消息
        if (msg.isPrivateMsg) {
            //我选中的
            if (msg.uid === this.selectUid) {
                //把这条聊天信息加到list
                const frinendChatList = this.view.friendChatList;
                const item = ChatItem.getChatItem(msg.nick, msg.msg, false);
                frinendChatList.addChild(item);
                if (this.friendScrollTimerId === -1) {
                    this.scrollToUnder(frinendChatList);
                }
            }
        }//综合消息
        else {
            const isSelf = UserModel.ins().uid === msg.uid;
            const item = ChatItem.getChatItem(msg.nick, msg.msg, isSelf);
            this.view.chatList.addChild(item);
            if (this.normalScrollTimerId === -1) {
                this.scrollToUnder(this.view.chatList);
            }
            if (isSelf) {
                item.x = this.view.chatList.width - item.width;
            }
        }

        this.updateUnreadTips();
    }
}