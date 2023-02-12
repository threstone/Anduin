/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIUserInfoBox extends fairygui.GComponent {
		public heroCard:UICardItem;
		public feeList:fairygui.GList;
		public static URL:string = "ui://yaux2xpopg482d";

		public static createInstance():UIUserInfoBox {
			return <UIUserInfoBox>(fairygui.UIPackage.createObject("BaseUI", "UserInfoBox"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.heroCard = <UICardItem>(this.getChildAt(1));
			this.feeList = <fairygui.GList>(this.getChildAt(6));
		}
	}
}