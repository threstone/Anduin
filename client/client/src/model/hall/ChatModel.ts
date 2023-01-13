class ChatModel extends BaseModel {
    //收到信息
    private S_CHAT_MESSAGE(msg: FriendPto.S_ADD_FRIEND) {
        this.emit('S_CHAT_MESSAGE', msg)
    }
}