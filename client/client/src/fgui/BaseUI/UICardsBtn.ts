/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICardsBtn extends fairygui.GButton {
		public describe:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpoz43k1r";

		public static createInstance():UICardsBtn {
			return <UICardsBtn>(fairygui.UIPackage.createObject("BaseUI", "CardsBtn"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.describe = <fairygui.GTextField>(this.getChildAt(2));
		}
	}
}