/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIUseCardTipsCom extends fairygui.GComponent {
		public bg0:fairygui.GGraph;
		public bg1:fairygui.GGraph;
		public bg2:fairygui.GGraph;
		public bg3:fairygui.GGraph;
		public bg4:fairygui.GGraph;
		public bg5:fairygui.GGraph;
		public static URL:string = "ui://yaux2xpoh89h48";

		public static createInstance():UIUseCardTipsCom {
			return <UIUseCardTipsCom>(fairygui.UIPackage.createObject("BaseUI", "UseCardTipsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg0 = <fairygui.GGraph>(this.getChildAt(0));
			this.bg1 = <fairygui.GGraph>(this.getChildAt(1));
			this.bg2 = <fairygui.GGraph>(this.getChildAt(2));
			this.bg3 = <fairygui.GGraph>(this.getChildAt(3));
			this.bg4 = <fairygui.GGraph>(this.getChildAt(4));
			this.bg5 = <fairygui.GGraph>(this.getChildAt(5));
		}
	}
}