/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIReplaceCardsCom extends fairygui.GComponent {
		public chooseBtn:UIButton1;
		public tips:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpopg482g";

		public static createInstance():UIReplaceCardsCom {
			return <UIReplaceCardsCom>(fairygui.UIPackage.createObject("BaseUI", "ReplaceCardsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.chooseBtn = <UIButton1>(this.getChildAt(1));
			this.tips = <fairygui.GTextField>(this.getChildAt(2));
		}
	}
}