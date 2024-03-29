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
		public quality:fairygui.GLoader;
		public cardName:fairygui.GTextField;
		public desc:fairygui.GTextField;
		public slicencedGroup:fairygui.GGroup;
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
		public typeText:fairygui.GTextField;
		public cardNum:fairygui.GTextField;
		public movementDesc:fairygui.GTextField;
		public movementVaule:fairygui.GTextField;
		public movementGroup:fairygui.GGroup;
		public atkRangeDesc:fairygui.GTextField;
		public atkRangeValue:fairygui.GTextField;
		public atkRangeGroup:fairygui.GGroup;
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
			this.quality = <fairygui.GLoader>(this.getChildAt(8));
			this.cardName = <fairygui.GTextField>(this.getChildAt(9));
			this.desc = <fairygui.GTextField>(this.getChildAt(11));
			this.slicencedGroup = <fairygui.GGroup>(this.getChildAt(14));
			this.closeRange = <fairygui.GImage>(this.getChildAt(15));
			this.longRange1 = <fairygui.GImage>(this.getChildAt(16));
			this.longRange2 = <fairygui.GImage>(this.getChildAt(17));
			this.longRange = <fairygui.GGroup>(this.getChildAt(18));
			this.atkText = <fairygui.GTextField>(this.getChildAt(19));
			this.atkGroup = <fairygui.GGroup>(this.getChildAt(20));
			this.times = <fairygui.GImage>(this.getChildAt(21));
			this.healthBg = <fairygui.GImage>(this.getChildAt(22));
			this.healthText = <fairygui.GTextField>(this.getChildAt(23));
			this.healthGroup = <fairygui.GGroup>(this.getChildAt(24));
			this.heroCardTips = <fairygui.GTextField>(this.getChildAt(25));
			this.typeText = <fairygui.GTextField>(this.getChildAt(26));
			this.cardNum = <fairygui.GTextField>(this.getChildAt(27));
			this.movementDesc = <fairygui.GTextField>(this.getChildAt(28));
			this.movementVaule = <fairygui.GTextField>(this.getChildAt(29));
			this.movementGroup = <fairygui.GGroup>(this.getChildAt(30));
			this.atkRangeDesc = <fairygui.GTextField>(this.getChildAt(31));
			this.atkRangeValue = <fairygui.GTextField>(this.getChildAt(32));
			this.atkRangeGroup = <fairygui.GGroup>(this.getChildAt(33));
			this.dragLoader = <fairygui.GLoader>(this.getChildAt(34));
			this.buffDesc = <fairygui.GList>(this.getChildAt(35));
		}
	}
}