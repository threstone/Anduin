/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIDeckChooseCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public chooseBtn:UIButton1;
		public deckList:fairygui.GList;
		public rankText:fairygui.GTextField;
		public cardsViewBtn:UIButton1;
		public heroCard:UICardItem;
		public close:fairygui.GLoader;
		public tips:fairygui.GTextField;
		public selectDeckName:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpopqjx2b";

		public static createInstance():UIDeckChooseCom {
			return <UIDeckChooseCom>(fairygui.UIPackage.createObject("BaseUI", "DeckChooseCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.chooseBtn = <UIButton1>(this.getChildAt(1));
			this.deckList = <fairygui.GList>(this.getChildAt(2));
			this.rankText = <fairygui.GTextField>(this.getChildAt(3));
			this.cardsViewBtn = <UIButton1>(this.getChildAt(4));
			this.heroCard = <UICardItem>(this.getChildAt(5));
			this.close = <fairygui.GLoader>(this.getChildAt(6));
			this.tips = <fairygui.GTextField>(this.getChildAt(7));
			this.selectDeckName = <fairygui.GTextField>(this.getChildAt(8));
		}
	}
}