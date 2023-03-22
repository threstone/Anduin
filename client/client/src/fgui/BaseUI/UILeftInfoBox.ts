/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UILeftInfoBox extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public heroImg:fairygui.GLoader;
		public closeRange:fairygui.GImage;
		public longRange1:fairygui.GImage;
		public longRange2:fairygui.GImage;
		public longRange:fairygui.GGroup;
		public atkText:fairygui.GTextField;
		public atkGroup:fairygui.GGroup;
		public healthBg:fairygui.GImage;
		public healthText:fairygui.GTextField;
		public healthGroup:fairygui.GGroup;
		public powerText:fairygui.GTextField;
		public cardName:fairygui.GTextField;
		public desc:fairygui.GTextField;
		public eventList:fairygui.GList;
		public static URL:string = "ui://yaux2xpoh89h32";

		public static createInstance():UILeftInfoBox {
			return <UILeftInfoBox>(fairygui.UIPackage.createObject("BaseUI", "LeftInfoBox"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.heroImg = <fairygui.GLoader>(this.getChildAt(1));
			this.closeRange = <fairygui.GImage>(this.getChildAt(2));
			this.longRange1 = <fairygui.GImage>(this.getChildAt(3));
			this.longRange2 = <fairygui.GImage>(this.getChildAt(4));
			this.longRange = <fairygui.GGroup>(this.getChildAt(5));
			this.atkText = <fairygui.GTextField>(this.getChildAt(6));
			this.atkGroup = <fairygui.GGroup>(this.getChildAt(7));
			this.healthBg = <fairygui.GImage>(this.getChildAt(8));
			this.healthText = <fairygui.GTextField>(this.getChildAt(9));
			this.healthGroup = <fairygui.GGroup>(this.getChildAt(10));
			this.powerText = <fairygui.GTextField>(this.getChildAt(11));
			this.cardName = <fairygui.GTextField>(this.getChildAt(12));
			this.desc = <fairygui.GTextField>(this.getChildAt(13));
			this.eventList = <fairygui.GList>(this.getChildAt(14));
		}
	}
}