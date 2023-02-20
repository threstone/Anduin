/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMapUnitBase extends fairygui.GComponent {
		public tempBg:fairygui.GImage;
		public tempCardName:fairygui.GTextField;
		public cardImg:fairygui.GLoader;
		public zhezhao:fairygui.GGraph;
		public static URL:string = "ui://yaux2xpohzsg2k";

		public static createInstance():UIMapUnitBase {
			return <UIMapUnitBase>(fairygui.UIPackage.createObject("BaseUI", "MapUnitBase"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.tempBg = <fairygui.GImage>(this.getChildAt(0));
			this.tempCardName = <fairygui.GTextField>(this.getChildAt(1));
			this.cardImg = <fairygui.GLoader>(this.getChildAt(2));
			this.zhezhao = <fairygui.GGraph>(this.getChildAt(3));
		}
	}
}