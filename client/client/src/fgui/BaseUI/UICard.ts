/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICard extends fairygui.GComponent {
		public cardImg:fairygui.GLoader;
		public feeBg:fairygui.GGraph;
		public feeText:fairygui.GTextField;
		public buttonBg:fairygui.GImage;
		public powerText:fairygui.GTextField;
		public quality:fairygui.GGraph;
		public cardName:fairygui.GTextField;
		public desc:fairygui.GTextField;
		public atkBg:fairygui.GImage;
		public atkText:fairygui.GTextField;
		public healthBg:fairygui.GImage;
		public healthText:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpotb7e1s";

		public static createInstance():UICard {
			return <UICard>(fairygui.UIPackage.createObject("BaseUI", "Card"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.cardImg = <fairygui.GLoader>(this.getChildAt(0));
			this.feeBg = <fairygui.GGraph>(this.getChildAt(1));
			this.feeText = <fairygui.GTextField>(this.getChildAt(2));
			this.buttonBg = <fairygui.GImage>(this.getChildAt(3));
			this.powerText = <fairygui.GTextField>(this.getChildAt(4));
			this.quality = <fairygui.GGraph>(this.getChildAt(5));
			this.cardName = <fairygui.GTextField>(this.getChildAt(6));
			this.desc = <fairygui.GTextField>(this.getChildAt(8));
			this.atkBg = <fairygui.GImage>(this.getChildAt(9));
			this.atkText = <fairygui.GTextField>(this.getChildAt(10));
			this.healthBg = <fairygui.GImage>(this.getChildAt(11));
			this.healthText = <fairygui.GTextField>(this.getChildAt(12));
		}
	}
}