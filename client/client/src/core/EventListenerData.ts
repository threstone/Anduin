class EventListenerData {

    addObject: egret.DisplayObject | egret.EventDispatcher;
    type: string;
    listener: Function;
    thisObject: any;
    // useCapture: boolean;
    // priority: number;

    public constructor(addObj: egret.EventDispatcher, type: string, func: Function, thisObj: any) {
        this.addObject = addObj
        this.type = type
        this.listener = func
        this.thisObject = thisObj
        // this.useCapture = useCapture
        // this.priority = priority
    }

    public isSame(addObj: egret.EventDispatcher, type: string, func: Function, thisObj: any) {
        if (this.addObject === addObj && this.type === type && this.listener === func && this.thisObject === thisObj) {
            return true;
        }
        return false;
    }

    alive() {
        if (this.addObject) {
            this.addObject.addEventListener(this.type, this.listener, this.thisObject)
        } else {
            console.log("不存在增加侦听事件的对象")
        }
    }

    clean() {
        if (this.addObject) {
            if (this.addObject.hasEventListener(this.type)) {
                this.addObject.removeEventListener(this.type, this.listener, this.thisObject)
                this.addObject = null;
                this.type = null;
                this.listener = null;
                // this.useCapture = null;
                // this.priority = null;
            } else {
                console.warn("无可删除侦听事件: " + this.type);
            }
        } else {
            console.warn("不存在增加侦听事件的对象")
        }
    }
}