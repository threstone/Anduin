/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIFeeBtn extends fairygui.GButton {
		public feeText:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpotb7e20";

		public static createInstance():UIFeeBtn {
			return <UIFeeBtn>(fairygui.UIPackage.createObject("BaseUI", "FeeBtn"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.feeText = <fairygui.GTextField>(this.getChildAt(1));
		}
	}
}