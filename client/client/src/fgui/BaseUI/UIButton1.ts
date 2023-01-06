/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIButton1 extends fairygui.GButton {
		public describe:fairygui.GTextField;
		public static URL:string = "ui://yaux2xporu1k2";

		public static createInstance():UIButton1 {
			return <UIButton1>(fairygui.UIPackage.createObject("BaseUI", "Button1"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.describe = <fairygui.GTextField>(this.getChildAt(1));
		}
	}
}