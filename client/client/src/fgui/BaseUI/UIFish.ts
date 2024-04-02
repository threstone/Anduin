/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIFish extends fairygui.GComponent {
		public fish:fairygui.GImage;
		public static URL:string = "ui://yaux2xpools25p";

		public static createInstance():UIFish {
			return <UIFish>(fairygui.UIPackage.createObject("BaseUI", "Fish"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.fish = <fairygui.GImage>(this.getChildAt(0));
		}
	}
}