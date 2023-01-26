/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICardsCom extends fairygui.GComponent {
		public listBg:fairygui.GImage;
		public cardGroupList:fairygui.GList;
		public createGroupList:fairygui.GList;
		public bg:fairygui.GImage;
		public functionBtn:UIButton3;
		public functionTips:fairygui.GTextField;
		public functionGroup:fairygui.GGroup;
		public powerList:fairygui.GList;
		public feeBtnList:fairygui.GList;
		public allFeeBtn:UIButton1;
		public cardList:fairygui.GList;
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
			this.cardGroupList = <fairygui.GList>(this.getChildAt(1));
			this.createGroupList = <fairygui.GList>(this.getChildAt(2));
			this.bg = <fairygui.GImage>(this.getChildAt(3));
			this.functionBtn = <UIButton3>(this.getChildAt(4));
			this.functionTips = <fairygui.GTextField>(this.getChildAt(5));
			this.functionGroup = <fairygui.GGroup>(this.getChildAt(6));
			this.powerList = <fairygui.GList>(this.getChildAt(7));
			this.feeBtnList = <fairygui.GList>(this.getChildAt(8));
			this.allFeeBtn = <UIButton1>(this.getChildAt(9));
			this.cardList = <fairygui.GList>(this.getChildAt(10));
			this.back = <fairygui.GLoader>(this.getChildAt(11));
			this.next = <fairygui.GLoader>(this.getChildAt(12));
			this.cardMake = <UIButton1>(this.getChildAt(13));
		}
	}
}