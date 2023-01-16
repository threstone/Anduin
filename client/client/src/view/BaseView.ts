abstract class BaseView<T extends fairygui.GComponent> {

    public static ins<T extends {}>(this: new (...args: any[]) => T, ...args: any[]): T {
        if (!(<any>this).__instance__) {
            const arr = [];
            for (let index = 0; index < arguments.length; index++) {
                arr.push(arguments[index])
            }
            (<any>this).__instance__ = new this(...arr);
        }
        return (<any>this).__instance__
    }

    protected view: T;
    public getView(): T { return this.view }

    private eventList: EventListenerData[] = [];

    constructor() {
        this.init();
    }

    protected abstract init();

    public AddClick(target: egret.DisplayObject | fairygui.GObject, func: Function): void {
        this.addEvent(target, egret.TouchEvent.TOUCH_TAP, func, this);
    }

    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    public open(...param: any[]) {
        fairygui.GRoot.inst.addChild(this.view)
    }

    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    public close(...param: any[]) {
        fairygui.GRoot.inst.removeChild(this.view)
        this.removeEvents();
    }

    public observe(event: string, func: Function): void {
        GameDispatcher.getInstance().addEventListener(event, func, this);
        const eventData = new EventListenerData(null, event, func, this);
        this.eventList.push(eventData);
    }

    public addEvent(targetObj: egret.EventDispatcher = null, event: string, func: Function, thisObject: any, useCapture: boolean = false) {
        if (targetObj == null) {
            return;
        }
        const eventData = new EventListenerData(targetObj, event, func, thisObject);
        eventData.alive();
        this.eventList.push(eventData);
    }

    public removeEvents(): void {
        let list = this.eventList
        for (let i = 0, len = list.length; i < len; i++) {
            const eventData = list[i];
            //如果不存在addObject则说明是通过observe注册的
            if (!eventData.addObject) {
                GameDispatcher.getInstance().removeEventListener(eventData.type, eventData.listener, eventData.thisObject);
            } else {
                list[i].clean();
            }
        }
        this.eventList = []
    }
}