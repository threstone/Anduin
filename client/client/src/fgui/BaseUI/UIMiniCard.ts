/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMiniCard extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public miniImg:UIMiniImg;
		public cardName:fairygui.GTextField;
		public countText:fairygui.GTextField;
		public feeText:fairygui.GTextField;
		public dragLoader:fairygui.GLoader;
		public static URL:string = "ui://yaux2xpooo9527";

		public static createInstance():UIMiniCard {
			return <UIMiniCard>(fairygui.UIPackage.createObject("BaseUI", "MiniCard"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.miniImg = <UIMiniImg>(this.getChildAt(1));
			this.cardName = <fairygui.GTextField>(this.getChildAt(2));
			this.countText = <fairygui.GTextField>(this.getChildAt(3));
			this.feeText = <fairygui.GTextField>(this.getChildAt(4));
			this.dragLoader = <fairygui.GLoader>(this.getChildAt(5));
		}
	}
}