/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIShowCardDetail extends fairygui.GComponent {
		public close:fairygui.GGraph;
		public card:UICardItem;
		public static URL:string = "ui://yaux2xpotb7e24";

		public static createInstance():UIShowCardDetail {
			return <UIShowCardDetail>(fairygui.UIPackage.createObject("BaseUI", "ShowCardDetail"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.close = <fairygui.GGraph>(this.getChildAt(0));
			this.card = <UICardItem>(this.getChildAt(1));
		}
	}
}