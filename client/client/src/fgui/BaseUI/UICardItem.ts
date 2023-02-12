/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICardItem extends fairygui.GComponent {
		public tempBg:fairygui.GGraph;
		public tempCardName:fairygui.GTextField;
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
		public cardNum:fairygui.GTextField;
		public dragLoader:fairygui.GLoader;
		public static URL:string = "ui://yaux2xpotb7e1s";

		public static createInstance():UICardItem {
			return <UICardItem>(fairygui.UIPackage.createObject("BaseUI", "CardItem"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.tempBg = <fairygui.GGraph>(this.getChildAt(0));
			this.tempCardName = <fairygui.GTextField>(this.getChildAt(1));
			this.cardImg = <fairygui.GLoader>(this.getChildAt(2));
			this.feeBg = <fairygui.GGraph>(this.getChildAt(3));
			this.feeText = <fairygui.GTextField>(this.getChildAt(4));
			this.feeGroup = <fairygui.GGroup>(this.getChildAt(5));
			this.buttonBg = <fairygui.GImage>(this.getChildAt(6));
			this.powerText = <fairygui.GTextField>(this.getChildAt(7));
			this.quality = <fairygui.GGraph>(this.getChildAt(8));
			this.cardName = <fairygui.GTextField>(this.getChildAt(9));
			this.desc = <fairygui.GTextField>(this.getChildAt(11));
			this.atkBg = <fairygui.GImage>(this.getChildAt(12));
			this.atkText = <fairygui.GTextField>(this.getChildAt(13));
			this.atkGroup = <fairygui.GGroup>(this.getChildAt(14));
			this.times = <fairygui.GImage>(this.getChildAt(15));
			this.healthBg = <fairygui.GImage>(this.getChildAt(16));
			this.healthText = <fairygui.GTextField>(this.getChildAt(17));
			this.healthGroup = <fairygui.GGroup>(this.getChildAt(18));
			this.heroCardTips = <fairygui.GTextField>(this.getChildAt(19));
			this.cardNum = <fairygui.GTextField>(this.getChildAt(20));
			this.dragLoader = <fairygui.GLoader>(this.getChildAt(21));
		}
	}
}