/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMapUnit extends fairygui.GComponent {
		public allowOperate:fairygui.GGraph;
		public info:UIMapUnitBase;
		public closeRange:fairygui.GImage;
		public longRange1:fairygui.GImage;
		public longRange2:fairygui.GImage;
		public longRange:fairygui.GGroup;
		public atkText:fairygui.GTextField;
		public atkGroup:fairygui.GGroup;
		public healthBg:fairygui.GImage;
		public healthText:fairygui.GTextField;
		public healthGroup:fairygui.GGroup;
		public heroFlag:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpohzsg2n";

		public static createInstance():UIMapUnit {
			return <UIMapUnit>(fairygui.UIPackage.createObject("BaseUI", "MapUnit"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.allowOperate = <fairygui.GGraph>(this.getChildAt(0));
			this.info = <UIMapUnitBase>(this.getChildAt(1));
			this.closeRange = <fairygui.GImage>(this.getChildAt(2));
			this.longRange1 = <fairygui.GImage>(this.getChildAt(3));
			this.longRange2 = <fairygui.GImage>(this.getChildAt(4));
			this.longRange = <fairygui.GGroup>(this.getChildAt(5));
			this.atkText = <fairygui.GTextField>(this.getChildAt(6));
			this.atkGroup = <fairygui.GGroup>(this.getChildAt(7));
			this.healthBg = <fairygui.GImage>(this.getChildAt(8));
			this.healthText = <fairygui.GTextField>(this.getChildAt(9));
			this.healthGroup = <fairygui.GGroup>(this.getChildAt(10));
			this.heroFlag = <fairygui.GTextField>(this.getChildAt(11));
		}
	}
}