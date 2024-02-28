class GameHelpsView extends BaseView<BaseUI.UIGameHelpsCom> {
    protected init() {
        this.view = BaseUI.UIGameHelpsCom.createInstance();
        this.view.x = (fairygui.GRoot.inst.width - this.view.width) / 2;
        this.view.y = (fairygui.GRoot.inst.height - this.view.height) / 2;
        this.initHelpText();
    }

    public open(): void {
        super.open();
        this.AddClick(this.view.close, this.close);
    }

    private initHelpText() {
        this.view.scrollText.contentText.text = `
精简来说就是炉石+战棋:

初始费用0,每回合开始时费用补满并且费用上限+1,最多十费;
击败敌方英雄后获得胜利;
使用卡牌将对应减少相应的费用(卡牌左上角数字为费用);
每个单位每回合开始时获得一次移动和攻击的次数,建筑单位不可移动和攻击;
单位必须放置在出兵建筑一格范围内的位置;
建筑必须放置在己方后三行或英雄附近;
近战单位在攻击敌方时会受到敌方反击;
每回合拥有固定的弃牌次数,弃牌将获得一点临时费用;
`;
    }
}