/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIAtkTips extends fairygui.GComponent {
		public tips0:fairygui.GGraph;
		public img:fairygui.GImage;
		public static URL:string = "ui://yaux2xposbft2s";

		public static createInstance():UIAtkTips {
			return <UIAtkTips>(fairygui.UIPackage.createObject("BaseUI", "AtkTips"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.tips0 = <fairygui.GGraph>(this.getChildAt(0));
			this.img = <fairygui.GImage>(this.getChildAt(1));
		}
	}
}