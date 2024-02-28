/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIGameHelpsCom extends fairygui.GComponent {
		public scrollText:UIScrollText;
		public titleText:fairygui.GTextField;
		public close:fairygui.GLoader;
		public static URL:string = "ui://yaux2xpobmrc5m";

		public static createInstance():UIGameHelpsCom {
			return <UIGameHelpsCom>(fairygui.UIPackage.createObject("BaseUI", "GameHelpsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.scrollText = <UIScrollText>(this.getChildAt(1));
			this.titleText = <fairygui.GTextField>(this.getChildAt(2));
			this.close = <fairygui.GLoader>(this.getChildAt(3));
		}
	}
}