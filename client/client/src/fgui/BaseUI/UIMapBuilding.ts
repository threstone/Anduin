/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMapBuilding extends fairygui.GComponent {
		public enemyTips:fairygui.GGraph;
		public info:UIMapBuildingBase;
		public healthBg:fairygui.GImage;
		public healthText:fairygui.GTextField;
		public healthGroup:fairygui.GGroup;
		public closeRange:fairygui.GImage;
		public longRange1:fairygui.GImage;
		public longRange2:fairygui.GImage;
		public longRange:fairygui.GGroup;
		public atkText:fairygui.GTextField;
		public atkGroup:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpohzsg2o";

		public static createInstance():UIMapBuilding {
			return <UIMapBuilding>(fairygui.UIPackage.createObject("BaseUI", "MapBuilding"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.enemyTips = <fairygui.GGraph>(this.getChildAt(0));
			this.info = <UIMapBuildingBase>(this.getChildAt(1));
			this.healthBg = <fairygui.GImage>(this.getChildAt(2));
			this.healthText = <fairygui.GTextField>(this.getChildAt(3));
			this.healthGroup = <fairygui.GGroup>(this.getChildAt(4));
			this.closeRange = <fairygui.GImage>(this.getChildAt(5));
			this.longRange1 = <fairygui.GImage>(this.getChildAt(6));
			this.longRange2 = <fairygui.GImage>(this.getChildAt(7));
			this.longRange = <fairygui.GGroup>(this.getChildAt(8));
			this.atkText = <fairygui.GTextField>(this.getChildAt(9));
			this.atkGroup = <fairygui.GGroup>(this.getChildAt(10));
		}
	}
}