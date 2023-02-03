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

    protected AddClick(target: egret.DisplayObject | fairygui.GObject, func: Function): void {
        this.addEvent(target, egret.TouchEvent.TOUCH_TAP, func, this);
    }

    protected addDragEvent(base: fairygui.GComponent, dragLoader: fairygui.GLoader, dragStartFun?: Function, dragStartEnd?: Function) {
        //拖动效果
        dragLoader.draggable = true;
        this.addEvent(dragLoader, fairygui.DragEvent.DRAG_START, (evt: fairygui.DragEvent) => {
            const texture = new egret.RenderTexture();
            //研究一下为什么拖出来的texture会模糊
            texture.drawToTexture(base.displayObject);
            dragLoader.texture = texture;
            dragLoader.x = evt.stageX - dragLoader.width / 2;
            dragLoader.y = evt.stageY - dragLoader.height / 2;
            fairygui.GRoot.inst.addChild(dragLoader);
            if (dragStartFun) {
                dragStartFun(evt);
            }
        }, this);
        this.addEvent(dragLoader, fairygui.DragEvent.DRAG_END, (evt: fairygui.DragEvent) => {
            dragLoader.x = 0;
            dragLoader.y = 0;
            dragLoader.texture = null;
            base.addChild(dragLoader);
            if (dragStartEnd) {
                dragStartEnd(evt);
            }
        }, this);
    }

    protected removeTargetEvents(target: egret.DisplayObject | fairygui.GObject) {
        for (let index = this.eventList.length - 1; index >= 0; index--) {
            const eventData = this.eventList[index];
            if (eventData.addObject === target) {
                eventData.clean();
                this.eventList.splice(index, 1);
            }
        }
    }

    protected removeChildrenEvents(list: fairygui.GList, includeChildrenName?: string[]) {
        const count = list.numChildren;
        for (let index = 0; index < count; index++) {
            const item = list.getChildAt(index);
            this.removeTargetEvents(item);
            if (includeChildrenName) {
                for (let childIndex = 0; childIndex < includeChildrenName.length; childIndex++) {
                    const childName = includeChildrenName[childIndex];
                    const child = item[childName]
                    if (child) {
                        this.removeTargetEvents(child);
                    }
                }
            }
        }
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

    protected observe(event: string, func: Function): void {
        GameDispatcher.getInstance().addEventListener(event, func, this);
        const eventData = new EventListenerData(null, event, func, this);
        this.eventList.push(eventData);
    }

    protected addEvent(targetObj: egret.EventDispatcher = null, event: string, func: Function, thisObject: any) {
        if (targetObj == null) {
            return;
        }
        const eventData = new EventListenerData(targetObj, event, func, thisObject);
        eventData.alive();
        this.eventList.push(eventData);
    }

    protected removeEvents(): void {
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