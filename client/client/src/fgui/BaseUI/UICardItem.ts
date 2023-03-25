/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICardItem extends fairygui.GComponent {
		public canUse:fairygui.GGraph;
		public tempBg:fairygui.GGraph;
		public tempCardName:fairygui.GTextField;
		public cardImg:fairygui.GLoader;
		public feeBg:fairygui.GImage;
		public feeText:fairygui.GTextField;
		public feeGroup:fairygui.GGroup;
		public buttonBg:fairygui.GImage;
		public powerText:fairygui.GTextField;
		public quality:fairygui.GGraph;
		public cardName:fairygui.GTextField;
		public desc:fairygui.GTextField;
		public closeRange:fairygui.GImage;
		public longRange1:fairygui.GImage;
		public longRange2:fairygui.GImage;
		public longRange:fairygui.GGroup;
		public atkText:fairygui.GTextField;
		public atkGroup:fairygui.GGroup;
		public times:fairygui.GImage;
		public healthBg:fairygui.GImage;
		public healthText:fairygui.GTextField;
		public healthGroup:fairygui.GGroup;
		public heroCardTips:fairygui.GTextField;
		public cardNum:fairygui.GTextField;
		public dragLoader:fairygui.GLoader;
		public buffDesc:fairygui.GList;
		public static URL:string = "ui://yaux2xpotb7e1s";

		public static createInstance():UICardItem {
			return <UICardItem>(fairygui.UIPackage.createObject("BaseUI", "CardItem"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.canUse = <fairygui.GGraph>(this.getChildAt(0));
			this.tempBg = <fairygui.GGraph>(this.getChildAt(1));
			this.tempCardName = <fairygui.GTextField>(this.getChildAt(2));
			this.cardImg = <fairygui.GLoader>(this.getChildAt(3));
			this.feeBg = <fairygui.GImage>(this.getChildAt(4));
			this.feeText = <fairygui.GTextField>(this.getChildAt(5));
			this.feeGroup = <fairygui.GGroup>(this.getChildAt(6));
			this.buttonBg = <fairygui.GImage>(this.getChildAt(7));
			this.powerText = <fairygui.GTextField>(this.getChildAt(8));
			this.quality = <fairygui.GGraph>(this.getChildAt(9));
			this.cardName = <fairygui.GTextField>(this.getChildAt(10));
			this.desc = <fairygui.GTextField>(this.getChildAt(12));
			this.closeRange = <fairygui.GImage>(this.getChildAt(13));
			this.longRange1 = <fairygui.GImage>(this.getChildAt(14));
			this.longRange2 = <fairygui.GImage>(this.getChildAt(15));
			this.longRange = <fairygui.GGroup>(this.getChildAt(16));
			this.atkText = <fairygui.GTextField>(this.getChildAt(17));
			this.atkGroup = <fairygui.GGroup>(this.getChildAt(18));
			this.times = <fairygui.GImage>(this.getChildAt(19));
			this.healthBg = <fairygui.GImage>(this.getChildAt(20));
			this.healthText = <fairygui.GTextField>(this.getChildAt(21));
			this.healthGroup = <fairygui.GGroup>(this.getChildAt(22));
			this.heroCardTips = <fairygui.GTextField>(this.getChildAt(23));
			this.cardNum = <fairygui.GTextField>(this.getChildAt(24));
			this.dragLoader = <fairygui.GLoader>(this.getChildAt(25));
			this.buffDesc = <fairygui.GList>(this.getChildAt(26));
		}
	}
}