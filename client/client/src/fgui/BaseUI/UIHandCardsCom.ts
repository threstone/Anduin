/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIHandCardsCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public static URL:string = "ui://yaux2xpopg482e";

		public static createInstance():UIHandCardsCom {
			return <UIHandCardsCom>(fairygui.UIPackage.createObject("BaseUI", "HandCardsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
		}
	}
}