class ChatItem {
    static getChatItem(nick: string, msg: string, isSelf: boolean) {
        const item = BaseUI.UIChatItem.createInstance();
        item.nickText.text = `${nick}`;
        const offset = 154 - item.nickText.width;
        if (item.nickText.width > 154) {
            item.nickText.width = 154;
            item.nickText.autoSize = 3;
        } else {
            item.bg.x -= offset;
            item.msg.x -= offset;
        }

        item.msg.autoSize = fairygui.AutoSizeType.Both;
        item.msg.text = msg;
        if (item.msg.width > 360) {
            item.msg.width = 360;
            item.msg.autoSize = fairygui.AutoSizeType.Height;
        } else {
            item.bg.width = item.msg.width + 30;
        }
        item.bg.height = item.msg.height + 21;
        item.height = item.bg.height;

        if (isSelf) {
            const nickOffset = item.width - item.nickText.width - item.nickText.x
            item.nickText.x += nickOffset;
            const bubbleOffset = nickOffset - item.bg.width
            item.msg.x = 10 + bubbleOffset;
            item.bg.skewY = 180;
            item.bg.x = item.bg.width + bubbleOffset;
        }
        return item;
    }

    static addItemToList(list: fairygui.GList, nick: string, msg: string, isSelf: boolean) {
        const item = ChatItem.getChatItem(nick, msg, isSelf);
        if (isSelf) {
            item.x = list.width - item.width;
        }
        list.addChild(item);
    }
}