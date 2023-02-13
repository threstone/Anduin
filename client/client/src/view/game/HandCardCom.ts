class HandCardView extends BaseView<BaseUI.UIHandCardsCom> {

    private _isSelf: boolean;

    protected init(view: BaseUI.UIHandCardsCom, isSelf: boolean) {
        this.view = view;
        this._isSelf = isSelf;
    }

    public addCard() {
        //悬浮变大、拖动使用
        this.updataCardsPostion();
    }

    public removeCard() {

        this.updataCardsPostion();
    }

    // 根据手牌数量和卡牌大小计算卡牌位置
    private updataCardsPostion() {

    }
    
}