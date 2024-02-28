/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIScrollText extends fairygui.GComponent {
		public contentText:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpobmrc5l";

		public static createInstance():UIScrollText {
			return <UIScrollText>(fairygui.UIPackage.createObject("BaseUI", "ScrollText"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.contentText = <fairygui.GTextField>(this.getChildAt(0));
		}
	}
}