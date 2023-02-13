/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIUserInfoBox extends fairygui.GComponent {
		public leastCardNum:fairygui.GTextField;
		public feeList:fairygui.GList;
		public nick:fairygui.GTextField;
		public feeDesc:fairygui.GTextField;
		public power:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpopg482d";

		public static createInstance():UIUserInfoBox {
			return <UIUserInfoBox>(fairygui.UIPackage.createObject("BaseUI", "UserInfoBox"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.leastCardNum = <fairygui.GTextField>(this.getChildAt(4));
			this.feeList = <fairygui.GList>(this.getChildAt(5));
			this.nick = <fairygui.GTextField>(this.getChildAt(6));
			this.feeDesc = <fairygui.GTextField>(this.getChildAt(7));
			this.power = <fairygui.GTextField>(this.getChildAt(8));
		}
	}
}