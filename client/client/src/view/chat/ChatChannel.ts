interface ChatListInterface {
    scrollTimerId: number;
    chatList: fairygui.GList;
}

class ChatChannel {
    scrollTimerId: number = -1;
    chatList: fairygui.GList;
    chatType: ChatPto.MsgType;
    btn: BaseUI.UIChatBtn;
    inputCom: BaseUI.UIChatInputCom
    constructor(desc: string, type: ChatPto.MsgType, list: fairygui.GList) {
        this.chatType = type;
        this.chatList = list;
        this.btn = BaseUI.UIChatBtn.createInstance();
        this.btn.describe.text = desc;
        this.inputCom = BaseUI.UIChatInputCom.createInstance();
        this.inputCom.x = 34;
        this.inputCom.y = 625;
    }
}