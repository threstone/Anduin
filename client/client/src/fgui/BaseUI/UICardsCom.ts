/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICardsCom extends fairygui.GComponent {
		public listBg:fairygui.GImage;
		public cardsList:fairygui.GList;
		public bg:fairygui.GImage;
		public functionBtn:UIButton3;
		public newCardsTips:fairygui.GTextField;
		public functionGroup:fairygui.GGroup;
		public powerList:fairygui.GList;
		public cardList:fairygui.GList;
		public feeBtnList:fairygui.GList;
		public allFeeBtn:UIButton1;
		public back:fairygui.GLoader;
		public next:fairygui.GLoader;
		public cardMake:UIButton1;
		public static URL:string = "ui://yaux2xpoz43k1k";

		public static createInstance():UICardsCom {
			return <UICardsCom>(fairygui.UIPackage.createObject("BaseUI", "CardsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.listBg = <fairygui.GImage>(this.getChildAt(0));
			this.cardsList = <fairygui.GList>(this.getChildAt(1));
			this.bg = <fairygui.GImage>(this.getChildAt(2));
			this.functionBtn = <UIButton3>(this.getChildAt(3));
			this.newCardsTips = <fairygui.GTextField>(this.getChildAt(4));
			this.functionGroup = <fairygui.GGroup>(this.getChildAt(5));
			this.powerList = <fairygui.GList>(this.getChildAt(6));
			this.cardList = <fairygui.GList>(this.getChildAt(7));
			this.feeBtnList = <fairygui.GList>(this.getChildAt(8));
			this.allFeeBtn = <UIButton1>(this.getChildAt(9));
			this.back = <fairygui.GLoader>(this.getChildAt(10));
			this.next = <fairygui.GLoader>(this.getChildAt(11));
			this.cardMake = <UIButton1>(this.getChildAt(12));
		}
	}
}