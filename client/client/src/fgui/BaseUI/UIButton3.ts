/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIButton3 extends fairygui.GButton {
		public describe:fairygui.GTextField;
		public backImg:fairygui.GImage;
		public static URL:string = "ui://yaux2xpofjkiy";

		public static createInstance():UIButton3 {
			return <UIButton3>(fairygui.UIPackage.createObject("BaseUI", "Button3"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.describe = <fairygui.GTextField>(this.getChildAt(2));
			this.backImg = <fairygui.GImage>(this.getChildAt(3));
		}
	}
}