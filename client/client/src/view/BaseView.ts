abstract class BaseView<T extends fairygui.GComponent>{

    protected view: T;

    private eventList: EventListenerData[] = [];

    constructor(component: T) {
        this.view = component;
        this.init();
    }

    protected abstract init();

    public AddClick(target: egret.DisplayObject | fairygui.GObject, func: Function): void {
        this.addEvent(egret.TouchEvent.TOUCH_TAP, func, this, target);
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

    public addEvent(event: string, func: Function, thisObject: any, targetObj: egret.DisplayObject | fairygui.GObject = null, useCapture: boolean = false) {
        if (targetObj == null) {
            return;
        }

        for (let i = 0, list = this.eventList; i < list.length; ++i) {
            if (list[i].addObject == targetObj) {
                return;
            }
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