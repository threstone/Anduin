abstract class BaseModel extends BaseClass {
    /**
        * 发送信息给服务器
        */
    protected sendMsg(msg: GameProtoClass): void {
        Socket.ins().sendProtoMsg(msg);
    }

    protected emit(eventName: string, data: any) {
        GameDispatcher.getInstance().emit(eventName, data)
    }

    protected addEventListener(evemtName: string, func: Function, thisObj: any = this) {
        GameDispatcher.getInstance().addEventListener(evemtName, func, thisObj)
    }

    protected removeEventListener(evemtName: string, func: Function, thisObj: any = this) {
        GameDispatcher.getInstance().removeEventListener(evemtName, func, thisObj)
    }
}