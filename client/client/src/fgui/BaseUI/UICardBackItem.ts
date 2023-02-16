/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICardBackItem extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public static URL:string = "ui://yaux2xpopg482h";

		public static createInstance():UICardBackItem {
			return <UICardBackItem>(fairygui.UIPackage.createObject("BaseUI", "CardBackItem"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
		}
	}
}