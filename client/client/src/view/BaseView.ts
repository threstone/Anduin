abstract class BaseView<T extends fairygui.GComponent> {

    public static ins<T extends {}>(this: new (...args: any[]) => T, ...args: any[]): T {
        const self = (<any>this);
        if (!self.__instance__ || self.__instance__.__father__ !== self) {
            const arr = [];
            for (let index = 0; index < arguments.length; index++) {
                arr.push(arguments[index])
            }
            self.__instance__ = new self();
            /**
             * 这里其实是使用了静态继承来实现 B继承A  A继承BaseView时,B.ins()和A.ins()会返回各自不同的单例
             * 调试时并无问题，但是当egret发布后,结果是不一样的,当B.ins()和A.ins()被调用时,
             * 总时返回先产生的那个单例(可能时webpack使用es5打包时产生的问题)
             * 所以这里用father的方式来指定父级,以区分不同类单例的父级防止使用同一条继承链中最先创建的实例
             */
            self.__instance__.__father__ = self;
            self.__instance__.init(...arr);
        }
        return self.__instance__;
    }


    protected view: T;
    public getView(): T { return this.view }

    private eventList: EventListenerData[] = [];

    private _bindViewList: BaseView<fairygui.GComponent>[];

    /**是独立的界面还是父级容器的一个组件，如果是的话就不需要从根场景中添加或移除,在bindView时用到 */
    private _isChildComponet: boolean = false;

    protected abstract init(...param: any[]);

    public AddClick(target: egret.DisplayObject | fairygui.GObject, func: Function): void {
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

    /**移除目标的所有事件 */
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
        if (!this._isChildComponet) {
            fairygui.GRoot.inst.addChild(this.view);
        }
        if (this._bindViewList) {
            for (let index = 0; index < this._bindViewList.length; index++) {
                const bindView = this._bindViewList[index];
                bindView.open(param);
            }
        }
    }

    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    public close(...param: any[]) {
        if (this._bindViewList) {
            for (let index = 0; index < this._bindViewList.length; index++) {
                const bindView = this._bindViewList[index];
                bindView.close(param);
            }
        }

        if (!this._isChildComponet) {
            fairygui.GRoot.inst.removeChild(this.view);
        }
        this.removeEvents();
    }

    /**
     * @returns 返回是否处于根场景中
     */
    public isOnStage() {
        return (fairygui.GRoot.inst.displayObject as egret.DisplayObjectContainer).contains(this.view.displayObject);
        // 以下方法返回永远是true...
        // return fairygui.GRoot.inst.isChildInView(this.view);(new egret.DisplayObjectContainer()).contains
    }

    protected observe(event: string, func: (evt: EventData) => void): void {
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

    /** 收到指定事件时将特效函数放入特效队列*/
    public addEffectListener(eventName: string, fun: (...args: any[]) => Promise<any>) {
        this.observe(eventName, (evt: EventData) => {
            GameSceneView.ins().addToEffectPool(fun.bind(this, evt.data));
        });
    }

    protected wait(waitTime: number) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, waitTime);
        });
    }

    public isChildInView(comp: fairygui.GComponent) {
        return (this.view.displayObject as egret.DisplayObjectContainer).contains(comp.displayObject);
    }

    /**
     * 绑定此view和自身共同显示和关闭
     * @param childView 
     */
    protected bindView(childView: BaseView<fairygui.GComponent>) {
        if (!this._bindViewList) {
            this._bindViewList = [];
        }
        childView._isChildComponet = this.isChildInView(childView.getView());
        this._bindViewList.push(childView);
    }
}