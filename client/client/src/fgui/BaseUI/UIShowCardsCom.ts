/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIShowCardsCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public powerList:fairygui.GList;
		public feeBtnList:fairygui.GList;
		public allFeeBtn:UIButton1;
		public cardList:fairygui.GList;
		public back:fairygui.GLoader;
		public next:fairygui.GLoader;
		public cardMake:UIButton1;
		public static URL:string = "ui://yaux2xpooo9528";

		public static createInstance():UIShowCardsCom {
			return <UIShowCardsCom>(fairygui.UIPackage.createObject("BaseUI", "ShowCardsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.powerList = <fairygui.GList>(this.getChildAt(1));
			this.feeBtnList = <fairygui.GList>(this.getChildAt(2));
			this.allFeeBtn = <UIButton1>(this.getChildAt(3));
			this.cardList = <fairygui.GList>(this.getChildAt(4));
			this.back = <fairygui.GLoader>(this.getChildAt(5));
			this.next = <fairygui.GLoader>(this.getChildAt(6));
			this.cardMake = <UIButton1>(this.getChildAt(7));
		}
	}
}