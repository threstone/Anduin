/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMapBuilding extends fairygui.GComponent {
		public info:UIMapBuildingBase;
		public healthBg:fairygui.GImage;
		public healthText:fairygui.GTextField;
		public healthGroup:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpohzsg2o";

		public static createInstance():UIMapBuilding {
			return <UIMapBuilding>(fairygui.UIPackage.createObject("BaseUI", "MapBuilding"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.info = <UIMapBuildingBase>(this.getChildAt(0));
			this.healthBg = <fairygui.GImage>(this.getChildAt(1));
			this.healthText = <fairygui.GTextField>(this.getChildAt(2));
			this.healthGroup = <fairygui.GGroup>(this.getChildAt(3));
		}
	}
}