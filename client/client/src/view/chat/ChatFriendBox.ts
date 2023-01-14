class ChatFriendBox {

    private static selectColor = 0x54341D;
    private static unSelectColor = 0x431D01;

    static getBox(nick: string, isOnline: boolean, unreadNum: number, isSelect: boolean) {
        const box = BaseUI.UIChatFriendBox.createInstance();
        box.nickText.text = nick;
        box.nickText.color = isOnline ? 0x00FF00 : 0xFF0000;
        box.onlineImg.color = isOnline ? 0xFFFFFF : 0xFF0000;
        box.statusText.text = isOnline ? '在线' : '离线';
        box.statusText.color = isOnline ? 0x00FF00 : 0x000000;
        box.numGroup.visible = unreadNum !== 0;
        box.newMsgText.text = `${unreadNum > 99 ? 99 : unreadNum}`;
        this.selectBox(box, isSelect);
        return box;
    }

    static selectBox(box: BaseUI.UIChatFriendBox, isSelect: boolean) {
        box.bg.color = isSelect ? this.selectColor : this.unSelectColor;
    }

    static isSelect(box: BaseUI.UIChatFriendBox) {
        return box.bg.color === this.selectColor;
    }
}