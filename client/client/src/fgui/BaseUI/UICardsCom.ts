/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICardsCom extends fairygui.GComponent {
		public listBg:fairygui.GImage;
		public deckList:fairygui.GList;
		public nameBg:fairygui.GImage;
		public deckName:fairygui.GTextInput;
		public createDeckList:fairygui.GList;
		public heroBg:fairygui.GImage;
		public heroCard:UIMiniCard;
		public deckGroup:fairygui.GGroup;
		public functionBtn:UIButton3;
		public functionTips:fairygui.GTextField;
		public functionGroup:fairygui.GGroup;
		public rightGroup:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpoz43k1k";

		public static createInstance():UICardsCom {
			return <UICardsCom>(fairygui.UIPackage.createObject("BaseUI", "CardsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.listBg = <fairygui.GImage>(this.getChildAt(0));
			this.deckList = <fairygui.GList>(this.getChildAt(1));
			this.nameBg = <fairygui.GImage>(this.getChildAt(2));
			this.deckName = <fairygui.GTextInput>(this.getChildAt(3));
			this.createDeckList = <fairygui.GList>(this.getChildAt(4));
			this.heroBg = <fairygui.GImage>(this.getChildAt(5));
			this.heroCard = <UIMiniCard>(this.getChildAt(6));
			this.deckGroup = <fairygui.GGroup>(this.getChildAt(7));
			this.functionBtn = <UIButton3>(this.getChildAt(8));
			this.functionTips = <fairygui.GTextField>(this.getChildAt(9));
			this.functionGroup = <fairygui.GGroup>(this.getChildAt(10));
			this.rightGroup = <fairygui.GGroup>(this.getChildAt(11));
		}
	}
}