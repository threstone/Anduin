/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIPowerBtn extends fairygui.GButton {
		public bg:fairygui.GImage;
		public describe:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpotb7e21";

		public static createInstance():UIPowerBtn {
			return <UIPowerBtn>(fairygui.UIPackage.createObject("BaseUI", "PowerBtn"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.describe = <fairygui.GTextField>(this.getChildAt(1));
		}
	}
}