//全局控制 类似Controller,但是此项目不设置Controller
//view 可单向使用model的功能,如发送消息、使用model的封装函数等
//model无法直接控制view,当有数据更新时使用事件间接通知view来保证展示的变化
class GlobalVar {
    public static init(stage: egret.Stage) {
        //auto mapping
        this.autoMapping();
        // init view
        GlobalView.init(stage);

        //connector server
        Socket.ins();
    }

    /**
     * 自动映射
     */
    private static autoMapping() {
        let funObj: any = {};
        // init all model and save funcion start with 'S_'
        for (const key in window) {
            if (key.endsWith('Model') && key !== 'BaseModel') {
                const modelClass: any = window[key];
                const model = modelClass.ins();
                for (const funName in model) {
                    if (funName.startsWith('S_')) {
                        //记录函数
                        if (funObj[funName]) {
                            console.error(`${funName}已有函数记录!`)
                        }
                        funObj[funName] = model[funName].bind(model)
                    }
                }
            }
        }

        for (let n in window) {
            let name: any = n
            if (name.endsWith('Pto')) {
                let proto = window[name]
                MessageManager.addProtoModule(proto, funObj)
            }
        }
    }
}