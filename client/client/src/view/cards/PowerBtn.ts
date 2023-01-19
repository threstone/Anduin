class PowerBtn {
    static getBtn(desc: string, id: number): BaseUI.UIPowerBtn {
        const btn = BaseUI.UIPowerBtn.createInstance();
        btn.describe.text = desc;
        (btn as any).powerId = id;
        return btn;
    }

    static getPowerId(btn: BaseUI.UIPowerBtn) {
        return (btn as any).powerId
    }
}   