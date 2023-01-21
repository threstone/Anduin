/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICardItem extends fairygui.GComponent {
		public cardImg:fairygui.GLoader;
		public feeBg:fairygui.GGraph;
		public feeText:fairygui.GTextField;
		public feeGroup:fairygui.GGroup;
		public buttonBg:fairygui.GImage;
		public powerText:fairygui.GTextField;
		public quality:fairygui.GGraph;
		public cardName:fairygui.GTextField;
		public desc:fairygui.GTextField;
		public atkBg:fairygui.GImage;
		public atkText:fairygui.GTextField;
		public atkGroup:fairygui.GGroup;
		public times:fairygui.GImage;
		public healthBg:fairygui.GImage;
		public healthText:fairygui.GTextField;
		public healthGroup:fairygui.GGroup;
		public heroCardTips:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpotb7e1s";

		public static createInstance():UICardItem {
			return <UICardItem>(fairygui.UIPackage.createObject("BaseUI", "CardItem"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.cardImg = <fairygui.GLoader>(this.getChildAt(0));
			this.feeBg = <fairygui.GGraph>(this.getChildAt(1));
			this.feeText = <fairygui.GTextField>(this.getChildAt(2));
			this.feeGroup = <fairygui.GGroup>(this.getChildAt(3));
			this.buttonBg = <fairygui.GImage>(this.getChildAt(4));
			this.powerText = <fairygui.GTextField>(this.getChildAt(5));
			this.quality = <fairygui.GGraph>(this.getChildAt(6));
			this.cardName = <fairygui.GTextField>(this.getChildAt(7));
			this.desc = <fairygui.GTextField>(this.getChildAt(9));
			this.atkBg = <fairygui.GImage>(this.getChildAt(10));
			this.atkText = <fairygui.GTextField>(this.getChildAt(11));
			this.atkGroup = <fairygui.GGroup>(this.getChildAt(12));
			this.times = <fairygui.GImage>(this.getChildAt(13));
			this.healthBg = <fairygui.GImage>(this.getChildAt(14));
			this.healthText = <fairygui.GTextField>(this.getChildAt(15));
			this.healthGroup = <fairygui.GGroup>(this.getChildAt(16));
			this.heroCardTips = <fairygui.GTextField>(this.getChildAt(17));
		}
	}
}