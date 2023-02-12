/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UITipsCom extends fairygui.GComponent {
		public closeBg:fairygui.GGraph;
		public desc:fairygui.GTextField;
		public btn:UIButton1;
		public close:fairygui.GLoader;
		public group:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpofimv29";

		public static createInstance():UITipsCom {
			return <UITipsCom>(fairygui.UIPackage.createObject("BaseUI", "TipsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.closeBg = <fairygui.GGraph>(this.getChildAt(0));
			this.desc = <fairygui.GTextField>(this.getChildAt(3));
			this.btn = <UIButton1>(this.getChildAt(4));
			this.close = <fairygui.GLoader>(this.getChildAt(5));
			this.group = <fairygui.GGroup>(this.getChildAt(6));
		}
	}
}