/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIButton2 extends fairygui.GButton {
		public bg:fairygui.GImage;
		public describe:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpota2ri";

		public static createInstance():UIButton2 {
			return <UIButton2>(fairygui.UIPackage.createObject("BaseUI", "Button2"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.describe = <fairygui.GTextField>(this.getChildAt(1));
		}
	}
}